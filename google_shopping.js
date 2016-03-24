var data = require("./products.json")

// Write your solutions below

//console.log("doing homework ");

// var count = 0;
// for (i =0; i < data['items'].length; i++){
// 	if(data['items'][i].kind === 'shopping#product') {
// 	   count ++;	
// 	}
// }
// console.log(count);
// this data is also stored here itemsPerPage: 25 & 
//currentItemCount: 25

//#2 backorder availabilitys

// for (i = 0; i < data['items'].length; i++) {
//   if(data.items[i].product.inventories[0].availability ==="backorder") {
//     console.log(data.items[i].product.title);  
//   }
// }

// console.log(data['items'][0]['product']['inventories'][0]['availability']);
// console.log(data.items[0].product.inventories[0].availability);

//#3 more than 1 image linke
// for (i = 0; i < data['items'].length; i++) {
//   if(data.items[i].product.images.length > 1) {
//     console.log(data.items[i].product.title);  
//   }
// }

//#4 find all cannon products
// for (i = 0; i < data['items'].length; i++) {
//   if(data.items[i].product.brand === "Canon") {
//     console.log(data.items[i].product.title);  
//   }
// }

//#5 find Cannon products and author name eBay
// for (i = 0; i < data['items'].length; i++) {
//   if(data.items[i].product.brand === "Canon" &&  data.items[i].product.author.name[0].indexOf("eBay")) {
//     console.log(data.items[i].product.title);  
//   }
// }

//#6 Print all the products with their brand, price, and a image link
// var newArray =[];
// for (i = 0; i < data['items'].length; i++) {
// newArray.push(data.items[i].product.title);
// console.log("The title is: " + data.items[i].product.title)
// newArray.push(data.items[i].product.brand);
// console.log("The brand is: " + data.items[i].product.brand)
// newArray.push(data.items[i].product.images[0].link);
// console.log("The img link is " + data.items[i].product.images[0].link)
// newArray.push(data.items[i].product.inventories[0]['price']);
// console.log("The img link is " + data.items[i].product.inventories[0]['price'])
}
//console.log(newArray);









