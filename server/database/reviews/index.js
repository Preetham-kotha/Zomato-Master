import moongose from "mongoose";
const ReviewSchema = moongose.Schema(
  {
    food: { type: moongose.Types.ObjectId, ref: "Foods" },
    restaurant: { type: moongose.Types.ObjectId, ref: "Restaurants" },
    user: { type: moongose.Types.ObjectId, ref: "Users" },
    rating: { type: String, required: "true" },
    reviewText: { type: String, required: "true" },
    photos: [
      {
        type: moongose.Types.ObjectId,
        ref: "Images",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const ReviewModel = moongose.model("Reviews", ReviewSchema);