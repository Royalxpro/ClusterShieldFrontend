import React from 'react';
import axios from 'axios';

const SubscriptionPage = () => {
    const handleSubscribe = async (planId, userId) => {
        try {
            const { data } = await axios.post('https://clustershield.onrender.com/api/subscribe', {
                planId,
                userId,
            });
            window.location.href = data.approvalUrl; // Redirect to PayPal approval page
        } catch (error) {
            console.error("Subscription error:", error);
        }
    };

    return (
        <div>
            <h1>Choose a Plan</h1>
            <button onClick={() => handleSubscribe('P-6UN02416RU899662AM47OKTA', '6740345d02b9b8afcdb29165')}>
                Monthly Plan
            </button>
            <button onClick={() => handleSubscribe('P-YEARLY_PLAN_ID', 'USER_ID')}>
                Yearly Plan
            </button>
        </div>
    );
};

export default SubscriptionPage;
