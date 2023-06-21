const User = require('..//models/usermodule')
const bcrypt = require('bcrypt')

module.exports.register = async (req,res,next)=>{
 try {
    const {username ,email,password } = req.body ;

    const usernamecheck=  await User.findOne({username});
    if (usernamecheck){
       return res.json({message:"User Name is already Taken", status:false})
    }
    const emailcheck= await User.findOne({email})
    if(emailcheck){
       return res.json({message:"Email is already Registered", status:false})
    }
    const hashpassword = await bcrypt.hash(password,10);
    const user =new User({
       email,
       username,
       password:hashpassword
    })
    delete user.password ; 
    const data = await user.save()
    console.log(data);
    return res.json(data)
 } catch (error) {
    next(error)
 }
}

module.exports.login = async (req, res, next)=>{

try {
   const {username,password } = req.body ;

   const user = await User.findOne({username})
   // console.log(user)
   if(!user) return res.json({status:false,message:"User not found"});

   const ispassword = await bcrypt.compare(password,user.password);
   if( !ispassword ) return res.json({status:false,message:"Incorrect password"});

   delete user.password;
    return res.json({ status:true,user})
} catch (error) {
   next(error)
}
 
}

module.exports.setavatar = async(req,res,next)=>{
   try {
      const userId = req.params.id
      const avatarImage = req.body.image;

      const userData = await User.findByIdAndUpdate(userId,{
         isAvatarImageSet: true,
         avatarImage,
      },
      {new:true}
      );

      return res.json({
         isSet:userData.isAvatarImageSet,
         image:userData.avatarImage
   })
   } catch (ex) {
      next(ex)
   }
}

module.exports.getallcontact = async(req,res,next) =>{

   try {
      const Contacts= await User.find({ _id: { $ne:req.params.id} }).select([
         "email",
         "username",
         "avatarImage"         ,
         "_id"
      ]);
      return res.json({status:true,Contacts})
   } catch (ex) {
      next(ex);
   }

}