const express = require("express");
const cors = require("cors");
const db = require("./models/index");
const dbConfig = require("./config/db.config");

const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
  //credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`)
  .then(() => {
    console.log("Successfully connect to MongoDB");
  })
  .catch((err) => {
    console.log("Connection error", err);
    process.exit();
  });

require("./routes/post.routes")(app);
require("./routes/comment.routes")(app);
require("./routes/user.routes")(app);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
