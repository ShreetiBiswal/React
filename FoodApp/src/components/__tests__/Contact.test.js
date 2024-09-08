import Contact from "../Contact";
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom"

// test("Should load Contact us component",()=>{
//     render(<Contact/>);

//     const heading=screen.getByRole("textbutton");

//     expect(heading).toBeInTheDocument();
// });

test("Should have two inputs",()=>{

    render(<Contact/>);
    const inputBoxes=screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
})