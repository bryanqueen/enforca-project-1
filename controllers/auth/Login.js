

const login = async(req, res) => {
    try {
       const {email, password} = req.body;
       
       if(email === process.env.USER_EMAIL && password === process.env.USER_PASSWORD){
            return res.status(200).json({message: 'Login successful'})
       } else{
            return res.status(401).json({error: 'Invalid credentials'})
       }
    } catch (error) {
        console.error(error)
        return res.status(500).json({error: 'Server error, please try again'})
    }
}
module.exports = login;