import { Types, Schema, model } from "mongoose";

const AffiliateStatSchema = new Schema(
  {
    userId: { type: Types.ObjectId, ref: "User" },
    affiliateSales: {
      type: [Types.ObjectId],
      ref: "Transaction",
    },
  },
  { timestamps: true }
);

const AffiliateStat = model("AffiliateStat", AffiliateStatSchema);
export default AffiliateStat;