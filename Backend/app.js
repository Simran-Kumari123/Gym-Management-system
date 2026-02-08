import express from "express";
import { config } from  "dotenv";
import cors from "cors";


const app = express();
const router = express.Router();


config({path: "./config.env"});

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


router.post("/send/mail", async (req, res, next) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return next(
      res.status(400).json({
        success: false,
        message: "Please provide all details",
      })
    );
  }

 try {
    await sendEmail({
      email: "simrankumari02184@gmail.com",
      subject: "GYM WEBSITE CONTACT",
      message,
      userEmail: email,
    });
    res.status(200).json({
      success: true,
      message: "Message Sent Successfully.",
    });
}catch (error) {
  console.error("❌ Email send failed:", error.message);
  console.error(error); // 👈 This prints the full error with stack trace
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
}
});

app.use(router);

export default app;
