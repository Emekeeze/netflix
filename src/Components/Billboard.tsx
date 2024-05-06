import BillboardButton from "./BillboardButton";

function Billboard() {
  return (
    <div className='relative h-screen'>
      <iframe
        className='w-full h-full object-cover'
        src="https://www.youtube.com/embed/6kJ2uPe_mWM?autoplay=1&loop=1&mute=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="absolute top-[40%] ml-16">
        <p className="text-white mt-8 mb-5 drop-shadow-xl text-7xl">South Park</p>
        <div className="flex items-center mt-4 gap-3">
          <BillboardButton  text="play" theme="light"/>
          <BillboardButton  text= "More info" theme="dark"/>
        </div>
      </div>
    </div>
  )
}

export default Billboard;
