import { model, Schema } from "mongoose";

const User = new Schema(
    {
        userName: {
            type: String,
            required: true,
        },
        userEmail: {
            type: String,
            required: true
        },
        userContact: {
            type: String,
            required: true,
        },
        userAddress: {
            type: String,
            requered: true,
        },
        userPassword: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);
const user = model("users", User);
export { user };