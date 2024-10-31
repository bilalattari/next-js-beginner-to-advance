const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema({
  name: String,
  email: String,
  provider: String,
  image: String,
  role: { type: String, enum: ["user", "admin"], default: "user" },
});

export const UserModel =
  mongoose?.models?.Users || mongoose.model("Users", userSchema);
