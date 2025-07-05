import Book from "../model/book.model.js"

export const getBook = async (req, res) => {
    try {
        const book = await Book.find();
        res.status(202).json(book);
    } catch {
        console.log("Error:", error);
        res.status(500).json(error);
    }
}

export const addBooks = async (req, res) => {
    try {
        const { name, title, price, category, image } = req.body;

        if (!name || !title || !price || !category || !image) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const createBook = new Book({
            name,
            title,
            price,
            category,
            image,
        })
        const savedBook = await createBook.save();
        res.status(201).json({
            message: "Book insert Successfully",
            book: savedBook
        })

    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}
