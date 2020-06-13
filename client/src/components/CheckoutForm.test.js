import React from "react";
import { render, queryAllByTestId, fireEvent, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

/* Build out the tests listed in `CheckoutForm.test.js`. 
You will need to make sure they are testing what the
test title implies they are testing */
test("form header renders", () => {
  // Check if CheckoutForm renders
  const container = render(<CheckoutForm />);

  // Check whether the element exists in the form
  const header = container.getByTestId(/title/i);

  // Check if the textContent is equal to "Checkout Form"
  expect(header.textContent).toBe("Checkout Form");
});

// test setup function for first name
const fnameSetup = () => {
  const utils = render(<CheckoutForm />);
  const fname = utils.queryByTestId(/first name/i);
  return {
    fname,
    ...utils,
  };
};

test("form shows success message on submit with form details", async () => {
  const container = render(<CheckoutForm />);

  const firstName = container.queryByTestId(/first name/i);
  fireEvent.change(firstName, { target: { value: "Christopher" } });

  const lastName = container.queryByTestId(/last name/i);
  fireEvent.change(lastName, { target: { value: "Harwell" } });

  const address = container.queryByTestId(/address/i);
  fireEvent.change(address, { target: { value: "137 Main Street" } });

  const city = container.queryByTestId(/city/i);
  fireEvent.change(city, { target: { value: "Auckland" } });

  const state = container.queryByTestId(/state/i);
  fireEvent.change(state, { target: { value: "New Hampshire" } });

  const zip = container.queryByTestId(/zip/i);
  fireEvent.change(zip, { target: { value: "22354" } });

  const checkoutBtn = container.queryByTestId(/checkout button/i);
  fireEvent.submit(checkoutBtn);

  await waitFor(() => {
      const successMessage = container.getByTestId(/successMessage/i);
      expect(successMessage).toBeInTheDocument();
  });
});
