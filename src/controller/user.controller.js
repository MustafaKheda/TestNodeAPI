import { User } from "../model/user.model.js";
import jwt from "jsonwebtoken";
const key = "1234";
const signupUser = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, fullName, password } = req.body;
    if (!username || !email || !fullName || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const user = {
      username, email, fullName, password,_id:1,
    }
    // const user = await User.create({ username, email, fullName, password });
    console.log(user);
    const token = jwt.sign({ userId: user._id }, key, { expiresIn: "1h" });
    res.status(201).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    // console.log(req.body);
    // const data = jwt.verify(req.body.token, key);
    // console.log(data, "data");
    // const user = await User.findById({ _id: data.userId });
    // console.log(user);
    // if (!user) {
    //   return res.status(404).json({ message: "User not found" });
    // }
    return res.status(200).json({message:"login Successfully"});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export { signupUser, login };
