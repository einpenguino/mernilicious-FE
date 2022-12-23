require('dotenv').config();
const httpStatus = require("http-status");
const bcrypt = require('bcrypt');
const express = require("express");
const cors = require ("cors");
const cookieParser = require('cookie-parser')
const jwt = require ("jsonwebtoken");
const path = require('path');
const requireAuth = require ('./middleware/verifyAuth')

const mongoose = require('mongoose')
mongoose.set('strictQuery', true);

//Importing the models
const Products = require('./models/Product');

const UserCreds = require('./models/UserCred');

const UserProfiles = require('./models/UserProfile');

const SkinGoals = require('./models/SkinGoal_Profile');

const app = express();
const PORT = process.env.PORTS || 8000;


//Connect to the DB
mongoose.connect(process.env.DB_CONNECTION, ()=>
    console.log("Connected to DB!")
)

const corsConfig = {
    credentials: true,
    origin: true,
};
//Middleware-function that executes when a route is being hit

app.use(cors(corsConfig))
//To understand the incoming requests as JSON payloads we are using express.json() which is a built-in middleware function in Express.
app.use(express.json({ limit: '50mb' }));

app.use(express.urlencoded({ limit: '50mb', extended: true}));

app.use(cookieParser())

//serving the FE
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (req, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"))
    // function (err) {
    //   res.status(500).send(err);
    // }
});


//Create a GET route, for getting all the product
app.get("/prod", async(req, res) => {
    try{
        const prods = await Products.find();
        res.json(prods);
    }
    catch(err){
        res.json({message:err})
    }
});


//Create a GET route, for getting all the Active Ingredients
app.get("/activeIng", async(req, res) => {
    try{
        const skinmap = await SkinGoals.distinct('ActiveIngredients');
        res.json(skinmap);
    }
    catch(err){
        res.json({message:err})
    }
});



//Create a GET route, for getting all the Skin Goal 
app.get("/skinGoal", async(req, res) => {
    try{
        const skinmap = await SkinGoals.find({},{SkinGoal:1, SkinGoalName:1});
        res.json(skinmap);
    }
    catch(err){
        res.json({message:err})
    }
});

//Create a GET route, for getting the active ingredients base on the Skin Goal
app.get("/activeIng/:id", async(req, res) => {
     const id = req.params.id 
     console.log(id)
    try{
        const skinmap = await SkinGoals.findById({_id:id});
        res.json([skinmap.SkinGoalName, skinmap.ActiveIngredients]);
        
        
    }
    catch(err){
        res.json({message:err})
    }
});


//Create a POST route, that create/upload new product into the DB
app.post("/", requireAuth, async (req,res) => {

  
    const prod = new Products({
        Product_ID: req.body.p_id,
        Name: req.body.name,
        Price: req.body.price,
        Product_Type:req.body.prodtype,
        Description:req.body.desc,
        Skin_Type:req.body.skintype,
        Ingredients:req.body.ing,
        Active_Ingredients:req.body.act_ing,
        Prod_Image:req.body.img
        

    });

    try{
    const savedProd = await prod.save();
    res.json(savedProd);
    }
    catch(error){
        res.status(400).send(error.message); 
        console.log(error.message);   
        
    }
    console.log('I got a request')
    console.log(req.body)
    
});


//Create a POST route, that creates new user (signup) and stored into the DB
app.post("/userCred", async (req,res) => {

   const hash = await bcrypt.hash(req.body.password, 10)
    const user = new UserCreds({
        Name: req.body.name,
        Username: req.body.username,
        Password: hash
    });

    try{
    const savedUser = await user.save();
    res.json(savedUser);
    }
    catch(error){
        res.status(400).send(error.message); 
        console.log(error.message);   
        
    }  
});




//Create a POST route, that validates user login from the DB
app.post("/login", async (req,res) => {  

    try{ 
        //Check if user exist in the DB thru the username
        const checkUser = await UserCreds.findOne({Username: req.body.username});
        
        if (checkUser){
            const checkPassword = await bcrypt.compare(req.body.password, checkUser.Password)
            if (checkPassword){
                // When both username and password matches , create a token and assign to the log in user
                const token = jwt.sign({_id: checkUser._id}, process.env.TOKEN_SECRET,{expiresIn:'1h'});
                res.cookie('jwt',token, {httpOnly:true, secure:true, maxAge: 12 * 60 * 60 * 1000});
                res.json([checkUser.Username, checkUser.Name])
            }
            else{
                throw 'Password incorrect , try again'
            }
        }

        else{
            throw 'Email incorrect or does not exsit, pls sign up'
        }

    
    }
    catch(error){
        res.status(400).json(error); 
        console.log(error);     
    }  
    
});


//Create a POST route, that allows user to logout
app.get("/logout", async (req,res) => {  

    try{ 
        
        const token = req.cookies
        res.clearCookie('jwt', token, {httpOnly:true, secure:true})
        res.sendStatus(204)
        console.log(token)
    
    }
    catch(error){
        res.status(400).json(error); 
        console.log(error);     
    }  
    
});



//Create a POST route, to store user details on their skinprofile in the DB
app.post("/skinsurvey",requireAuth, async (req,res) => {  
    
    const checkUser = await UserCreds.findOne({Username: req.body.username}).exec();
    const getSkinGoal = await SkinGoals.findOne({SkinGoal: req.body.skingoal}).exec();

     const survey = new UserProfiles({
        Username: checkUser._id,
        SkinType: req.body.skintype,
        Sensitivity: req.body.isSensitive,
        SkinGoal: getSkinGoal._id

    });

    try{
    const savedUserSurvey = await survey.save();
    res.json(savedUserSurvey);
    }
    catch(error){
        res.status(400).json(error.message); 
        console.log(error);     
    }  
    
});

app.delete("/prod", requireAuth, async (req,res)=>{
try {
     const idArray = req.body

    const deleted = await Products.deleteMany({ _id: { $in: idArray } });
    res.json({msg:"Delete Success"})

  } catch (error) {
    res.status(400).json(error.message); 
    console.log(error);    
  }
   
})






//To start the server 
app.listen(PORT, () => {
  console.log("🎉🎊", "celebrations happening on port", PORT, "🎉🎊");
});