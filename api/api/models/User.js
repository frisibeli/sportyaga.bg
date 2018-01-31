/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    email: {
      type: 'string',
      unique: true,
      required: true
    },
    name: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true,
      defaultsTo: 'test'
    },
    teams:{
      collection: 'team',
      via: 'players',
      dominant: true
    }
  }
};

