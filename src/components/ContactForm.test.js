import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import ContactForm from './ContactForm';
import { act } from 'react-dom/test-utils';

test("Check if the form is rendered", () =>{
    const {getByLabelText, getByPlaceholderText} = render(<ContactForm/>);
    
    const fNameInput = getByLabelText(/First/i);
    expect(fNameInput).toBeInTheDocument();

    const fNamePlaceholder = getByPlaceholderText("bill");
    expect(fNamePlaceholder).toBeInTheDocument();

    const lNameInput = getByLabelText(/Last/i);
    expect(lNameInput).toBeInTheDocument();

    const lNamePlaceholder = getByPlaceholderText("luo");
    expect(lNamePlaceholder).toBeVisible();

    const emailInput = getByLabelText(/email/i);
    expect(emailInput).toBeInTheDocument();

    const emailPlaceholder = getByPlaceholderText(/@hotmail.com/i);
    expect(emailPlaceholder).toBeVisible();

    const messageInput = getByLabelText(/message/i);
    expect(messageInput).toBeInTheDocument();
})

test("Make sure the error message appears when ", ()=>{
    async() => {const {getByTestId} = render(<ContactForm/>);
        fireEvent.click(getByTestId(/submit/i));

        const firstErr = getByTestId(/firstNameErr/i);
        const lastErr = getByTestId(/lastNameErr/i);
        const emailErr = getByTestId(/emailErr/i);
        
        expect(firstErr).toBeVisible();
        expect(lastErr).toBeVisible();
        expect(emailErr).toBeVisible();
    }
});

test("makes sure that the inputs can be filled in and submitted", () =>{
    async() => {const {getByLabelText, getByTestId} = render(<ContactForm/>);

    const fNameInput = getByLabelText(/First/i);
    const lNameInput = getByLabelText(/Last/i);
    const emailInput = getByLabelText(/email/i);
    const messageInput = getByLabelText(/message/i);
    
    fireEvent.change(fNameInput, {target: {value:'hem'}});
    fireEvent.change(lNameInput, {target: {value:'bily'}});
    fireEvent.change(emailInput, {target: {value:'tester@email.com'}});
    fireEvent.change(messageInput, {target: {value:'I have no idea what to write in here'}});

    expect(fNameInput.value).toBe('hem');
    expect(lNameInput.value).toBe('bily');
    expect(emailInput.value).toBe('tester@email.com');
    expect(messageInput.value).toBe('I have no idea what to write in here');

    fireEvent.click(getByTestId(/submit/i));

    const formText = getByTestId("formData");
    expect(formText).toBeInTheDocument();
    };
});




