//import { writeFile } from 'fs';

//import fs from "fs";
const fs = require("fs");
const Button = document.getElementById("input-text");


let listOfRecords = [];

Button.addEventListener("click", function () {
    const textInput = document.getElementById("submit-data");
    listOfRecords.push(textInput);
    writeFile("list.json", JSON.stringify(listOfRecords), err => {
        if(err) {
            console.log(err);
            return;
        }
        console.log("Data saved!");
    })

});