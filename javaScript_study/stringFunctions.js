// Using single quotes
let firstName = "barney";

// Using double quotes
let lastName = "stinson";

// Using backticks
let msg = `My name is ${firstName} ${lastName}`;

firstName.charAt(0); // `b`

firstName.concat(` `, lastName, ` !`); // `barney stinson !`

firstName.indexOf(`b`); // 0
firstName.indexOf(`k`); // -1

firstName.subString(0, 1); // `b`

firstName[0]; // `b`
firstName[-1]; // undefined

firstName.replace(`b`, `B`); // `Barney`

firstName.startsWith("B"); // true

String(10); // number to string
