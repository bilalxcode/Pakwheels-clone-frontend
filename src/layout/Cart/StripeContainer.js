import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";
const PUBLIC_KEY =
  "pk_test_51Nk18qCVtk9qc81AclDPyU76U9xw0h3h9leiyc0tmI89fFSic8uF4Jl9m87Ei9xaED4OxKLdVzWclXTwIuDYejiL007U1xq6F1";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = ({ setPaymentSuccess }) => {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm setPaymentSuccess={setPaymentSuccess} />
    </Elements>
  );
};

export default StripeContainer;
