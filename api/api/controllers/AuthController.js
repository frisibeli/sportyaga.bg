   var sha1 = require('sha1');
/**
 * SportController
 *
 * @description :: Server-side logic for managing sports
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	login: function(req, res){
        let email = req.body.email;
        let password = sha1(req.body.password);
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
    register: function(req, res){
        let email = req.body.email;
        let name = req.body.name;
        let password = sha1(req.body.password);
        User.create({email, name, password}).exec((err, user)=>{
            //TODO: remove password from response
            if(!err) res.json(user);
            else res.status(400).json(err);
        })
    }
};

