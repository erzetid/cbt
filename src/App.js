import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Pengumuman from './component/Pengumuman';
import Pertanyaan from './component/Pertanyaan';
import Ujian from './component/Ujian';
import User from './component/User';
import WindowFocusHandler from './component/WindowFocusHandler';
import ResponsiveAppBar from './ResponsiveAppBar';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  if (!isLogin) return <Login />;

  return (
    <div>
      <BrowserRouter>
        <WindowFocusHandler />
        <ResponsiveAppBar />
        <Container>
          <Routes>
            <Route exact path="/" element={<User />} />
            <Route exact path="/" element={<User />} />
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
