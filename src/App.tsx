import { InputArea } from "./components/InputArea";
import { Card } from "./components/Card";
import { useState } from "react";
import { IMovie } from "./components/types/IMovie";

const App = () => {
    const [wishlist, setWishlist] = useState<IMovie[]>([])
    
    const handleClick = (title: string, releaseDate: string) => {
        setWishlist((prevValue) => {
            return [...prevValue, {title, releaseDate}]
        })
    }

  return (
    <div>
      <h1>wishlist</h1>
      <InputArea onClick={handleClick} />
      <div className="card-container">
        {wishlist.map((newMovie, index) => {
            return <Card title={newMovie.title} releaseDate={newMovie.releaseDate} key={index} />
        })}
        
      </div>
    </div>
  );
};

export default App;
