import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { preTest } from '../app/slice/ujianThunk';
import trainImage from '../asset/train.jpg';

export default function Ujian() {
  const { dataPreTest, message } = useSelector((state) => state.ujian);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchParams.get('id')) {
      return navigate('/');
    }
    const getData = async () => {
      await dispatch(preTest(searchParams.get('id')));
      if (message) {
        return navigate('/');
      }
    };
    getData();
  }, [dispatch, message, navigate, searchParams]);

  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={trainImage}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" sx={{ textAlign: 'center' }}>
          {dataPreTest.ujian}
        </Typography>
        <TableContainer>
          <Table size="small" aria-label="a dense table">
            <TableBody>
              <TableRow>
                <TableCell align="left">Nama</TableCell>
                <TableCell align="left">: {dataPreTest.nama}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Soal</TableCell>
                <TableCell align="left">: {dataPreTest.soal}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Waktu</TableCell>
                <TableCell align="left">: {dataPreTest.durasi} Menit</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Jumlah Soal</TableCell>
                <TableCell align="left">: {dataPreTest.jumlah} buah</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Jadwal</TableCell>
                <TableCell align="left">
                  : {new Date(dataPreTest.jadwal).toLocaleString()}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
      <CardActions>
        <Stack
          component="form"
          sx={{
            width: 280,
            padding: 1,
            right: 0,
            left: 0
          }}
          spacing={2}
          noValidate
          autoComplete="off"
        >
          <Grid container>
            <Grid xs={9} md={9}>
              <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                placeholder="Masukan token"
                size="small"
              />
            </Grid>
            <Grid xs={2} md={2} sx={{ marginLeft: 1 }}>
              <Link
                style={{ color: 'inherit', textDecoration: 'inherit' }}
                to={`/Pertanyaan`}
              >
                <Button variant="contained">Masuk</Button>
              </Link>
            </Grid>
          </Grid>
        </Stack>
      </CardActions>
    </Card>
  );
}
