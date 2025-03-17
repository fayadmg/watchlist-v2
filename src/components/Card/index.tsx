import { FC } from "react";
import { IMovie } from "../types/IMovie";

export const Card: FC<IMovie> = ({title, releaseDate}) => {
  return (
    <div>
      <h2>{title} ({releaseDate})</h2>
    </div>
  );
};
