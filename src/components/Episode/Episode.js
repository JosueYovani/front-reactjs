import React from "react";
import "./episode.scss";

export default function Episode({ name, air_date, episode, cover_img }) {
  return (
    <section className="episode">
      <article className="episode__card">
        <div className="card-cover">
          {cover_img && <img src={cover_img} alt={name} />}
        </div>
        <h1>{name}</h1>
        <h2>{air_date}</h2>
        <h3>{episode}</h3>
      </article>
    </section>
  );
}
