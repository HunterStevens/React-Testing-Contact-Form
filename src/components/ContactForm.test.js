import React from "react";
import { render } from "@testing-library/react";
import ContactForm from './ContactForm';

test("Check if the form is rendered", () =>{
    const {getByLabelText, getByTestId, getByPlaceholderText} = render(<ContactForm/>);
    
    const fNameInput = getByLabelText("firstName");
    expect(fNameInput).toBeVisible();
})