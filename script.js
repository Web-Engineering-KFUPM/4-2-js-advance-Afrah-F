/*
=================================================================
LAB TITLE: Advance JavaScript — SOLUTION
INSTRUCTIONS:
• Open DevTools (F12 → Console) to view outputs.
•
=================================================================
*/

console.log("%cJS Lab Connected — Solutions running...","font-weight:bold; font-size:14px");

// ==========================
//
// ==========================
// 1) Create a Student object with firstName, lastName, and gpa
// 2) Getter: fullName → "firstName lastName"
// 3) Setter for gpa validates 0.0–4.0
// 4) Create an instance/object and output its attributes using the getters

const Student = (firstName, lastName, gpa = 0) => ({
    _firstName: firstName,
    _lastName: lastName,
    _gpa: gpa,
    get firstName() { return this._firstName; },
    get lastName() { return this._lastName; },
    get fullName() { return `${this._firstName} ${this._lastName}`; },
    get gpa() { return this._gpa; },
    set gpa(newGpa) {
        if (typeof newGpa !== "number" || Number.isNaN(newGpa) || newGpa < 0 || newGpa > 4) {
            throw new RangeError("GPA must be a number between 0.0 and 4.0");
        }
        this._gpa = Number(newGpa.toFixed(2));
    },
    // Optional convenience method mirroring a named setter
    updateGpa(newGpa) { this.gpa = newGpa; }
});

const s1 = Student("Afrah", "Al-subhi", 3.9);
console.log("[TODO-1] Student fullName:", s1.fullName);
console.log("[TODO-1] Student initial GPA:", s1.gpa);

try {
    s1.gpa = 3.85; // valid
    console.log("[TODO-1] Updated GPA:", s1.gpa);
    // s1.gpa = 5; // Uncomment to see validation error
} catch (e) {
    console.error("[TODO-1] Error updating GPA:", e.message);
}

// ====================================
//
// ====================================
// 1) Object map (courseCode → title)
// 2) Iterate with for...in and display key/value

const courses = {
    SWE363: "Web Engineering & Development ",
    ICS108: "Java",
    ICS321: "Databases",
    ICS343: "Fundamentals of computer network"
};

console.log("[TODO-2] Course Map (for...in):");
for (const code in courses) {
    if (Object.prototype.hasOwnProperty.call(courses, code)) {
        console.log(`  ${code} → ${courses[code]}`);
    }
}

// =========================================
//
// =========================================
// 1) Create a string
// 2) Use .charAt(index) and .length

const title = new String("Advanced JavaScript"); // could also be plain string "Advanced JavaScript"
console.log("[TODO-3] String:", title.toString());
console.log("[TODO-3] Length:", title.length);
console.log("[TODO-3] charAt(0):", title.charAt(0));
console.log("[TODO-3] charAt(last):", title.charAt(title.length - 1));

// ===================================
//
// ===================================
// 1) Create new Date()
// 2) Display day, month (0–11), year

const now = new Date();
const day = now.getDate();
const month0 = now.getMonth(); // 0–11
const year = now.getFullYear();
console.log("[TODO-4] Today (day/month0/year):", `${day}/${month0}/${year}`);
console.log("[TODO-4] Human-friendly month (1–12):", month0 + 1);

// ============================================================
//
// ============================================================
// 1) Array with 10 numbers
// 2) Use Math.min(...arr) / Math.max(...arr)

const nums = [42, 7, 19, 88, -3, 0, 16, 73, 5, 33];
const minVal = Math.min(...nums);
const maxVal = Math.max(...nums);
console.log("[TODO-5] Numbers:", nums);
console.log("[TODO-5] Min:", minVal, "Max:", maxVal);

// ===================================================================
//
// ===================================================================
// 1) Function that expects a non-empty array and returns the maximum
// 2) Intentionally pass [] to trigger error
// 3) Handle with try/catch/finally and log flow

function maxOfArray(arr) {
    if (!Array.isArray(arr)) throw new TypeError("Expected an array");
    if (arr.length === 0) throw new Error("Array must not be empty");
    return Math.max(...arr);
}

console.log("[TODO-6] Demonstrating try/catch/finally:");
try {
    const result = maxOfArray([]); // intentionally empty to trigger error
    console.log("  Result:", result);
} catch (e) {
    console.warn("  Caught error:", e.message);
} finally {
    console.log("  Finally: cleanup or follow-up logic runs regardless.");
}

// Also demo with a valid array so you can see success path
try {
    const resultOk = maxOfArray([3, 99, 12]);
    console.log("  Success path (max=)", resultOk);
} catch (e) {
    console.warn("  Should not happen:", e.message);
} finally {
    console.log("  Finally (success path) executed.");
}

// ===================================================================================
//
// ===================================================================================
// Given words array, create /ab/ regex, test with .forEach, log matches

const words = ["ban", "babble", "make", "flab"];
const pattern = /ab/; // substring 'ab' anywhere
const matches = [];

words.forEach((word) => {
    if (pattern.test(word)) {
        console.log(`[TODO-7] ${word} matches!`);
        matches.push(word);
    }
});

console.log("[TODO-7] Words matching /ab/:", matches);

// End of Advance JavaScript Lab — good luck!
