import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api';

export const getUjian = createAsyncThunk(
  '/ujian/siswa',
  async (_, { getState, rejectWithValue }) => {
    try {
      const states = getState();
      const response = await api.get(`/ujian/siswa`, {
        headers: {
          Authorization: 'Bearer ' + states.auth.token //the token is a variable which holds the token
        }
      });
      return response.data;
    } catch (error) {
      if (!error.response) {
        return (
          { message: error.message, status: 'error' } &&
          rejectWithValue({ message: error.message, status: 'error' })
        );
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const preTest = createAsyncThunk(
  '/ujian/pre_test',
  async (payload, { getState, rejectWithValue }) => {
    try {
      const states = getState();
      const response = await api.get(`/ujian/pre_test/${payload}`, {
        headers: {
          Authorization: 'Bearer ' + states.auth.token //the token is a variable which holds the token
        }
      });
      return response.data;
    } catch (error) {
      if (!error.response) {
        return (
          { message: error.message, status: 'error' } &&
          rejectWithValue({ message: error.message, status: 'error' })
        );
      }
      return rejectWithValue(error.response.data);
    }
  }
);
