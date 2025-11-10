import { Inngest } from "inngest";
import { User } from "../models/user.js";

// 1️⃣ إنشاء عميل Inngest
export const inngest = new Inngest({ id: "My Application" });

// 2️⃣ إنشاء دالة Inngest اللي هتتفاعل مع Clerk
export const syncUserFunction = inngest.createFunction(
  { id: "sync-user-from-clerk" },
  { event: "clerk/user.created" },

  // الدالة اللي بتتنفذ لما Clerk يبعت event
  async ({ event }) => {
    try {
      const { id, email_addresses, first_name, last_name, image_url } = event.data;

      if (!email_addresses || email_addresses.length === 0)
        throw new Error("No email found");

      // استخراج username من الإيميل
      let username = email_addresses[0].email_address.split("@")[0];

      // التأكد من إن الـ username مش مكرر
      let existingUser = await User.findOne({ username });
      if (existingUser) {
        username = username + Math.floor(Math.random() * 1000);
      }

      // تجهيز بيانات المستخدم
      const userData = {
        id,
        email: email_addresses[0].email_address,
        fullName: `${first_name || ""} ${last_name || ""}`.trim(),
        username,
        profilePic: image_url 
      };

      // حفظ المستخدم في قاعدة البيانات
      await User.create(userData);

      console.log("✅ User synced successfully:", username);
      return { message: "User created successfully", user: username };

    } catch (error) {
      console.error("❌ Error syncing user:", error);
      throw error;
    }
  }
);

export const syncUpdatingFunction = inngest.createFunction(
  { id: "update-user-from-clerk" },
  { event: "clerk/user.updated" },
  async ({ event }) => {
    try {
      const { id, email_addresses, first_name, last_name, image_url } = event.data;

      if (!email_addresses || email_addresses.length === 0)
        throw new Error("No email found");

      const updatedData = {
        email: email_addresses[0].email_address,
        fullName: `${first_name || ""} ${last_name || ""}`.trim(),
        profilePic: image_url 
      };

      await User.findByIdAndUpdate(id, updatedData);

      const user = await User.findById(id); // لتصحيح console.log
      console.log("✅ User synced successfully:", user?.username);

      return { message: "User updated successfully", user: user?.username };

    } catch (error) {
      console.error("❌ Error syncing user:", error);
      throw error;
    }
  }
);

export const syncDeletingFunction = inngest.createFunction(
  { id: "delete-user-from-clerk" },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    try {
      const { id } = event.data;

      await User.findByIdAndDelete(id);

      console.log("✅ User deleted successfully:", id);

    } catch (error) {
      console.error("❌ Error syncing user:", error);
      throw error;
    }
  }
);

// 3️⃣ تصدير الفنكشن
export const functions = [syncUserFunction, syncUpdatingFunction, syncDeletingFunction];
