// Create Payments Collection

use supermarket;

db.createCollection("payments");

var data3 = [
    {
        gross_amount: 105.65,
        discounts: 10,
        net_amount: 95
    },
    {
        gross_amount: 42.25,
        discounts: 0,
        net_amount: 42.25
    },
    {
        gross_amount: 153.33,
        discounts: 20.33,
        net_amount: 133
    },
    {
        gross_amount: 21,
        discounts: 0,
        net_amount: 21
    },
    {
        gross_amount: 89.72,
        discounts: 0.72,
        net_amount: 89
    }
];

db.payments.insertMany(data3);

db.payments.find().pretty();
