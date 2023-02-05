import React from "react";
import TittleSection from "../components/TitleSection";
import SpotifyWebApi from "spotify-web-api-js";
import { useState, useEffect } from "react";

const spotifyApi = new SpotifyWebApi();

function SectionMusic({}) {
  spotifyApi.setAccessToken(
    "BQBBMKbh4Rh08-ltPy4ZrfXJlk0LLe-Mj5RBjSr7dWkeWNOELBR6jd3XDH3mfExm7ia5dMj4s1vmIRvP5Xucpg9rIHKB56M94-MKyAL4eapZv2tNrfO_pgGvx2yCYpjepeBfOWn4uepPeJFCLK5wwCV86siAM7mnL7m8mkZwyrphNahXSA"
  );
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    spotifyApi.getArtistTopTracks(
      "2qdwFyyeXCcDIZF8a0J16g",
      "US",
      function (error, data) {
        if (error) {
          console.error(error);
        } else {
          setTracks(data.tracks.slice(0, 6));
        }
      }
    );
  }, []);

  function teste() {
    console.log(tracks);
  }

  return (
    <div className="section-music">
      <TittleSection>MÚSICAS</TittleSection>

      {tracks.map((track) => (
        <iframe
          className="player"
          title="Spotify Player"
          src={`https://open.spotify.com/embed/track/${track.id}`}
          allowTransparency="true"
          allow="encrypted-media"
          frameBorder="none"
        />
      ))}
    </div>
  );
}

export default SectionMusic;
