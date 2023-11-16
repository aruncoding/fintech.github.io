import express from 'express';
const router = express.Router();
import ContactController from '../controllers/contactController.js';

router.post("/contactus", ContactController.saveContact);

export default router;
