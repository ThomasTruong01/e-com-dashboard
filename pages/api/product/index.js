// api/users.js

import dbConnect from '../../../lib/dbConnect'
import Product from '../../../models/Product'
import ProductStats from '../../../models/ProductStats'


const getProducts = async (req, res) => {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const products = await Product.findOne()
        const productsWithStats = await Promise.all(
          products.map(async product => {
            const stats = await ProductStats.find({ productId: product._id })
            return { ...product._doc, stats }
          })
        )
        res.status(200).json({ success: true, data: productsWithStats })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    // case 'POST':
    //   try {
    //     const product = await Product.create(req.body)
    //     res.status(201).json({ success: true, data: product })
    //   } catch (error) {
    //     res.status(400).json({ success: error })
    //   }
    //   break
    default:
      res.status(400).json({ success: false })
      break
  }
}

export default getProducts