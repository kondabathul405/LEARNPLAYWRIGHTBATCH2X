# Learn Playwright Batch 2x

A hands-on repository for learning **Playwright** with **JavaScript** fundamentals. Covers core JavaScript concepts including variables, scoping, hoisting, functions, identifiers, literals, operators, conditionals, switch statements, loops, arrays, and real-world exercises.

## Chapter Overview

| # | Chapter | Files | Topics |
|---|---------|-------|--------|
| 1 | Playwright Basics | `01_Basics.js`, `02_JS.js`, `03_Verify_setup.js`, `04_Hotcode.js`, `05_JS_Basics.js` | Hoisting, basic JS, Node verification, hot-code reload, var reassignment |
| 2 | JavaScript Concepts | *(placeholder)* | - |
| 3 | Identifiers & Literals | `06_Identifier_Rules.js`, `07_identifier_part2.js` | Naming rules, conventions (camelCase, PascalCase, snake_case, etc.) |
| 4 | JavaScript Basics | `08_comments.js` – `21_jr_QA.js` | Comments, var/let/const, functions, scoping, hoisting, TDZ |
| 5 | Literals | `22_literal.js` – `29_Backtick_single_double.js` | null, undefined, typeof, strings, template literals, quotes |
| 6 | Operators | `30_Operator.js` – `47_Advanced_ic_De_op.js` | Arithmetic, comparison (strict/loose), logical, ternary, nullish coalescing, increment/decrement |
| 7 | If / Else | `48_IF_ELSE.js` – `58_Leapyear.js` | Conditionals, grade calculator, leap year, API status checks |
| 8 | Switch Statements | `59_switch.js` – `67_IQ4.js` | Switch, fall-through, grouping, boolean expressions |
| 9 | User Input | `68_Usernput.js` | prompt(), type conversion, even/odd check |
| 10 | Loops | `71_For_Loop.js` – `82_IQ.js` | for, while, do-while, continue, interview Q&A |
| 11 | Arrays | `83_Arrays.js` – `95_Array_checking.js` | Create, access, modify, splice/slice, search, iterate, map/filter/reduce, sort, concat, validation |
| 12 | Functions | `96_functions.js` – `112_IQ.js` | Declarations, expressions, arrows, params/return, default params, interview Q&A |
| 13 | Strings | `118_strings.js` – `123.SC.js` | Creation, properties, search/check, substring/slice, type coercion |
| 14 | Objects | `124_Objects.js` – `137_let_const_obj.js` | Creation, reference vs primitive, destructuring, spread, get/set, static methods |
| 15 | 2D Array | `138_2D_Array.js` – `142_Right_pattern_py.js` | Nested arrays, matrix iteration, real-world test data, functional programming |
| 16 | Callback | `143_callback.js` – `150_CB_hell.js` | Named/anonymous/arrow callbacks, async (setTimeout), sync (forEach), callback hell |
| - | Tasks (18th May) | 5 files | Even/odd, max-of-two, max-of-three, grade calculation, reverse pyramid |

## Detailed File Listing

### Chapter 1 — Playwright & JS Basics
| File | Description |
|------|-------------|
| `01_Basics.js` | Hoisting: var vs let/const, function declarations vs expressions, TDZ |
| `02_JS.js` | Basic let variable, for loop to 100k, function call |
| `03_Verify_setup.js` | Node.js env check: platform, arch, version |
| `04_Hotcode.js` | Hot-code reload demo: add() function called 10k times |
| `05_JS_Basics.js` | var reassignment |

### Chapter 3 — Identifiers & Literals
| File | Description |
|------|-------------|
| `06_Identifier_Rules.js` | Valid JS identifiers: $, _, case sensitivity |
| `07_identifier_part2.js` | Naming conventions with examples |

### Chapter 4 — JavaScript Basics
| File | Description |
|------|-------------|
| `08_comments.js` | Single-line, multi-line, JSDoc comments |
| `09_var_let_const.js` | var redeclaration, let/const comparison |
| `10_functions.js` | Function declaration and invoking |
| `11-var_explaned.js` | var is function-scoped, not block-scoped |
| `12_let_loved.js` | let is block-scoped |
| `13_const_explained.js` | const immutability, block scope |
| `14_var_function_scope.js` | var function scope deep dive |
| `15_let_scope.js` | let block scope deep dive |
| `16_Hosting.js` | var hoisting logs undefined before init |
| `17_hoisting_function.js` | Hoisting inside function scope |
| `18_let_hoisting.js` | let TDZ — cannot access before init |
| `19_let_hoisting_block.js` | let block vs global scope |
| `20_let_const.js` | const constant declaration |
| `21_jr_QA.js` | API endpoint constant example |

