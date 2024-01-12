import mongoose from "mongoose";

const RoleScehma = mongoose.Schema({
  role: {
    type: String,
    require: true,
  },
},
{
    timestamps:true
    
}
);

export default mongoose.model("Role", RoleScehma);