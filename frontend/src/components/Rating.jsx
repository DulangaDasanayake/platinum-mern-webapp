import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ value, text }) => {
  // Define a style object to set the color of the stars
  const starStyle = {
    color: "#d39d03", // Change this color to your desired color
  };

  return (
    <div className="rating">
      <span>
        {value >= 1 ? (
          <FaStar style={starStyle} />
        ) : value >= 0.5 ? (
          <FaStarHalfAlt style={starStyle} />
        ) : (
          <FaRegStar style={starStyle} />
        )}
      </span>

      <span>
        {value >= 2 ? (
          <FaStar style={starStyle} />
        ) : value >= 1.5 ? (
          <FaStarHalfAlt style={starStyle} />
        ) : (
          <FaRegStar style={starStyle} />
        )}
      </span>

      <span>
        {value >= 3 ? (
          <FaStar style={starStyle} />
        ) : value >= 2.5 ? (
          <FaStarHalfAlt style={starStyle} />
        ) : (
          <FaRegStar style={starStyle} />
        )}
      </span>

      <span>
        {value >= 4 ? (
          <FaStar style={starStyle} />
        ) : value >= 3.5 ? (
          <FaStarHalfAlt style={starStyle} />
        ) : (
          <FaRegStar style={starStyle} />
        )}
      </span>

      <span>
        {value >= 5 ? (
          <FaStar style={starStyle} />
        ) : value >= 4.5 ? (
          <FaStarHalfAlt style={starStyle} />
        ) : (
          <FaRegStar style={starStyle} />
        )}
      </span>
      <span className="rating-text">{text && text}</span>
    </div>
  );
};

export default Rating;
