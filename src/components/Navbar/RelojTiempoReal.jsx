import React, { useEffect, useState } from "react";
import "./Navbar.css";

const RelojTiempoReal = () => {
  const [time, SetTime] = useState(new Date());
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  useEffect(() => {
    setInterval(() => SetTime(new Date()), 1000);
  }, []);

  return (
    // Parece que solo funciona con párrafo <p>.
    <p className="capitalize-first">
      {time.toLocaleTimeString("es-ES", options)}
    </p>
  );
};

export default RelojTiempoReal;
