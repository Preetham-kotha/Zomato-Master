import mooongose from "mongoose";
const OrderSchema = new mooongose.Schema({
    user: {
        type: mooongose.Types.ObjectId,
        ref: "Users"
    },
    orderDetails: {
        food: { type: mooongose.Types.ObjectId, ref: "Foods" },
        quantity: { type: Number, required: true },
        quantity: { type: String, required: true },
        status: { type: String, default: "placed" },
        paymentDetails: {
            itemTotal: { type: Number, required: true },
            promo: { type: Number, required: true },
            tax: { type: Number, required: true }
        },
        orderRatings: {
            type: Number,
            required: true
        }
    }
},
{
        timestamps:true
    },);
export const OrderModel = mooongose.model("Orders", OrderSchema);