### Chapter 5 — Literals
| File | Description |
|------|-------------|
| `22_literal.js` | typeof for string, boolean, number, null, undefined |
| `23_null_undefined.js` | null vs undefined, typeof quirks |
| `24_null.js` | Explicit null assignment |
| `27_string.js` | Single/double quotes, embedding quotes |
| `28_Template_literal.js` | Template literals with `${}`, Playwright locator example |
| `29_Backtick_single_double.js` | Comparison of all quote types |

### Chapter 6 — Operators
| File | Description |
|------|-------------|
| `30_Operator.js` | Variable reassignment |
| `31_Arithmatic _Operator.js` | +, -, *, / |
| `32_Modulus_Op.js` | Modulus (%), even/odd check |
| `33_Expo_Op.js` | Exponentiation (**) |
| `34_IQ.js` | Compound assignment (+=, -=, *=, /=, %=) |
| `35_comparison_Op.js` | >, <, >=, <= |
| `36_comparison_strict_loose.js` | == vs ===, type coercion |
| `37_IQ_loose_strict_cmparison.js` | Loose equality edge cases |
| `39_logical_Op.js` | &&, \|\|, ! |
| `40_String_Con.js` | String concatenation (+=) |
| `41_Ternary_Op.js` | Ternary, nested ternary, chained ternary |
| `42_Type_Op.js` | typeof operator |
| `43_Incre_Decre_Op.js` | Pre/post increment/decrement |
| `44_Null_Op.js` | Nullish coalescing (??) |
| `45_post_Increment.js` | Post-increment behavior |
| `46_IQ_Incre_decremetn.js` | Post-increment interview question |
| `47_Advanced_ic_De_op.js` | ++a + ++a evaluation |

### Chapter 7 — If / Else
| File | Description |
|------|-------------|
| `48_IF_ELSE.js` | Voting eligibility (age > 18) |
| `49_if_elseif_else.js` | Grade calculation (A/B/C/D/F) |
| `50_Real_if_else.js` | Login + role-based access control |
| `51_API_if_else.js` | API status code checking (200/404) |
| `52_IQ_if_else.js` | Truthy/falsy: 0 is falsy |
| `53_if_else_real.js` | Combined logical + conditional |
| `54_IQ.js` | Simple if |
| `55_IE.js` | Empty if block |
| `56_IQ_Even_Odd.js` | Even/odd with modulus |
| `57_Gradecalc.js` | Grade calculator simplified |
| `58_Leapyear.js` | Leap year checker |

### Chapter 8 — Switch Statements
| File | Description |
|------|-------------|
| `59_switch.js` | Basic switch for days of week |
| `60_No_Break.js` | Fall-through without break |
| `61_Default.js` | Switch with default case |
| `62_Real_Time_Example.js` | API status codes (200/404) |
| `63_Switch_Group.js` | Grouping cases (browsers) |
| `64_IQ.js` | Fall-through interview question |
| `65_IQ2.js` | switch(true) with boolean expressions |
| `66_IQ3.js` | Duplicate case labels |
| `67_IQ4.js` | Switch with false status |

### Chapter 9 — User Input
| File | Description |
|------|-------------|
| `68_Usernput.js` | prompt() → Number() → even/odd check |

### Chapter 10 — Loops
| File | Description |
|------|-------------|
| `71_For_Loop.js` | Manual logging (before introducing loops) |
| `72_For_loop.js` | Basic for loop (0–5) |
| `73_For_loop2.js` | For loop (0–10) |
| `74_IQ.js` | For loop with conditional gift logic |
| `75_For_of_In_Each.js` | While loop (attempt < 3) |
| `76_While.js` | while loop examples |
| `77_do_while.js` | do-while vs while comparison |
| `78_do_whils.js` | do-while retry example |
| `79_IQ.js` | while with false condition (no output) |
| `80_IQ.js` | do-while with decrement (executes once) |
| `81_IQ.js` | for loop with continue |
| `82_IQ.js` | do-while vs while comparison |

