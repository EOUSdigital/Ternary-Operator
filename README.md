# 📗 Module 5. Logic and Control Flow - Lesson 06.01: Ternary Operator
## 📝  Steps 1 – 3: Core Concepts, Real-World Examples, and Quiz Review

---

## 🧠 Step 1: Explore the Topic

### 🎯 What is the Ternary Operator?

The ternary operator is a concise way to write an `if/else` statement in a single line:
```javascript
condition ? expressionIfTrue : expressionIfFalse;
```

- ✅ Ideal for quick value assignments
- ✅ Used often in UI updates, logic short-cuts, or conditional rendering
- ❌ Avoid for complex or deeply nested conditions

---

## 🌍 Step 2: Real-World Examples

1. **Ticket Pricing by Age**
```javascript
let ticket = age < 13 ? "Child: $5" : "Adult: $10";
```

2. **Login Status Message**
```javascript
let message = isLoggedIn ? "Welcome back!" : "Please log in.";
```

3. **Free Shipping Check**
```javascript
let shipping = cartTotal >= 50 ? "Free" : "$5";
```

4. **Quiz Feedback**
```javascript
let feedback = score >= 80 ? "Excellent!" : "Keep trying!";
```

5. **Safe Division**
```javascript
let result = num2 !== 0 ? num1 / num2 : "Error: Divide by 0";
```

---

## 📝 Step 3: Quiz Review

**Final Score: 10/10**

| # | Type       | Answer | Correct | Notes |
|---|------------|--------|---------|-------|
| 1 | MCQ        | B      | ✅       | Purpose is to shorten conditionals |
| 2 | MCQ        | C      | ✅       | Proper ternary syntax |
| 3 | MCQ        | B      | ✅       | Returns `"Yes"` when true |
| 4 | MCQ        | C      | ✅       | Syntax error if `:` is missing |
| 5 | MCQ        | A      | ✅       | Equivalent full `if/else` block |
| 6 | True/False | False  | ✅       | Can be used in more than assignments |
| 7 | True/False | False  | ✅       | You must specify comparison logic |
| 8 | True/False | True   | ✅       | Nesting is possible but not ideal |
| 9 | True/False | True   | ✅       | Valid in `console.log()` |
|10 | True/False | True   | ✅       | Best for short, simple logic |

---

## 🧾 Summary

- Ternary operator = short, expressive conditional logic
- Great for rendering, form validation, toggling messages, and logic output

