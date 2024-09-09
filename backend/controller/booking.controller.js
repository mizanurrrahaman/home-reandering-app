import Booking from "../models/booking.models.js"


export const createBooking = async (req, res, naxt) =>{
  try{
    const { customerId, hostId, listingId, startDate, endDate, totalPrice} = req.body

    const newBooking = new Booking({
       customerId,
       hostId,
       listingId,
       startDate,
       endDate,
       endDate,
       totalPrice,
    })

    await newBooking.save()
    
    res.status(200).json(newBooking)
  } catch(error){
    naxt(error)
  }
}