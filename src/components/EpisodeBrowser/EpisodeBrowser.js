import React, { useState } from "react";
import Episode from "../Episode/Episode";

export default function EpisodeBrowser({ episodes }) {
  /** State Local **/
  const [activeEpisode, setActiveEpisode] = useState(0);
  /** Functions **/
  const prevEpisode = () => {
    if (activeEpisode > 0) {
      setActiveEpisode(activeEpisode - 1);
    } else {
      alert("No more episodes");
    }
  };
  const nextEpisode = () => {
    if (activeEpisode < episodes.length - 1) {
      setActiveEpisode(activeEpisode + 1);
    } else {
      alert("No more episodes");
    }
  };

  return (
    <React.Fragment>
      <Episode {...episodes[activeEpisode]} />
      <button onClick={prevEpisode}>Prev</button>
      <button onClick={nextEpisode}>Next</button>
    </React.Fragment>
  );
}
