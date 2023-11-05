import { user } from "./../models/user";
import bcrypt from 'bcrypt';

type TUser = {
    userName: string,
    userEmail: string,
    userContact: string
    userAddress: string
    userPassword: string
}


const newUser = async (req, res) => {
    try {
        const encryptedPassword = await bcrypt.hashSync(req.body.userPassword, 10);
        const User = new user({
            userName: req.body.userName,
            userEmail: req.body.userEmail,
            userContact: req.body.userContact,
            userAddress: req.body.userAddress,
            userPassword: encryptedPassword,
        });
        await User.save();
        return res.status(201).json(User);
    } catch (error) {
        return res.status(500).json({
            error: "user not created",
        });
    }
};

const getUserByEmail = async (req, res) => {
    const { userEmail, userPassword } = req.body
    const email = req.params.userEmail
    console.log(userEmail)
    console.log(userPassword)
    try {
        console.log(req.body)
        const User = await user.findOne({ userEmail });
        console.log(User)
        // const isValid = await bcrypt.compare(userPassword, User?.userPassword)
        if (!User) {
            return res.status(500).json({ error: "User not found" })
        }
        return res.status(200).json(User)
        // if (isValid) {
        // }
        // console.log(isValid)
        // return res.status(404).json({ error: "User not found" })
    }
    catch (error) {
        console.log('errooooooooooooooooooooooooooooooooooooo')
        return res.status(500).json({ error: "User not found" })
    }
}

const getUserById = async (req, res) => {
    try {
        const User = await user.find({ _id: req.params._id });
        if (User) {
            return res.status(200).json(User);
        }
        return res.status(404).json({
            error: "User not founded",
        });
    } catch (error) {
        return res.status(404).json({
            error: "User not founded",
        });
    }
};

const updateUser = async (req, res) => {
    try {
        const User = await user.findByIdAndUpdate(
            { _id: req.params._id },
            req.body,
            {
                new: true,
            }
        );
        return res.status(200).json(User);
    } catch (error) {
        return res.status(404).json({
            error: "user not updated",
        });
    }
};

const deleteUser = async (req, res) => {
    try {
        const User = await user.deleteOne({ _id: req.params._id });
        return res.status(200).json({
            message: "user deleted",
        });
    } catch {
        return res.status(404).json({
            error: "user not deleted",
        });
    }
};

export { newUser, getUserById, updateUser, deleteUser, getUserByEmail };
