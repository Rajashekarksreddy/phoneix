import mongoose, {Schema} from "mongoose";

const ContactSchema = new Schema({
    fullname: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minLength: [2, "Name must be greater than 2 characters"],
        maxLength: [50, "Name must be lesser than 50 characters"],
      },

    phonenumber:{
        type:'Number',
        required: [true, "number is required"],
        minLength: [5, "number must be greater than 5 characters"],
        maxLength: [15, "number must be lesser than 50 characters"],
    },

    email: {
        type: String,
        required: [true, "Email is required"],
      },
      message: {
        type: String,
        required: [true, "Message is required"],
      },

},{timestamps:true})

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

export default Contact;