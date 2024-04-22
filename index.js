const mongoose = require("mongoose");
const fs = require("fs");
const { initializeDatabase } = require("./db/db.connect");
const Restaurant = require("./models/restaurant.model");

initializeDatabase();

const newRestaurant = {
  name: "Cha Cha",
  cuisine: ["Spanish"],
  location: "123 Main Street, Anytown",
  rating: 4.0,
  reviews: [],
  website: "https://example.com",
  phoneNumber: "+1234567890",
  openHours: "Mon-Sun: 11:00 AM - 10:00 PM",
  priceRange: "$$ (11-30)",
  reservationsNeeded: true,
  isDeliveryAvailable: true,
  menuUrl: "https://example.com/menu",
  photos: ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg"],
};

const newRestaurant2 = {
  name: "Somi",
  cuisine: ["Greek"],
  location: "11 Main Road, Gem",
  rating: 4.3,
  reviews: [],
  website: "https://somi-example.com",
  phoneNumber: "+1234997390",
  openHours: "Tue-Sun: 11:00 AM - 10:00 PM",
  priceRange: "$$ (11-30)",
  reservationsNeeded: false,
  isDeliveryAvailable: true,
  menuUrl: "https://somi-example.com/menu",
  photos: [
    "https://example.com/somi-photo1.jpg",
    "https://example.com/somi-photo2.jpg",
  ],
};
const newRestaurant3 = {
  name: "Yo China",
  cuisine: ["Chinese", "Italian"],
  location: "MG Road, Bangalore",
  rating: 3.9,
  reviews: [],
  website: "https://yo-example.com",
  phoneNumber: "+1288997392",
  openHours: "Tue-Sun: 10:00 AM - 11:00 PM",
  priceRange: "$$$ (31-60)",
  reservationsNeeded: true,
  isDeliveryAvailable: false,
  menuUrl: "https://yo-example.com/menu",
  photos: [
    "https://example.com/yo-photo1.jpg",
    "https://example.com/yo-photo2.jpg",
    "https://example.com/yo-photo3.jpg",
  ],
};

async function createRestaurant(newRestaurant) {
  try {
    const restaurant = new Restaurant(newRestaurant);
    const saveRestaurant = await restaurant.save();
    console.log("Saved restaurant:", saveRestaurant);
  } catch (error) {
    throw error;
  }
}
// createRestaurant(newRestaurant);
// createRestaurant(newRestaurant2);
// createRestaurant(newRestaurant3);

async function readAllRestaurant() {
  try {
    const allRestaurants = await Restaurant.find();
    console.log(allRestaurants.length);
  } catch (error) {
    throw error;
  }
}
// readAllRestaurant();

async function readRestaurantByName(restaurantName) {
  try {
    const restaurant = await Restaurant.findOne({ name: restaurantName });
    console.log(restaurant);
  } catch (error) {
    throw error;
  }
}
// readRestaurantByName("New Restaurant");

async function readResByReservation() {
  try {
    const restaurant = await Restaurant.find({ reservationNeeded: true });
    console.log(restaurant);
  } catch (error) {
    throw error;
  }
}
// readResByReservation();

async function restaurantByDelivery() {
  try {
    const restaurant = await Restaurant.find({ isDeliveryAvailable: true });
    console.log(restaurant);
  } catch (error) {
    throw error;
  }
}
// restaurantByDelivery();

async function restaurantByPhone(phoneNo) {
  try {
    const restaurant = await Restaurant.findOne({ phoneNumber: phoneNo });
    console.log(restaurant);
  } catch (error) {
    throw error;
  }
}
// restaurantByPhone("+1288997392");

async function restaurantByCuisine(cuisine) {
  try {
    const restaurant = await Restaurant.find({ cuisine: cuisine });
    console.log(restaurant);
  } catch (error) {
    throw error;
  }
}
// restaurantByCuisine("Italian");

//1. Create a function that accepts a restaurant ID and an object with updated data, and updates the restaurant with the provided ID. Take the _id of the restaurant which has the name Yo China and update its rating from 3.9 to 4.1. Console the updated restaurant.

async function updateRestaurantRating(resId, rating) {
  try {
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(resId, rating);
    console.log(updatedRestaurant);
  } catch (error) {
    console.log("failed to update restaurant data", error);
  }
}
// updateRestaurantRating("6625dc6a4287ceffb510d763", { rating: 4.1 });

//2. Create a function that accepts a restaurant name and an object with updated data, and updates the restaurant. Take the restaurant which has the name "Somi" and update its name from "Somi" to "Som Sarovar". Console the updated restaurant.

async function updateRestaurantName(oldName, newName) {
  try {
    const updatedRestaurant = await Restaurant.findOneAndUpdate(
      { name: oldName },
      newName,
      { new: true },
    );
    console.log(updatedRestaurant);
  } catch (error) {
    throw error;
  }
}
//updateRestaurantName("Somi", { name: "Som Sarovar" });


//3. Create a function that accepts a restaurant's phone number and an object with updated data, and updates the restaurant. Take the restaurant which has the phone number "+1288997392" and update isDeliveryAvailable option to true. Console the updated restaurant.

async function updateRestaurantDelivery(phno, delivery){
  try {
    const updatedRestaurant = await Restaurant.findOneAndUpdate(
      {phoneNumber : phno}, {isDeliveryAvailable: delivery}
    );
    console.log(updatedRestaurant)
  } catch(error){
    throw error
  }
} 

updateRestaurantDelivery("+1288997392", true )