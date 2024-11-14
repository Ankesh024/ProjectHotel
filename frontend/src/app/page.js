"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchForm from '../app/component/searchForm';
import HotelList from '../app/component/hotelList';
import Pagination from '../app/component/pagination';

export default function HomePage() {
  const [hotels, setHotels] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchHotels = async (destination, occupancy, priceRange) => {
    const params = new URLSearchParams({
      destination,
      occupancy,
      page: currentPage,
    });

    try {
      const { data } = await axios.get(`/api/hotels?${params}`);
      setHotels(data);
      setTotalPages(10); // You can update this based on your API's pagination info
    } catch (error) {
      console.error('Error fetching hotels', error);
    }
  };

  useEffect(() => {
    fetchHotels('', '', [3000, 4500]);
  }, [currentPage]);

  return (
    <div>
      <SearchForm onSearch={fetchHotels} />
      <HotelList hotels={hotels} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
}
