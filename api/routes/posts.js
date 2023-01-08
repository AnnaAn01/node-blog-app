import express from "express";
import {
  getPosts,
  getPost,
  addPost,
  deletePost,
  updatePost,
} from "../controllers/post.js";

const router = express.Router();

router.get("/", getPosts);
// get a single post using its id
router.get("/:id", getPost);
// create a new post
router.post("/", addPost);
// delete a specific post using id
router.delete("/:id", deletePost);
// router.update("/:id", updatePost);
router.put("/:id", updatePost);
export default router;
