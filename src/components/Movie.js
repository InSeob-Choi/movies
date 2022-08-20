import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ coverImg, title, genres, summary, id }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link
          to={`/movie/${id}` /* {} 안에! ``를 써줘야! 자바스크립트로 인식됨 */}
        >
          {title}
        </Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
  summary: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Movie;
