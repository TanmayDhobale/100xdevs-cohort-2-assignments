/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/
function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};

  for (let i = 0; i < transactions.length; i++) {
    const { category, price } = transactions[i];

    // Check if the category is already in categoryTotals
    if (!categoryTotals[category]) {
      categoryTotals[category] = 0;
    }

    // Update the total spent for the category
    categoryTotals[category] += price;
  }

  const result = [];
  const categories = Object.keys(categoryTotals);

  for (let j = 0; j < categories.length; j++) {
    const category = categories[j];
    result.push({ category, totalSpent: categoryTotals[category] });
  }

  return result;
}


module.exports = calculateTotalSpentByCategory;
