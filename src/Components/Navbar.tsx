
const tabs = [
  "Home",
  "Series",
  "Film",
  "New & Popular",
  "My List",
  "Browse by Language",
];

function Navbar() {
  return (
    <nav className="w-full fixed z-40">
      <div className="px-16 py-6 flex items-center">
        <img
          className="h-16 w-auto max-w-full"
          src="https://w7.pngwing.com/pngs/299/104/png-transparent-netflix-logo-logos-brands-in-colors-icon-thumbnail.png"
          alt="Netflix Logo"
        />
        <div className="flex gap-7 ml-8">
          {tabs.map((tab, index) => (
            <div key={index} className="text-white hover:text-gray-300 cursor-pointer">
              <p>{tab}</p> 
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
