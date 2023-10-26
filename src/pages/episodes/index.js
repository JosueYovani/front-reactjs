import React from "react";
import EpisodeBrowser from "../../components/EpisodeBrowser/EpisodeBrowser";

function Episodes() {
  const episodesArray = [
    {
      name: "Piloto los simpsons",
      air_date: "December 17, 1989",
      episode: "S01E01",
      cover_img:
        "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/04/simpson-senor-burns-1923151.jpg",
    },
    {
      name: "Bart the Genius",
      air_date: "January 14, 1990",
      episode: "S01E02",
      cover_img:
        "https://nerdiertides.files.wordpress.com/2016/03/crying_bart.jpg",
    },
    {
      name: "Homer's Odyssey",
      air_date: "January 21, 1990",
      episode: "S01E03",
      cover_img: "https://i.ytimg.com/vi/VK85JzdoZPo/maxresdefault.jpg",
    },
    {
      name: "There's No Disgrace Like Home",
      air_date: "January 28, 1990",
      episode: "S01E04",
      cover_img:
        "https://enteracloud.mx/wp-content/uploads/2021/08/placeholder.png",
    },
    {
      name: "Bart the General",
      air_date: "February 4, 1990",
      episode: "S01E05",
      cover_img:
        "https://enteracloud.mx/wp-content/uploads/2021/08/placeholder.png",
    },
    {
      name: "Moaning Lisa",
      air_date: "February 11, 1990",
      episode: "S01E06",
      cover_img:
        "https://enteracloud.mx/wp-content/uploads/2021/08/placeholder.png",
    },
    {
      name: "The Call of the Simpsons",
      air_date: "February 18, 1990",
      episode: "S01E07",
      cover_img:
        "https://enteracloud.mx/wp-content/uploads/2021/08/placeholder.png",
    },
    {
      name: "The Telltale Head",
      air_date: "February 25, 1990",
      episode: "S01E08",
      cover_img:
        "https://enteracloud.mx/wp-content/uploads/2021/08/placeholder.png",
    },
    {
      name: "Life on the Fast Lane",
      air_date: "March 18, 1990",
      episode: "S01E09",
      cover_img:
        "https://enteracloud.mx/wp-content/uploads/2021/08/placeholder.png",
    },
    {
      name: "Homer's Night Out",
      air_date: "March 25, 1990",
      episode: "S01E10",
      cover_img:
        "https://enteracloud.mx/wp-content/uploads/2021/08/placeholder.png",
    },
    {
      name: "The Crepes of Wrath",
      air_date: "April 15, 1990",
      episode: "S01E11",
      cover_img:
        "https://enteracloud.mx/wp-content/uploads/2021/08/placeholder.png",
    },
    {
      name: "Krusty Gets Busted",
      air_date: "April 29, 1990",
      episode: "S01E12",
      cover_img:
        "https://enteracloud.mx/wp-content/uploads/2021/08/placeholder.png",
    },
    {
      name: "Some Enchanted Evening",
      air_date: "May 13, 1990",
      episode: "S01E13",
      cover_img:
        "https://enteracloud.mx/wp-content/uploads/2021/08/placeholder.png",
    },
  ];
  return <EpisodeBrowser episodes={episodesArray} />;
}

export default Episodes;
