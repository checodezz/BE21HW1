const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    cuisine: {
      type: [String],
      enum: [
        "American",
        "Italian",
        "Chinese",
        "Indian",
        "Japanese",
        "Mexican",
        "Thai",
        "French",
        "Mediterranean",
        "Greek",
        "Spanish",
        "Other",
      ],
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      max: 5,
      min: 0,
      default: 0,
    },
    reviews: {
      type: [String],
    },
    website: {
      type: String,
    },
    openHours: {
      type: String,
    },
    priceRange: {
      type: String,
      enum: ["$ (0-10)", "$$ (11-30)", "$$$ (31-60)", "$$$$ (61+)", "Other"],
    },
    reservationNeeded: {
      type: Boolean,
      default: false,
    },
    isDeliveryAvailable: {
      type: Boolean,
      default: false,
    },
    menuUrl: {
      type: String,
      required: true,
    },
    photos: {
      type: [String],
    },
  },
  { timestamps: true },
);

const Restaurant = mongoose.model("Restaurant", restaurantSchema)
module.exports = Restaurant