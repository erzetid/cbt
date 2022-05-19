import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { setMessage } from './app/slice/auth';
import { refreshToken } from './app/slice/authThunk';
import Login from './component/Login';
import Pengumuman from './component/Pengumuman';
import Pertanyaan from './component/Pertanyaan';
import Ujian from './component/Ujian';
import User from './component/User';
import { jwtDecode } from './helper';
import ResponsiveAppBar from './ResponsiveAppBar';

function App() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const checkLogin = async () => {
      await dispatch(refreshToken());
      if (token) {
        const jwt = jwtDecode(token);
        if (jwt.role !== 'siswa') {
          setIsLogin(false);
          return dispatch(setMessage('User tidak ditemukan!'));
        }
        return setIsLogin(true);
      }
      setIsLogin(false);
    };
    return checkLogin();
  }, [dispatch, token]);

  if (!isLogin) return <Login />;

  return (
    <div>
      <BrowserRouter>
        {/* <WindowFocusHandler /> */}
        <ResponsiveAppBar />
        <Container>
          <Routes>
            <Route exact path="/" element={<User />} />
            <Route exact path="/Dashboard" element={<User />} />
            <Route exact path="/Pengumuman" element={<Pengumuman />} />
            <Route exact path="/Ujian" element={<Ujian />} />
            <Route exact path="/Pertanyaan" element={<Pertanyaan />} />
          </Routes>
        </Container>
        <Typography
          color="text.secondary"
          sx={{
            textAlign: 'center',
            bottom: 0,
            padding: 5
          }}
          elevation={3}
        >
          Copyright @ 2022
        </Typography>
      </BrowserRouter>
    </div>
  );
}

export default App;
