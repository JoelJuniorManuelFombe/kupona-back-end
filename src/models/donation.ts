import { model, Schema } from "mongoose";
//

const Monetary = new Schema({
    amount: {
        type: String,
        require: true,
    },
    formOfPaymant: {
        type: String,
        enum: ["check", "bank transfer", "credit card", "mpesa", "emola"],
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "user",
        require: true,
    },
}, {});

const Assets = new Schema({
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    estimatedValue: {
        type: Number,
        require: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        require: true,
    },
});

const monetary = model("monetary", Monetary);
const assets = model("assets", Assets);
export { monetary, assets };
    