import ReactDom from "react-dom";
import ChatApp from "./ChatApp";
import { getByAltText, getByText, wait, within } from "@testing-library/dom";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { api } from "../api";

test("chat app testing", () => {
  // const root = document.createElement("div");
  // ReactDom.render(<ChatApp />, root);

  // 1
  // expect(root.querySelector("h1").textContent).toBe("Chat App");
  // expect(root.querySelector("button").textContent).toBe("Send");

  // 2 above code can be shortend to
  // const { getByText } = within(root);
  // getByText("Chat App");
  // getByText("Send");

  // 3
  const { getByText, getByLabelText } = render(<ChatApp />);
  getByText("Chat App");
  getByText("Send");
});

// fireEvent
test("allows users to send new chat", () => {
  const { getByText, getByLabelText } = render(<ChatApp />);
  const input = getByLabelText("Say something");
  const button = getByText("Send");

  // simulate user events
  fireEvent.change(input, { target: { value: "Learn spanish" } });
  fireEvent.click(button);

  // Make assertion
  getByText("Learn spanish");
});

// userEvent
test("user-events allows users to add...", () => {
  const { getByText, getByLabelText } = render(<ChatApp />);

  const input = getByLabelText("Say something");
  const button = getByText("Send");

  // simulate user events
  userEvent.type(input, "Learn spanish");
  userEvent.click(button);

  getByText("Learn spanish");
});

// mock entire module using jest.mock(api)
const mockCreateItem = (api.createItem = jest.fn());

test("allow users to add items to their list", async () => {
  const chatText = "Learn spanish";
  mockCreateItem.mockResolvedValueOnce({ id: 123, text: chatText });

  const { getByLabelText, getByText } = render(<ChatApp />);

  const input = getByLabelText("Say something");
  const button = getByText("Send");

  fireEvent.change(input, { target: { value: chatText } });
  fireEvent.click(button);
  await wait(() => getByText(chatText));

  expect(mockCreateItem).toBeCalledTimes(1);
  expect(mockCreateItem).toBeCalledWith(
    "/items",
    expect.objectContaining({ text: chatText })
  );
});
