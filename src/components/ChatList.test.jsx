import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ChatList from "./ChatList";
import chats from "../mocks/chats"; // Asumiendo que 'chats' es un mock de ejemplo

// Simulamos un callback para onSelectChat
const mockOnSelectChat = vi.fn();

describe("Componente ChatList", () => {
  it("Debe renderizar la lista de chats", () => {
    // renderizo y busco en el container porque no tengo text...
    const { container, debug } = render(
      <ChatList onSelectChat={mockOnSelectChat} />
    );
    const element = container.querySelectorAll(".chat-item");
    // Verificamos que el número de chats que renderiza es igual al número de elementos en el mock
    expect(element.length).toBe(chats.length);
    //debug();
  });
  it("Debe contener todos los nombres del mock de chats", () => {
    // renderizo y busco en el container porque no tengo text...
    render(<ChatList onSelectChat={mockOnSelectChat} />);
    // Verificamos que el número de chats que renderiza es igual al número de elementos en el mock
    chats.forEach((chat) => {
      expect(screen.getByText(chat.name)).toBeInTheDocument();
    });
  });
  it("Debe llamar a onSelectChat al hacer clic en un chat", () => {
    const { container } = render(<ChatList onSelectChat={mockOnSelectChat} />);
    const element = container.querySelectorAll(".chat-item");
    fireEvent.click(element[0]);
    //Que ha sido llamado al menos una vez

    expect(mockOnSelectChat).toHaveBeenCalledOnce();
    expect(mockOnSelectChat).toHaveBeenCalledWith(chats[0]);
  });
});
