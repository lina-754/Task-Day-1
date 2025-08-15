// Intro to JavaScript — Revision Practice
// ----------------------------------------------------
// Instructions:
// 1) Open this file in VS Code (or any editor).
// 2) Work through the tasks in order. Replace the TODOs with code.
// 3) Run the file using:  node intro-js-revision.js
// 4) You should see outputs in your terminal for each console.log.
//
// NOTE: Try to predict the output BEFORE running, then confirm.
// ----------------------------------------------------

'use strict';

// ---------- Shared Dataset (reuse across tasks) ----------
const student = {
  name: "Amina",
  age: 19,
  contact: {
    email: "amina@example.com",
    phones: ["+201100000000", "+201122233344"]
  },
  favorites: {
    colors: ["red", "green", "blue"],
    books: [
      { title: "Eloquent JavaScript", authors: ["Marijn Haverbeke"] },
      { title: "You Don't Know JS", authors: ["Kyle Simpson"] }
    ]
  }
};

const classroom = {
  courseName: "Intro to JavaScript",
  batches: [
    {
      id: "AUG",
      students: [
        { id: "s1", name: "Amina", scores: [10, 15, 20] },
        { id: "s2", name: "Omar", scores: [12, 18, 17] }
      ]
    },
    {
      id: "SEP",
      students: [
        { id: "s3", name: "Sara", scores: [20, 19, 18] }
      ]
    }
  ],
  materials: ["console", "strings", "arrays", "objects"]
};

// Helper for visual separation of outputs
function hr(title) {
  console.log("\\n----- " + title + " -----");
}

// ========================================================
// A) Console basics
// ========================================================
hr("A) Console basics");
console.log("=======================");
console.log("=======================");

// 1) Log the course name from `classroom`.
console.log("course name: "+classroom.courseName);
console.log("====================================");

// 3) Log the entire `student` object, then log only `student.contact`.
console.log(student);
console.log("====================================");

console.log(student.contact);
console.log("====================================");

// 4) How many phone numbers does Amina have? (use phones array length from student object)
console.log(student.contact.phones.length);
console.log("====================================");

// 5) Log the third course material from classroom materials (use materials array from classroom object)
console.log("materials: "+classroom.materials);
console.log("====================================");

// ========================================================
// B) Strings vs. numbers (the `+` operator)
// ========================================================
hr("B) Strings vs. numbers");
console.log("=======================");
console.log("=======================");

// 6) Predict the outputs, then log them:
console.log(2 + 3);         //5
console.log("2" + 3);       //23
console.log(2 + "3");       //23
console.log("2" + "3");     //23
console.log(2 + 3 + "5");   //55
console.log("5" + 2 + 3);   //523

// 7) a="10", b=5. Log numeric sum (15) and string concatenation ("105").
console.log("====================================");

const a = "10";
const b = 5;
console.log(b + Number(a));
console.log(b + parseInt(a));
console.log(b + +a);
console.log(a + b);

// ========================================================
// C) Arrays & objects (direct access)
// ========================================================
hr("C) Arrays & objects");
console.log("=======================");
console.log("=======================");


// 9) Log Amina’s first phone number.
console.log(`Amina’s first phone number: ${student.contact.phones[0]}`);
console.log("====================================");

// 10) Log the LAST favorite color (no hardcoded index).
let lastColor=student.favorites.colors; //blue
console.log(`last favorite color: ${student.favorites.colors[lastColor.length-1]}`);
console.log("====================================");

// 11) Log the title of the second favorite book.
console.log(`the title of the second favorite book: ${student.favorites.books[1].title}`);
console.log("====================================");

// 12) From classroom.batches[0], log the name of the second student.
console.log(classroom.batches[0].students[1].name);
console.log(classroom.batches[0].students[1]);
console.log("====================================");

// 13) Add "purple" to favorite colors, then log the updated array.
/* TODO: push to student.favorites.colors */
student.favorites.colors.push("purple");
console.log("favorite colors"+student.favorites.colors);
console.log("====================================");

// ========================================================
// D) Deeply nested access (no loops required)
// ========================================================
hr("D) Deeply nested access");
console.log("=======================");
console.log("=======================");

// 14) Log the first author of the first favorite book.
console.log(`the first author of the first favorite book: ${student.favorites.books[0].authors}`);
console.log("====================================");

// 15) Log the second score for Omar.
console.log("the second score for Omar: "+classroom.batches[0].students[1].scores[1]);
console.log("====================================");

// ========================================================
// E) String methods practice
// ========================================================
hr("E) String methods");
console.log("=======================");
console.log("=======================");

const phrase = "  JavaScript is Fun and Powerful!  ";

// 19) Trim spaces from the phrase and log the result. (use phrase variable)
console.log(phrase.trim());
console.log("====================================");
let afterRemoveSpace = phrase.trim();

// 20) Log the phrase in UPPERCASE, then in lowercase. (use phrase variable)
console.log(afterRemoveSpace.toUpperCase());
console.log("====================================");

console.log(afterRemoveSpace.toLowerCase());
console.log("====================================");

// 22) Replace "Fun" with "Awesome" and log the new phrase. (use phrase variable)
console.log(afterRemoveSpace.replace("Fun","Awesome"));
console.log("====================================");


const csv = "Amina,19,amina@example.com";
/* TODO: split and log csv variable */
console.log(csv.split(","));
console.log("====================================");

// ========================================================
// F) Small challenge (no loops; indexing only)
// ========================================================
hr("F) Small challenge (Bounes 50 points)");
// 26) For each student in AUG, log: "Name — last score: X — contains 'a'? true/false"
// Use only console logs and indexing (no loops yet).
console.log("=======================");
console.log("=======================");

let s = classroom.batches[0];
let lastScore = s.students[0].scores;
console.log("first student: "+s.students[0].name+" ,last score: "+s.students[0].scores[lastScore.length-1]);
console.log(s.students[0].name.includes('a'));
console.log("secound student: "+s.students[1].name+" ,last score: "+s.students[1].scores[lastScore.length-1]);
console.log(s.students[1].name.includes('a'));

console.log("====================================");

// ----------------------------------------------------
// End of practice. Great job!
// ----------------------------------------------------
