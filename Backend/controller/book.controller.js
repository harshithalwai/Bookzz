import Book from "../models/book.model.js";

const getBook = async (req, res) => {
  try {
    const books = await Book.find();
   res.status(200).json(books);
  } catch (error) {
    res.status(500).json(error);
  }
};

export default getBook;
