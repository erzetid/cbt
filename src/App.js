import React from 'react';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route
} from 'react-router-dom';
import Container from '@mui/material/Container';
import ResponsiveAppBar from './ResponsiveAppBar';
import User from './component/User';
import { Typography } from '@mui/material';
import Pengumuman from './component/Pengumuman';
import Pertanyaan from './component/Pertanyaan';
import Ujian from './component/Ujian';
import WindowFocusHandler from './component/WindowFocusHandler';

function App() {
  return (
    <div>
      <BrowserRouter>
        <WindowFocusHandler />
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
