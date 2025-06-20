//TODO 📗 Module 5. Logic and Control Flow - Lesson 06.01: Ternary Operator


//TODO  📝 Step 1: Explore the Topic

//* 🎯 What Is the Ternary Operator?
//  The ternary operator is a concise way to write simple if/else logic in a single line.

//  It is called “ternary” because it takes three operands:
//! condition ? expressionIfTrue : expressionIfFalse

//* 🧱 Example:

let access = age => 18 ? "Allowed" : "Denied";

//  This means:
//  • If age >= 18, then access = "Allowed"
//  • Otherwise, access = "Denied"

//* ✨ Why Use It?
//  • ✅ Cleaner and more readable for short, simple decisions
//  • ✅ Great for assigning values based on a condition
//  • ✅ Replaces small if/else blocks without sacrificing clarity

//* ⚠️ When Not to Use It
//  • ❌ When logic is complex or includes multiple conditions
//  • ❌ When readability suffers due to nesting or chaining
//  • ✅ In those cases, prefer a full if/else block

//* 🔧 Ternary vs. if/else

//  if/else
let score;
let message;
if (score > 50) {
    message = "Passed";
} else {
    message = "Failed";
}

//  ternary version
message = score > 50 ? "Passed" : "Failed";

//  Same outcome, less code.

//* 🔁 Can You Nest Them?
//  Yes, but it is tricky to read:

let grade = score > 90 ? "A" :
            score > 80 ? "B" :
            score > 70 ? "C" : "D";

//! ✔️ Use only if it's still readable. Otherwise, stick with if/else.


//TODO  📝 Step 2: Real-World Examples – Ternary Operator in Action

//  The ternary operator shines in everyday logic where you're making quick decisions in a single line. Here is how it is used in the real world:

//* 🎫 Example 1: Ticket Price for Age

let age;
let ticketPrice = age < 13 ? "Child: $5" : "Adult: $10";

//  If the user is under 13, show a child price; otherwise, an adult price.
//! 🧠 Real-world use: websites or kiosks setting prices based on user age.


//* 🔐 Example 2: Login Status Message

let isLoggedIn;
let message2  = isLoggedIn ? "Welcome back!" : "Please log in.";

//  Change UI text based on authentication state.
//! 🧠 Real-world use: every app with a login system.


//* 📦 Example 3: Shipping Fee

let cartTotal;
let shipping = cartTotal >= 50 ? "Free" : "$5";

//  Give free shipping if a purchase is over $50.
//! 🧠 Real-world use: e-commerce platforms like Amazon or Etsy.


//* 🎯 Example 4: Quiz Result Feedback

let result = score >= 80 ? "Excellent!" : "Keep trying";

//  Reward high scores, gently motivate lower ones.
//! 🧠 Used in learning apps and quiz platforms.


//* 🛑 Example 5: Prevent Division by Zero

let num1;
let num2;
let safeDivide = num2 !== 0 ? num1 / num2 : "Error: Divide by 0";

//  Cleanly avoids a crash and shows a message.
//! 🧠 Useful in calculators and financial dashboards.


//* 🔍 Key Takeaways
//  • Great for inline decisions
//  • Can be used in return, console.log, assignments, JSX, and more
//  • Improves conciseness, but not a replacement for all conditionals


//TODO  📝 Step 3: Quiz Ternary Operator

//? Multiple Choice

//* 1. What is the purpose of the ternary operator?
//  A. To loop over arrays
//  B. To shorten conditional statements
//  C. To compare strings
//  D. To replace all if/else logic

//! Answer: B

//* 2. Which of the following is a valid ternary expression?
//  A. condition ? resultIfTrue , resultIfFalse
//  B. if (condition) ? result1 : result2
//  C. condition ? resultIfTrue : resultIfFalse
//  D. condition : resultIfTrue ? resultIfFalse

//! Answer: C

//* 3. What will this return?

let result2 = 10 > 5 ? "Yes" : "No";

//  A. 10
//  B. Yes
//  C. No
//  D. true

//! Answer: B

//* 4. What happens if you omit the : in a ternary?
//  A. It still works
//  B. JavaScript adds it automatically
//  C. It throws a syntax error
//  D. It treats it as an if statement

//! Answer: C

//* 5. Which is equivalent to this?

let status = age >= 18 ? "Adult" : "Minor";

//  A. if (age >= 18) { status = "Adult" } else { status = "Minor" }
//  B. status = age >= 18;
//  C. status == "Adult" : "Minor"
//  D. status = "Adult" && "Minor"

//! Answer: A


//* True or False

//  6. Ternary expressions can only be used in variable assignments.
//! Answer: False

//  7. The ternary operator uses === for comparisons by default.
//! Answer: False

//  8. Ternaries can be nested, but readability can suffer.
//! Answer: True

//  9. You can use a ternary inside a console.log() statement.
//! Answer: True

//  10. Ternary operators are best for short, simple decisions.
//! Answer: True
