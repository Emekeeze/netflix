import { PlayIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

interface MovieCardProps {
  id: string;
    title: string;
    description: string;
    duration: string;
    genre: string;
    thumbnailUrl: string;
    
}

function MovieCard(  { title, description, id, duration, genre, thumbnailUrl }: MovieCardProps) {
  
    lastElementRef
  const navigate = useNavigate();

    return (
        <div className="group bg-zinc-900 col-span relative h-[12vw}" ref={lastElementRef}>
            <img
                src={thumbnailUrl}
                alt="Movie"
                draggable={false}
                className="object-cover cursor-pointer transition duration-300 shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[12vw]"
            />
            <div className="opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100">
                <img
                    src={thumbnailUrl}
                    alt="Movie"
                    draggable={false}
                    className="object-cover cursor-pointer transition duration-300 shadow-xl rounded-t-md delay-300 w-full h-[12vw]"
                />
                <div className=" z-10 bg-zinc-800 p-2 lg:p-2 absolute transition  rounded-md shadow-md w-full ">
                    <div className="flex flex-row item-center gap-3">
                        <button className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10  bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300" onClick={() => navigate(`/browse/watch/${id}`)} >
                            <PlayIcon className="text-black w-4 lg:w-6" />
                        </button>
                        <div className="cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2rounded-full">
                            <ChevronDownIcon className="text-white group-hover/item:text-nuetral-300 w-4 lg:w-6" />
                        </div>
                    </div>
                    <p className="text-white font-semibold mt-4 text-2xl">{title}</p>
                    <p className="text-grey-400">{description}</p>
                    <div className="flex flex-row mt-4 gap-2 items-center">
                        <p className="text-white text-[10px] lg:text-sm">{duration}</p>
                    </div>
                    <div className="flex flex-row items-center gap-2 mt-4 text-[8px] text-white lg:text-sm">
                        <p>{genre}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
