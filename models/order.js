const { Schema } = require("mongoose");

const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    lineItems: [lineItemSchema],
    isPaid: { type: Boolean, default: false },
}, {
    timestamps: true
})