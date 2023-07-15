import { useState, useEffect } from 'react';
import "./Top Tracks.css";
import { Link } from "react-router-dom";


export default function TopTracks() {
  const [tracks, setTracks] = useState([]);
  const msToMinutesSeconds = (duration) => {
    const minutes = Math.floor(duration / 60000);
    const seconds = ((duration % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds.padStart(2, "0")}`;
  };
  useEffect(() => {
    const fetchTrackData = async () => {
      try {
        const response = await fetch(
          "https://api.spotify.com/v1/tracks?ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B",
          {
            headers: {
              Authorization: "Bearer 1POdFZRZbvb...qqillRxMr2z",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setTracks(data.tracks);
        } else {
          throw new Error("Failed to fetch track data.");
        }
      } catch (error) {
        console.error(error);
        // eslint-disable-next-line no-unused-vars
        const msToMinutesSeconds = (duration) => {
          const minutes = Math.floor(duration / 60000);
          const seconds = ((duration % 60000) / 1000).toFixed(0);
          return `${minutes}:${seconds.padStart(2, "0")}`;
        };
      }
    };
    fetchTrackData();
  }, []);

  return (
    <div className="container">
      <h2>Top Tracks</h2>
      <nav className="nav">
        <ul className="ul">
          <Link to="/AllTracks">All Tracks</Link>
          <Link path="">Last 4 months</Link>
          <Link path="">Last 6 months</Link>
        </ul>
      </nav>
      <div className="track-list">
        <h2>Track List</h2>
        <div className="track-row">
          {tracks.map((track) => (
            <div key={track.id} className="track-card">
              <h3>{track.name}</h3>
              <p>Duration: {msToMinutesSeconds(track.duration_ms)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
