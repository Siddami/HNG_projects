// import { useState, useEffect } from 'react';
import Header from './components/Header';
// // import Header from './components/Header';
// import MovieBox from './components/MovieBox';
// import Header from './components/Header';

function App() {
  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   try {
  //     const getData = async () => {
  //       const options = {
  //         method: 'GET',
  //         headers: {
  //           accept: 'application/json',
  //           Authorization:
  //             'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOWRhZWE4MjljMGQ0ZmQ1YjViMDc1ZTg1MWZlODJhNiIsInN1YiI6IjY0ZmY1MGI2ZTBjYTdmMDEwZGU5OTBjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fq91prLXTpsQPzYFik_7sLz9cdd0hkL-qWFrHrBzx94',
  //         },
  //       };

  //       const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=e9daea829c0d4fd5b5b075e851fe82a6', options);
  //       const data = await res.json();
  //       console.log(data)
  //       setMovies(data.results);
  //     };

  //     getData();
  //   } catch (e) {
  //     console.log(e)
  //     }
  // }, []);
  return (
    <div>
      <Header/>


      {/* {movies.map((movieReq) => (
        <MovieBox key={movieReq.id} {...movieReq} />
      ))} */}
    </div>
  );
}

export default App;
