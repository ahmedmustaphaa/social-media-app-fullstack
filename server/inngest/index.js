import { Inngest } from "inngest";
import { User } from "../model/User.js";

// إنشاء Inngest client
export const inngest = new Inngest({ id: "pingApp" });

// 🟢 إنشاء مستخدم
const createUser = inngest.createFunction(
  { id: "user.create.fn", name: "Create User" },
  { event: "user.created" }, // نفس اللي Clerk بيبعت
  async ({ event }) => {
    const data = event.data;

    // استخراج القيم من data
    const email =
      data.email_addresses?.find((e) => e.id === data.primary_email_address_id)
        ?.email_address || "";

    const full_name = `${data.first_name || ""} ${data.last_name || ""}`.trim();

    const newUser = await User.create({
      email,
      full_name,
      username: data.username || "",
      profile_picture: data.image_url || data.profile_image_url || "",
      clerkId: data.id, // نخزن الـ Clerk ID للربط
    });

    return { message: "✅ User created", user: newUser };
  }
);

// 🟡 تحديث مستخدم
const updateUser = inngest.createFunction(
  { id: "user.update.fn", name: "Update User" },
  { event: "user.updated" },
  async ({ event }) => {
    const data = event.data;

    const email =
      data.email_addresses?.find((e) => e.id === data.primary_email_address_id)
        ?.email_address || "";

    const full_name = `${data.first_name || ""} ${data.last_name || ""}`.trim();

    const updates = {
      email,
      full_name,
      username: data.username || "",
      profile_picture: data.image_url || data.profile_image_url || "",
    };

    const updatedUser = await User.findOneAndUpdate(
      { clerkId: data.id },
      updates,
      { new: true }
    );

    return { message: "✅ User updated", user: updatedUser };
  }
);

// 🔴 حذف مستخدم
const deleteUser = inngest.createFunction(
  { id: "user.delete.fn", name: "Delete User" },
  { event: "user.deleted" },
  async ({ event }) => {
    const data = event.data;

    await User.findOneAndDelete({ clerkId: data.id });
    return { message: "🗑️ User deleted", clerkId: data.id };
  }
);

export const functions = [createUser, updateUser, deleteUser];
