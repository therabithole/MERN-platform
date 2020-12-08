import * as amenitiesAPI from "./fakeAmenityService";

const hotels = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Seaview Lodge Guest House",
    amenities: { _id: "5b21ca3eeb7f6fbccd471818", name: "Free Parking" },
    rooms: 6,
    price: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z",
    bookmark: undefined,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Arcadian Riverside Adventure Resort",
    amenities: { _id: "5b21ca3eeb7f6fbccd471818", name: "Free Parking" },
    rooms: 5,
    price: 2.5,
    bookmark: "",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "The Motel Royal Fantasy",
    amenities: { _id: "5b21ca3eeb7f6fbccd471820", name: "Meeting Rooms" },
    rooms: 8,
    price: 3.5,
    
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Ramada by Wyndham",
    amenities: { _id: "5b21ca3eeb7f6fbccd471814", name: "Free Breakfast" },
    rooms: 7,
    price: 3.5,
    
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Zifan Hotel & Suites",
    amenities: { _id: "5b21ca3eeb7f6fbccd471814", name: "Free Breakfast" },
    rooms: 7,
    price: 3.5,
    
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Beach Luxury Hotel",
    amenities: { _id: "5b21ca3eeb7f6fbccd471814", name: "Free Breakfast" },
    rooms: 7,
    price: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Karachi Marriott Hotel",
    amenities: { _id: "5b21ca3eeb7f6fbccd471820", name: "Meeting Rooms" },
    rooms: 7,
    price: 4.5,
    
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "The Sixth Sense",
    amenities: { _id: "5b21ca3eeb7f6fbccd471820", name: "Meeting Rooms" },
    rooms: 4,
    price: 3.5,
     
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "The Nishat Hotel Johar Town",
    amenities: { _id: "5b21ca3eeb7f6fbccd471818", name: "Free Parking" },
    rooms: 7,
    price: 3.5,
    
  }
];

export function getHotels() {
  return hotels;
}

export function getHotel(id) {
  return hotels.find(h => h._id === id);
}

export function saveHotel(hotel) {
  let hotelInDb = hotels.find(h => h._id === hotel._id) || {};
  hotelInDb.name = hotel.name;
  hotelInDb.amenities = amenitiesAPI.amenities.find(a => a._id === hotel.amenitiesId);
  hotelInDb.rooms = hotel.rooms;
  hotelInDb.price = hotel.price;

  if (!hotelInDb._id) {
    hotelInDb._id = Date.now();
    hotels.push(hotelInDb);
  }

  return hotelInDb;
}

export function deletehotel(id) {
  let hotelInDb = hotels.find(m => m._id === id);
  hotels.splice(hotels.indexOf(hotelInDb), 1);
  return hotelInDb;
}
