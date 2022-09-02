//Prerequisites:
// - functions, objects, conditionals
// - arrow functions
// - array functions: map, filter, find, reduce, every, some..

const products = [
  "iPhone 13", 
  "iPhone 13 Pro",
  "iPhone 13 Pro Max",
  "iPhone 12",
  "iPhone 12 Pro",
  "OnePlus 10 Pro",
  "OnePlus 9",
  "Nokia G20",
  "Samsung Galaxy S20",
  "Samsung Galaxy S21",
  "Samsung Galaxy S22",
  "Sony Xperia 10",
  "Xiaomi Redmi 9A",
];
const favorites = [];

// Task 1. Add new Products: Google Pixel 6 Pro, Motorola Moto G31, Honor X7
const product = products.push("Google Pixel 6 Pro", "Motorola Moto G31", "Honor X7");
// Task 2. remove Sony Xperia 10 from the list
const index = products.indexOf("Sony Xperia 10"); 
products.splice(index, 1);
console.log(products);

// Task 3. list the products with "Galaxy" in their names
const result = (array, query) => { //The array which contains all the elements that are to be filtered from. the querry in which the elements need to be filtered
  return array.filter(x => x.toLowerCase().indexOf(query.toLowerCase()) !== -1);
} 
console.log(result(products, "Galaxy"));
//https://medium.com/weekly-webtips/using-array-filter-to-filter-search-criteria-in-es2015-1ad1e30f814
// Task 4. Add Google Pixel 6 Pro, OnePlus 10 Pro, iPhone 13 Pro Max to favorites
const favorite = favorites.push("Google Pixel 6 Pro", "OnePlus 10 Pro", "iPhone 13 Pro Max")
console.log(favorites);
// Task 5. remove OnePlus 10 Pro from favorites
const id = favorites.indexOf("OnePlus 10 Pro"); // 1
const removeProduct = favorites.splice(id, 1);
console.log(favorites);
//const x = 2;
//delete favorites[2];
//console.log(favorites);

// Task 6. Calculate and print the number of products that have "Pro" in their names
// Try to implement this in two ways. 1. using reduce 2. using filter and length
let pro = products.reduce((accumulator, number) => {
  if(number.includes("Pro")) {
    return accumulator += 1;
  } else {
    return accumulator;}
}, 0);
console.log(pro);
//print the number of products that have "Pro" in their names
let resultFilter = products.filter(name => name.includes("Pro"))
console.log(resultFilter);
// Task 7. Print an array that has either iOS or Android for each product based on the name
// e.g. if the product has iphone in the name, it should be iOS; otherwise it should be android
// the resulting array could be ["iOS", "iOS", "iOS", "Android", "Android", "Android", "Android"...]
let sortProduct = products.map((phones) => {
  if (phones.includes("iPhone")) {
    return "iOS"
  } else {
    return "Android"; }
});
console.log(sortProduct);
// Task 8. Print an array with the count of words for each product. Numbers could be regarded as words
// the resulting array could look sth like this [2, 3, 4, 2, 2, 3, 3, 2, 2, 3, 3, 3, 2, 2...]
let length = products.map((word) => {
  return word.split(" ").length;
});
console.log(length);

// Task 9. Print only the products that end with "Pro"
let END = ["Pro"],
productEnding = products.filter(words =>
  END.some(end => words.endsWith(end)));

console.log(productEnding);
// Task 10. Print the products that are NOT in the favorites array
const productsNotInFav = [];
for (i = 0; i < products.length; i++) {
  let found = false;
  for (j = 0; j < favorites.length; j++) {
    if (products[i] ===  favorites[j]) {
      found = true;
    } 
  }

  if (!found) { // if(!found) is it the same as saying if(found==0)
    productsNotInFav.push(products[i]);
  }
}

console.log(productsNotInFav);
// Task 11. Check if all the items in favorites are iPhones (have "iPhone" in the name). Print the boolean output.
let areAllIphone = true; // Default to true

for( let i = 0; i < favorites.length; i++) {
  if(favorites[i] !== "iphone") {
    areAllIphone = false;
  }
}
console.log(areAllIphone);
// OR 
let allIphone = favorites.every(check => check === "iphone");
console.log(allIphone);
// Task 12. Check if any of the items in favorites contain the number 12 or 13. Print the boolean output.
let allNumber = favorites.some((item) => {
  if(item.includes("13"  || "12")) {
  return true;
  }
});
console.log(allNumber);
