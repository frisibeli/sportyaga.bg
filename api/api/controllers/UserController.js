/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	me: function(req, res){
        console.log(req.token)
        User.findOne({id:req.token.id}).populate('teams').exec((err, user)=>{          
            if(!user) res.status(404).json({error:true, message:"No such user found"})
            else {
                delete user.password
                res.json({
                    ...user
                });
            }
        })
    },
};

