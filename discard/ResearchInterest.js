const ResearchInterest = ({ researchInterests }) => {
  return (
    <div className="container-small">
      <div className="articleBook researchInterests">
        <h3>Areas of Interest</h3>
        {researchInterests.map((researchInterest) => (
          <p className="anArticle" key={researchInterest.index}>
            <span>{researchInterest}</span>
          </p>
        ))}
      </div>
    </div>
  );
};
export default ResearchInterest;
