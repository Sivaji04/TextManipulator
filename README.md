Real-Time Text Statistics and String Replacement TextManipulator App

This project is a React application that provides real-time text analysis, including a unique word count, character count excluding spaces and punctuation, and string replacement functionality with highlighting of replaced words.

Features
1. Real-Time Unique Word Count
Displays the number of unique words in the input.
Words are considered case-insensitively (i.e., "Hello" and "hello" count as the same word).
2. Character Count (Excluding Spaces and Punctuation)
Shows the number of characters in the input, excluding spaces, punctuation, and special characters.
Only letters and numbers are counted.
3. Dynamic String Replacement
Two input fields are provided:
Input 1: The string you want to search for.
Input 2: The string you want to replace the first string with.
A "Replace All" button replaces all occurrences of the first string with the second string in the textarea content.
The replacement is case-sensitive.
4. Bonus Feature: Highlighting Replaced Words
After replacing a string, the replaced words are highlighted in the textarea for visual reference.
Technologies Used
React (Functional Components with Hooks)
bootstrap for basic styling and responsiveness.

Live Demo
You can check out the live demo of the app at: [[App Live URL](https://rococo-cannoli-44585b.netlify.app/)]

Installation and Setup Instructions
To run the project locally, follow these steps:

Clone the repository:-
git clone [(https://github.com/Sivaji04/TextManipulator.git)]

Navigate into the project directory
-> cd TextManipulator

Install dependencies
-> npm install

Run the app
->npm start

Open your web browser and navigate to http://localhost:3000 to view the app.

This will start the development server, and the app will be available at http://localhost:3000.

Usage
Type or paste text into the large textarea provided.
As you type, the following statistics will be displayed in real-time:
Unique word count.
Character count excluding spaces and punctuation.

To perform a string replacement:
Enter the string you want to search for in the first input field.
Enter the replacement string in the second input field.
Click "Replace All" to replace all instances of the first string with the second string.
The replaced words will be highlighted in the textarea.
Example
Input Text: "Hello world! Hello React."
Unique Word Count: 3 ("hello", "world", "react")
Character Count (Excluding spaces and punctuation): 17
After string replacement ("Hello" → "Hi"):
Replaced Text: "Hi world! Hi React."
The words "Hi" will be highlighted.

Responsive Design
The app is designed to work across various screen sizes, ensuring a smooth experience on both desktop and mobile devices.
Project Structure

.
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   └── About.js
|   |   └── Alert.js
|   |   └── Navbar.js
|   |   └── TextForm.js
│   |
│   ├── App.js
│   ├── index.js
│   └── ...
├── README.md
└── package.json

Bonus Features
The replaced words are highlighted after the replacement, offering visual feedback.
Author
[Sivaji Sudula]
[sudula444@gmail.com]
License
This project is licensed under the MIT License.
