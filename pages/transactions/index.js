import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { useState, useEffect } from 'react'
import Header from '../../components/Header'
import DataGridCustomToolbar from '../../components/DataGridCustomToolbar'

const columns = [
  {
    field: '_id',
    headerName: 'ID',
    flex: 1
  },
  {
    field: 'userId',
    headerName: 'User ID',
    flex: 1
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    flex: 1
  },
  {
    field: 'products',
    headerName: '# of Products',
    flex: 0.5,
    sortable: false,
    renderCell: params => params.value.length
  },
  {
    field: 'cost',
    headerName: 'Cost',
    flex: 1,
    renderCell: params => `$${Number(params.value).toFixed(2)}`
  }
]
const Transactions = () => {
  const theme = useTheme()
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(0)
  const [pageSize, setPageSize] = useState(20)
  const [sort, setSort] = useState({})
  const [search, setSearch] = useState('')

  const [searchInput, setSearchInput] = useState('')

  const getTransactions = async () => {
    
    const generateSort = () => {
      const sortFormatted = sort[0] === undefined ? {} : {
        [sort[0].field]: (sort[0].sort === 'asc' ? 1 : -1 )
      }
      return sortFormatted
    }

    const sortFormated = Boolean(sort) || sort != {}  || sort != undefined ? JSON.stringify(generateSort()) : {}
    const encodeSort = encodeURI(sortFormated)
    const url = `./api/getTransactions?page=${page}&pageSize=${pageSize}&search=${search}&sort=${encodeSort}`
    
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data))
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    getTransactions()
  }, [])

  useEffect(() => {
    getTransactions()
  }, [page, pageSize, sort, search])

  return (
    <Box m='1.5rem 2.5rem'>
      <Header title='Transactions' subtitle='Entire list of Transactions' />
      <Box
        height='75vh'
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none'
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none'
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: 'none'
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.secondary[100],
            borderBottom: 'none'
          },
          '& .MuiDataGrid-footerContainer': {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: 'none'
          },
          '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
            color: `${theme.palette.secondary[200]} !important`
          }
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={row => row._id}
          rows={(data && data.transactions) || []}
          columns={columns}
          rowCount={(data && data.total) || 0}
          rowsPerPageOptions={[20, 50, 100]}
          pagination
          page={page}
          pageSize={pageSize}
          paginationMode='server'
          sortingMode='server'
          onPageChange={newPage => setPage(newPage)}
          onPageSizeChange={newPageSize => setPageSize(newPageSize)}
          onSortModelChange={newSortModel => setSort(newSortModel)}
          components={{ Toolbar: DataGridCustomToolbar }}
          componentsProps={{
            toolbar: { searchInput, setSearchInput, setSearch }
          }}
        />
      </Box>
    </Box>
  )
}

export default Transactions
