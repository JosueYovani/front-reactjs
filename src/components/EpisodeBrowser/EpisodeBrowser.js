import React from "react";
import Episode from "../Episode/Episode";

export default function EpisodeBrowser({ episodes }) {
  return (
    <React.Fragment>
      {episodes.map((episode, index) => {
        return (
          <Episode
            key={index}
            name={episode.name}
            air_date={episode.air_date}
            episode={episode.episode}
            cover_img={episode.cover_img}
          />
        );
      })}
    </React.Fragment>
  );
}
