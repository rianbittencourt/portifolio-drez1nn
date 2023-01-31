import React from "react";
import YoutubeIcon from '../imgs/youtube-icon.png';
import InstagramIcon from '../imgs/instagram-icon.png';
import SoundcloudIcon from '../imgs/soundcloud-icon.png';
import SpotifyIcon from '../imgs/spotify-icon.png';

function SocialMenu() {
  return (
   
      <nav className="social-menu right">
        <ul className="social-list">
          <li className="circle" style={{backgroundColor: '#FF0101',}}><img src={YoutubeIcon}></img></li>
          <li className="circle" style={{backgroundColor: '#EF239D',}}><img src={InstagramIcon}></img></li>
          <li className="circle" style={{backgroundColor: '#D2D700',}}><img src={SoundcloudIcon}></img></li>
          <li className="circle" style={{backgroundColor: '#15B12E',}}><img src={SpotifyIcon}></img></li>
        </ul>
      </nav>
    
  );
}

export default SocialMenu;
