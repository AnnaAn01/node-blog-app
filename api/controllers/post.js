import { db } from "../db.js";

export const getPosts = (req, res) => {
  // query is everything after the quetion mark in the address
  const q = req.query.cat
    ? "SELECT * FROM posts WHERE cat=?"
    : "SELECT * FROM posts";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.send(err);

    return res.status(200).json(data);
  });
};

export const getPost = (req, res) => {
  // from users u - his u is a shortcut representing the users, p for posts
  const q =
    "SELECT `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`, `date` FROM users u JOIN posts p ON u.id=p.uid WHERE p.id=?";
  // params is the /:id this id in the url
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data[0]);
  });
};

export const addPost = (req, res) => {
  res.json("from Controller");
};

export const deletePost = (req, res) => {
  res.json("from Controller");
};

export const updatePost = (req, res) => {
  res.json("from Controller");
};
