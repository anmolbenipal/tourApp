import express from 'express'
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/userController.js';
const router = express.Router()
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

//update user
router.put("/api/v1/:id", verifyUser ,updateUser);

//delete user
router.delete("/api/v1/:id",verifyUser , deleteUser);

//get single user
router.get("/api/v1/:id",verifyUser , getSingleUser);

//get all users
router.get("/api/v1/",verifyAdmin , getAllUser);

export default router
