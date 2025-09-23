import { Inngest } from "inngest";
import { User } from "../model/User.js";

// 🔹 إنشاء client
export const inngest = new Inngest({ id: "pingup_app" });

// 🔹 Function: إنشاء مستخدم جديد
const createUser = inngest.createFunction(
  { name: "Create User" },
  { event: "user/create" },
  async ({ event }) => {
    const { email, full_name, username } = event.data;

    const newUser = await User.create({
      email,
      full_name,
      username,
      bio: event.data.bio || "",
      profile_picture: event.data.profile_picture || "",
      cover_photo: event.data.cover_photo || "",
      location: event.data.location || "",
    });

    return { message: "✅ User created", user: newUser };
  }
);

const updateUser = inngest.createFunction(
  { name: "Update User" },
  { event: "user/update" },
  async ({ event }) => {
    const { userId, updates } = event.data;

    const updatedUser = await User.findByIdAndUpdate(userId, updates, {
      new: true,
    });

    return { message: "✅ User updated", user: updatedUser };
  }
);

// 🔹 Function: حذف مستخدم
const deleteUser = inngest.createFunction(
  { name: "Delete User" },
  { event: "user/delete" },
  async ({ event }) => {
    const { userId } = event.data;

    await User.findByIdAndDelete(userId);

    return { message: "🗑️ User deleted", userId };
  }
);

// 🔹 Export all functions
export const functions = [createUser, updateUser, deleteUser];
