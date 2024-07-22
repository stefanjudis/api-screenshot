import screenshot from "../screenshot.js";

let before = Date.now()
console.log( await screenshot("https://zachleat.com/"), `${Date.now() - before}ms` );
// v1.screenshot.11ty.dev/https%3A%2F%2Ftiennhm.github.io%2FOGGY%2F/opengraph/
// v1.screenshot.11ty.dev/https%3A%2F%2Ftiennhm.github.io%2FOGGY%2F/opengraph/smaller/_20240718/