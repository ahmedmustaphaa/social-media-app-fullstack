import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  bio: {
    type: String,
    default: "",
  },
  profilePic: {
    type: String,
    default: "",
  },
  coverPhoto: {
    type: String,
    default: "",
  },
  location: {
    type: String,
    default: "",
  },
  followers: {
    type: [String], // Array of user IDs
    default: [],
  },
  following: {
    type: [String],
    default: [],
  },
  connections: {
    type: [String],
    default: [],
  },
}, { timestamps: true }); // timestamps => createdAt & updatedAt

export const User = mongoose.model('User', userSchema);
