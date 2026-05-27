const InfoGrid = ({ className, major }) => (
  <div className="info-grid">
    <article>
      <h2>Class</h2>
      <p>{className}</p>
    </article>
    <article>
      <h2>Major</h2>
      <p>{major}</p>
    </article>
  </div>
)

export default InfoGrid
