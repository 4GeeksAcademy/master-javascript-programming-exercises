<!-- hide -->
<div align="center">

# Master Javascript Practicing

[![Certified tutorial](https://img.shields.io/badge/4Geeks-certified%20tutorial-2563eb)](https://4geeks.com/en/interactive-exercise/master-javascript-exercises)
[![Autograded with LearnPack](https://img.shields.io/badge/LearnPack-162%20autograded%20exercises-2563eb)](https://learnpack.co)
[![Open in GitHub Codespaces](https://img.shields.io/badge/Open%20in-GitHub%20Codespaces-fb5a1f?logo=github)](https://codespaces.new/?repo=4GeeksAcademy/master-javascript-programming-exercises)

*These instructions are also available in [Spanish](https://github.com/4GeeksAcademy/master-javascript-programming-exercises/blob/HEAD/README.es.md).*

</div>
<!-- endhide -->

Master Javascript Practicing is an interactive tutorial with 162 auto-graded JavaScript exercises plus a welcome page. Every exercise carries a Jest suite — 988 test cases in total, an average of 6 per exercise — and a reference solution. It declares 50 hours of work and climbs from a one-line `isOldEnoughToDrink` boolean to binary search, a longest-palindrome finder and a prototype-based phone-number formatter.

<!-- hide -->
## 📋 About this tutorial

- **Difficulty**: declared as `easy` in [learn.json](https://github.com/4GeeksAcademy/master-javascript-programming-exercises/blob/HEAD/learn.json), but the curve is long: exercise 001 returns `age >= 21` and exercise 154 asks for the longest palindrome inside a sentence.
- **Duration**: 50 hours (`"duration": 50` in learn.json).
- **Exercises**: 163 folders inside [`exercises/`](https://github.com/4GeeksAcademy/master-javascript-programming-exercises/tree/HEAD/exercises) — 1 welcome page and 162 coding exercises numbered 001 to 155, with no gaps (some numbers are split into `142.1`, `143.2`, `155.4` and so on).
- **Automatic grading**: yes, `"graded": true` and `"grading": "isolated"`. All 162 coding exercises ship a `test.js` Jest suite, 988 test cases in total.
- **Technologies**: plain JavaScript on Node.js 22, Jest 29.7.0 and the `rewire` module, orchestrated by LearnPack 5.0.348 with the `@learnpack/node` plugin 1.1.15.
- **Video solutions**: none (`"videoSolutions": false`), but all 162 coding exercises ship a hidden reference solution file.
- **Instructions available in**: [English](https://github.com/4GeeksAcademy/master-javascript-programming-exercises/blob/HEAD/README.md) and [Español](https://github.com/4GeeksAcademy/master-javascript-programming-exercises/blob/HEAD/README.es.md) — all 163 folders carry both a `README.md` and a `README.es.md`.
<!-- endhide -->

## 🎯 What will you learn?

The exercises are ordered so each block reuses the previous one. Counting across the 162 reference solutions:

- **Writing functions that return, not print.** Almost every exercise is "declare a function that, given X, returns Y"; a dozen ask you to modify the object you were handed instead. Either way, nothing is ever graded from what you print.
- **Booleans and operators**: `>`, `<`, `===`, `%`, `&&`, `||` and negation, in the 001–028 block (`isEven`, `isOdd`, `areBothOdd`, `isEitherEven`, `isEvenAndGreaterThanTen`).
- **Object literals**: reading a key, adding one, and deleting one. The `delete` operator appears in 9 reference solutions; `hasOwnProperty` in 2.
- **The `Math` object**: `Math.PI`, `Math.pow`, `Math.sqrt`, `Math.abs`, `Math.floor`, `Math.min` and `Math.max` appear across 9 reference solutions — five of them in the circle-and-powers block 042–046, the rest in `findMinLengthOfThreeWords`, `findMaxLengthOfThreeWords`, `multiply` and the binary search.
- **Array methods**: counting calls across the reference solutions, `push` appears 19 times, `map` 13, `filter` 10, `slice` 9, `split` 7, `join` 5 and `forEach` 5, plus `shift`, `unshift`, `pop`, `splice`, `concat`, `reverse`, `reduce` and `Array.isArray` (17).
- **Every loop shape**: 22 solutions use the classic counted `for`, 19 use `for...of`, 12 use `for...in` and 3 use `while`. 24 use arrow functions, so you get to compare both styles on the same kind of problem.
- **Nested data**: objects whose values are arrays (exercises 092–110) and arrays of objects that contain arrays of objects (the four `155-FashionInventory` exercises).
- **Type checking**: `typeof` appears in 11 solutions — filtering an object's values by type in the 067–075 block, and picking out only the strings or only the numbers from an array holding both in exercises 124–127.
- **Classic algorithms**: binary search, palindrome detection, string rotation, isograms, outlier detection and pair-sum searching (exercises 148–154).
- **Prototype-based objects**: exercise 153 hands you a constructor function with six `prototype` methods — two of them already written — and asks you to fill in the other four.

Some things are deliberately out of scope. Across every `README.md`, `app.js`, `test.js` and reference solution in the repository — 649 files — there is not a single ES6 `class`, `async`, `await`, `Promise`, `fetch`, `document.` or `.sort()`. This is pure language practice: no DOM, no browser, no network.

## 👀 What will you build?

162 small functions, each in its own numbered folder, each verified by its own test file. The blocks:

**001–049 — conditionals, strings and arithmetic (49 exercises).** `checkAge('Adrian', 21)` must return the exact string `'Welcome, Adrian!'` and `checkAge('Adrian', 20)` the exact string `'Go home, Adrian!'`. Then `getFullName`, `isSameLength`, `computeAverageLengthOfWords`, and the geometry set: area and perimeter of rectangles, triangles and circles, `computePower`, `computeSquareRoot`, `doubleSquareRootOf`.

**050–091 — arrays, strings and object surgery (42 exercises).** Getting the nth, first and last element; `getElementsAfter` and `getElementsUpTo`; the paired exercises that force you to notice the difference between mutating and copying (`removeFromFront` vs `removeFromFrontOfNew`, `addToBack` vs `addToBackOfNew`). `extend` copies the second object's properties into the first *without* overwriting existing keys, and eight `remove…` exercises delete properties by type or by value. Also `countCharacter`, `getAllLetters`, `getAllWords`, `convertDoubleSpaceToSingle`, and `keep([1, 2, 3, 2, 1], 2)` returning `[2, 2]`.

**092–127 — nested data and whole-array algorithms (36 exercises).** Eighteen exercises reach inside an object to work on an array stored at a key: `getAverageOfElementsAtProperty`, `getSquaredElementsAtProperty`, `getProductOfAllElementsAtProperty`. `select(['a', 'c', 'e'], {a: 1, b: 2, c: 3, d: 4})` must return `{ a: 1, c: 3 }` and ignore keys that are not in both. Then `countAllCharacters`, `joinArrayOfArrays` on a matrix, and four exercises on arrays holding strings *and* numbers at once, where you have to filter by type before comparing.

**128–141 — numbers and reasoning (14 exercises).** `calculateBillTotal(20)` must return exactly `24.9` (9.5% tax and 15% tip, each applied to the original amount). `computeCompoundInterest(1500, 0.043, 4, 6)` must return `438.83682213410543`, unrounded. `convertScoreToGrade(104)` must return `'INVALID SCORE'`. Then factorial, digit sums, and the trio that bans the operator you would normally reach for: `modulo`, `isOddWithoutModulo` and `isEvenWithoutModulo`.

**142.1–143.3 — shape conversions (6 exercises).** `transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'])` returns `{ Queen: 'Beyonce' }`. `transformEmployeeData` turns an array of key/value pairs into an array of objects, and `convertObjectToList` does the reverse.

**144–155.4 — the hard block (15 exercises).** `flipEveryNChars('a short example', 5)` returns `'ohs axe trelpma'`. `detectOutlierValue('2 4 7 8 10')` returns `3`, the 1-indexed position of the only odd number. `findPairForSum([3, 34, 4, 12, 5, 2], 9)` returns `[4, 5]`. `search([1, 3, 16, 22, 31, 33, 34], 31)` returns `4` using binary search, and `null` when the value is absent. `isIsogram('Cactus')` returns `false`. `PhoneNumberFormatter([6, 5, 0, 8, 3, 5, 9, 1, 7, 2]).render()` returns `'(650) 835-9172'`. `findLongestPalindrome('My dad is a racecar athlete')` returns `'a racecar a'`. And the four fashion-inventory exercises walk an array of designers, each with an array of shoes, to produce a matrix, a per-designer average price, a filtered matrix and a word-index report.

## 🎓 What do you need before starting?

Nothing installed, if you open the repository in GitHub Codespaces: the dev container provisions Node.js 22, Jest and the LearnPack Node plugin by itself.

What you do need is prior JavaScript. The welcome page states it plainly: this is the last set in a series, and it points you at the three that come first.

- [JavaScript for beginners](https://github.com/4GeeksAcademy/javascript-beginner-exercises-tutorial) — variables, types, conditionals.
- [Arrays](https://github.com/4GeeksAcademy/javascript-arrays-exercises-tutorial) — indexing, loops over lists.
- [Functions](https://github.com/4GeeksAcademy/javascript-functions-exercises-tutorial) — parameters, `return`, scope.

If you can already declare a function and loop over an array, start here. Exercise 001 is still a single comparison, so the on-ramp is gentle even though the last block is not.

## ✅ How does the automatic grading work?

Each exercise folder holds a `test.js` file written with Jest. The suite never reads what your file prints: it uses [`rewire`](https://github.com/jhnns/rewire) to reach inside `app.js` and pull out your function by name, like this:

```js
const rewire = require('rewire');
const keep = rewire('./app.js').__get__('keep');
```

From there, each `test()` block calls your function and inspects the value it hands back. A typical suite has four to six checks that escalate: the function exists, it returns something, it returns the right type, and then two or three real cases. The shortest suites run 3 checks — exercise 006 is one of the eight that do — and the longest is exercise 153 with 18, which exercises each of the six prototype methods before checking the final rendered string.

Grading is `"isolated"`, so each exercise is evaluated on its own and a failure in one never blocks another.

> 💡 Two of the 162 exercises grade more than one function at a time: `128-averageIntegers` extracts both `sum` and `average`, and `154-longestPalindrome` extracts `reverseString`, `isPalindrome` and `findLongestPalindrome`. Leaving any of the skeleton's functions empty fails the suite even if your main function is correct.

## 💡 What mistakes should you avoid?

- **Printing instead of returning.** 100 of the 162 `app.js` files end with a `console.log(...)` demo line. That line is there so you can see your output while you work; the tests never read stdout. `keep([1, 2, 3, 2, 1], 2)` has to *return* `[2, 2]`.
- **Renaming the function, or trusting the folder name.** `rewire(...).__get__('name')` fails outright if the name does not match, and in 20 folders the folder name is not the function name. `012-isLessThanThirty` wants `isLessThan30`; `096-getElementsLessThanOneHundredAtProperty` wants `getElementsLessThan100AtProperty`; `123-joinArraysOfArrays` wants `joinArrayOfArrays` (singular "Array"); `134-convertScoreToGradeWithPlus` wants `convertScoreToGradeWithPlusAndMinus`; `152-isogram` wants `isIsogram`; `154-longestPalindrome` wants `findLongestPalindrome`. Always read the function name from the instructions or from the skeleton in `app.js`.
- **Returning a copy when the test inspects the original.** Twelve suites assert on the object you were handed rather than on a copy you build: `030`, `031`, `037`, `066`, `067`, `068`, `069`, `070`, `072`, `073`, `074` and `075`. Those exercises must mutate in place. Ten of them never look at your return value at all; `030` and `037` check it too, so in those two you must mutate *and* return the object.
- **Reaching for `Object.assign` in exercise 066.** `extend` must not overwrite a key the first object already has: with `{a: 74, b: 22}` and `{b: 2227, c: 91}`, the expected result is `{a: 74, b: 22, c: 91}`, keeping `b: 22`.
- **Rounding money.** `calculateBillTotal(20)` is compared with `toBe(24.9)` and `calculateBillTotal(36)` with `toBe(44.82)`, so apply each rate separately to the original amount and do not round. Same in exercise 137, where the expected value carries all 14 decimals of `438.83682213410543`.
- **Getting exact strings almost right.** `convertScoreToGrade` returns `'INVALID SCORE'` in capitals for anything outside 0–100. `greetCustomer('Joe')` must return `"Welcome back, Joe! We're glad you liked us the first time!"` with a straight apostrophe, and `greetCustomer('Carl')` — a name that is not in `customerData` — must return `'Welcome! Is this your first time?'`.
- **Sorting before searching in exercise 149.** `findPairForSum` is expected to scan left to right: with `[3, 34, 4, 12, 5, 2]` and target 9 the answer is `[4, 5]`, but adding a `6` at the end makes the answer `[3, 6]`, because 3 now finds a partner earlier in the scan.
- **Assuming exercise 154 gets clean input.** Its instructions promise "only letters", yet the second test case is `"Madam, i'm adam"` and the expected answer is `'Madam'` — capital M preserved. Compare case-insensitively, but return the substring exactly as it appears in the original string.
- **Skipping the provided helpers.** Exercises 128, 153 and 154 give you a skeleton with several functions and the tests check every one of them individually.

## ❓ Frequently asked questions

### How long does it take to finish these JavaScript exercises?

`learn.json` declares 50 hours. Spread across 162 exercises that averages about 18 minutes each, but the distribution is heavily skewed: the first fifty exercises are one-liners you can clear in two or three minutes, while a single exercise in the 148–155 block can eat an hour.

### Do I need to know JavaScript before starting?

Yes, the basics. The welcome page says this is the last of a series and links to the beginner, arrays and functions tutorials that come before it. You do not need any object-oriented background: exercise 153 is the only one that uses a constructor function, and it comes with the skeleton already written.

### How many exercises are actually auto-graded?

All 162 coding exercises, adding up to 988 Jest test cases and 1,009 assertions. The only folder without a test is `00-Welcome`, which is an intro page rather than an exercise. 109 of the 163 folders also include a hints section, and 161 include a worked example showing the expected output.

### Do I have to install anything on my computer?

No. Opening the repository in Codespaces gives you a ready-made container with Node.js 22, Jest 29.7.0 and LearnPack already installed. A local setup is possible and documented below if you prefer working on your own machine.

### Are there solutions I can compare against?

Yes, but no videos. `learn.json` sets `videoSolutions` to `false`. Instead, each of the 162 coding folders ships a hidden reference solution file next to `app.js`. Read it after you have solved the exercise — the same problem usually has several valid answers, and the reference is only one of them.

### Is practising this many small functions still worth it?

These 162 problems train the mechanics that show up in any code review: deciding whether to mutate or copy, picking `map` versus `filter` versus `reduce`, walking a nested structure without losing track of which level you are on, and matching an exact return contract. What this set does *not* cover is asynchronous JavaScript, the DOM or modules, so plan a separate tutorial for those.

<!-- hide -->
## 🚀 How to start

The fastest path is one click: [open this tutorial in GitHub Codespaces](https://codespaces.new/?repo=4GeeksAcademy/master-javascript-programming-exercises). There is also a [Gitpod](https://gitpod.io#https://github.com/4GeeksAcademy/master-javascript-programming-exercises) alternative.

Once VS Code is open, the LearnPack exercises should start on their own. If they do not, run this in the terminal:

```bash
learnpack start
```

## 💻 Local installation

**Step 1.** Install LearnPack, the Node plugin and Jest, using the same versions the dev container provisions:

```bash
npm i @learnpack/learnpack@5.0.348 -g && learnpack plugins:install @learnpack/node@1.1.15
npm i jest@29.7.0 jest-environment-jsdom@29.7.0 -g
```

**Step 2.** Clone the repository and move into it:

```bash
git clone https://github.com/4GeeksAcademy/master-javascript-programming-exercises.git
cd master-javascript-programming-exercises
```

**Step 3.** Start the tutorial from the same folder as `learn.json`:

```bash
learnpack start
```

## 📚 How the exercises are organized

Each exercise is a folder inside `exercises/` and contains these files:

- `app.js` — the file you edit and the one the computer runs. Present in all 162 coding exercises.
- `README.md` — the instructions, in English.
- `README.es.md` — the same instructions in Spanish. Present in all 163 folders.
- `test.js` — the Jest suite. You never open it. Present in all 162 coding exercises.
- A hidden solution file — the reference answer. Present in all 162 coding exercises, named `solution.hide.js` everywhere except `011-isGreaterThanTen`, where the file is called `solutions.hide.js`.

The folder `00-Welcome` holds only the two READMEs: it is the intro page, not an exercise.

Found a bug or a typo? Open an issue in [this repository](https://github.com/4GeeksAcademy/master-javascript-programming-exercises/issues) — the exercises were built collaboratively and reports are welcome.

## 🤝 Contributors

The tutorial was started by [Alejandro Sanchez (alesanchezr)](https://github.com/alesanchezr), and these are the people with the most commits in the repository today:

- [Jose Mora (josemoracard)](https://github.com/josemoracard) — 1,196 commits
- [Tomas Gonzalez (tommygonzaleza)](https://github.com/tommygonzaleza) — 367 commits
- [Martín Suárez (kiddopro)](https://github.com/kiddopro) — 110 commits
- [Elvira Quiroz (ElviraQDP)](https://github.com/ElviraQDP) — 105 commits
- [Alejandro Sanchez (alesanchezr)](https://github.com/alesanchezr) — 96 commits
- [Ernesto Gonzalez (UmiKami)](https://github.com/UmiKami) — 43 commits
- [Paolo Lucano (plucodev)](https://github.com/plucodev) — 39 commits

Plus [everyone else in the contributors graph](https://github.com/4GeeksAcademy/master-javascript-programming-exercises/graphs/contributors). This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)), and contributions of any kind are welcome.

This tutorial is one of many built by students and teachers at [4Geeks Academy](https://4geeks.com).
<!-- endhide -->
