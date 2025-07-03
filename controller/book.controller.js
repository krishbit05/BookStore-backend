import Book from "../model/book.model.js"

export const getBook = async(req,res)=>{
    try{
        const book = await Book.find();
        res.status(202).json(book);
    }catch{
        console.log("Error:",error);
        res.status(500).json(error);
    }
}