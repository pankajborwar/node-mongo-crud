const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // mongodb connection
    const con = mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    console.log('Mongodb connencted');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
