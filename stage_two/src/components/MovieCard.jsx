const APIMG='https://image.tmdb.org/t/p/w500'

const MovieCard =({title, poster_path, vote_average, release_date})=>{
    return(
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img
        src={APIMG+poster_path}
        alt={title}
        className="mb-2"
        data-testid="movie-poster"
      />
      <h2 className="text-lg font-semibold" data-testid="movie-title">
        {title}
      </h2>
      <p className="text-sm text-gray-500" data-testid="movie-release-date">
        Release Date: {release_date}
      </p>
    </div>
    )
}
export default MovieCard
