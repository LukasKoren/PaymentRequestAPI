if (window.PaymentRequest) {
 // If it exists on your user's browser   
}
//Payment request object
const supportedPaymentMethods = 
[
    {
        supportedPaymentMethods: ['basic-cards']
    }
];
//Payment details (cost/currency)
const PaymentDetails = {
    total: {
        lable: 'Total cost',
        amount: {
            currency: 'EUR',
            value: 30
        }
    }
};
// Custom options
const options = {}
//Create request
const PaymentRequest = new PaymentRequest(
    supportedPaymentMethods, PaymentDetails, options
);
PaymentRequest.show();

else {
// Fall back to origonal impelementation  
};
