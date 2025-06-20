import express from "express";
import {addItem,viewItems} from "../controllers/itemController.js"
import multer from "multer";
import { cloudinary, storage} from "../utils/cloudinary.js";
const router = express.Router();

const upload = multer({ storage });

router.post('/add',
    upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "additionalImages", maxCount: 5 },
  ]),addItem)
router.get('/view',viewItems)

export default router