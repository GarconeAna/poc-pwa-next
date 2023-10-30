"use client";
import { useState } from "react";

const Location = () => {
  const [location, setLocation] = useState<string>("");

  const handleLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setLocation(`latitude: ${latitude}, longitude: ${longitude}`);
      });
    } else {
      setLocation("error");
    }
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        <div>
          <p>{`Sua localização: ${location || '-'}`}</p>
          <button onClick={handleLocation}>obter localização</button>
        </div>
      </div>
    </>
  );
};

export default Location;
