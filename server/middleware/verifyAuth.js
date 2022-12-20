const jwt = require ("jsonwebtoken");


//apply to any route that require auth
const requireAuth = (req, res , next) => {

    //grab the token from the cookies
    const token = req.cookies.jwt

   //check json web token exists & is verified
   if (token){
        jwt.verify(token, process.env.TOKEN_SECRET, (error, decodedToken) =>{
            
            if (error){
                console.log(error.message)
                res.redirect('/login')
            }
            else{
                console.log(decodedToken)
                next()
            }

        })
   }
   else{
        res.redirect('/login')
   }
}

module.exports = requireAuth;