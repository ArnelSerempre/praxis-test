import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import React from "react";
import Footer from "./Footer";

let container : any;

beforeEach(() => container = render(<Footer/>));

describe("Footer Coomponent", () => {
    // it("Must show 'Redes Sociales' in the component", () => {
    //     const { getByText } = container;
    //     expect(getByText("Redes Sociales:")).toBeInTheDocument();
    // });

    // it("Must render linkedin image", () => {
    //     const footer = shallow(<Footer/>);
    //     expect(footer.find("img").prop("src")).toEqual("http://api-praxis.eml.com.co/wp-content/uploads/2022/03/completo_linkeding.png");
    // });
})