import mongoose, { Schema } from "mongoose";

const userSchema = mongoose.Schema({
    firstName:{
        type:String,
        require:true
    },

    lastName:{
        type:String,
        require:true
    },

    UserName:{
        type:String,
        require:true,
        unique:true
    },

    Email:{
        type:String,
        require:true,
        unique:true
    },

    Password:{
        type:String,
        require:true,
        unique:true
    },

    ProfileImage:{
        type:String,
        require:false,
        default:"https://www.gravatar.com/avatar/?d=identicon"
    },

    isAdmin:{
        type:Boolean,
        default:false
    },

    roles:{
        type:[Schema.Types.ObjectId],
        require:true,
        ref:"Role"
    }
},

{
    timestamps:true
}

)

export default mongoose.model("User",userSchema)