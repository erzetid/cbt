import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AlarmIcon from '@mui/icons-material/Alarm';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';

export default function Pertanyaan() {
  return (
    <Card>
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Button variant="contained" size="large" color="secondary" disabled>
          1/40
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
      <Typography sx={{ padding: 4 }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        delectus minima, maxime in nesciunt suscipit vero excepturi at, voluptas
        accusantium optio alias explicabo eveniet rem aperiam. Aspernatur a
        tenetur laboriosam.
      </Typography>
      <CardContent
        sx={{
          minHeight: 280
        }}
      >
        <RadioGroup
          name="quiz"
          sx={{ display: 'flex', flexDirection: 'column', rowGap: 1 }}
        >
          <FormControlLabel
            value="a"
            control={<Radio />}
            label="Lorem ipsum dolor sit amet consectetur, mollitia tempore quidem harum."
          />
          <FormControlLabel
            value="b"
            control={<Radio />}
            label="Lorem ipsum dolor sit amet consectetur, mollitia tempore quidem harum."
          />
          <FormControlLabel
            value="c"
            control={<Radio />}
            label="Lorem ipsum dolor sit amet consectetur, mollitia tempore quidem harum."
          />
          <FormControlLabel
            value="d"
            control={<Radio />}
            label="Lorem ipsum "
          />
          <FormControlLabel value="e" control={<Radio />} label="The worst." />
        </RadioGroup>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingBottom: 2
        }}
      >
        <Button variant="contained" size="large" color="success">
          Sebelumnya
        </Button>
        <Button variant="contained" size="large" color="warning">
          Soal
        </Button>
        <Button variant="contained" size="large" color="success">
          Selanjutnya
        </Button>
      </CardActions>
    </Card>
  );
}
