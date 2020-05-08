import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />);

    const header = getByText(/Checkout Form/i);

    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    const { getByLabelText } = render(<CheckoutForm />);

    const firstInput = getByLabelText(/First Name/i);
    const lastInput = getByLabelText(/Last Name/i);
    const addressInput = getByLabelText(/Address/i);
    const cityInput = getByLabelText(/City/i);
    const stateInput = getByLabelText(/State/i);
    const zipInput = getByLabelText(/Zip/i)
});
