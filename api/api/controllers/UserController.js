/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	me: function(req, res){
        let email = req.body.email;
        let password = sha1(req.body.password);
        console.log(req.body);
        User.findOne({email, password}).exec((err, user)=>{
            //TODO: remove password from response            
            if(!user) res.status(404).json({error:true, message:"No such user found"})
            else {
                delete user.password
                res.json({
                    user: user,
                    token: jwToken.issue({id : user.id })
                });
            }
        })
    },
};

