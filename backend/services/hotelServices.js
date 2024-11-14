const axios = require('axios');
const API_ENDPOINT = process.env.API_ENDPOINT;

// Fetch hotels with filters and pagination
exports.fetchHotels = async ({ destination, occupancy, page, per_page }) => {
  let allHotels = [];
  let currentPage = page;

  try {
    while (true) {
      const response = await axios.get(API_ENDPOINT, {
        params: { per_page, page: currentPage },
      });

      // Filter hotels by destination and occupancy
      const filteredHotels = response.data.filter((hotel) => {
        return (!destination || hotel.destination === destination) &&
               (!occupancy || hotel.occupancy >= occupancy);
      });

      allHotels = [...allHotels, ...filteredHotels];

      if (response.data.length < per_page) break;
      currentPage++;
    }

    return allHotels;
  } catch (error) {
    console.error("Error fetching hotels:", error);
    throw new Error("Failed to fetch hotels data");
  }
};
