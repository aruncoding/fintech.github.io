import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    name:{type: String, required: true, trim: true},
    email:{type: String, required: true, trim: true},
    phone:{type: Number, required: true, trim: true},
    subject:{type: String, required: true, trim: true},
    message:{type: String, required: true, trim: true},
})

const ContactModel = mongoose.model("contact", ContactSchema);

export default ContactModel;