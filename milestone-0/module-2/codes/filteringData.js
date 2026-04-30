const products = [
  { id: 1, name: "Wireless Mouse", price: 15.99, rating: 4.2, stock: 120, category: "Accessories" },
  { id: 2, name: "Mechanical Keyboard", price: 49.99, rating: 4.6, stock: 80, category: "Accessories" },
  { id: 3, name: "Gaming Headset", price: 39.99, rating: 4.4, stock: 65, category: "Electronics" },
  { id: 4, name: "USB-C Charger", price: 19.99, rating: 4.1, stock: 200, category: "Electronics" },
  { id: 5, name: "Portable SSD 1TB", price: 89.99, rating: 4.7, stock: 40, category: "Storage" },
  { id: 6, name: "Smartwatch", price: 129.99, rating: 4.3, stock: 55, category: "Wearables" },
  { id: 7, name: "Bluetooth Speaker", price: 29.99, rating: 4.5, stock: 100, category: "Audio" },
  { id: 8, name: "HD Webcam", price: 59.99, rating: 4.2, stock: 70, category: "Electronics" },
  { id: 9, name: "Laptop Stand", price: 24.99, rating: 4.0, stock: 150, category: "Accessories" },
  { id: 10, name: "Noise Cancelling Earbuds", price: 79.99, rating: 4.6, stock: 90, category: "Audio" },
  { id: 11, name: "Smart LED Bulb", price: 12.99, rating: 4.3, stock: 300, category: "Home" },
  { id: 12, name: "Fitness Tracker", price: 59.99, rating: 4.1, stock: 110, category: "Wearables" },
  { id: 13, name: "Drone Camera", price: 199.99, rating: 4.5, stock: 25, category: "Electronics" },
  { id: 14, name: "VR Headset", price: 249.99, rating: 4.4, stock: 30, category: "Electronics" },
  { id: 15, name: "External Monitor 24\"", price: 149.99, rating: 4.3, stock: 45, category: "Electronics" },
  { id: 16, name: "Wireless Router", price: 99.99, rating: 4.2, stock: 60, category: "Networking" },
  { id: 17, name: "Power Bank 20000mAh", price: 34.99, rating: 4.5, stock: 85, category: "Accessories" },
  { id: 18, name: "Smart Home Hub", price: 89.99, rating: 4.1, stock: 50, category: "Home" },
  { id: 19, name: "Electric Kettle", price: 29.99, rating: 4.0, stock: 120, category: "Home Appliances" },
  { id: 20, name: "Air Purifier", price: 159.99, rating: 4.6, stock: 35, category: "Home Appliances" }
];


//Filtering Products
const topProducts = products.filter(item => item.category === "Electronics")
.sort((a, b) => b.price - a.price)
.map(item =>{
  return {name: item.name};
})
;

console.log(topProducts);
