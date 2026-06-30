

use supermarket;

db.createCollection("promo");

var data4 = [
    {
        name: "sales promo",
        period: 7,
        daily_sales: [20, 50, 34, 14, 25]
    },
    {
        name: "milk promo",
        period: 4,
        daily_sales: [120, 200]
    },
    {
        name: "meat promo",
        period: 3,
        daily_sales: [101, 250]
    },
    {
        name: "newyear promo",
        period: 2,
        daily_sales: [65, 88, 105, 188, 74, 278, 350]
    }
];

db.promo.insertMany(data4);

db.promo.find();
