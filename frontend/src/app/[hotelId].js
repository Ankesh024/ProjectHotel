import { useEffect, useState } from 'react';
import axios from 'axios';

export default function HotelDetailPage({ params }) {
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    const fetchHotelDetails = async () => {
      const { data } = await axios.get(`https://api.elixirtrips.com/wp-json/wp/v2/hotels/${params.hotelId}`);
      setHotel(data);
    };
    
    fetchHotelDetails();
  }, [params.hotelId]);

  if (!hotel) return <div>Loading...</div>;

  return (
    <div>
      <h1>{hotel.hotel_name}</h1>
      <p>{hotel.hotel_description}</p>
      <p>{hotel.hotel_address}</p>
      <p>Rating: {hotel.hotel_rating}</p>
      {/* Display more hotel details like amenities, images, price, etc. */}
    </div>
  );
}
