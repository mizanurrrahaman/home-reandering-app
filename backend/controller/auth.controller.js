import User from "../models/user.models.js"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import { errorHandler } from "../utils/error.js"


export const register = async(req, res, next) =>{
   try{
      const {firstName, lastName, email, password } = req.body

      const profileImage = req.file

      if(!profileImage){
        return res.status(400).send("No file uploaded")
      }

      const profileImagePath = profileImage.path

      const existingUser = await User.findOne({ email })

      if(existingUser) {
        return next(errorHandler(409, "User already exist!"))
      }

      const hashedPassword = bcryptjs.hashSync(password, 10)
      const newUser = new User({
           firstName,
           lastName,
           email,
           password: hashedPassword,
           profileImagePath,
      })
       
      await newUser.save()

      res.status(201).json({message: " User create Successfully", user: newUser})

   } catch(error){
      next(error)
   }   
}

export const login = async (req, res, next) => {
   try {
       const { email, password } = req.body;

       // Check if user exists
       const validUser = await User.findOne({ email });

       if (!validUser) {
           return next(errorHandler(404, "User not found!"))
       }

       // Validate password
       const validPassword = bcryptjs.compareSync(password, validUser.password);
       if (!validPassword) {
           return next(errorHandler(400, "Wrong credentials!")) 
       }

       // Generate JWT token
       const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

       // Exclude password from user object before sending it in response
       const { password: pass, ...rest } = validUser._doc;

       // Send response
       res.status(200).json({ token,  rest });
   } catch (error) {
       next(error)
   }
};



{/*
   export const login = async(req, res) => {
      try{
        const {email, password} = req.body
   
        const vailedUser = await User.findOne({ email })
   
        if(!validUser){
          return res.status(409).json({ message:" User dose't exist!" })
        }
   
        const vailedPassword = bcryptjs.compareSync(password, vailedUser.password)
   
        if(!vailedPassword) {
           return res.status(400).json({message: " Wrong credentials!"})
        }
   
        const token = jwt.sign({id: vailedUser._id}, process.env.JWT_SECRET)
   
        const {password: pass, ...rest } = vailedUser._doc
         res.status(200).json({ token, rest})
      } catch(error){
         console.log(error)
         res.status(500).json({error: error.message})
      }
   }

*/}


