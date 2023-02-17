const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

mongoose.connect(
  "mongodb+srv://<user>:<password>@mycluster.azlqk.mongodb.net/mongo?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("MongoDB connesso.");
    } else {
      console.log(`Problemi con la connessione:  ${err}`);
    }
  }
);

require("./nota");
require("./libro");
