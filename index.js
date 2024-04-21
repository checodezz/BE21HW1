const mongoose = require("mongoose");
const fs = require("fs");
const { initializeDatabase } = require("./db/db.connect");
const Restaurant = require("./models/restaurant.model");

initializeDatabase();
