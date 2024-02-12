import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Button from "../reusable/Button";
import { selectCartTotal } from "../../store/cart/CartSelector";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/UserSelector";

const Payment = () => {
    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);

    const paymentHandler = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        setIsProcessingPayment(true);
        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: amount * 100 }),
        }).then((res) => res.json());

        const clientSecret = response.paymentIntent.client_secret;

        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : 'Lakshmi Haritha Muktevi',
                },
            },
        });

        setIsProcessingPayment(false);

        if (paymentResult.error) {
            alert(paymentResult.error.message);
        } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                alert('Payment Successful!');
            }
        }
    };

    return (
        <div className="bg-white w-[1500px] h-[850px] m-10 p-20">
            <h2>Credit Card Payment:</h2>
            <CardElement/>
            <Button
                isLoading={isProcessingPayment}
                onClick={paymentHandler}
            >
                Pay Now
            </Button>
        </div>
    );
};

export default Payment;
