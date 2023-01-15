const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
});

// UserSchema.pre("save", function (next) {
//   const user = this;
//   console.log("pass");
//   if (this.isModified("password") || this.isNew) {
//     bcrypt.genSalt(10, function (saltError, salt) {
//       if (saltError) {
//         return next(saltError);
//       } else {
//         bcrypt.hash(user.password, salt, function (hashError, hash) {
//           if (hashError) {
//             return next(hashError);
//           }
//           user.password = hash;
//           next();
//         });
//       }
//     });
//   } else {
//     next();
//   }
// });

// UserSchema.methods.comparePassword = function (password, callback) {
//   bcrypt.compare(password, this.password, function (error, isMatch) {
//     if (error) {
//       return callback(error);
//     } else {
//       callback(null, isMatch);
//     }
//   });
// };

const User = mongoose.model("crush", UserSchema);

module.exports = {
  User,
};
