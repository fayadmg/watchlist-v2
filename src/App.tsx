import { InputArea } from "./components/InputArea";
import { Card } from "./components/Card";
import { useState } from "react";
import { IMovie } from "./components/types/IMovie";

const App = () => {
  const [wishlist, setWishlist] = useState<IMovie[]>([]);
  // const [isWatched, setIsWatched] = useState<boolean>(false);

  const handleClick = (title: string, releaseDate: string) => {
    const newMovie: IMovie = {
      id: wishlist.length + 1, // Assign a new id (based on length or any other method)
      title,
      releaseDate,
    };
    {
      title.length && releaseDate.length
        ? setWishlist((prevValue) => {
            return [...prevValue, newMovie];
          })
        : null;
    }
    // setWishlist((prevValue) => {
    //   return [...prevValue, newMovie];
    // });
  };

  const deleteMovie = (id: number) => {
    setWishlist((prevMovies) => {
      return prevMovies.filter((m, index) => {
        return m.id !== id;
      });
    });
  };

  const toggleWatched = (id: number) => {
    setWishlist((prevValue) => {
      return prevValue.map((m) => {
        return m.id === id ? { ...m, isWatched: !m.isWatched } : m;
      });
    });
  };

  return (
    <div className="App">
      <div className="top-container">
        <h1 className="heading">wishlist</h1>
        <InputArea onClick={handleClick} />
      </div>

      <div className="card-container">
        {wishlist.map((newMovie, index) => {
          return (
            <Card
              toggleWatched={toggleWatched}
              onClick={deleteMovie}
              movie={newMovie}
              key={newMovie.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
