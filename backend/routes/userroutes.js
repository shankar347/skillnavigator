import generatetoken from "../middlewares/createtoken.js"
import User from "../model/userschema.js"
import bcrpt from 'bcryptjs'

const register=async(req,res)=>{
    try{
     const {email,phoneno,password,name,
        github,linkedin,
        language,
        degree,
        specialization,
        internship,
        file
     } =req.body
    
     const user=await User.findOne({email:email})

     if(user)
     {
        return res.json({error:"User is already existing"})
     }

     let hashsalt=bcrpt.genSaltSync(10)

     let hashedpassword=bcrpt.hashSync(password,hashsalt)

     const newuser=new User({
         email,
         phoneno,
         name,
         password:hashedpassword,
         github,linkedin,
         language,
         degree,
         specialization,
         internship,
         file
     })

     generatetoken(res,newuser._id)
     await newuser.save()
    }
    catch(err)
    {
        console.log(err)
    }
}

const login=async(req,res)=>{
    try{
     const {email,password} =req.body

     const user=await User.findOne({email:email})
 
     if (!user)
     {
      return res.json({error:"User is not found"})
     }
     const checkpassword=bcrpt.compareSync(password,user.password)
     if(!checkpassword)
     {
        return res.json({error:"Invalid password"})
     }

     generatetoken(res,user._id)
    }
    catch(err)
    {
        console.log(err)
    }
}

const updateuser=async(req,res)=>{
    try{
     const {phoneno,email,name,password} = req.body
     
     
    }
    catch(err)
    {
        console.log(err)
    }
}

const logout=async(req,res)=>{
    try{

    }
    catch(err)
    {
        console.log(err)
    }
}

const getalltrainers=async(req,res)=>{
   try{
     const trainers=await User.find({
        istrainer:true
     })

     res.json(trainers)
   }
   catch(err)
   {
    console.log(err)
   }
}

export {
    register,
    login,
    updateuser,
    logout,
    getalltrainers
}