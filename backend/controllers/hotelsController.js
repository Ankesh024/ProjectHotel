const { fetchHotels } = require('../services/hotelServices');

exports.getHotels = async (req, res) => {
  try {
    const { destination, occupancy, page = 1, per_page = 100 } = req.query;
    const hotels = await fetchHotels({ destination, occupancy, page, per_page });
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch hotels' });
  }
};
