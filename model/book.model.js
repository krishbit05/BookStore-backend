import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name:String,
    title:String,
    price:Number,
    category:String,
    image:String,
})

const book = mongoose.model("books",bookSchema);
export default book;