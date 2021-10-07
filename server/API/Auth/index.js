import express from "express";
import bcrypt from "bcryptjs";


const Router = express.Router();

//models
import { UserModel } from "../../database/user";


/*
Route       /signup
Descrip     signup with email & Pswd
Params      None
Acess       Public
Method      Post
*/

Router.post("/signup", async (req, res) => {
    try {
        const { email, password, fullname, phoneNumber } = req.body.credntials;
        //checking whether phone & email already exist
        const checkUserByEmail = await UserModel.findOne({ email });
        const checkUserByPhone = await UserModel.findOne({ phoneNumber });

        if (checkUserByEmail || checkUserByPhone) {
            return res.json({ error: "User already exists" });
        }

    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;
