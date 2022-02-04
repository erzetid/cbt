import * as React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import trainImage from '../asset/train.jpg';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import { Link } from 'react-router-dom';
import TableRow from '@mui/material/TableRow';

export default function Ujian() {
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
          Ujian Matematika
        </Typography>
        <TableContainer>
          <Table size="small" aria-label="a dense table">
            <TableBody>
              <TableRow>
                <TableCell align="left">Nama</TableCell>
                <TableCell align="left">: Muhammad Andri Fahrizal</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Kelas</TableCell>
                <TableCell align="left">: XII TBSM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Waktu</TableCell>
                <TableCell align="left">: 90 Menit</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Soal</TableCell>
                <TableCell align="left">: 40 buah</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Jadwal</TableCell>
                <TableCell align="left">
                  : 21 Sep 2021 19:30 - 22 Sep 2022 18:30 WIB
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
