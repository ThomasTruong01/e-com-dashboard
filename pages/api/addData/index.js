// api/users.js

import dbConnect from '../../../lib/dbConnect'
import Product from '../../../models/ProductStats'
import { productData, ProductStats as ProductStat } from './data'

export default async function handler (req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const id = req.query.id
        // const Product = await Product.findById(id);
        res.status(200).json({ success: true, data: user })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const data = JSON.stringify(ProductStat)
        const data1 = JSON.parse(data)
        const ProductStats = await Product.create(data1)
        res.status(201).json({ success: true, data: ProductStats })
      } catch (error) {
        res.status(400).json({ success: error })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}