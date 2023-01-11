import { Schema, models, model } from 'mongoose'

const ProductSchema = new Schema(
  {
    name: String,
    price: Number,
    description: String,
    category: String,
    rating: Number,
    supply: Number
  },
  { timestamps: true }
)

const Product = models.Product || model('Product', ProductSchema)
export default Product
