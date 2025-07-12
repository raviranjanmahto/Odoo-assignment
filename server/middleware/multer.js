const multer = require("multer");
const path = require("path");

// In-memory storage
const storage = multer.memoryStorage();

// Filter only images
const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname);
  if (![".jpg", ".jpeg", ".png"].includes(ext)) {
    return cb(new Error("Only images are allowed"));
  }
  cb(null, true);
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 1024 * 1024 * 5 }, // Max 5MB
});

module.exports = upload;
