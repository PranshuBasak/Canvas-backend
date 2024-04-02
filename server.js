import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import dotenv from 'dotenv'
import mongoose from "mongoose";
import asyncHandler from "express-async-handler"


const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true })) // data received from the client in url
app.use(express.static("public"))
app.use(cookieParser())
app.use(morgan("dev"))


// routes import
// import userRouter from './routes/user.routes.js'
// import healthcheckRouter from './routes/healthcheck.routes.js'
// import tweetRouter from "./routes/tweet.routes.js"
// import subscriptionRouter from "./routes/subscription.routes.js"
// import videoRouter from "./routes/video.routes.js"
// import commentRouter from "./routes/comment.routes.js"
// import likeRouter from "./routes/like.routes.js"
// import playlistRouter from "./routes/playlist.routes.js"
// import dashboardRouter from "./routes/dashboard.routes.js"


// routes decleration
// app.use("/api/v1/healthcheck", healthcheckRouter)
// app.use("/api/v1/users", userRouter)
// app.use("/api/v1/tweets", tweetRouter)
// app.use("/api/v1/subscriptions", subscriptionRouter)
// app.use("/api/v1/videos", videoRouter)
// app.use("/api/v1/comments", commentRouter)
// app.use("/api/v1/likes", likeRouter)
// app.use("/api/v1/playlist", playlistRouter)
// app.use("/api/v1/dashboard", dashboardRouter)


// require('dotenv').config({path: './env'})



app.get('/', asyncHandler(async(req, res) =>{
    res.send("Working...")
}))


dotenv.config({
    path: './.env'
})


const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log(`\n✅ MongoDb Connected !! DB HOST: ${mongoose.connection.host}`);
    } catch (error) {
      console.error('MongoDB connection error:', error);
      process.exit(1); 
    }
  };


    app.listen(process.env.PORT || 5001, async () => {
        await connectDB()
        console.log(`⚙️ Server is listening on http://localhost:${process.env.PORT}`)
    })
    



