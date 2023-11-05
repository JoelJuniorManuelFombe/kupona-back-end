import { Schema } from "mongoose";
import { monetary, assets } from "./../models/donation";

const newMonetary = async (req, res) => {
    try {
        const Monetary = new monetary({
            amount: req.body.amount,
            formOfPaymant: req.body.formOfPaymant,
            userId: req.body.userId,
        });
        Monetary.save();
        return res.status(201).json(Monetary);
    } catch (error) {
        return res.status(500).json({
            error: "donation not saved",
        });
    }
};

const getMonetaryById = async (req, res) => {
    try {
        const Monetary = await monetary.findOne({
            _id: req.body._id,
        });
        return res.status(200).json(Monetary);
    } catch (error) {
        return res.status(404).json({
            error: "donation not founded",
        });
    }
};

const updateMonetary = async (req, res) => {
    try {
        const Monetary = await monetary.findByIdAndUpdate(
            {
                _id: req.body._id,
            },
            req.body,
            {
                new: true,
            }
        );
        return res.status(200).json(Monetary);
    } catch (error) {
        return res.status(404).json({
            error: "donation not updated",
        });
    }
};

const deleteMonetary = async (req, res) => {
    try {
        const Monetary = await monetary.deleteOne({ _id: req.params._id });
        return res.status(200).json({
            message: "donation deleted",
        });
    } catch (error) {
        return res.status(404).json({
            error: "donation not deleted",
        });
    }
};

export { newMonetary, getMonetaryById, updateMonetary, deleteMonetary };
