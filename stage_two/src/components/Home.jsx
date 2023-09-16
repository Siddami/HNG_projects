import { useEffect, useState } from "react";
import Hero from "./Hero";
import Footer from "./Footer";
import Card from "./Card"
// import MovieDetails from "./MovieDetails";
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [heroBackdrop, setHeroBackdrop] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=e9daea829c0d4fd5b5b075e851fe82a6"
        );
        const data = await res.json();
        console.log(data);
        setMovies(data.results);

        if (data.results.length > 0) {
          setHeroBackdrop(data.results[0].backdrop_path);
        }
      } catch (e) {
        console.error(e);
      }
    };

    getData();
  }, []);
  return (
    <>
      <Hero backdropPath={heroBackdrop} />
      <Card movies={movies}/>
      <Footer />
    </>
      );
};

export default Home;
