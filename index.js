
import inquirer from "inquirer";
import qr from "qr-image";
import {writeFile } from "fs";


var user = await inquirer.prompt({
    type: "input",
    name: "text",
    message: "Enter a Text: ",
});


const qr_svg = qr.imageSync(user.text, {type: "svg"});


writeFile('qr_img.svg', qr_svg, (err) => {
    if (err) throw err;
    console.log("QR code SVG has been saved successfully!")
});

writeFile('data.txt', user.text, (err) => {
    if (err) throw err;
    console.log("Data has been saved successfully!")
});