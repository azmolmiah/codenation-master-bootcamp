const { Router } = require("express"); //import router method only from express
const { addPost, posts, updatePost, deletePost } = require("./controllers");
const postRouter = Router();

postRouter.post("/posts", addPost);
postRouter.get("/:username/posts", posts);
postRouter.put("/posts/:id", updatePost);
postRouter.delete("/posts/:id", deletePost);

module.exports = postRouter;
