import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />);

    const header = getByText(/Checkout Form/i);

    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    const { getByLabelText } = render(<CheckoutForm />);

    //Form Input Queries
    const firstInput = getByLabelText(/First Name/i);
    const lastInput = getByLabelText(/Last Name/i);
    const addressInput = getByLabelText(/Address/i);
    const cityInput = getByLabelText(/City/i);
    const stateInput = getByLabelText(/State/i);
    const zipInput = getByLabelText(/Zip/i)

    //FireEvent functions
    fireEvent.change(firstInput, {
        target: { name: "firstName", value: "John" }
      });
    fireEvent.change(lastInput, {
        target: { name: "lastName", value: "Doe" }
    });
    fireEvent.change(addressInput, {
        target: { name: "address", value: "123 Street Rd" }
    });
    fireEvent.change(cityInput, {
        target: { name: "city", value: "Boston" }
    });
    fireEvent.change(stateInput, {
        target: { name: "state", value: "Massachusetts" }
    });
    fireEvent.change(zipInput, {
        target: { name: "zip", value: "02114" }
    }); 

    console.log(firstInput.value)

});
