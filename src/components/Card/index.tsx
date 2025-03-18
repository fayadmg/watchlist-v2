import { FC } from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import "./index.css"
import { IMovie } from "../types/IMovie";

interface ICardProps {
  movie: IMovie;
  onClick: (id: number) => void;
  toggleWatched: (id: number) => void;
}

export const Card: FC<ICardProps> = ({movie, onClick, toggleWatched}) => {
  return (
    <div className="card">
      <h2>{movie.title} ({movie.releaseDate})</h2>
      <p>{movie.isWatched ? "watched" : "not watched"}</p>
      <DeleteOutlineIcon onClick={() => {onClick(movie.id)}}/>
      {/* <button  onClick={() => {onClick(movie.id)}}><DeleteOutlineIcon className="delete-icon"/></button> */}
      <CheckBoxIcon onClick={() => {toggleWatched(movie.id)}} />
      {/* <button onClick={() => {toggleWatched(movie.id)}}>toggle</button> */}
    </div>
  );
};
