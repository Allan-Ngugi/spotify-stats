import  { useState, useEffect } from "react";
import "./Top Artists.css";
import { Link } from "react-router-dom";


export default function Artists() {
  
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchTopArtists = async () => {
      try {
        const response = await fetch(
          "https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6",
          {
            headers: {
              Authorization: "Bearer 63670297e01f4b8ab061135dcc82dae0",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setArtists(data.items);
        } else {
          throw new Error("Failed to fetch top artists.");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchTopArtists();
  }, []);

  const fetchArtistData = (searchQuery, limit = 3) => {
    const spotifyEndpoint = `https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6${searchQuery}&type=artist&limit=${limit}`;
    fetch(spotifyEndpoint, {
      headers: {
        Authorization: "Bearer 63670297e01f4b8ab061135dcc82dae0",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const { name, followers, genres, popularity } = data;
        const popupContent = `
          <strong>${name}</strong><br>
          Followers: ${followers.total}<br>
          Genres: ${genres.join(", ")}<br>
          Popularity: ${popularity}
        `;
        alert(popupContent);
      })
      .catch(() => {
        alert("Failed to fetch artist data.");
      });
  };
    return (
      <div className="container">
        <h2>Top Artist</h2>
        <nav className="nav">
          <ul className="ul">
            <Link path="">All Times</Link>
            <Link path="">Last 4 months</Link>
            <Link path="">Last 6 months</Link>
          </ul>
        </nav>

        <div>
          {artists.map((artist) => (
            <img
              className="artist-icon"
              key={artist.id}
              src={artist.images[0].url}
              alt={artist.name}
              onClick={() => fetchArtistData(artist.id)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
      </div>
    );
  }