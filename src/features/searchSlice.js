import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hotels: [
    {
      id: 1,
      hotel_name: "Eidel",
      address: "00 Springview Street",
      price: 2524,
      availability: false,
    },
    {
      id: 2,
      hotel_name: "Quatz",
      address: "16 Nobel Lane",
      price: 2796,
      availability: true,
    },
    {
      id: 3,
      hotel_name: "Twitterworks",
      address: "9095 Warbler Place",
      price: 2289,
      availability: true,
    },
    {
      id: 4,
      hotel_name: "Thoughtbeat",
      address: "58461 Gerald Circle",
      price: 2320,
      availability: true,
    },
    {
      id: 5,
      hotel_name: "Brainlounge",
      address: "2 Oak Valley Place",
      price: 2396,
      availability: true,
    },
    {
      id: 6,
      hotel_name: "Centizu",
      address: "8177 Vernon Crossing",
      price: 914,
      availability: false,
    },
    {
      id: 7,
      hotel_name: "Demivee",
      address: "22 Del Sol Circle",
      price: 1516,
      availability: false,
    },
    {
      id: 8,
      hotel_name: "Ainyx",
      address: "33 Scott Pass",
      price: 2171,
      availability: false,
    },
    {
      id: 9,
      hotel_name: "Agimba",
      address: "894 Eagan Parkway",
      price: 1339,
      availability: false,
    },
    {
      id: 10,
      hotel_name: "Gigabox",
      address: "22 Stephen Crossing",
      price: 2213,
      availability: false,
    },
    {
      id: 11,
      hotel_name: "Edgeify",
      address: "9 Sullivan Parkway",
      price: 2202,
      availability: false,
    },
    {
      id: 12,
      hotel_name: "Kazio",
      address: "84 Utah Street",
      price: 2715,
      availability: false,
    },
    {
      id: 13,
      hotel_name: "Bluezoom",
      address: "5028 Oak Center",
      price: 1398,
      availability: false,
    },
    {
      id: 14,
      hotel_name: "Zava",
      address: "5 Welch Point",
      price: 2981,
      availability: false,
    },
    {
      id: 15,
      hotel_name: "Omba",
      address: "51389 Parkside Pass",
      price: 1665,
      availability: false,
    },
    {
      id: 16,
      hotel_name: "Tazz",
      address: "3717 Vermont Road",
      price: 1545,
      availability: false,
    },
    {
      id: 17,
      hotel_name: "Zoonoodle",
      address: "6123 Burning Wood Pass",
      price: 1948,
      availability: false,
    },
    {
      id: 18,
      hotel_name: "Riffwire",
      address: "92840 Lawn Alley",
      price: 2433,
      availability: false,
    },
    {
      id: 19,
      hotel_name: "Edgeclub",
      address: "4 Vidon Court",
      price: 1482,
      availability: false,
    },
    {
      id: 20,
      hotel_name: "Wordify",
      address: "64 Transport Lane",
      price: 2174,
      availability: false,
    },
  ],
  searchQuery: "",
  isLoading: true,
  isError: false,
  error: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    handleSearch: (state, action) => {
      state.searchQuery = action.payload;
    },
    setHotel: (state, action) => {
      state.hotels = action.payload;
    },
  },
});

export const { handleSearch, setHotel } = searchSlice.actions;

export default searchSlice.reducer;