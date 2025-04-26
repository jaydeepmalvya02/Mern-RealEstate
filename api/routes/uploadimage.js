import express from "express";
import multer from "multer";
import cloudinary from "cloudinary";
import streamifier from "streamifier";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// cloudinary configuration
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer setup using memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Please provide an image" });
    }

    const streamUpload = (req) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.v2.uploader.upload_stream((error, result) => {
          if (result) {
            resolve(result);
          } else {
            reject(error);
          }
        });
        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });
    };

    const result = await streamUpload(req);

    res.status(200).json({ url: result.secure_url });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

export default router;
