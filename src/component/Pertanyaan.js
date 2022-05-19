import AlarmIcon from '@mui/icons-material/Alarm';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import HTMLparser from 'html-to-react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { lihatJawaban, pertanyaan } from '../app/slice/ujianThunk';

const htmlParser = new HTMLparser.Parser();
export default function Pertanyaan() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { soal, dataJawaban } = useSelector((state) => state.ujian);
  const [nomor, setNomor] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchParams.get('id')) {
      return navigate('/');
    }
    const getData = async () => {
      await dispatch(lihatJawaban(searchParams.get('id')));
    };
    getData();
  }, []);

  useEffect(() => {
    const getSoal = async () =>
      await dispatch(
        pertanyaan({
          idPertanyaan: dataJawaban.jawaban[0].idPertanyaan,
          idUjian: dataJawaban.idUjian
        })
      );
    setNomor(1);
    getSoal();
  }, [dataJawaban]);
  const onClickNext = async () => {
    if (nomor < dataJawaban.jawaban.length) {
      await dispatch(
        pertanyaan({
          idPertanyaan: dataJawaban.jawaban[nomor].idPertanyaan,
          idUjian: dataJawaban.idUjian
        })
      );
      setNomor(nomor + 1);
    }
  };

  const onClickPrev = async () => {
    if (nomor > 1) {
      await dispatch(
        pertanyaan({
          idPertanyaan: dataJawaban.jawaban[nomor - 2].idPertanyaan,
          idUjian: dataJawaban.idUjian
        })
      );
      setNomor(nomor - 1);
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;
    alert(value);
  };

  return (
    <Card>
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Button variant="contained" size="large" color="secondary" disabled>
          {nomor}/{dataJawaban && dataJawaban.jawaban.length}
        </Button>
        <Button
          variant="contained"
          color="error"
          size="large"
          startIcon={<AlarmIcon />}
        >
          40:00
        </Button>
        <Button size="large" variant="contained">
          Selesai
        </Button>
      </CardContent>
      <Typography sx={{ padding: 4 }}>{htmlParser.parse(soal.soal)}</Typography>

      <CardContent
        sx={{
          minHeight: 280
        }}
      >
        <RadioGroup
          name="quiz"
          sx={{ display: 'flex', flexDirection: 'column', rowGap: 1 }}
          onChange={(e) => handleChange(e)}
        >
          {soal.pilihan.map((pilihan) => (
            <FormControlLabel
              key={pilihan._id}
              value={pilihan._id}
              control={<Radio />}
              label={pilihan.opsi}
            />
          ))}
        </RadioGroup>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingBottom: 2
        }}
      >
        <Button
          onClick={onClickPrev}
          variant="contained"
          size="large"
          color="success"
        >
          Sebelumnya
        </Button>
        <Button variant="contained" size="large" color="warning">
          Soal
        </Button>
        <Button
          onClick={onClickNext}
          variant="contained"
          size="large"
          color="success"
        >
          Selanjutnya
        </Button>
      </CardActions>
    </Card>
  );
}
