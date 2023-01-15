// const express = require("express");
// const { authenticateJWT, SECRET_KEY } = require("../auth/index");
// const jwt = require("jsonwebtoken");
// const router = express.Router();
// const { User } = require("../model/user");

// //LOGIN
// router.post("/login", async (req, res) => {
//   const { user } = req.body;
//   let token;
//   try {
//     const userData = await User.findOne({ email: user.email });
//     if (!userData) {
//       return res.status(400).json({ message: "User not found" });
//     }
//     userData.comparePassword(user.password, (matchError, isMatch) => {
//       if (matchError) {
//         return res.status(400).json({ message: "something went wrong" });
//       }
//       if (!isMatch) {
//         return res.status(400).json({ message: "Incorrect password" });
//       }
//       token = jwt.sign({ userId: userData._id }, SECRET_KEY, {
//         expiresIn: "1d",
//       });
//       return res
//         .status(200)
//         .json({ result: userData, token, message: "Success" });
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

// //REGISTER
// router.post("/register", async (req, res) => {
//   const { user } = req.body;
//   try {
//     const existingUser = await User.findOne({
//       email: user.email,
//     });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }
//     const userData = await User.create(user);
//     token = jwt.sign({ userId: userData._id }, SECRET_KEY, {
//       expiresIn: "1d",
//     });
//     res.status(200).json(userData);
//   } catch (error) {
//     console.log(error);
//   }
// });

// //USER DATA
// router.get("/user", authenticateJWT, async (req, res) => {
//   const user = req.user;
//   try {
//     const userData = await User.findById(user.userId);
//     if (!userData) {
//       return res.status(400).json({ message: "User not found" });
//     }
//     return res.status(200).json(userData);
//   } catch (error) {
//     console.log(error);
//   }
// });

// module.exports = router;
