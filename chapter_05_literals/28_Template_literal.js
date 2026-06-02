let firstname = "pramod";
let fullname = `Hi ${firstname} Dutta`;
console.log(fullname);

//playwright

// const rowindex = 3;
// const rowcolname ="email";
// await page.locator(`[data-row="${rowindex}"][data-col="${rowcolname}"]`).click();

const rowIndex = 3;
const columnName = "email";
await page.locator(`[data-row="${rowIndex}"] [data-col="${columnName}"]`).click();