import { useState, useEffect } from "react";

export const useReservations = () => {

  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/reservations")
      .then(res => res.json())
      .then(data => setReservations(data));
  }, []);

  return {
    reservations,
    setReservations
  };
};