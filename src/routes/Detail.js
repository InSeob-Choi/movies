import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const getMoive = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMoive();
  }, []);
  return (
    <div>
      <h1>{movie.title}</h1>
      <h3>{movie.description_full}</h3>
      <img src={movie.large_cover_image} alt={movie.title} />
    </div>
  );
}
export default Detail;
