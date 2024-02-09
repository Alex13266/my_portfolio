const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const multer = require("multer");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

const CONNECTION_URI =
  "mongodb+srv://admin:Jnpug9GI4Vpph38U@cluster0.2b1rw41.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(CONNECTION_URI);

const cardSchema = new mongoose.Schema({
  image: String,
  title: String,
  description: String,
  githubLink: String,
});

const Card = mongoose.model("Card", cardSchema);

app.use(cors({}));
app.use(express.json());

// - - - - - - - - - - - - -
const router = express.Router();
app.use("/api", router);

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "aleksivanov845@gmail.com",
    pass: "dnfolgqtbqcqwbst",
  },
});

contactEmail.verify((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Ready To Send");
  }
});

router.post("/contact", (request, response) => {
  const name = request.body.firstName + request.body.lastName;
  const email = request.body.email;
  const message = request.body.message;
  const phone = request.body.phone;
  const mail = {
    from: name,
    to: "aleksivanov845@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <p>Message: ${message}</p>
    `,
  };

  contactEmail.sendMail(mail, (err) => {
    if (err) {
      response.json(err);
    } else {
      response.json({ code: 200, status: "Message Sent" });
    }
  });
});

// - - - - - - - - - - - - -

app.get("/api/cards", async (request, response) => {
  try {
    const cards = await Card.find();
    response.json(cards);
  } catch (err) {
    console.error("Error fetching cards: ", err);
    response.status(500).send("Internal Server Error");
  }
});

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// app.post("/api/cards", upload.single("image"), async (request, response) => {
//   const { title, description, githubLink } = request.body;
//   const image = request.file ? request.file.buffer.toString("base64") : "";

//   try {
//     const newCard = new Card({ image, title, description, githubLink });
//     await newCard.save();
//   } catch (err) {
//     console.error("Error creating card:", err);
//     res.status(500).send("Internal Server Error");
//   }
// });

// Mailer

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
