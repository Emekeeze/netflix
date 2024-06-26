import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useParams } from "react-router-dom";
import UseMovie from "../hooks/UseMovie";


function WatchPage() {
  const params = useParams() as { id: string };
  const { data, loading, error } = UseMovie(params.id);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!data) {
    return <p>No data available.</p>;
  }

  const { Title, VideoUrl } = data;
  return (
    <div className="h-screen w-screen bg-black">
      <nav className=" fixed w-full p-4 z-10 flex items-center gap-8 bg-black bg-opacity-80">
        <ArrowLeftIcon className="w-10 text-white cursor-pointer hover:opacity-80 transition" />
        <p className=" text-white text-3xl font-bold">
          <span className="font-light"> Watching:</span> {Title}
        </p>
      </nav>
     

<iframe
    src={`https://www.youtube.com/embed/${VideoUrl}`}
    title="YouTube video player"
    frameborder="0"
    allowfullscreen
></iframe>

    </div>
  );
}

export default WatchPage;
