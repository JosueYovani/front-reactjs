import React from "react";

export default function Episode({ name, air_date, episode, cover_img }) {
  return (
    <div className="episode">
      {cover_img ? (
        <img src={cover_img} alt={name} width={300} />
      ) : (
        <img
          src="https://enteracloud.mx/wp-content/uploads/2021/08/placeholder.png"
          alt={name}
          width={300}
        />
      )}
      <h1>{name}</h1>
      <h2>{air_date}</h2>
      <h3>{episode}</h3>
    </div>
  );
}
