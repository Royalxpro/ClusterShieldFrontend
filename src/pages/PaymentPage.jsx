import React, { useContext, useEffect } from 'react';
import "../css/page css/PaymentPage.css";
import { MyContext } from '../App';
import PayPalButton from '../components/PaypalButton';
export default function SubscriptionPage() {
   let userId
   userId =  localStorage.getItem("userId")  
   console.log(userId)
    const monthlySubscriptionPlans = [

        
        {
            name: "Gold",
            price: "$19",
            duration: "1 Month",
            benefits: ["4 cluster shield ✔️", "API core protection ✔️", "Ddos Protection ❌" , "SSL Protection ✔️"],
            plan_id:"P-873416869B218923MM5DBHJQ"
        },
        {
            name: "Silver",
            
            price: "$29",
            duration: "1 Month",
            benefits: ["9 cluster shield ✔️","Password Protection ✔️", "API core protection ✔️", "Ddos Protection ✔️" , "SSL Protection ✔️" , "Payment Protection ✔️"],
            plan_id:"P-0RS535529W356830MM5DBIRY"

        },
        {
            name: "Diamond",
            price: "$59",
            duration: "1 Month",
            benefits: ["16 cluster shield ✔️","Password Protection ✔️","Dedicated Server Cluster ✔️","Files protection ✔️","256bit Encryption ✔️" ,"API ultra protection ✔️", "Ddos Protection ✔️" , "SSL Protection ✔️" ,"By-pass Protection ✔️", "Payment Protection ✔️"],
            plan_id:"P-7PS27721YY159893EM5DBJGQ"

        },
    ];
    const yearlySubscriptionPlans = [
        {
            name: "Gold",
            oldPrice : "$228",
            price: "$199",
            duration: "1 Year",
            benefits: ["4 cluster shield ✔️", "API core protection ✔️", "Ddos Protection ❌" , "SSL Protection ✔️"],
            plan_id:"P-8PW150148E951513EM5DBJ7I"

        },
        {
            name: "Silver",
            oldPrice : "$348",
            price: "$299",
            duration: "1 Year",
            benefits: ["9 cluster shield ✔️","Password Protection ✔️", "API core protection ✔️", "Ddos Protection ✔️" , "SSL Protection ✔️" , "Payment Protection ✔️"],
            plan_id:"P-2NP900567C4759945M5DBKRI"

        },
        {
            name: "Diamond",
            oldPrice : "$708",
            price: "$649",
            duration: "12 Year",
            benefits: ["16 cluster shield ✔️","Password Protection ✔️","Dedicated Server Cluster ✔️","Files protection ✔️","256bit Encryption ✔️" ,"API ultra protection ✔️", "Ddos Protection ✔️" , "SSL Protection ✔️" ,"By-pass Protection ✔️", "Payment Protection ✔️"],
            plan_id:"P-574482506J957082UM5DBLCI"
        },
    ];



    return (
        <div className="paymentPage">
            <div className="subscription-page">
                <h1 className="title">Choose Monthly Plan
                </h1>
                <p className="subtitle">Select the subscription that suits you best!</p>
                <div className="subscription-cards">
                    {monthlySubscriptionPlans.map((plan, index) => (
                        <div key={index} className={`card ${plan.name.toLowerCase()}`}>
                            <h2 className="card-title">{plan.name}</h2>
                            <p className="price">{plan.price}</p>
                            <p className="duration">{plan.duration}</p>
                            <ul className="benefits">
                                {plan.benefits.map((benefit, i) => (
                                    <li key={i}>{benefit}</li>
                                ))}
                            </ul>
                            <PayPalButton planId={plan.plan_id} userId={userId} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="subscription-page">
                <h1 className="title" style={{color:'yellow'}}>Choose Yearly Plan</h1>
                <p className="subtitle">Select the subscription that suits you best!</p>
                <div className="subscription-cards">
                    {yearlySubscriptionPlans.map((plan, index) => (
                        <div key={index} className={`card ${plan.name.toLowerCase()}`}>
                            <h2 className="card-title">{plan.name}</h2>
                            <strike><p className="oldPrice">{plan.oldPrice}</p></strike>
                            <p className="price">{plan.price}</p>
                            <p className="duration">{plan.duration}</p>
                            <ul className="benefits">
                                {plan.benefits.map((benefit, i) => (
                                    <li key={i}>{benefit}</li>
                                ))}
                            </ul>
                            <PayPalButton planId={plan.plan_id} userId={userId}/>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
