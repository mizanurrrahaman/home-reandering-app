import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose"
import authRoutes from "./router/auth.route.js"
import listingRoutes from "./router/listing.route.js"
import bookingRoutes from "./router/booking.route.js"
import userRoutes from "./router/user.route.js"

dotenv.config()

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("Connected to MongoDB")
}).catch((err) =>{
    console.log(err)
})


const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static("public"))


app.listen(3000, ()=>{
    console.log("Server is runing localhost 3000  ")
})


app.use("/api/auth", authRoutes)
app.use("/api/listing", listingRoutes)
app.use("/api/booking", bookingRoutes)
app.use("/api/user", userRoutes)

app.use((err, req, res, next ) =>{
    const statusCode = err.statusCode || 500
    const message = err.message || "Internal Service Error"

    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })

})

//murad123
//XfsyBpNmAAeu81YG

//mongodb+srv://murad123:XfsyBpNmAAeu81YG@cluster0.hshjk32.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0