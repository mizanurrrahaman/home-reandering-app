import Booking from "../models/booking.models.js"
import { errorHandler } from "../utils/error.js"
import User from "../models/user.models.js"
import Listing from "../models/listing.models.js"

export const getTripList = async (req, res, next)=>{
    try{
     const {userId} = req.params

     const trips = await Booking.find({ customerId: userId}).populate(
        "customerId hostId listingId"
     )
     if(!trips){
        return next(errorHandler(404, "Booking not found"))
     }
     res.status(200).json(trips)
    } catch(error){
        next(error)
    }
}

export const addListingToWishList = async (req, res, next) =>{
    try{
     const {userId, listingId} = req.params
     const user = await User.findById(userId)

    if(!user){
        return next(errorHandler(404, "User not found"))
    }
    const listing = await Listing.findById(listingId).populate("creator")
       if(!listing) {
         return next(errorHandler(404, "Listing not found!"))
       }
       const favoriteListing = user.wishList.find(
        (item) => item._id.toString() === listingId
       )

       if(favoriteListing) {
        user.wishList = user.wishList.filter(
            (item) => item._id.toString() !== listingId
        )
         await user.save()

         res.status(200).json({
            message: "Listing is removed from wishlist",
            wishList: user.wishList,
         })
       } else{
        user.wishList.push(listing)

        await user.save()

        res.status(200).json({
           message: "Listing is added to wishlist",
           wishList: user.wishList, 
        })
       }

    } catch(error){
       next(error)
    }
}