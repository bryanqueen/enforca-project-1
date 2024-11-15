
const verifyOtp = async(req, res) => {
    try {
        const {email, otp} = req.body;

        if(email !== process.env.USER_EMAIL){
            return res.status(404).json({error: 'User not found'})
        } 
        if (otp !== process.env.OTP) {
            return res.status(400).json({error: 'Invalid OTP'})
        }
        return res.status(200).json({message: 'Verification Successful'})
    } catch (error) {
      console.error(error)
      return res.status(500).json({error: 'Server error, try again'})  
    }
}
module.exports = verifyOtp;