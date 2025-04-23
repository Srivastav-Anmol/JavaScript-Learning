# Understanding Callback Functions

A **callback function** is like a "to-do list" that gets completed later, usually after a specific task is finished. It’s a way of saying, "Once you're done with this, do this other thing."

## Real-Life Example: Ordering Food

Imagine you're at a restaurant, and you place an order. It takes time to prepare your food, right? You don’t just sit there waiting in silence. Instead, the staff tells you when your food is ready. You gave them your order (the task), and then they call you once it’s done. Meanwhile, you can relax, check your phone, or chat while you wait.

## How It Works in Programming

In programming, a **callback** is a function you define and pass into another function. The second function does some work (like preparing the food), and when it's done, it calls the callback function to handle the result (like bringing the food to your table).

---

## Key Takeaways:
- A **callback function** allows your program to wait for something to finish (like preparing food) and then do something once it’s done (like eating the food).
- Callbacks are super useful when you don’t want your program to just sit and wait; instead, it can continue doing other things while waiting for a task to finish.

## Code Example in JavaScript

```javascript
function orderFood(callback) {
  console.log("Ordering food...");
  setTimeout(function() {
    console.log("Food is ready!");
    callback();  // Call the callback function when the food is ready
  }, 3000);  // Simulate a 3-second wait time for food to be prepared
}

function enjoyFood() {
  console.log("Yum! I'm eating now.");
}

orderFood(enjoyFood);  // Pass the "enjoyFood" function as a callback
