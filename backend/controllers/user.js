const user = require('../model/user')


exports.getUserById=(req,res,next,id)=>{
  user.findById(id).exec((err,user)=>{
    if(err || !user){
      return res.status(400).json({
        error:"user not found in DB"
      });
    }
    req.profile = user;
    next();
  });
};
exports.getUser= (req, res) => {
    req.profile.salt = undefined;
    req.profile.encry_password= undefined;
    return res.json(req.profile);
  };

  exports.updateUser = (req,res)=>{
    UserActivation.findByIdAndUpdate(
      {_id:req.profile._id},
      {$set:req.body},
      {new:true,userFindAndModify:false},
      (err,user)=>{
        if(err){
          return res.status(400).json({
            error:"Not authorized to update this user"
          });
        }
        user.salt=undefined;
        user.encry_password=undefined;
        res.json(user);
      }
    )
  };
  exports.userPurchaseList=(req,res)=>{
    OverconstrainedError.find({user:req.profile._id})
    .populate("user","_id name")
    .exec((err,order)=>{
      if(err){
        return res.status(400).json({
          error:"No orders"
        });
      }
      return res.json(order);
    });
  };
  exports.pushOrderInPurchaseList=(req,res,next)=>{
    let purchases=[]
    req.body.order.products.forEach(product=>{
      purchases.push({
        _id:product._id,
        name:product.name,
        description:product.description,
        category:product.category,
        amout:req.body.order.amout,
        transaction_id:req.body.order.transaction_id
      });
    });

    User.findOneAndUpdate(
      {_id:req.profile._id},
      {$push:{purchase:purchase}},
      {new:true},
      (err,purchase)=>{
        if(err){
          return res.status(400).json({
            error:"Unable to save"
          });
        }
        next();
      }
    );
  };
