//Boton.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Boton from "./Boton";

describe("Componente Boton", () => {
  it("debería mostrar el texto proporcionado", () => {
    render(<Boton>Click me</Boton>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("debería llamar a la función onClick al hacer clic", () => {
    const handleClick = vi.fn();
    render(<Boton onClick={handleClick}>Click me</Boton>);

    fireEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it("renders sin usar screen", () => {
    const { getByText } = render(<Boton>Pulsame</Boton>); // desestructurando getByText desde el contenedor
    expect(getByText("Pulsame")).toBeInTheDocument();
  });
  it("renders component and queries elements", () => {
    const { getByText, asFragment, rerender, unmount, debug } = render(
      <Boton>Pulsame</Boton>
    );

    expect(getByText("Pulsame")).toBeInTheDocument();
    console.log(asFragment()); // Para comparaciones de snapshot.
    debug(); // Imprime el DOM en la consola.

    rerender(<Boton>Otro boton</Boton>); // Vuelve a renderizar con nuevos props.
    unmount(); // Desmonta el componente.
  });
  it("Render usando container y baseElement para acceder the DOM", () => {
    // Renderizamos el componente y obtenemos `container` y `baseElement`
    const { container, baseElement } = render(<Boton>Pulsame</Boton>);

    // Usando `container` para seleccionar elementos específicos dentro del componente
    const containerElement = container.querySelector(
      '[data-testid="boton-element"]'
    );
    expect(containerElement).toBeInTheDocument();
    expect(containerElement.textContent).toBe("Pulsame");

    // Verificando la estructura general del HTML en `baseElement`, que abarca todo el documento
    // debes respetar orden de atributos,.... MUY COMPLICADO

    expect(baseElement).toContainHTML(
      '<div><button id="id-boton" data-testid="boton-element">Pulsame</button></div>'
    );

    // `baseElement` incluiría todo el DOM disponible desde el documento completo, útil en casos donde
    // se renderiza fuera del contenedor principal o si el componente modifica el DOM globalmente.
    console.log(baseElement.innerHTML); // Para depurar: muestra todo el DOM disponible desde baseElement
  });
});
