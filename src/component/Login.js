import {
  Button,
  Card,
  CardContent,
  CardMedia,
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
  Typography
} from '@mui/material';
import trainImage from '../asset/train.jpg';

export default function Login() {
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid container justifyContent="center" sx={{ padding: 5 }}>
        <Card>
          <CardMedia
            component="img"
            height="140"
            image={trainImage}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" sx={{ textAlign: 'center' }}>
              Login Siswa
            </Typography>

            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-username">Username</InputLabel>
              <OutlinedInput
                id="outlined-username"
                label="Username"
                type="text"
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-password"
                label="Password"
                type="password"
              />
            </FormControl>
            <Button fullWidth sx={{ m: 1 }} variant="contained">
              Login
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
