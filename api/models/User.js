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

    userName:{
        type:String,
        require:true,
        unique:true
    },

    email:{
        type:String,
        require:true,
    },

    password:{
        type:String,
        require:true,
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