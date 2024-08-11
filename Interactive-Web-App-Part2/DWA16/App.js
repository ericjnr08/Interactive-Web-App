import React from "react";
import Destination from "./components/Destination";
import data from "./data";

export default function App() {
  const destination = data.map((item) => {
    return (
      <Destination
        key={item.title}
        title={item.title}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        image={item.image}
      />
    );
  });
}
