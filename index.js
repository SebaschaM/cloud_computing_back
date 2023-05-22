import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// app.use("/api/auth", require("./routes/auth"));
// app.use("/api/testimonial", require("./routes/testimonial"));
// app.use("/api/appointment", require("./routes/appointment"));
// app.use("/api/employee", require("./routes/employee"));

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
