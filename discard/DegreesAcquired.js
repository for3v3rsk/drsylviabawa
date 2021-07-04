import { FaGraduationCap } from "react-icons/fa";

const DegreesAcquired = ({ degreesAcquired }) => {
  return (
    <div className="articleBookContainer">
      <div className="articleBook">
        {degreesAcquired.map((degreeAcquired) => (
          <div key={degreeAcquired.index}>
            <p className="bookTitle degreeAcquired">
              <span>
                {" "}
                <FaGraduationCap className="fa-icon" />{" "}
              </span>
              {degreeAcquired}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DegreesAcquired;
