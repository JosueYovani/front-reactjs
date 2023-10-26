import React from "react";

export default function Episode({ name, air_date, episode, cover_img }) {
  return (
    <div className="episode">
      <img src={cover_img} alt={name} width={300} />
      <h1>{name}</h1>
      <h2>{air_date}</h2>
      <h3>{episode}</h3>
    </div>
  );
}
