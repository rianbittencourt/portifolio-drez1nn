import React from "react";
import TittleSection from "../components/TitleSection";
import SpotifyWebApi from "spotify-web-api-js";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const spotifyApi = new SpotifyWebApi();

function SectionMusic() {
  const tracks = [
    "https://open.spotify.com/embed/track/0MsElY1sPtaN1ehlmvzTJO",
    "https://open.spotify.com/embed/track/5xg4a5a8O0tpk4bGEcgErJ",
    "https://open.spotify.com/embed/track/1XgdP4lqAiKcyKbriynm3A",
    "https://open.spotify.com/embed/track/71CoysLp6cDVeWnefuiuwD",
    "https://open.spotify.com/embed/track/5mVAKTVvFBpQN1m0fQ5gzD",
    "https://open.spotify.com/embed/track/2KvrL6omt7RKk43tzYrsMt",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const previous = () => {
    if (currentIndex === 0) {
      setCurrentIndex(tracks.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const next = () => {
    if (currentIndex === tracks.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 787px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 786px)" });

  return (
    <div className="section-music">
      <TittleSection>MÚSICAS</TittleSection>

      {isTabletOrMobile && (
        <div className="slider-music-mobile">
          <NavigateBeforeIcon
            className="icons-music"
            onClick={previous}
          ></NavigateBeforeIcon>
          <iframe
            className="player"
            title="Spotify Player"
            src={tracks[currentIndex]}
            allowTransparency="true"
            allow="encrypted-media"
            frameBorder="none"
          />
          <NavigateNextIcon
            className="icons-music"
            onClick={next}
          ></NavigateNextIcon>
        </div>
      )}
      {isDesktopOrLaptop && (
        <>
          <iframe
            className="player-desktop"
            title="Spotify Player"
            src={`https://open.spotify.com/embed/track/0MsElY1sPtaN1ehlmvzTJO`}
            allowTransparency="true"
            allow="encrypted-media"
            frameBorder="none"
          />
          <iframe
            className="player-desktop"
            title="Spotify Player"
            src={`https://open.spotify.com/embed/track/5xg4a5a8O0tpk4bGEcgErJ`}
            allowTransparency="true"
            allow="encrypted-media"
            frameBorder="none"
          />
          <iframe
            className="player-desktop"
            title="Spotify Player"
            src={`https://open.spotify.com/embed/track/1XgdP4lqAiKcyKbriynm3A`}
            allowTransparency="true"
            allow="encrypted-media"
            frameBorder="none"
          />
          <iframe
            className="player-desktop"
            title="Spotify Player"
            src={`https://open.spotify.com/embed/track/71CoysLp6cDVeWnefuiuwD`}
            allowTransparency="true"
            allow="encrypted-media"
            frameBorder="none"
          />
          <iframe
            className="player-desktop"
            title="Spotify Player"
            src={`https://open.spotify.com/embed/track/5mVAKTVvFBpQN1m0fQ5gzD`}
            allowTransparency="true"
            allow="encrypted-media"
            frameBorder="none"
          />
          <iframe
            className="player-desktop"
            title="Spotify Player"
            src={`https://open.spotify.com/embed/track/2KvrL6omt7RKk43tzYrsMt`}
            allowTransparency="true"
            allow="encrypted-media"
            frameBorder="none"
          />
        </>
      )}
    </div>
  );
}

export default SectionMusic;

// {tracks.map((track) => (

//   <Slider {...settings}>

//   <iframe
//    className="player"
//    title="Spotify Player"
//    src={`https://open.spotify.com/embed/track/${track.id}`}
//    allowTransparency="true"
//    allow="encrypted-media"
//    frameBorder="none"
//  />
// }
// //  </Slider>

// // ))}

// {/* <iframe
// className="player"
// title="Spotify Player"
// src={`https://open.spotify.com/embed/track/1aQyW6u67mcf9qzbd98jgS`}
// allowTransparency="true"
// allow="encrypted-media"
// frameBorder="none"
// />
// <iframe
// className="player"
// title="Spotify Player"
// src={`https://open.spotify.com/embed/track/1aQyW6u67mcf9qzbd98jgS`}
// allowTransparency="true"
// allow="encrypted-media"
// frameBorder="none"
// />
// <iframe
// className="player"
// title="Spotify Player"
// src={`https://open.spotify.com/embed/track/1aQyW6u67mcf9qzbd98jgS`}
// allowTransparency="true"
// allow="encrypted-media"
// frameBorder="none"
// />
// {
//    <iframe
// className="player"
// title="Spotify Player"
// src={`https://open.spotify.com/embed/track/1aQyW6u67mcf9qzbd98jgS`}
// allowTransparency="true"
// allow="encrypted-media"
// frameBorder="none"
// />
// }
// <iframe
// className="player"
// title="Spotify Player"
// src={`https://open.spotify.com/embed/track/1aQyW6u67mcf9qzbd98jgS`}
// allowTransparency="true"
// allow="encrypted-media"
// frameBorder="none"
// />
// <iframe
// className="player"
// title="Spotify Player"
// src={`https://open.spotify.com/embed/track/1aQyW6u67mcf9qzbd98jgS`}
// allowTransparency="true"
// allow="encrypted-media"
// frameBorder="none"
// /> */}
