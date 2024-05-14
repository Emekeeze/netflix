
import UseMoviesList from "../hooks/UseMovieslist";
import MovieCard from "../Components/MovieCard";


function MovieList({movies, lastElementRef}:{movies: Movies[]; lastElementRef:(node:HTMLDivElement) =>void}) {
    const { data, loading, error } = UseMoviesList();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
      <>
        <p className="text-black text-2xl mb-4 font-semibold"> Popular Shows</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          
            {data &&
                data.map((movie, index) => (
                    <MovieCard
                        key={String(movie.id)}
                        id={String(movie.id)} 
                        title={movie.Title}
                        description={movie.Description}
                        duration={movie.Duration}
                        genre={movie.Genre}
                        thumbnailUrl={movie.thumbnailUrl}
                        lastElementRef={data.length === index + 1? lastElementRef:null}
                    />
                ))}
        </div>
        </>
    );
}

export default MovieList;
