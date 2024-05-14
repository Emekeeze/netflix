import { useCallback, useRef, useState } from "react";
import Billboard from "../Components/Billboard";
import Navbar from "../Components/Navbar";
import UseMoviesList from "../hooks/UseMovieslist";
import MovieList from "./MovieList";
import LoadingCards from "../Components/LoadingCards";


function BrowsePage() {
  const [offset, setOffset] = useState(0);
  const { data, loading, error } = UseMoviesList(offset);
  
  const observer = useRef<IntersectionObserver | null>(null);

  const lastElementRef = useCallback((node: HTMLDivElement) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting === true) {
        setOffset(offset + 12);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, offset]);

  return (
    <div>
      <Navbar />
      <Billboard />
      <div className="pb-5 mt-3">
        
        {error && <p>{error}</p>}
        {data && <MovieList Movies={data} lastElementRef={lastElementRef} />}
        {loading ? <LoadingCards/> :null}
      </div>
    </div>
  );
}

export default BrowsePage;
