import React from "react";
import Counter from "../Counter";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let getByTestId;

beforeEach(() => {
	const component = render(<Counter />);
	getByTestId = component.getByTestId;
});

test("header renders with correct text", () => {
	const headerEl = getByTestId("header");
	expect(headerEl.textContent).toBe("My Counter");
});

test("counter first value start @ zero", () => {
	const counterEl = getByTestId("counter");
	//string
	expect(counterEl.textContent).toBe("0");
});

test("input first value = 1", () => {
	const inputEl = getByTestId("input");
	//numbers
	expect(inputEl.value).toBe("1");
});

test("add button renders with + sign ", () => {
	const addBtn = getByTestId("add-btn");
	//string
	expect(addBtn.textContent).toBe("+");
});

test("add button renders with - sign ", () => {
	const subtractBtn = getByTestId("subtract-btn");
	//string
	expect(subtractBtn.textContent).toBe("-");
});

test("changing value of input works correctly ", () => {
	const inputEl = getByTestId("input");

	expect(inputEl.value).toBe("1");

	fireEvent.change(inputEl, {
		target: {
			value: "5",
		},
	});

	expect(inputEl.value).toBe("5");
});

test("click + sign adds 1 to counter", () => {
	const btnEl = getByTestId("add-btn");
	const counterEl = getByTestId("counter");
	expect(counterEl.textContent).toBe("0");

	fireEvent.click(btnEl);
	//string
	expect(counterEl.textContent).toBe("1");
});

test("click - sign minus 1 to counter", () => {
	const subtractBtnEl = getByTestId("subtract-btn");
	const counterEl = getByTestId("counter");
	expect(counterEl.textContent).toBe("0");

	fireEvent.click(subtractBtnEl);
	//string
	expect(counterEl.textContent).toBe("-1");
});

test("click + sign adds 1 to counter", () => {
	const btnEl = getByTestId("add-btn");
	const counterEl = getByTestId("counter");
	expect(counterEl.textContent).toBe("0");

	fireEvent.click(btnEl);
	//string
	expect(counterEl.textContent).toBe("1");
});

test("change input value then click on add btn", () => {
	const btnEl = getByTestId("add-btn");
	const counterEl = getByTestId("counter");
	const inputEl = getByTestId("input");

	fireEvent.change(inputEl, {
		target: {
			value: "5",
		},
	});

	fireEvent.click(btnEl);

	expect(counterEl.textContent).toBe("5");
});

test("change input value then click on subtract btn", () => {
	const btnEl = getByTestId("subtract-btn");
	const counterEl = getByTestId("counter");
	const inputEl = getByTestId("input");

	fireEvent.change(inputEl, {
		target: {
			value: "5",
		},
	});

	fireEvent.click(btnEl);

	expect(counterEl.textContent).toBe("-5");
});

test("adding and then subtracting ", () => {
	const subtractEl = getByTestId("subtract-btn");
	const addEl = getByTestId("add-btn");
	const counterEl = getByTestId("counter");
	const inputEl = getByTestId("input");

	fireEvent.change(inputEl, {
		target: {
			value: "10",
		},
	});

	fireEvent.click(addEl);
	fireEvent.click(addEl);
	fireEvent.click(addEl);
	fireEvent.click(addEl);
	fireEvent.click(subtractEl);
	fireEvent.click(subtractEl);

	expect(counterEl.textContent).toBe("20");

	fireEvent.change(inputEl, {
		target: {
			value: "5",
		},
	});

	fireEvent.click(addEl);
	fireEvent.click(subtractEl);
	fireEvent.click(subtractEl);

	expect(counterEl.textContent).toBe("15");
});

test("counter color", () => {
	const counterEl = getByTestId("counter");
	const inputEl = getByTestId("input");
	const subtractEl = getByTestId("subtract-btn");
	const addEl = getByTestId("add-btn");

	expect(counterEl.className).toBe("");

	fireEvent.change(inputEl, {
		target: {
			value: "50",
		},
	});

	expect(counterEl.className).toBe("");

	fireEvent.click(addEl);
	expect(counterEl.className).toBe("");

	fireEvent.click(addEl);
	expect(counterEl.className).toBe("green");

	fireEvent.click(addEl);
	expect(counterEl.className).toBe("green");

	fireEvent.click(subtractEl);
	fireEvent.click(subtractEl);
	expect(counterEl.className).toBe("");

	fireEvent.click(subtractEl);
	fireEvent.click(subtractEl);
	fireEvent.click(subtractEl);
	fireEvent.click(subtractEl);
	expect(counterEl.className).toBe("red");
});
