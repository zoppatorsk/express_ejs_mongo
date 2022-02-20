const mongoose = require("mongoose");

const db = {
	connect: async function () {
		await mongoose.connect(process.env.DB_CONNECT_STRING);
		console.log("db connected on " + process.env.DB_CONNECT_STRING);
	},
};
module.exports = db;
