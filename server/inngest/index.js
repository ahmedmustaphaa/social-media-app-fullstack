import { Inngest } from "inngest";
import { User } from "../model/User.js";

export const inngest = new Inngest({ id: "pingup_app" });

// إنشاء مستخدم
const createUser = inngest.createFunction(
  { id: "user.create.fn", name: "Create User" },   // 👈 ID مختلف
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

// تحديث مستخدم
const updateUser = inngest.createFunction(
  { id: "user.update.fn", name: "Update User" },   // 👈 ID مختلف
  { event: "user/update" },
  async ({ event }) => {
    const { userId, updates } = event.data;

    const updatedUser = await User.findByIdAndUpdate(userId, updates, { new: true });
    return { message: "✅ User updated", user: updatedUser };
  }
);

// حذف مستخدم
const deleteUser = inngest.createFunction(
  { id: "user.delete.fn", name: "Delete User" },   // 👈 ID مختلف
  { event: "user/delete" },
  async ({ event }) => {
    const { userId } = event.data;

    await User.findByIdAndDelete(userId);
    return { message: "🗑️ User deleted", userId };
  }
);

export const functions = [createUser, updateUser, deleteUser];
