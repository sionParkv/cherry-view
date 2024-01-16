// GridPaginationExample.js

import React, { useState } from 'react'
import { DataGrid, GridToolbar, GridPagination } from '@mui/x-data-grid'
import { Pagination, Stack } from '@mui/material'

const sampleData = [
  { id: 1, name: 'Item 1', price: 10 },
  { id: 2, name: 'Item 2', price: 20 },
  { id: 3, name: 'Item 2', price: 20 },
  { id: 4, name: 'Item 2', price: 20 },
  { id: 5, name: 'Item 2', price: 20 },
  { id: 6, name: 'Item 2', price: 20 },
  { id: 7, name: 'Item 2', price: 20 },
  { id: 8, name: 'Item 2', price: 20 },
  { id: 9, name: 'Item 2', price: 20 },
  { id: 10, name: 'Item 2', price: 20 },
  { id: 11, name: 'Item 2', price: 20 },
  { id: 12, name: 'Item 2', price: 20 },
  { id: 13, name: 'Item 2', price: 20 },
  { id: 14, name: 'Item 2', price: 20 },
]

const rowsPerPageOptions = [5, 10]

const Piagination = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0])

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    const newRowsPerPage = parseInt(event.target.value, 10)
    if (rowsPerPageOptions.includes(newRowsPerPage)) {
      setRowsPerPage(newRowsPerPage)
      setCurrentPage(1)
    }
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'price', headerName: 'Price', width: 100 },
  ]

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={sampleData} // 전체 데이터 유지
        columns={columns}
        pageSize={rowsPerPage}
        page={currentPage}
        components={{
          Toolbar: GridToolbar,
          Pagination: (props) => (
            <GridPagination
              {...props}
              rowsPerPageOptions={rowsPerPageOptions}
              pageCount={Math.ceil(sampleData.length / rowsPerPage)}
              page={currentPage}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          ),
        }}
      />
      <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
        <Pagination
          count={Math.ceil(sampleData.length / rowsPerPage)}
          page={currentPage}
          onChange={(event, newPage) => setCurrentPage(newPage)}
        />
      </Stack>
    </div>
  )
}

export default Piagination
