import React, { FC, useState } from "react";
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
        [name]: value
      }
    })
  };

  return (
    <div>
      <h1>Add movies</h1>
      <input type="text" name="title" onChange={handleChange} />
      <input type="text" name="releaseDate" onChange={handleChange} />
      <button
        onClick={() => {
          onClick(movies.title, movies.releaseDate);
        }}
      >
        Add
      </button>
    </div>
  );
};
