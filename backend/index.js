import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import noteRoutes from './routes/note.route.js'
import cors from'cors'

dotenv.config();



// console.log("📌 PORT from .env:", process.env.PORT); // Debug line
//this line is for debguging and knowing for 

const app = express();
const port = process.env.PORT || 5010;

//database connections
try {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("✅ MongoDB successfully connected");
} catch (error) {
  console.log("❌ MongoDB connection failed:", error);
}

//routing middleware

app.use(express.json())
app.use(cors())
app.use("/api/v1/noteapp",noteRoutes);

app.listen(port, () => {
  console.log(`✅ Server is running on ${port}`);
});


app.use("/", (req, res) => {
  res.send("Server is working Arun 🚀");
});
