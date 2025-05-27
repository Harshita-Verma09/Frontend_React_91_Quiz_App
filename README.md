# React Quiz App

A simple and interactive quiz application built with React, demonstrating the use of `useState` for managing component state and `useMemo` for optimizing performance by memoizing calculated values.

---

## Features

* **Dynamic Question Display:** Renders questions and their options sequentially.
* **Score Tracking:** Keeps a running tally of correct answers.
* **Optimized Score Calculation:** Uses `useMemo` to prevent unnecessary re-calculations of the score.
* **Responsive Styling:** Basic Tailwind CSS for a clean and mobile-friendly interface.

---

## How it Works

The application manages two main pieces of state:

* `currentQ`: An index that tracks the currently displayed question from the `questions` array.
* `answers`: An array that stores objects for each answered question, indicating whether the user's choice was correct.

When a user selects an option, the `handleAnswer` function:

1.  Determines if the selected answer is correct.
2.  Updates the `answers` state with the result for the current question.
3.  Increments `currentQ` to move to the next question.

The `score` is calculated using `useMemo`. This hook ensures that the score is only re-calculated when the `answers` array changes, preventing redundant computations on every render.

---

## Installation and Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Run the application:**
    ```bash
    npm start
    # or
    yarn start
    ```

    This will open the app in your browser, usually at `http://localhost:3000`.

---

## Technologies Used

* **React:** A JavaScript library for building user interfaces.
* **Tailwind CSS:** A utility-first CSS framework for rapid UI development.

---

## Customization

* **Add/Edit Questions:** Modify the `questions` array in `QuizApp.js` to add, remove, or change quiz questions, options, and correct answers.
* **Styling:** Adjust the Tailwind CSS classes in `QuizApp.js` or integrate your own CSS for a different look and feel.

---

## Learnings Demonstrated

* `useState`: Managing component-specific state.
* `useMemo`: Optimizing performance by memoizing expensive calculations.
* Conditional Rendering: Displaying different UI based on the quiz progress.
* Event Handling: Responding to user interactions (button clicks).
* Array Methods: Using `map` for rendering lists and `filter` for calculating the score.
