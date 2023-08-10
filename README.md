# Automated Testing Documentation for SDLMS Login Process

Overview
Automated testing plays a crucial role in ensuring the reliability, functionality, and performance of the SDLMS (DeepThought Learning Management System) login process. This documentation outlines the testing approach, test cases, challenges faced, and instructions for running the tests using TestCafe.


Table of Contents
Introduction
Testing Approach
Test Cases
Valid Login
Invalid Login
Challenges Faced
Running Tests
Getting Started
Conclusion
Introduction
Reflecting on the learning process is fundamental for continuous improvement. This documentation focuses on automated testing using TestCafe for the SDLMS login process. Automated testing helps in gaining insights into the system's behavior, identifying issues, and ensuring a seamless user experience.

Testing Approach
The testing approach involves writing automated test scripts using TestCafe to simulate user interactions during the login process. This ensures that the login functionality is thoroughly validated, and any potential issues are detected early in the development cycle.

Test Cases
Valid Login
Enter a valid username and password.
Click the login button.
Verify successful login by checking the presence of the dashboard logo.
Invalid Login
Enter an invalid username and password.
Click the login button.
Verify the display of an error alert with a dismissal button.
Challenges Faced
No significant challenges were encountered during the testing process. The TestCafe framework provided a robust and efficient solution for automating the login tests.

Running Tests
To execute the automated tests, follow these steps:

Clone the repository. 
Navigate to the project directory using the terminal.
Install project dependencies using the command:

npm install
npm run testcafe chrome tests/login.js
npm run testcafe edge tests/login.js

Getting Started
Clone the repository:
Navigate to the project directory:cd login_automation_testing
install project dependencies:npm install
Run tests for Chrome:
npm run testcafe chrome tests/login.js

Run tests for Microsoft Edge:
npm run testcafe edge tests/login.js
Conclusion
Automated testing using TestCafe provides a reliable and efficient means of validating the SDLMS login process. By documenting the testing approach, test cases, and instructions for running tests, this documentation aims to enhance the quality and stability of the SDLMS platform, contributing to an enriched learning experience for users.

