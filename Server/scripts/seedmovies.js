const movies = require("../Movie.json");
const { prisma } = require("../db");

const seedMovies = async () => {
  try {
    const formattedMovies = movies.map((movie) => {
      const { Title, Description, Duration, Genre, thumbnailUrl, VideoUrl } = movie;
      return {
        Title,
        Description,
        Duration,
        Genre,
        thumbnailUrl,
        VideoUrl,
      };
    });

    // Delete existing movies
    await prisma.movie.deleteMany();

    // Create new movies
    await prisma.movie.createMany({
      data: formattedMovies,
    });

    console.log("Movies seeded successfully.");
  } catch (error) {
    console.error("Error seeding movies:", error);
  } finally {
    // Close your Prisma connection after seeding
    await prisma.$disconnect();
  }
};

seedMovies();
