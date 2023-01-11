import { Box, useTheme } from '@mui/material'
import Header from '../../components/Header'
import { DataGrid } from '@mui/x-data-grid'
import { useEffect, useState } from 'react'
import { borderBottom } from '@mui/system'

const Customers = () => {
  const theme = useTheme()
  const [customers, setCustomers] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const getProducts = async () => {
    fetch('./api/getCustomers')
      .then(res => res.json())
      .then(data => setCustomers(data))
      .finally(() => setIsLoading(false))
  }

  const columns =[
    {
        field: '_id',
        headerName: 'ID',
        flex: 1
    },
    {
        field: 'name',
        headerName: 'Name',
        flex: 0.5
    },
    {
        field: 'email',
        headerName: 'Email',
        flex: 1
    },
    {
        field: 'phoneNumber',
        headerName: 'Phone Number',
        flex: 0.5,
        renderCell: (params) =>{
            return params.value.replace(/^(\d{3})(\d{3})(\d{3})/, "($1) $2-$3")
        }
    },
    {
        field: 'country',
        headerName: 'Country',
        flex: 0.4
    },
    {
        field: 'occupation',
        headerName: 'Occupation',
        flex: 1
    },
    {
        field: 'role',
        headerName: 'Role',
        flex: 0.5
    }
  ]

  useEffect(() => {
    getProducts()
  }, [])
  return (
    <Box m='1.5rem 2.5rem'>
        <Header title='CUSTOMERS' subtitle='List of Customers' />
        <Box height='75vh' mt='2rem' sx={{
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
            },
        }}>
            <DataGrid 
                loading={isLoading || !customers}
                getRowId={row => row._id}
                rows={ customers || []}
                columns={columns}

            />
        </Box>
    </Box>
  )
}

export default Customers
