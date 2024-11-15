
const forgotPassword = async(req, res) => {
    try {
        const {email} = req.body;

        if(email !== process.env.USER_EMAIL){
            return res.status(404).json({error: 'Email address not found' })
        }
        return res.status(200).json({message: `We sent an OTP to ${email}`})
    } catch (error) {
        console.error(error)
        return res.status(500).json({error: 'Server error, please try again'})
    }
}
module.exports = forgotPassword;