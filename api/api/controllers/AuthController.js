var crypto = require('crypto'),
    sha1 = require("sha1");
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
        User.find({email, password}).exec((err, user)=>{
            res.json(user);
        })
    },
    register: function(req, res){
        let email = req.body.email;
        let name = req.body.name;
        let password = sha1(req.body.password);
        User.create({email, name, password}).exec((err, user)=>{
            if(!err) res.json(user);
            else res.status(400).json(err);
        })
    }   
};

