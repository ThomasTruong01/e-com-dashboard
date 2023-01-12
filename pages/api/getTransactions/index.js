import dbConnect from '../../../lib/dbConnect'
import Transactions from '../../../models/Transactions'

const getTransactions = async (req, res) => {
  const { method } = req

  await dbConnect()
  switch (method) {
    case 'GET':
      try {
        const { page = 1, pageSize = 20, sort = null, search = '' } = req.query

        const sortFormatted = JSON.parse(sort)

        const transactions = await Transactions.find({
          $or: [
            { cost: { $regex: new RegExp(search, 'i') } },
            { userId: { $regex: new RegExp(search, 'i') } }
          ]
        })
          .sort(sortFormatted)
          .skip(page * pageSize)
          .limit(pageSize)

        const total = await Transactions.countDocuments({
          $or: [
            { cost: { $regex: new RegExp(search, 'i') } },
            { userId: { $regex: new RegExp(search, 'i') } }
          ]
        })

        res.status(200).json({
          transactions,
          total
        })
      } catch (error) {
        res.status(404).json({ message: error.message })
      }
  }
}

export default getTransactions
