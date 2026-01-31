Singlish to Sinhala Translator – Automated Testing

ITPM Assignment 01 – Playwright Automation

📌 Project Overview

This repository contains the automated test suite developed for the Singlish to Sinhala Translator web application.
The purpose of this project is to validate the functional correctness, error handling, and user interface behavior of the system using Playwright automation testing.

The testing approach covers:

Valid Singlish sentence conversions

Handling of invalid or malformed inputs

Real-time Sinhala output updates in the user interface

Cross-browser execution to ensure compatibility

🎯 Objectives of the Testing

The main objectives of this testing project are:

To verify that valid Singlish inputs are correctly converted into Sinhala

To evaluate system behavior for invalid, distorted, or malformed inputs

To validate real-time UI updates while typing

To ensure the application remains stable, responsive, and usable

To apply industry-standard automation testing practices

🧪 Test Types Covered
1️⃣ Positive Functional Test Cases

Positive test cases validate the expected behavior of the system when valid Singlish input is provided.

Examples include:

Simple daily sentences

Compound and conditional sentences

Polite requests and greetings

Mixed English + Singlish sentences

Medium and long inputs (paragraph-level)

✔ These tests are expected to PASS
✔ They verify accuracy and correctness of translations

2️⃣ Negative Functional Test Cases

Negative test cases are designed to validate system behavior when invalid or incorrect inputs are provided.

Examples include:

Heavy spelling errors

Excessive repeated characters

Mixed symbols and numbers

Random or meaningless text

Distorted sentence structures

⚠️ These test cases:

PASS in automation execution

Are marked as FAIL in the test case documentation

Demonstrate robustness and error handling

This follows correct QA industry practice.

3️⃣ UI (User Interface) Test Cases

UI test cases validate the interactive behavior of the application.

Covered scenarios:

Real-time Sinhala output updates while typing

Output stability when interacting with UI controls

Input clearing and retyping behavior

UI responsiveness without lag or freezing

✔ Ensures usability and user experience quality

📐 Input Length Classification

All test cases are categorized based on input length:

Type	Description
S (Small)	Short simple sentences (≤30 characters)
M (Medium)	Compound or mixed sentences
L (Large)	Long paragraph-style inputs

This classification ensures balanced test coverage.

🛠 Tools & Technologies Used

Playwright – End-to-end automation testing

JavaScript – Test scripting language

Node.js – Runtime environment

HTML Reporter – Test execution reports

GitHub – Version control & project submission

🌍 Cross-Browser Testing

Tests are executed on multiple browsers to ensure compatibility:

Chromium (Google Chrome)

Firefox

WebKit (Safari)

This validates consistent behavior across browsers.

📂 Project Structure
itpm-assignment-1/
│
├── tests/
│   ├── positive-functional.spec.js
│   ├── negative-functional.spec.js
│   ├── negative-functional-medium.spec.js
│   └── ui.spec.js
│
├── playwright.config.js
├── package.json
└── README.md

▶️ How to Run the Tests
Install dependencies
npm install

Install Playwright browsers
npx playwright install

Run all tests
npx playwright test

View test report
npx playwright show-report

📊 Test Case Documentation

All test cases are documented in an Excel sheet according to assignment guidelines, including:

Test Case ID

Test Case Name

Input Length Type

Input

Expected Output

Actual Output

Status (Pass / Fail)

Accuracy Justification

Coverage Description

✅ Conclusion

This project successfully demonstrates:

Functional correctness of the Singlish to Sinhala Translator

Proper handling of invalid and malformed inputs

Stable and responsive UI behavior

Application of professional automation testing practices

The test suite ensures the system is accurate, robust, user-friendly, and production-ready.

👤 Author

Name: Kumara R.U.C.
Module: ITPM
Assignment: 01
Testing Framework: Playwright
