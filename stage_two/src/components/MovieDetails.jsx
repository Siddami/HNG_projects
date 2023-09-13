// src/components/MovieDetails.js
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    try {
        const getData = async () => {
          const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization:
                'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOWRhZWE4MjljMGQ0ZmQ1YjViMDc1ZTg1MWZlODJhNiIsInN1YiI6IjY0ZmY1MGI2ZTBjYTdmMDEwZGU5OTBjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fq91prLXTpsQPzYFik_7sLz9cdd0hkL-qWFrHrBzx94',
            },
          };

          const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=e9daea829c0d4fd5b5b075e851fe82a6', options);
          const data = await res.json();
          console.log(data)
          setMovieDetails(data.results);
        };

        getData();
      } catch (e) {
        console.log(e)
        }
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 data-testid="movie-title">{movieDetails.title}</h1>
      <p data-testid="movie-release-date">Release Date: {movieDetails.release_date}</p>
      <p data-testid="movie-runtime">Runtime: {movieDetails.runtime} minutes</p>
      <p data-testid="movie-overview">{movieDetails.overview}</p>
    </div>
  );
};

export default MovieDetails;
