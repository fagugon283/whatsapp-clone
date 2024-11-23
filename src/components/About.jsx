import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function About() {
  const navigate = useNavigate();

  return (
    <>
      <h1>About</h1>
      <Link to="/location">Ir a location</Link>
      <br></br>
      <a href="../login.html">Ir a login</a>
      <br></br>
      <button onClick={() => navigate("/location")}>Ir a Location</button>
      <button onClick={() => (window.location.href = "../login.html")}>
        Ir a Login
      </button>
    </>
  );
}
export default About;
