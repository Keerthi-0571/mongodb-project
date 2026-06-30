

use supermarket;

db.createCollection("inventory");

var data2 = [
    {
        name: "chocolates",
        price: 20,
        quantity: 2500,
        category: ["chocolates", "sweet"]
    },
    {
        name: "milk",
        price: 40,
        quantity: 1000,
        category: ["dairy", "healthy"]
    },
    {
        name: "eggs",
        price: 8,
        quantity: 1250,
        category: ["proteins", "healthy"]
    },
    {
        name: "carrots",
        price: 6.75,
        quantity: 3000,
        category: ["vegetables", "proteins", "organic"]
    },
    {
        name: "beans",
        price: 7.65,
        quantity: 6000,
        category: ["vegetables", "organic", "healthy"]
    }
];

db.inventory.insertMany(data2);

db.inventory.find();
