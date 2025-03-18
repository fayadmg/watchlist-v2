import React, { FC, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { IMovie } from "../types/IMovie";

export interface IMovieProps {
  onClick: (title: string, releaseDate: string) => void;
}

export const InputArea: FC<IMovieProps> = ({ onClick }) => {
  const [movies, setMovie] = useState<IMovie>({
    title: "",
    releaseDate: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setMovie((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  return (
    <div className="input-area">
      <h1>Add movies</h1>
      <div className="add-data">
        <input
          type="text"
          placeholder="title"
          name="title"
          value={movies.title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="release date"
          name="releaseDate"
          value={movies.releaseDate}
          onChange={handleChange}
        />
        <button
          className="add-button"
          onClick={() => {
            onClick(movies.title, movies.releaseDate);
            setMovie({
              title: "",
              releaseDate: "",
            });
          }}
        >
          <AddIcon />
        </button>
      </div>
    </div>
  );
};
