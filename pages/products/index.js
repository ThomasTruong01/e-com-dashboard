import { useState, useEffect } from 'react'
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery
} from '@mui/material'
import Header from '../../components/Header'

const Product = ({
  _id,
  name,
  description,
  rating,
  price,
  category,
  supply,
  stats
}) => {
  const theme = useTheme()
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card
      sx={{
        backgroundImage: 'none',
        backgroundColor: theme.palette.background.alt,
        borderRadius: '0.55rem'
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color={theme.palette.secondary[700]}
          gutterBottom
        >
          {category}
        </Typography>
        <Typography variant='h5' component='div'>
          {name}
        </Typography>
        <Typography sx={{ mb: '1.5rem' }} color={theme.palette.secondary[400]}>
          ${Number(price).toFixed(2)}
        </Typography>
        <Rating value={rating} readOnly />
        <Typography variant='body2'>{description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant='primary'
          size='small'
          onClick={() => {
            setIsExpanded(!isExpanded)
          }}
        >
          See More
        </Button>
      </CardActions>
      <Collapse
        in={isExpanded}
        timeout='auto'
        sx={{ color: theme.palette.neutral[300] }}
      >
        <CardContent>
          <Typography>id: {_id}</Typography>
          <Typography>Supply Left: {supply}</Typography>
          <Typography>YTD Sales: {stats.yearlySalesTotal}</Typography>
          <Typography>YTD Unit Sold: {stats.yearlyTotalSoldUnits}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

const Products = () => {
  const [products, setProducts] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const isNonMobile = useMediaQuery("(min-width: 1000px)");

  const getProducts = async () => {
    fetch('./api/getProducts')
      .then(res => res.json())
      .then(data => setProducts(data))
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="PRODUCTS" subtitle="See your list of products." />
      {products && !isLoading ? (
        <Box
          mt='20px'
          display='grid'
          gridTemplateColumns='repeat(4, minmax(0, 1fr))'
          justifyContent='space-between'
          rowGap='20px'
          columnGap='1.33%'
          sx={{
            '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' }
          }}
        >
          {products.map(
            ({
              _id,
              name,
              description,
              rating,
              price,
              category,
              supply,
              stats
            }) => {
              return (
                <Product
                  key={_id}
                  _id={_id}
                  name={name}
                  description={description}
                  rating={rating}
                  price={price}
                  category={category}
                  supply={supply}
                  stats={stats[0]}
                />
              )
            }
          )}
        </Box>
      ) : (
        <Typography variant='h1'>Loading...</Typography>
      )}
    </Box>
  )
}

export default Products
