import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  {
    email: "shreyas@example.com",
    fullName: "Shreyas Iyer",
    password: "123456",
    profilePic: "https://documents.bcci.tv/resizedimageskirti/1563_compress.png",
  },
  {
    email: "klrahul@example.com",
    fullName: "Kl Rahul",
    password: "123456",
    profilePic: "https://documents.bcci.tv/resizedimageskirti/1125_compress.png",
  },
  {
    email: "rishabpant@example.com",
    fullName: "Rishab Pant",
    password: "123456",
    profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Prime_Minister_Of_Bharat_Shri_Narendra_Modi_with_Rishabh_Pant.jpg/250px-Prime_Minister_Of_Bharat_Shri_Narendra_Modi_with_Rishabh_Pant.jpg",
  },
  {
    email: "hardik@example.com",
    fullName: "Hardik Pandya",
    password: "123456",
    profilePic: "https://documents.iplt20.com/ipl/IPLHeadshot2025/54.png",
  },
 
];

const seedDatabase = async () => {
  try {
    await connectDB();
    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();