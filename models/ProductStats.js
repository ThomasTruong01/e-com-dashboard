import { Schema, models, model } from 'mongoose'

const ProductStatsSchema = new Schema(
  {
    productId: String,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthlyData: [{ month: String, totalSales: Number, totalUnits: Number }],
    dailyData: [{date: String, totalSales: Number, totalUnits: Number}]
  },
  { timestamps: true }
)

const ProductStats =
  models.ProductStats || model('ProductStats', ProductStatsSchema)
export default ProductStats
