//require modules for the user model
import mongoose from 'mongoose';

import passportLocalMongoose from 'passport-local-mongoose';

let user = mongoose.Schema(
  {
    username: {
      type: String,
      default: '',
      trim: true,
      required: 'username is required',
    },
    /*
        password:
        {
            type:string,
            default:'',
            trim:true,
            required:'username is required'
        }
        */
    /*username:
        {
            type:String,
            default:'',
            trim:true,
            required:'username is required'
        },*/
    email: {
      type: String,
      default: '',
      trim: true,
      required: 'email is required',
    },
    displayName: {
      type: String,
      default: '',
      trim: true,
      required: 'DisplayName is required',
    },
    created: {
      type: Date,
      default: Date.now,
    },

    update: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: 'users',
  }
);
//configure options for user model.
let options = { missingPasswordError: 'wrong/Missing Password' };
user.plugin(passportLocalMongoose, options);

export const User = mongoose.model('user', user);
