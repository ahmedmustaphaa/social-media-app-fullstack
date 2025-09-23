import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true, // علشان ميبقاش فيه نفس الإيميل مكرر
      trim: true,
      lowercase: true,
    },
    full_name: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    bio: {
      type: String,
      default: "",
    },
    profile_picture: {
      type: String,
      default: "", // ممكن تحط لينك لصورة افتراضية
    },
    cover_photo: {
      type: String,
      default: "",
    },
    location: {
      type: String,
      default: "",
    },
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // بيربط نفس الموديل ببعضه (users بيتابعوا users)
      },
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    connections: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true, // يضيف createdAt و updatedAt أوتوماتيك
  }
);

export const User = mongoose.model("User", userSchema);
