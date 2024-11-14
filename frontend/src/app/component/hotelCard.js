import Link from 'next/link';

export default function HotelCard({ hotel }) {
  return (
    <div className="hotel-card">
      <h3>{hotel.hotel_name}</h3>
      <p>{hotel.hotel_address}</p>
      <p>Rating: {hotel.hotel_rating}</p>
      <p>{hotel.hotel_description}</p>
      <Link href={`/hotels/${hotel.id}`}>View Details</Link>
    </div>
  );
}