### Chapter 11 — Arrays
| File | Description |
|------|-------------|
| `83_Arrays.js` | Array creation, mixed types, index access |
| `84_Arrays.js` | new Array(), Array.of(), Array.from() |
| `85_Access_Array.js` | Bracket notation, .at(-1), modification |
| `86_Arrays_Adding_Remove.js` | push/pop/unshift/shift |
| `87_Addng_Remove2.js` | splice() — remove + insert |
| `88_Real_Example.js` | Browser array: length, pop, shift, for loop |
| `89_Searching.js` | indexOf, lastIndexOf, includes, find, findIndex, findLast |
| `90_Iterate.js` | for, for...of, forEach, for...in, .entries() |
| `91_Transform_Array.js` | map, filter, reduce |
| `92_Arrays.js` | sort() — string & numeric, custom compare |
| `93_Array_slicing.js` | slice() vs splice() |
| `94_concat_array.js` | concat() |
| `95_Array_checking.js` | Array.isArray(), every(), some() |

### Chapter 12 — Functions
| File | Description |
|------|-------------|
| `96_functions.js` | Basic function declaration and call |
| `97_Functions_Fn_Basic.js` | Function returning undefined (no return) |
| `98_Function_with_param_No_return_type.js` | Function with parameter, no return |
| `99_Type3_Withou_param_return_type.js` | Function without parameter, with return |
| `100_Type4_Function_Wit_param_With_return_type.js` | Function with parameter and return |
| `101_Template_Literal.js` | Function using template literals |
| `102_Fn_Expression.js` | Function expression assigned to variable |
| `103_Arrow_Fn.js` | Arrow functions: concise syntax, implicit return |
| `104_Arrow_Fn_Real.js` | Real-world arrow: status code validator |
| `106_Default_Param_Fn.js` | Default parameters |
| `107_IQ.js` | Interview question involving functions |
| `112_IQ.js` | Another function interview question |

### Chapter 13 — Strings
| File | Description |
|------|-------------|
| `118_strings.js` | String creation, quotes, template literals, multi-line |
| `119_String_properties.js` | .length, bracket index, .at(), .charAt(), .charCodeAt() |
| `120_search_check.js` | String search/check methods |
| `121_Substring.js` | slice(), substring(), negative indexing, includes() |
| `123.SC.js` | String/Number coercion, toString(), parseInt(), parseFloat() |

### Chapter 14 — Objects
| File | Description |
|------|-------------|
| `124_Objects.js` | Object creation, properties, array vs object reference |
| `125_Objects2.js` | JS vs JSON keys, reference assignment, mutation |
| `126_Objects_Creation.js` | Object comparison by reference |
| `127_Objects_Real.js` | Config object, dynamic add/delete properties |
| `128_primitive_Reference.js` | Primitive vs reference behavior |
| `129_obj_Example.js` | JSON-style vs JS-style keys |
| `130_IQ.js` | Dynamic property access, bracket notation, descriptors |
| `131_Object_Fn.js` | Objects with methods (calculator) |
| `132_Object_Decon.js` | Destructuring, renaming, defaults, nested destructuring |
| `133_spead.js` | Spread operator for copying/modifying objects |
| `134_Objects_GET_SET_methods.js` | Getter/setter methods |
| `135_IQ.js` | Object.keys(), Object.values(), Object.entries(), for...in |
| `136_Object_Real.js` | Test config objects (ENV, expected responses) |
| `137_let_const_obj.js` | let vs const with object mutation |

### Chapter 15 — 2D Array
| File | Description |
|------|-------------|
| `138_2D_Array.js` | 3x3 matrix grid with nested for loops |
| `139_2D.js` | Row/column length, element access |
| `140_REAL.js` | Test data matrix, for...of, forEach iteration |
| `141_2D_Array_Fn.js` | map + reduce for row sums, ragged arrays |
| `142_Right_pattern_py.js` | Star pyramid pattern with nested loops |
| `testdata.csv` | CSV test data for login testing |

