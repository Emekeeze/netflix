
import Billboard from "../Components/Billboard";
import Navbar from "../Components/Navbar";
import UseMoviesList from "../hooks/UseMovieslist";
import MovieList from "./MovieList";
function BrowsePage() {
  const {data, loading, error} = UseMoviesList()
  console.log(data, loading,error)
  return (
    <div>
      <Navbar />
      <Billboard />
      <div className="pb-5 mt-3">
        <MovieList />
      </div>
    </div>
  );
}

export default BrowsePage;
