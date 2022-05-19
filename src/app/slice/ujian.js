import { createSlice } from '@reduxjs/toolkit';
import { getUjian, preTest } from './ujianThunk';

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
  message: ''
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
      state.dataPreTest = {
        ujian: '',
        nama: '',
        kelas: '',
        durasi: 0,
        jadwal: new Date(),
        soal: '',
        jumlah: 0
      };
    }
  }
});

export const {} = ujianSlice.actions;
export default ujianSlice.reducer;