### Chapter 16 — Callback
| File | Description |
|------|-------------|
| `143_callback.js` | Named, anonymous, arrow callbacks |
| `144_CB.js` | Minimal Playwright-like test callback |
| `145_CB_Fn.js` | Real-world cafe analogy callbacks |
| `146_PW_CB.js` | Simulated Playwright test callback |
| `147_JS_CB.js` | Async callbacks with setTimeout() |
| `148_Sync_CB.js` | Synchronous callback with forEach() |
| `149_Async.CB.js` | Async callback with setTimeout() |
| `150_CB_hell.js` | Callback hell — nested setTimeout E2E login flow |

### Tasks (18th May)
| File | Description |
|------|-------------|
| `if_else_even_odd.js` | Even/odd check |
| `max_num2_turnary_operator.js` | Max of two numbers (ternary) |
| `max_num3_turnury_operator.js` | Max of three numbers (nested ternary) |
| `take marks_0_100.js` | Grade calculation |
| `reversepyramid.js` | Reverse star pyramid pattern |

## Topics Covered

- **Playwright setup & basics** – installation, verification, hot-code reload
- **JavaScript identifiers** – naming rules, conventions (camelCase, PascalCase, snake_case, SCREAMING_SNAKE_CASE, Hungarian Notation)
- **Comments** – single-line, multi-line, JSDoc
- **Variables & scoping** – `var` (function-scoped, hoisted), `let` (block-scoped, TDZ), `const` (immutable binding)
- **Hoisting** – variable hoisting, function hoisting, Temporal Dead Zone
- **Functions** – declarations (hoisted) vs expressions (not hoisted)
- **Data types & literals** – number, string, boolean, null, undefined, typeof
- **String types** – single quotes, double quotes, backtick template literals
- **Operators** – arithmetic, modulus, exponent, comparison (strict/loose), logical, concatenation, ternary, nullish coalescing, increment/decrement, typeof, assignment
- **Conditionals** – `if`, `else if`, `else`, nested if, truthy/falsy
- **Switch statements** – basic, fall-through, grouping, boolean expressions, edge cases
- **User input** – `prompt()`, type conversion
- **Loops** – `for`, `while`, `do-while`, `continue`, infinite loops
- **Arrays** – creation, access (bracket, `.at()`), modification, push/pop/unshift/shift, splice/slice, concat, sort, searching (indexOf, includes, find, findIndex), iteration (for, for...of, forEach, for...in, entries), transformation (map, filter, reduce), validation (isArray, every, some)
- **Functions** – declarations, expressions, arrow functions, default parameters, return types
- **Strings** – creation, template literals, length, index access, .at(), .charAt(), .charCodeAt(), search/check methods, substring/slice, type coercion
- **Objects** – creation, reference vs primitive, dynamic properties, destructuring, spread operator, get/set, Object.keys/values/entries, config objects
- **2D Arrays** – nested loops, matrix iteration, real-world test data, ragged arrays, functional programming (map/reduce)
- **Callbacks** – named/anonymous/arrow callbacks, synchronous (forEach), asynchronous (setTimeout), callback hell
- **Playwright testing** – test setup with `@playwright/test`, browser projects (Chromium/Firefox/WebKit), CI pipeline with GitHub Actions
- **Real-world exercises** – grade calculator, leap year checker, max-of-three, even/odd, API status codes, login access control, star pyramid patterns

## Setup

1. Clone the repo
2. Install dependencies: `npm ci`
3. Install Playwright browsers: `npx playwright install --with-deps`
4. Run tests: `npx playwright test`
5. View test report: `npx playwright show-report`

## CI/CD

This project includes a GitHub Actions workflow (`.github/workflows/playwright.yml`) that automatically runs tests on every push and pull request to `main`/`master`. It installs dependencies, Playwright browsers, executes all tests, and uploads the HTML report as an artifact.

## Project Structure

```
├── .github/workflows/   # CI/CD pipeline
├── chapter_*             # JS concept chapters (1–16)
│   ├── chapter_13_strings/
│   ├── chapter_14_Objects/
│   ├── chapter_15_2D_Array/
│   └── chapter_16_Callback/
├── task18th_may/         # Coding exercises
├── tests/                # Playwright test specs
├── .gitignore
├── package.json
├── playwright.config.ts
└── README.md
```

## Resources

- [Playwright Documentation](https://playwright.dev/)
