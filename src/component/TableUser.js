import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Typography } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'namaUjian', headerName: 'Nama Ujian' },
  { field: 'tanggalUjian', headerName: 'Tanggal' },
  {
    field: 'keterangan',
    headerName: 'Keterangan',
    sortable: false
  },
  {
    field: 'aksi',
    headerName: 'Aksi',
    sortable: false,
    renderCell: (params) => {
      return (
        <Button
          sx={{
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
          }}
          size="small"
          onClick={() => alert(params.value)}
        >
          <Typography color="text.primary" sx={{ fontSize: 12 }}>
            Lanjutkan
          </Typography>
        </Button>
      );
    }
  }
];

const rows = [
  {
    id: 1,
    tanggalUjian: 'Snow',
    namaUjian: 'Jon',
    keterangan: 35,
    aksi: 'satu'
  },
  {
    id: 2,
    tanggalUjian: 'Lannister',
    namaUjian: 'Cersei',
    keterangan: 42,
    aksi: 'dua'
  },
  {
    id: 3,
    tanggalUjian: 'Lannister',
    namaUjian: 'Jaime',
    keterangan: 45,
    aksi: 'tiga'
  },
  {
    id: 4,
    tanggalUjian: 'Stark',
    namaUjian: 'Arya',
    keterangan: 16,
    aksi: 'empat'
  }
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
