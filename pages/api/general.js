// api/users.js

import dbConnect from '../../lib/dbConnect'
import User from '../../models/User'

const getUser = async (req, res) => {
  await dbConnect()
//   const { id } = router.query
//   console.log('router.query', router.query)
  try {
    const { id } = req.params

    const user = await User.findById(id)
    res.status(200).json(user)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export default getUser
