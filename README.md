# Personal Budget Tracker 💰

Hi! This is my personal web application for tracking incomes and expenses. I built this learning project from scratch to practice my frontend development skills, master React hooks, and learn how to manage application state properly.

## What the app does (Features):
* **Add Transactions:** You can easily add any income or expense with an amount and a short description.
* **Real-time Math:** The app automatically calculates your Current Balance, Total Income, and Total Expense every time you change the list.
* **Row Selection & Actions:** You can click on any row in the history table to select it. Once selected, you can delete it using the big button in the footer, or edit its data.
* **Quick Edit Mode:** If you click edit, the transaction details automatically load back into the form so you can fix any mistakes.
* **Clear All:** A single button to wipe out the entire history and reset the balance to zero (only visible when you actually have transactions).
* **Empty State:** If there are no transactions yet, the app shows a clean placeholder encouraging you to add your first record.
* **LocalStorage:** Your data is safe! The app saves everything in the browser memory, so your history won't disappear after page reload.

## Tech Stack used:
* **React** (Functional components)
* **React Hooks:** `useState` for state management, `useEffect` for syncing with LocalStorage and handling edit mode.
* **CSS Modules:** For scoped and clean styling without class name conflicts.
* **React Icons:** Integrated `react-icons/fa6` library for modern UI icons.
* **JavaScript (ES6+):** Array methods like `.map()`, `.filter()`, `.reduce()`, and `.find()`.


## What I learned from this project:
While building this, I faced and fixed a lot of real-world bugs, like property name mismatches, handling event propagation (`e.stopPropagation()`), and fixing `undefined` value errors with data validation. I now have a much better understanding of React state lifting and component lifecycle!