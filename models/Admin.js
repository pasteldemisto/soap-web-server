import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
    name: {type:String, required:true},
    cargo: {type:String, required:true},
    matricula: {type:String, required:true, unique:true},
    email: {type:String, required:true},
    password: {type:String, required:true}
});


export default mongoose.model('Admin', adminSchema);