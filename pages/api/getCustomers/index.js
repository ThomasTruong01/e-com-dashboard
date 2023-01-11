// api/users.js

import dbConnect from '../../../lib/dbConnect'
import User from '../../../models/User'

const getCustomers = async (req, res) => {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const customers = await User.find({ role: 'user' }).select('-password')
        res.status(200).json(customers)
      } catch (error) {
        res.status(400).json({ message: error.message})
      }
      break
    default:
      res.status(400).json({ message: error.message })
      break
  }
}

export default getCustomers;