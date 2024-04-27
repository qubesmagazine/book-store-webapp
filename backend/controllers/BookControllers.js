const { response } = require("express");
const bookSchema = require("../models/bookModel");


// Get all books
const GetAllBooks = async (req, res) => {
    try {
        const gettall = await bookSchema.find({});
        res.status(200).json({
           count: GetAllBooks.length,
           data: gettall

        });
      } catch (error) {
        console.error("Error getting books:", error);
        res.status(400).send({ message: "Server error: could not get all Books" });
      }
};

// Get all books
const GetOneBook = async (req, res) => {

    try {
        const {id} = req.params
        const getOne = await bookSchema.findById(id);
        res.status(200).send(getOne)
      } catch (error) {
        console.error("Error getting book:", error);
        res.status(400).send({ message: "Server error: could not get Book" });
      }
};

const updateBook = async (req, res) => {
    const { title, author, publisher } = req.body;
  try {
    if (!title || !author || !publisher) {
        return res.status(400).send({
          message: "Please provide all required fields: title, author, publisher",
        });
      }
    
      const {id} = req.params
const result = await bookSchema.findByIdAndUpdate(id, req.body)
if(!result){return res.status(400).send({
    message: "Book not found",
  })
}
  return res.status(200).send({
    message: "Book Updated Successfully",
  })
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }

}



//post a book 
const PostBook = async (req, res) => {
  const { title, author, publisher } = req.body;
  if (!title || !author || !publisher) {
    return res.status(400).send({
      message: "Please provide all required fields: title, author, publisher",
    });
  }

  try {
    const newBook = { title, author, publisher };

    const BookStore = await bookSchema.create(newBook);

    res.status(201).send(BookStore);
  } catch (error) {
    console.error("Error creating book:", error);
    res.status(500).send({ message: "Server error: could not create book" });
  }
};



const deleteBook = async (req, res) => {
try {
    const {id} = req.params
const result = await bookSchema.findByIdAndDelete(id)
if(!result) {
    return res.status(400).json({message: 'Book Not Fount'})
}
return res.status(200).send({message: 'Book deleted successfully'})

} catch (error) {
    console.error(error.message)
    res.status(400).send({message: 'Book Deleted'})
}

}

module.exports = { GetAllBooks, PostBook, GetOneBook, updateBook,deleteBook };

