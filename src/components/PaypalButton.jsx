import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import axios from 'axios';

const PayPalButton = ({ userId, planId }) => {
  return (
    <PayPalScriptProvider
      options={{
        'client-id': 'AXJi33MRcYfWbgdQa9-DvLraX7s5-NAoI2ok3Dpr3KrigDiyG77XYlAIU_N8drOr6LIyf-qIJtzNHEy7',
        vault: true,
        intent: 'subscription',
      }}
    >
      <PayPalButtons
        style={{
          shape: 'rect',
          color: 'gold',
          layout: 'vertical',
          label: 'subscribe',
        }}
        createSubscription={(data, actions) => {
          return actions.subscription.create({
            plan_id: planId,
          });
        }}
        onApprove={async (data) => {
          const subscriptionID = data.subscriptionID;

          try {
            // Make a POST request to your server
            const response = await axios.post('https://clustershield.onrender.com/api/payment/complete', {
              userId,
              subscriptionID,
              planId,
            });

            if (response.status === 200) {
              alert('Payment Successful!');
            } else {
              console.error('Server response error', response);
            }
          } catch (error) {
            console.error('Error sending payment data to server', error);
          }
        }}
        onError={(err) => {
          console.error('PayPal Button Error', err);
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
