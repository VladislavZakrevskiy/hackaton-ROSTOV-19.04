'use client'
import React, { useState } from 'react';

interface FilterProps {
  warehouses: { lat: number; lng: number }[];
  clients: { lat: number; lng: number }[];
}

const Filter: React.FC<FilterProps> = ({ warehouses, clients }) => {
  const [maxDistance, setMaxDistance] = useState<number>(0);

  const handleApplyFilter = () => {

    //filter
    const filteredWarehouses = warehouses.filter((warehouse) =>
      clients.some((client) => {
        const distance = google.maps.geometry.spherical.computeDistanceBetween(
          new google.maps.LatLng(warehouse.lat, warehouse.lng),
          new google.maps.LatLng(client.lat, client.lng)
        );
        return distance <= maxDistance;
      })
    );
    console.log(filteredWarehouses);
  };

  return (
    <div>
      <input
        type="number"
        value={maxDistance}
        onChange={(e) => setMaxDistance(Number(e.target.value))}
      />
      <button onClick={handleApplyFilter}>Применить</button>
    </div>
  );
};

export default Filter;