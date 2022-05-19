import { createSlice } from '@reduxjs/toolkit';
import {
  getUjian,
  lihatJawaban,
  mulaiUjian,
  pertanyaan,
  preTest
} from './ujianThunk';

const initialState = {
  dataUjian: [],
  dataPreTest: {
    ujian: '',
    nama: '',
    kelas: '',
    durasi: 0,
    jadwal: new Date(),
    soal: '',
    jumlah: 0
  },
  idScore: '',
  message: '',
  dataJawaban: null,
  soal: {
    soal: '',
    pilihan: [],
    _id: ''
  }
};

export const ujianSlice = createSlice({
  name: 'ujian',
  initialState,
  reducers: {},
  extraReducers: {
    [getUjian.fulfilled]: (state, action) => {
      const { data } = action.payload;
      state.dataUjian = data;
      state.message = '';
    },
    [getUjian.rejected]: (state, action) => {
      state.dataUjian = [];
    },
    [preTest.fulfilled]: (state, action) => {
      const { data } = action.payload;
      state.dataPreTest = data;
      state.message = '';
    },
    [preTest.rejected]: (state, action) => {
      state.message = 'Data ujian tidak ditemukan';
      state.dataPreTest = initialState.dataPreTest;
    },
    [mulaiUjian.fulfilled]: (state, action) => {
      state.message = '';
      state.idScore = action.payload.data.idScore;
    },
    [mulaiUjian.rejected]: (state, action) => {
      const { message } = action.payload;
      state.message = message;
    },
    [lihatJawaban.fulfilled]: (state, action) => {
      const { data } = action.payload;
      state.dataJawaban = data;
      state.message = '';
    },
    [lihatJawaban.rejected]: (state, action) => {
      state.dataJawaban = initialState.dataJawaban;
    },
    [pertanyaan.fulfilled]: (state, action) => {
      const { data } = action.payload;
      state.soal = data;
      state.message = '';
    },
    [pertanyaan.rejected]: (state, action) => {
      state.soal = initialState.soal;
    }
  }
});

export const {} = ujianSlice.actions;
export default ujianSlice.reducer;
