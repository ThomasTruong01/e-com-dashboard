// api/users.js

import dbConnect from '../../../lib/dbConnect'
import ProductStats from '../../../models/ProductStats'

export default async function handler (req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const productStats = await ProductStats.find();
        res.status(200).json({ success: true, data: productStats })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const productStats = await ProductStats.create(req.body)
        res.status(201).json({ success: true, data: productStats })
      } catch (error) {
        res.status(400).json({ success: error })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}