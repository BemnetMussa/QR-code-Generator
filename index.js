
import inquirer from "inquirer";
import qr from "qr-image";
import {appendFile, writeFile } from "fs";


var user = await inquirer.prompt({
    type: "input",
    name: "text",
    message: "Enter a Text: ",
});


const qr_svg = qr.imageSync(user.text, {type: 'png'});


// append a text of the url 
appendFile('data.txt',`${user.text}\n: ${qr_svg}`, (err) => {
    if (err) throw err;
    console.log("Data has been saved successfully!")
});

// append a url of the qr code to the txt

