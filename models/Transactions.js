import { Schema, Types, model, models } from "mongoose";

const TransactionSchema = new Schema(
  {
    userId: String,
    cost: String,
    products: {
      type: [Types.ObjectId],
      of: Number,
    },
  },
  { timestamps: true }
);

const Transaction = models.Transaction || model("Transaction", TransactionSchema);
export default Transaction;