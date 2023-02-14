import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";

const app = express();

app.use(express.json())
app.use("/api/user", router)
app.use("/api/blog", blogRouter)

mongoose.set("strictQuery", false);

mongoose.connect("mongodb+srv://arinze:Spade123456789@clusterar.pc1xkig.mongodb.net/social-media?retryWrites=true&w=majority").then(() => app.listen(5000)).then(() => console.log("Connected Bitches!!")).catch((err) => console.log(err));