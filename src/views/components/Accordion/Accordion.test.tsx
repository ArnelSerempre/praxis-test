import { render } from "@testing-library/react";
import React from "react";
import Accordion from "./Accordion";

let container : any;

beforeEach(() => container = render(
    <Accordion
        children={<span>Hi World!</span>}
        id="panel1"
        name="panel1"
        title="The Hi Test!"
    />
));

describe("Accordion Component", () => {
    // it("Must show sended title", () => {
    //     const { getByText } = container;
    //     expect(getByText("The Hi Test!")).toBeInTheDocument();
    // });

    // it("Must show the sended children", () => {
    //     const { getByText } = container;
    //     expect(getByText("Hi World!")).toBeInTheDocument();
    // })
});