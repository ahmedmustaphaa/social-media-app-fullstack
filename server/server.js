import { Inngest } from "inngest";
import { User } from "../model/User.js";

// إنشاء Inngest client
export const inngest = new Inngest({ id: "pingApp" });

// 🟢 إنشاء مستخدم
const createUser = inngest.createFunction(
  { id: "user.create.fn", name: "Create User" },
  { event: "user.created" }, // ✅ Clerk بيبعت كدا
  async ({ event }) => {
    const { id, first_name, last_name, username, image_url, email_addresses } = event.data;

    const email = email_addresses?.[0]?.email_address || "";

    const newUser = await User.create({
      clerkId: id,
      email,
      full_name: `${first_name || ""} ${last_name || ""}`.trim(),
      username: username || "",
      profile_picture: image_url || "",
    });

    return { message: "✅ User created", user: newUser };
  }
);

// 🟡 تحديث مستخدم
const updateUser = inngest.createFunction(
  { id: "user.update.fn", name: "Update User" },
  { event: "user.updated" }, // ✅ Clerk بيبعت كدا
  async ({ event }) => {
    const { id, first_name, last_name, username, image_url, email_addresses } = event.data;

    const email = email_addresses?.[0]?.email_address || "";

    const updatedUser = await User.findOneAndUpdate(
      { clerkId: id },
      {
        email,
        full_name: `${first_name || ""} ${last_name || ""}`.trim(),
        username: username || "",
        profile_picture: image_url || "",
      },
      { new: true }
    );

    return { message: "✅ User updated", user: updatedUser };
  }
);

// 🔴 حذف مستخدم
const deleteUser = inngest.createFunction(
  { id: "user.delete.fn", name: "Delete User" },
  { event: "user.deleted" }, // ✅ Clerk بيبعت كدا
  async ({ event }) => {
    const { id } = event.data;

    await User.findOneAndDelete({ clerkId: id });
    return { message: "🗑️ User deleted", userId: id };
  }
);

export const functions = [createUser, updateUser, deleteUser];
