const HobbiesList = ({ hobbies }) => (
  <section className="hobbies" aria-labelledby="hobbies-title">
    <h2 id="hobbies-title">Hobbies</h2>
    <ul>
      {hobbies.map((hobby) => (
        <li key={hobby}>{hobby}</li>
      ))}
    </ul>
  </section>
)

export default HobbiesList
