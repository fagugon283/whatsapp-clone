// Boton.jsx

/* eslint-disable react/prop-types */
function Boton({ onClick, children, id }) {
  return (
    <button
      id={id ? id : "id-boton"}
      data-testid="boton-element"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default Boton;
