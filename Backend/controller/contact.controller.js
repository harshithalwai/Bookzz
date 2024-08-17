import Contact from "../models/contact.model.js";

export const saveCon = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const createdUser = await Contact.create({
      name,
      email,
      message,
    });
    res.send(createdUser);
  } catch (error) {
    console.log(error);
  }
};
