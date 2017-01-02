var parseString = require('xml2js').parseString;
var unirest = require('unirest');
var express = require('express');
//var router = express.Router();
var http = require('http'); 
const querystring = require('querystring');
const PennTerminals = require('./PennTerminals/PennTerminals.js');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser')
const PTvars = require('./PennTerminals/vars.js');
var async = require("async");
var DOMParser = require('xmldom').DOMParser;
// Server -----------------------------------------------------------
var server = http.createServer(function (req, res) {   //create web server
//                                                                                             
//                                                                                             
//     ,---,                            ___                                 ___                
//  ,`--.' |                ,--,      ,--.'|_     ,--,                    ,--.'|_              
//  |   :  :       ,---,  ,--.'|      |  | :,'  ,--.'|                    |  | :,'             
//  :   |  '   ,-+-. /  | |  |,       :  : ' :  |  |,                     :  : ' :             
//  |   :  |  ,--.'|'   | `--'_     .;__,'  /   `--'_        ,--.--.    .;__,'  /      ,---.   
//  '   '  ; |   |  ,"' | ,' ,'|    |  |   |    ,' ,'|      /       \   |  |   |      /     \  
//  |   |  | |   | /  | | '  | |    :__,'| :    '  | |     .--.  .-. |  :__,'| :     /    /  | 
//  '   :  ; |   | |  | | |  | :      '  : |__  |  | :      \__\/: . .    '  : |__  .    ' / | 
//  |   |  ' |   | |  |/  '  : |__    |  | '.'| '  : |__    ," .--.; |    |  | '.'| '   ;   /| 
//  '   :  | |   | |--'   |  | '.'|   ;  :    ; |  | '.'|  /  /  ,.  |    ;  :    ; '   |  / | 
//  ;   |.'  |   |/       ;  :    ;   |  ,   /  ;  :    ; ;  :   .'   \   |  ,   /  |   :    | 
//  '---'    '---'        |  ,   /     ---`-'   |  ,   /  |  ,     .-./    ---`-'    \   \  /  
//                         ---`-'                ---`-'    `--`---'                   `----'   
// 

//    if (req.url == '/PennTerminals/GrabData') { //URL of the current request
//
//            res.writeHead(200, { 'Content-Type': 'Application/xml', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
//            PennTerminals.aTemp();
//            PennTerminals.aSet();
//            PennTerminals.aOnOff();
//            PennTerminals.aHist();
//            res.end();
//
//    }

//                                                                                           
//                                                                                           
//    ,----..                           ,--,                                    ,---,        
//   /   /   \                        ,--.'|                                   '  .' \       
//  |   :     :    ,---.      ,---.   |  | :                 __  ,-.          /  ;    '.     
//  .   |  ;. /   '   ,'\    '   ,'\  :  : '               ,' ,'/ /|         :  :       \    
//  .   ; /--`   /   /   |  /   /   | |  ' |       ,---.   '  | |' |         :  |   /\   \   
//  ;   | ;     .   ; ,. : .   ; ,. : '  | |      /     \  |  |   ,'         |  :  ' ;.   :  
//  |   : |     '   | |: : '   | |: : |  | :     /    /  | '  :  /           |  |  ;/  \   \ 
//  .   | '___  '   | .; : '   | .; : '  : |__  .    ' / | |  | '            '  :  | \  \ ,' 
//  '   ; : .'| |   :    | |   :    | |  | '.'| '   ;   /| ;  : |            |  |  '  '--'   
//  '   | '/  :  \   \  /   \   \  /  ;  :    ; '   |  / | |  , ;            |  :  :         
//  |   :    /    `----'     `----'   |  ,   /  |   :    |  ---'             |  | ,'         
//   \   \ .'                          ---`-'    \   \  /                    `--''           
//    `---`                                       `----'                                     
//     
    // Cooler A Temp -----------------------------------------------------------
    if (req.url == '/PennTerminals/CoolerATemp.xml') { //URL of the current request
        res.writeHead(200, { 'Content-Type': 'Application/xml', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
        console.log('PennTerminals/CATemp.xml requested')
        fs.readFile('./PennTerminals/CATemp.xml', 'utf-8', (err, data) => {
            if (err) throw err;
            //console.log(data);
            console.log('PennTerminals/CATemp.xml > client');
            res.write(data);
            res.end();
        });
    }
    // Cooler A Set -----------------------------------------------------------
    else if (req.url == "/PennTerminals/CoolerASet.xml") {
        res.writeHead(200, { 'Content-Type': 'Application/xml', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
        console.log('PennTerminals/CASet.xml requested')
        fs.readFile('./PennTerminals/CASet.xml', 'utf-8', (err, data) => {
            if (err) throw err;
            //console.log(data);
            console.log('PennTerminals/CASet.xml > client');
            res.write(data);
            res.end();
        });
    }    
    // Cooler A History -----------------------------------------------------------
    else if (req.url == "/PennTerminals/CoolerAHist.xml") {
        res.writeHead(200, { 'Content-Type': 'Application/xml', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
        console.log('PennTerminals/CAHist.xml requested')
        fs.readFile('./PennTerminals/CAHist.xml', 'utf-8', (err, data) => {
            if (err) throw err;
            //console.log(data);
            console.log('PennTerminals/CAHist.xml > client');
            res.write(data);
            res.end();
        });
    }
    // Cooler A OnOff -----------------------------------------------------------
    else if (req.url == "/PennTerminals/CoolerAOnOff.xml") {
        res.writeHead(200, { 'Content-Type': 'Application/xml', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
        console.log('PennTerminals/CAOnOff.xml requested')
        fs.readFile('./PennTerminals/CAOnOff.xml', 'utf-8', (err, data) => {
            if (err) throw err;
            //console.log(data);
            console.log('PennTerminals/CAOnOff.xml > client');
            res.write(data);
            res.end();
        });
    } 
    // Cooler A OnOff Integer ----------------------------------------------
    else if (req.url == "/PennTerminals/CoolerAOnOffInt.xml") {
        //get on off value as integer from controller
        res.writeHead(200, { 'Content-Type': 'Application/xml', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
        console.log('PennTerminals/CAOnOffInt.xml requested')
        fs.readFile('./PennTerminals/CAOnOffInt.xml', 'utf-8', (err, data) => {
            if (err) throw err;
            //console.log(data);
            console.log('PennTerminals/CAOnOffInt.xml > client');
            res.write(data);
            res.end();
        });
    }  
//                                                                                       
//                                                                                       
//    ,----..                           ,--,                                     ,---,.  
//   /   /   \                        ,--.'|                                   ,'  .'  \ 
//  |   :     :    ,---.      ,---.   |  | :                 __  ,-.         ,---.' .' | 
//  .   |  ;. /   '   ,'\    '   ,'\  :  : '               ,' ,'/ /|         |   |  |: | 
//  .   ; /--`   /   /   |  /   /   | |  ' |       ,---.   '  | |' |         :   :  :  / 
//  ;   | ;     .   ; ,. : .   ; ,. : '  | |      /     \  |  |   ,'         :   |    ;  
//  |   : |     '   | |: : '   | |: : |  | :     /    /  | '  :  /           |   :     \ 
//  .   | '___  '   | .; : '   | .; : '  : |__  .    ' / | |  | '            |   |   . | 
//  '   ; : .'| |   :    | |   :    | |  | '.'| '   ;   /| ;  : |            '   :  '; | 
//  '   | '/  :  \   \  /   \   \  /  ;  :    ; '   |  / | |  , ;            |   |  | ;  
//  |   :    /    `----'     `----'   |  ,   /  |   :    |  ---'             |   :   /   
//   \   \ .'                          ---`-'    \   \  /                    |   | ,'    
//    `---`                                       `----'                     `----'      
//     
    // Cooler B Temp -----------------------------------------------------------
    else if (req.url == '/PennTerminals/CoolerBTemp.xml') { //URL of the current request
        res.writeHead(200, { 'Content-Type': 'Application/xml', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
        console.log('PennTerminals/CBTemp.xml requested')
        fs.readFile('./PennTerminals/CBTemp.xml', 'utf-8', (err, data) => {
            if (err) throw err;
            //console.log(data);
            console.log('PennTerminals/CBTemp.xml > client');
            res.write(data);
            res.end();
        });
    }
    // Cooler B Set -----------------------------------------------------------
    else if (req.url == "/PennTerminals/CoolerBSet.xml") {
        res.writeHead(200, { 'Content-Type': 'Application/xml', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
        console.log('PennTerminals/CBSet.xml requested')
        fs.readFile('./PennTerminals/CBSet.xml', 'utf-8', (err, data) => {
            if (err) throw err;
            //console.log(data);
            console.log('PennTerminals/CBSet.xml > client');
            res.write(data);
            res.end();
        });
    }    
    // Cooler B History -----------------------------------------------------------
    else if (req.url == "/PennTerminals/CoolerBHist.xml") {
        res.writeHead(200, { 'Content-Type': 'Application/xml', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
        console.log('PennTerminals/CBHist.xml requested')
        fs.readFile('./PennTerminals/CBHist.xml', 'utf-8', (err, data) => {
            if (err) throw err;
            //console.log(data);
            console.log('PennTerminals/CBHist.xml > client');
            res.write(data);
            res.end();
        });
    }
    // Cooler B OnOff -----------------------------------------------------------
    else if (req.url == "/PennTerminals/CoolerBOnOff.xml") {
        res.writeHead(200, { 'Content-Type': 'Application/xml', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
        console.log('PennTerminals/CBOnOff.xml requested')
        fs.readFile('./PennTerminals/CBOnOff.xml', 'utf-8', (err, data) => {
            if (err) throw err;
            //console.log(data);
            console.log('PennTerminals/CBOnOff.xml > client');
            res.write(data);
            res.end();
        });
    } 
    // Cooler B OnOff Integer ----------------------------------------------
    else if (req.url == "/PennTerminals/CoolerBOnOffInt.xml") {
        //get on off value as integer from controller
        res.writeHead(200, { 'Content-Type': 'Application/xml', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
        console.log('PennTerminals/CBOnOffInt.xml requested')
        fs.readFile('./PennTerminals/CBOnOffInt.xml', 'utf-8', (err, data) => {
            if (err) throw err;
            //console.log(data);
            console.log('PennTerminals/CBOnOffInt.xml > client');
            res.write(data);
            res.end();
        });
    }  
//                                                                                       
//                                                                                       
//    ,----..                           ,--,                                   ,----..   
//   /   /   \                        ,--.'|                                  /   /   \  
//  |   :     :    ,---.      ,---.   |  | :                 __  ,-.         |   :     : 
//  .   |  ;. /   '   ,'\    '   ,'\  :  : '               ,' ,'/ /|         .   |  ;. / 
//  .   ; /--`   /   /   |  /   /   | |  ' |       ,---.   '  | |' |         .   ; /--`  
//  ;   | ;     .   ; ,. : .   ; ,. : '  | |      /     \  |  |   ,'         ;   | ;     
//  |   : |     '   | |: : '   | |: : |  | :     /    /  | '  :  /           |   : |     
//  .   | '___  '   | .; : '   | .; : '  : |__  .    ' / | |  | '            .   | '___  
//  '   ; : .'| |   :    | |   :    | |  | '.'| '   ;   /| ;  : |            '   ; : .'| 
//  '   | '/  :  \   \  /   \   \  /  ;  :    ; '   |  / | |  , ;            '   | '/  : 
//  |   :    /    `----'     `----'   |  ,   /  |   :    |  ---'             |   :    /  
//   \   \ .'                          ---`-'    \   \  /                     \   \ .'   
//    `---`                                       `----'                       `---`     
//
    // Cooler C Temp -----------------------------------------------------------
    else if (req.url == '/PennTerminals/CoolerCTemp.xml') { //URL of the current request
        res.writeHead(200, { 'Content-Type': 'Application/xml', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
        console.log('PennTerminals/CCTemp.xml requested')
        fs.readFile('./PennTerminals/CCTemp.xml', 'utf-8', (err, data) => {
            if (err) throw err;
            //console.log(data);
            console.log('PennTerminals/CCTemp.xml > client');
            res.write(data);
            res.end();
        });
    }
    // Cooler C Set -----------------------------------------------------------
    else if (req.url == "/PennTerminals/CoolerCSet.xml") {
        res.writeHead(200, { 'Content-Type': 'Application/xml', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
        console.log('PennTerminals/CCSet.xml requested')
        fs.readFile('./PennTerminals/CCSet.xml', 'utf-8', (err, data) => {
            if (err) throw err;
            //console.log(data);
            console.log('PennTerminals/CCSet.xml > client');
            res.write(data);
            res.end();
        });
    }    
    // Cooler C History -----------------------------------------------------------
    else if (req.url == "/PennTerminals/CoolerCHist.xml") {
        res.writeHead(200, { 'Content-Type': 'Application/xml', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
        console.log('PennTerminals/CCHist.xml requested')
        fs.readFile('./PennTerminals/CCHist.xml', 'utf-8', (err, data) => {
            if (err) throw err;
            //console.log(data);
            console.log('PennTerminals/CCHist.xml > client');
            res.write(data);
            res.end();
        });
    }
    // Cooler C OnOff -----------------------------------------------------------
    else if (req.url == "/PennTerminals/CoolerCOnOff.xml") {
        res.writeHead(200, { 'Content-Type': 'Application/xml', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
        console.log('PennTerminals/CCOnOff.xml requested')
        fs.readFile('./PennTerminals/CCOnOff.xml', 'utf-8', (err, data) => {
            if (err) throw err;
            //console.log(data);
            console.log('PennTerminals/CCOnOff.xml > client');
            res.write(data);
            res.end();
        });
    } 
    // Cooler C OnOff Integer ----------------------------------------------
    else if (req.url == "/PennTerminals/CoolerCOnOffInt.xml") {
        //get on off value as integer from controller
        res.writeHead(200, { 'Content-Type': 'Application/xml', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
        console.log('PennTerminals/CCOnOffInt.xml requested')
        fs.readFile('./PennTerminals/CCOnOffInt.xml', 'utf-8', (err, data) => {
            if (err) throw err;
            //console.log(data);
            console.log('PennTerminals/CCOnOffInt.xml > client');
            res.write(data);
            res.end();
        });
    } 
//                                                                                         
//                                                                                         
//    ,----..                           ,--,                                     ,---,     
//   /   /   \                        ,--.'|                                   .'  .' `\   
//  |   :     :    ,---.      ,---.   |  | :                 __  ,-.         ,---.'     \  
//  .   |  ;. /   '   ,'\    '   ,'\  :  : '               ,' ,'/ /|         |   |  .`\  | 
//  .   ; /--`   /   /   |  /   /   | |  ' |       ,---.   '  | |' |         :   : |  '  | 
//  ;   | ;     .   ; ,. : .   ; ,. : '  | |      /     \  |  |   ,'         |   ' '  ;  : 
//  |   : |     '   | |: : '   | |: : |  | :     /    /  | '  :  /           '   | ;  .  | 
//  .   | '___  '   | .; : '   | .; : '  : |__  .    ' / | |  | '            |   | :  |  ' 
//  '   ; : .'| |   :    | |   :    | |  | '.'| '   ;   /| ;  : |            '   : | /  ;  
//  '   | '/  :  \   \  /   \   \  /  ;  :    ; '   |  / | |  , ;            |   | '` ,/   
//  |   :    /    `----'     `----'   |  ,   /  |   :    |  ---'             ;   :  .'     
//   \   \ .'                          ---`-'    \   \  /                    |   ,.'       
//    `---`                                       `----'                     '---'         
//       
    // Cooler D Temp -----------------------------------------------------------
    else if (req.url == '/PennTerminals/CoolerDTemp.xml') { //URL of the current request
        res.writeHead(200, { 'Content-Type': 'Application/xml', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
        console.log('PennTerminals/CDTemp.xml requested')
        fs.readFile('./PennTerminals/CDTemp.xml', 'utf-8', (err, data) => {
            if (err) throw err;
            //console.log(data);
            console.log('PennTerminals/CDTemp.xml > client');
            res.write(data);
            res.end();
        });
    }
    // Cooler D Set -----------------------------------------------------------
    else if (req.url == "/PennTerminals/CoolerDSet.xml") {
        res.writeHead(200, { 'Content-Type': 'Application/xml', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
        console.log('PennTerminals/CDSet.xml requested')
        fs.readFile('./PennTerminals/CDSet.xml', 'utf-8', (err, data) => {
            if (err) throw err;
            //console.log(data);
            console.log('PennTerminals/CDSet.xml > client');
            res.write(data);
            res.end();
        });
    }    
    // Cooler D History -----------------------------------------------------------
    else if (req.url == "/PennTerminals/CoolerDHist.xml") {
        res.writeHead(200, { 'Content-Type': 'Application/xml', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
        console.log('PennTerminals/CDHist.xml requested')
        fs.readFile('./PennTerminals/CDHist.xml', 'utf-8', (err, data) => {
            if (err) throw err;
            //console.log(data);
            console.log('PennTerminals/CDHist.xml > client');
            res.write(data);
            res.end();
        });
    }
    // Cooler D OnOff -----------------------------------------------------------
    else if (req.url == "/PennTerminals/CoolerDOnOff.xml") {
        res.writeHead(200, { 'Content-Type': 'Application/xml', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
        console.log('PennTerminals/CDOnOff.xml requested')
        fs.readFile('./PennTerminals/CDOnOff.xml', 'utf-8', (err, data) => {
            if (err) throw err;
            //console.log(data);
            console.log('PennTerminals/CDOnOff.xml > client');
            res.write(data);
            res.end();
        });
    } 
    // Cooler D OnOff Integer ----------------------------------------------
    else if (req.url == "/PennTerminals/CoolerDOnOffInt.xml") {
        //get on off value as integer from controller
        res.writeHead(200, { 'Content-Type': 'Application/xml', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
        console.log('PennTerminals/CDOnOffInt.xml requested')
        fs.readFile('./PennTerminals/CDOnOffInt.xml', 'utf-8', (err, data) => {
            if (err) throw err;
            //console.log(data);
            console.log('PennTerminals/CDOnOffInt.xml > client');
            res.write(data);
            res.end();
        });
    } 
//                                                                                      
//                                                                                      
//    ,----..                           ,--,                                     ,---,. 
//   /   /   \                        ,--.'|                                   ,'  .' | 
//  |   :     :    ,---.      ,---.   |  | :                 __  ,-.         ,---.'   | 
//  .   |  ;. /   '   ,'\    '   ,'\  :  : '               ,' ,'/ /|         |   |   .' 
//  .   ; /--`   /   /   |  /   /   | |  ' |       ,---.   '  | |' |         :   :  |-, 
//  ;   | ;     .   ; ,. : .   ; ,. : '  | |      /     \  |  |   ,'         :   |  ;/| 
//  |   : |     '   | |: : '   | |: : |  | :     /    /  | '  :  /           |   :   .' 
//  .   | '___  '   | .; : '   | .; : '  : |__  .    ' / | |  | '            |   |  |-, 
//  '   ; : .'| |   :    | |   :    | |  | '.'| '   ;   /| ;  : |            '   :  ;/| 
//  '   | '/  :  \   \  /   \   \  /  ;  :    ; '   |  / | |  , ;            |   |    \ 
//  |   :    /    `----'     `----'   |  ,   /  |   :    |  ---'             |   :   .' 
//   \   \ .'                          ---`-'    \   \  /                    |   | ,'   
//    `---`                                       `----'                     `----'     
//   
    // Cooler E Temp -----------------------------------------------------------
    else if (req.url == '/PennTerminals/CoolerETemp.xml') { //URL of the current request
        res.writeHead(200, { 'Content-Type': 'Application/xml', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
        console.log('PennTerminals/CETemp.xml requested')
        fs.readFile('./PennTerminals/CETemp.xml', 'utf-8', (err, data) => {
            if (err) throw err;
            //console.log(data);
            console.log('PennTerminals/CETemp.xml > client');
            res.write(data);
            res.end();
        });
    }
    // Cooler E Set -----------------------------------------------------------
    else if (req.url == "/PennTerminals/CoolerESet.xml") {
        res.writeHead(200, { 'Content-Type': 'Application/xml', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
        console.log('PennTerminals/CESet.xml requested')
        fs.readFile('./PennTerminals/CESet.xml', 'utf-8', (err, data) => {
            if (err) throw err;
            //console.log(data);
            console.log('PennTerminals/CESet.xml > client');
            res.write(data);
            res.end();
        });
    }    
    // Cooler E History -----------------------------------------------------------
    else if (req.url == "/PennTerminals/CoolerEHist.xml") {
        res.writeHead(200, { 'Content-Type': 'Application/xml', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
        console.log('PennTerminals/CEHist.xml requested')
        fs.readFile('./PennTerminals/CEHist.xml', 'utf-8', (err, data) => {
            if (err) throw err;
            //console.log(data);
            console.log('PennTerminals/CEHist.xml > client');
            res.write(data);
            res.end();
        });
    }
    // Cooler E OnOff -----------------------------------------------------------
    else if (req.url == "/PennTerminals/CoolerEOnOff.xml") {
        res.writeHead(200, { 'Content-Type': 'Application/xml', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
        console.log('PennTerminals/CEOnOff.xml requested')
        fs.readFile('./PennTerminals/CEOnOff.xml', 'utf-8', (err, data) => {
            if (err) throw err;
            //console.log(data);
            console.log('PennTerminals/CEOnOff.xml > client');
            res.write(data);
            res.end();
        });
    } 
    // Cooler E OnOff Integer ----------------------------------------------
    else if (req.url == "/PennTerminals/CoolerEOnOffInt.xml") {
        //get on off value as integer from controller
        res.writeHead(200, { 'Content-Type': 'Application/xml', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
        console.log('PennTerminals/CEOnOffInt.xml requested')
        fs.readFile('./PennTerminals/CEOnOffInt.xml', 'utf-8', (err, data) => {
            if (err) throw err;
            //console.log(data);
            console.log('PennTerminals/CEOnOffInt.xml > client');
            res.write(data);
            res.end();
        });
    } 
//                                                 
//                                                 
//      ,---,                                 ,-.  
//    .'  .' `\                           ,--/ /|  
//  ,---.'     \     ,---.              ,--. :/ |  
//  |   |  .`\  |   '   ,'\             :  : ' /   
//  :   : |  '  |  /   /   |    ,---.   |  '  /    
//  |   ' '  ;  : .   ; ,. :   /     \  '  |  :    
//  '   | ;  .  | '   | |: :  /    / '  |  |   \   
//  |   | :  |  ' '   | .; : .    ' /   '  : |. \  
//  '   : | /  ;  |   :    | '   ; :__  |  | ' \ \ 
//  |   | '` ,/    \   \  /  '   | '.'| '  : |--'  
//  ;   :  .'       `----'   |   :    : ;  |,'     
//  |   ,.'                   \   \  /  '--'       
//  '---'                      `----'              
//  
    // Dock Temp -----------------------------------------------------------
    else if (req.url == '/PennTerminals/DockTemp.xml') { //URL of the current request
        res.writeHead(200, { 'Content-Type': 'Application/xml', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
        console.log('PennTerminals/DockTemp.xml requested')
        fs.readFile('./PennTerminals/DockTemp.xml', 'utf-8', (err, data) => {
            if (err) throw err;
            //console.log(data);
            console.log('PennTerminals/DockTemp.xml > client');
            res.write(data);
            res.end();
        });
    }
    // Dock Set -----------------------------------------------------------
    else if (req.url == "/PennTerminals/DockSet.xml") {
        res.writeHead(200, { 'Content-Type': 'Application/xml', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
        console.log('PennTerminals/DockSet.xml requested')
        fs.readFile('./PennTerminals/DockSet.xml', 'utf-8', (err, data) => {
            if (err) throw err;
            //console.log(data);
            console.log('PennTerminals/DockSet.xml > client');
            res.write(data);
            res.end();
        });
    }    
    // Dock History -----------------------------------------------------------
    else if (req.url == "/PennTerminals/DockHist.xml") {
        res.writeHead(200, { 'Content-Type': 'Application/xml', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
        console.log('PennTerminals/DockHist.xml requested')
        fs.readFile('./PennTerminals/DockHist.xml', 'utf-8', (err, data) => {
            if (err) throw err;
            //console.log(data);
            console.log('PennTerminals/DockHist.xml > client');
            res.write(data);
            res.end();
        });
    }
    // Dock OnOff -----------------------------------------------------------
    else if (req.url == "/PennTerminals/DockOnOff.xml") {
        res.writeHead(200, { 'Content-Type': 'Application/xml', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
        console.log('PennTerminals/DockOnOff.xml requested')
        fs.readFile('./PennTerminals/DockOnOff.xml', 'utf-8', (err, data) => {
            if (err) throw err;
            //console.log(data);
            console.log('PennTerminals/DockOnOff.xml > client');
            res.write(data);
            res.end();
        });
    }
    // Dock OnOff Integer ----------------------------------------------
    else if (req.url == "/PennTerminals/DockOnOffInt.xml") {
        //get on off value as integer from controller
        res.writeHead(200, { 'Content-Type': 'Application/xml', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
        console.log('PennTerminals/DockOnOffInt.xml requested')
        fs.readFile('./PennTerminals/DockOnOffInt.xml', 'utf-8', (err, data) => {
            if (err) throw err;
            //console.log(data);
            console.log('PennTerminals/DockOnOffInt.xml > client');
            res.write(data);
            res.end();
        });
    }  
//                                                                                                                           ,---,  
//                                                                                                                        ,`--.' |  
//    .--.--.                   ___               ,----..     ,---,                                                       |   :  :  
//   /  /    '.               ,--.'|_            /   /   \  ,--.' |                                                       '   '  ;  
//  |  :  /`. /               |  | :,'          |   :     : |  |  :                         ,---,                         |   |  |  
//  ;  |  |--`                :  : ' :          .   |  ;. / :  :  :                     ,-+-. /  |   ,----._,.            '   :  ;  
//  |  :  ;_        ,---.   .;__,'  /           .   ; /--`  :  |  |,--.    ,--.--.     ,--.'|'   |  /   /  ' /    ,---.   |   |  '  
//   \  \    `.    /     \  |  |   |            ;   | ;     |  :  '   |   /       \   |   |  ,"' | |   :     |   /     \  '   :  |  
//    `----.   \  /    /  | :__,'| :            |   : |     |  |   /' :  .--.  .-. |  |   | /  | | |   | .\  .  /    /  | ;   |  ;  
//    __ \  \  | .    ' / |   '  : |__          .   | '___  '  :  | | |   \__\/: . .  |   | |  | | .   ; ';  | .    ' / | `---'. |  
//   /  /`--'  / '   ;   /|   |  | '.'|         '   ; : .'| |  |  ' | :   ," .--.; |  |   | |  |/  '   .   . | '   ;   /|  `--..`;  
//  '--'.     /  '   |  / |   ;  :    ;         '   | '/  : |  :  :_:,'  /  /  ,.  |  |   | |--'    `---`-'| | '   |  / | .--,_     
//    `--'---'   |   :    |   |  ,   /          |   :    /  |  | ,'     ;  :   .'   \ |   |/        .'__/\_: | |   :    | |    |`.  
//                \   \  /     ---`-'            \   \ .'   `--''       |  ,     .-./ '---'         |   :    :  \   \  /  `-- -`, ; 
//                 `----'                         `---`                  `--`---'                    \   \  /    `----'     '---`"  
//                                                    
    //     ___ 
    //    / _ |
    //   / __ |
    //  /_/ |_|
    //         
    else if (req.url == "/PennTerminals/AsetChange") {
        var circuitRack = PTvars.coolerAcircuitRack;
        var circuitSuction = PTvars.coolerAcircuitSuction;
        var circuitCircuit = PTvars.coolerAcircuitCircuit;
        var xmlFile = './PennTerminals/CASet.xml';
        var coolerID = "Cooler A";
        var ipAddress = PTvars.ipAddressA;
        var postDataSet = PTvars.postDataSetA;
        var form_data = "";
        console.log('post url reached /AsetChange');
        req.on(
            "readable",
            function () {
                var d = req.read();
                if (typeof d == 'string') {
                    form_data += d;
                    console.log('post was string');
                } else if (typeof d == 'object' && d instanceof Buffer) {
                    form_data += d.toString("utf-8");
                    console.log('post was object');
                }
            }
        );
        req.on(
            "end",
            function () {
                var out = '';
                if (!form_data) {
                    res.writeHead(200, { 'Content-Type': 'Application/xml', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
                    //out = "I got no form data";
                    console.log('got no data');
                 } else {
                    res.writeHead(200, { 'Content-Type': 'Application/xml', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
                    var obj = querystring.parse(form_data);
                    if (!obj) {
                        //out = "Form data didn't parse";
                        console.log('Form data didnt parse');
                    } else {
                        //out = "Node.js server got form data: " + querystring.stringify(obj, ' ', ' ');
                            var SPtoSEND = form_data;
                            var SPtoSEND3 = SPtoSEND - 5;
                            var SPtoSEND2 = SPtoSEND3 + 10;
                            var circuitCircuit1 = circuitCircuit + 3;
                            var circuitCircuit2 = circuitCircuit1 + 3;
                            var circuitCircuit3 = circuitCircuit2 + 3;
                            var circuitCircuit4 = circuitCircuit3 + 3;
                            var circuitCircuit5 = circuitCircuit4 + 3;
                            var circuitCircuit6 = circuitCircuit5 + 3;
                            var circuitCircuit7 = circuitCircuit6 + 3;
                            var postDataSetChange = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange1 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit1+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange2 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit2+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange3 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit3+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange4 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit4+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange5 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit5+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange6 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit6+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange7 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit7+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                        var setChangeArray = [postDataSetChange, postDataSetChange1, postDataSetChange2, postDataSetChange3, postDataSetChange4, postDataSetChange5, postDataSetChange6, postDataSetChange7];
                        // A setChange();
                        // 1st para in async.each() is the array of items
                        async.each( //might be .foreach 
                        setChangeArray,
                            // 2nd param is the function that each item is passed to
                            function(item, callback){
                                // Call an asynchronous function, often a save() to DB
                                // Async call is done, alert via callback
                                unirest.post(ipAddress)
                                .type('application/x-www-form-urlencoded')
                                .send( item )
                                .encoding ('utf-8')
                                .end(function (response) {  //response end of unirest.post
                                    //console.log(response.body);
                                    console.log(coolerID, 'setChange in process...');
                                }); // close of .end for unirest.post
                                callback();
                            },
                            // 3rd param is the function to call when everything's done
                            function(err){
                                // All tasks are done now
                                console.log(coolerID, 'Set Point changed to: ', form_data);
                                unirest.post(ipAddress)
                                .type('application/x-www-form-urlencoded')
                                .send( postDataSet )
                                .encoding ('utf-8')
                                .end(function (response) {  //response end of unirest.post
                                    //console.log(response.body);
                                    fs.writeFile(xmlFile, response.body, function (err) { //write to the xml file
                                        if (err) return console.log(err);
                                        console.log('xml > ', xmlFile);
                                    }); // close of fs.writeFile
                                }); // close of .end for unirest.post
                                console.log(xmlFile, ' > 255');
                            }
                        );
                    }
                }
                res.end(out);
            }
        );
    } 
    //     ___ 
    //    / _ )
    //   / _  |
    //  /____/ 
    //
    else if (req.url == "/PennTerminals/BsetChange") {
        var circuitRack = PTvars.coolerBcircuitRack;
        var circuitSuction = PTvars.coolerBcircuitSuction;
        var circuitCircuit = PTvars.coolerBcircuitCircuit;
        var xmlFile = './PennTerminals/CBSet.xml';
        var coolerID = "Cooler B";
        var ipAddress = PTvars.ipAddressB;
        var postDataSet = PTvars.postDataSetB;
        var form_data = "";
        console.log('post url reached /BsetChange');
        req.on(
            "readable",
            function () {
                var d = req.read();
                if (typeof d == 'string') {
                    form_data += d;
                    console.log('post was string');
                } else if (typeof d == 'object' && d instanceof Buffer) {
                    form_data += d.toString("utf-8");
                    console.log('post was object');
                }
            }
        );
        req.on(
            "end",
            function () {
                var out = '';
                if (!form_data) {
                    res.writeHead(200, { 'Content-Type': 'Application/xml', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
                    //out = "I got no form data";
                    console.log('got no data');
                 } else {
                    res.writeHead(200, { 'Content-Type': 'Application/xml', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
                    var obj = querystring.parse(form_data);
                    if (!obj) {
                        //out = "Form data didn't parse";
                        console.log('Form data didnt parse');
                    } else {
                        //out = "Node.js server got form data: " + querystring.stringify(obj, ' ', ' ');
                            var SPtoSEND = form_data;
                            var SPtoSEND3 = SPtoSEND - 5;
                            var SPtoSEND2 = SPtoSEND3 + 10;
                            var circuitCircuit1 = circuitCircuit + 3;
                            var circuitCircuit2 = circuitCircuit1 + 3;
                            var circuitCircuit3 = circuitCircuit2 + 3;
                            var circuitCircuit4 = circuitCircuit3 + 3;
                            var circuitCircuit5 = circuitCircuit4 + 3;
                            var circuitCircuit6 = circuitCircuit5 + 3;
                            var circuitCircuit7 = circuitCircuit6 + 3;
                            var postDataSetChange = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange1 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit1+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange2 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit2+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange3 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit3+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange4 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit4+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange5 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit5+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange6 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit6+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange7 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit7+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                        var setChangeArray = [postDataSetChange, postDataSetChange1, postDataSetChange2, postDataSetChange3, postDataSetChange4, postDataSetChange5, postDataSetChange6, postDataSetChange7];
                        // A setChange();
                        // 1st para in async.each() is the array of items
                        async.each( //might be .foreach 
                        setChangeArray,
                            // 2nd param is the function that each item is passed to
                            function(item, callback){
                                // Call an asynchronous function, often a save() to DB
                                // Async call is done, alert via callback
                                unirest.post(ipAddress)
                                .type('application/x-www-form-urlencoded')
                                .send( item )
                                .encoding ('utf-8')
                                .end(function (response) {  //response end of unirest.post
                                    //console.log(response.body);
                                    console.log(coolerID, 'setChange in process...');
                                }); // close of .end for unirest.post
                                callback();
                            },
                            // 3rd param is the function to call when everything's done
                            function(err){
                                // All tasks are done now
                                console.log(coolerID, 'Set Point changed to: ', form_data);
                                unirest.post(ipAddress)
                                .type('application/x-www-form-urlencoded')
                                .send( postDataSet )
                                .encoding ('utf-8')
                                .end(function (response) {  //response end of unirest.post
                                    //console.log(response.body);
                                    fs.writeFile(xmlFile, response.body, function (err) { //write to the xml file
                                        if (err) return console.log(err);
                                        console.log('xml > ', xmlFile);
                                    }); // close of fs.writeFile
                                }); // close of .end for unirest.post
                                console.log(xmlFile, ' > 255');
                            }
                        );
                    }
                }
                res.end(out);
            }
        );
    } 
    //    _____
    //   / ___/
    //  / /__  
    //  \___/  
    // 
    else if (req.url == "/PennTerminals/CsetChange") {
        var circuitRack = PTvars.coolerCcircuitRack;
        var circuitSuction = PTvars.coolerCcircuitSuction;
        var circuitCircuit = PTvars.coolerCcircuitCircuit;
        var xmlFile = './PennTerminals/CCSet.xml';
        var coolerID = "Cooler C";
        var ipAddress = PTvars.ipAddressC;
        var postDataSet = PTvars.postDataSetC;
        var form_data = "";
        console.log('post url reached /CsetChange');
        req.on(
            "readable",
            function () {
                var d = req.read();
                if (typeof d == 'string') {
                    form_data += d;
                    console.log('post was string');
                } else if (typeof d == 'object' && d instanceof Buffer) {
                    form_data += d.toString("utf-8");
                    console.log('post was object');
                }
            }
        );
        req.on(
            "end",
            function () {
                var out = '';
                if (!form_data) {
                    res.writeHead(200, { 'Content-Type': 'Application/xml', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
                    //out = "I got no form data";
                    console.log('got no data');
                 } else {
                    res.writeHead(200, { 'Content-Type': 'Application/xml', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
                    var obj = querystring.parse(form_data);
                    if (!obj) {
                        //out = "Form data didn't parse";
                        console.log('Form data didnt parse');
                    } else {
                        //out = "Node.js server got form data: " + querystring.stringify(obj, ' ', ' ');
                            var SPtoSEND = form_data;
                            var SPtoSEND3 = SPtoSEND - 5;
                            var SPtoSEND2 = SPtoSEND3 + 10;
                            var circuitCircuit1 = circuitCircuit + 3;
                            var circuitCircuit2 = circuitCircuit1 + 3;
                            var circuitCircuit3 = circuitCircuit2 + 3;
                            var circuitCircuit4 = circuitCircuit3 + 3;
                            var circuitCircuit5 = circuitCircuit4 + 3;
                            var circuitCircuit6 = circuitCircuit5 + 3;
                            var circuitCircuit7 = circuitCircuit6 + 3;
                            var postDataSetChange = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange1 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit1+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange2 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit2+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange3 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit3+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange4 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit4+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange5 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit5+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange6 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit6+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange7 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit7+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                        var setChangeArray = [postDataSetChange, postDataSetChange1, postDataSetChange2, postDataSetChange3];
                        // A setChange();
                        // 1st para in async.each() is the array of items
                        async.each( //might be .foreach 
                        setChangeArray,
                            // 2nd param is the function that each item is passed to
                            function(item, callback){
                                // Call an asynchronous function, often a save() to DB
                                // Async call is done, alert via callback
                                unirest.post(ipAddress)
                                .type('application/x-www-form-urlencoded')
                                .send( item )
                                .encoding ('utf-8')
                                .end(function (response) {  //response end of unirest.post
                                    //console.log(response.body);
                                    console.log(coolerID, 'setChange in process...');
                                }); // close of .end for unirest.post
                                callback();
                            },
                            // 3rd param is the function to call when everything's done
                            function(err){
                                // All tasks are done now
                                console.log(coolerID, 'Set Point changed to: ', form_data);
                                unirest.post(ipAddress)
                                .type('application/x-www-form-urlencoded')
                                .send( postDataSet )
                                .encoding ('utf-8')
                                .end(function (response) {  //response end of unirest.post
                                    //console.log(response.body);
                                    fs.writeFile(xmlFile, response.body, function (err) { //write to the xml file
                                        if (err) return console.log(err);
                                        console.log('xml > ', xmlFile);
                                    }); // close of fs.writeFile
                                }); // close of .end for unirest.post
                                console.log(xmlFile, ' > 255');
                            }
                        );
                    }
                }
                res.end(out);
            }
        );
    } 
    //     ___ 
    //    / _ \
    //   / // /
    //  /____/ 
    //  
    else if (req.url == "/PennTerminals/DsetChange") {
        var circuitRack = PTvars.coolerDcircuitRack;
        var circuitSuction = PTvars.coolerDcircuitSuction;
        var circuitCircuit = PTvars.coolerDcircuitCircuit;
        var xmlFile = './PennTerminals/CDSet.xml';
        var coolerID = "Cooler D";
        var ipAddress = PTvars.ipAddressD;
        var postDataSet = PTvars.postDataSetD;
        var form_data = "";
        console.log('post url reached /DsetChange');
        req.on(
            "readable",
            function () {
                var d = req.read();
                if (typeof d == 'string') {
                    form_data += d;
                    console.log('post was string');
                } else if (typeof d == 'object' && d instanceof Buffer) {
                    form_data += d.toString("utf-8");
                    console.log('post was object');
                }
            }
        );
        req.on(
            "end",
            function () {
                var out = '';
                if (!form_data) {
                    res.writeHead(200, { 'Content-Type': 'Application/xml', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
                    //out = "I got no form data";
                    console.log('got no data');
                 } else {
                    res.writeHead(200, { 'Content-Type': 'Application/xml', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
                    var obj = querystring.parse(form_data);
                    if (!obj) {
                        //out = "Form data didn't parse";
                        console.log('Form data didnt parse');
                    } else {
                        //out = "Node.js server got form data: " + querystring.stringify(obj, ' ', ' ');
                            var SPtoSEND = form_data;
                            var SPtoSEND3 = SPtoSEND - 5;
                            var SPtoSEND2 = SPtoSEND3 + 10;
                            var circuitCircuit1 = circuitCircuit + 3;
                            var circuitCircuit2 = circuitCircuit1 + 3;
                            var circuitCircuit3 = circuitCircuit2 + 3;
                            var circuitCircuit4 = circuitCircuit3 + 3;
                            var circuitCircuit5 = circuitCircuit4 + 3;
                            var circuitCircuit6 = circuitCircuit5 + 3;
                            var circuitCircuit7 = circuitCircuit6 + 3;
                            var postDataSetChange = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange1 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit1+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange2 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit2+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange3 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit3+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange4 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit4+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange5 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit5+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange6 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit6+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange7 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit7+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                        var setChangeArray = [postDataSetChange, postDataSetChange1, postDataSetChange2, postDataSetChange3];
                        // A setChange();
                        // 1st para in async.each() is the array of items
                        async.each( //might be .foreach 
                        setChangeArray,
                            // 2nd param is the function that each item is passed to
                            function(item, callback){
                                // Call an asynchronous function, often a save() to DB
                                // Async call is done, alert via callback
                                unirest.post(ipAddress)
                                .type('application/x-www-form-urlencoded')
                                .send( item )
                                .encoding ('utf-8')
                                .end(function (response) {  //response end of unirest.post
                                    //console.log(response.body);
                                    console.log(coolerID, 'setChange in process...');
                                }); // close of .end for unirest.post
                                callback();
                            },
                            // 3rd param is the function to call when everything's done
                            function(err){
                                // All tasks are done now
                                console.log(coolerID, 'Set Point changed to: ', form_data);
                                unirest.post(ipAddress)
                                .type('application/x-www-form-urlencoded')
                                .send( postDataSet )
                                .encoding ('utf-8')
                                .end(function (response) {  //response end of unirest.post
                                    //console.log(response.body);
                                    fs.writeFile(xmlFile, response.body, function (err) { //write to the xml file
                                        if (err) return console.log(err);
                                        console.log('xml > ', xmlFile);
                                    }); // close of fs.writeFile
                                }); // close of .end for unirest.post
                                console.log(xmlFile, ' > 255');
                            }
                        );
                    }
                }
                res.end(out);
            }
        );
    } 
    //     ____
    //    / __/
    //   / _/  
    //  /___/  
    // 
    else if (req.url == "/PennTerminals/EsetChange") {
        var circuitRack = PTvars.coolerEcircuitRack;
        var circuitSuction = PTvars.coolerEcircuitSuction;
        var circuitCircuit = PTvars.coolerEcircuitCircuit;
        var xmlFile = './PennTerminals/CESet.xml';
        var coolerID = "Cooler E";
        var ipAddress = PTvars.ipAddressE;
        var postDataSet = PTvars.postDataSetE;
        var form_data = "";
        console.log('post url reached /EsetChange');
        req.on(
            "readable",
            function () {
                var d = req.read();
                if (typeof d == 'string') {
                    form_data += d;
                    console.log('post was string');
                } else if (typeof d == 'object' && d instanceof Buffer) {
                    form_data += d.toString("utf-8");
                    console.log('post was object');
                }
            }
        );
        req.on(
            "end",
            function () {
                var out = '';
                if (!form_data) {
                    res.writeHead(200, { 'Content-Type': 'Application/xml', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
                    //out = "I got no form data";
                    console.log('got no data');
                 } else {
                    res.writeHead(200, { 'Content-Type': 'Application/xml', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
                    var obj = querystring.parse(form_data);
                    if (!obj) {
                        //out = "Form data didn't parse";
                        console.log('Form data didnt parse');
                    } else {
                        //out = "Node.js server got form data: " + querystring.stringify(obj, ' ', ' ');
                            var SPtoSEND = form_data;
                            var SPtoSEND3 = SPtoSEND - 5;
                            var SPtoSEND2 = SPtoSEND3 + 10;
                            var circuitCircuit1 = circuitCircuit + 3;
                            var circuitCircuit2 = circuitCircuit1 + 3;
                            var circuitCircuit3 = circuitCircuit2 + 3;
                            var circuitCircuit4 = circuitCircuit3 + 3;
                            var circuitCircuit5 = circuitCircuit4 + 3;
                            var circuitCircuit6 = circuitCircuit5 + 3;
                            var circuitCircuit7 = circuitCircuit6 + 3;
                            var postDataSetChange = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange1 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit1+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange2 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit2+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange3 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit3+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange4 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit4+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange5 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit5+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange6 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit6+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange7 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit7+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                        var setChangeArray = [postDataSetChange, postDataSetChange1];
                        // A setChange();
                        // 1st para in async.each() is the array of items
                        async.each( //might be .foreach 
                        setChangeArray,
                            // 2nd param is the function that each item is passed to
                            function(item, callback){
                                // Call an asynchronous function, often a save() to DB
                                // Async call is done, alert via callback
                                unirest.post(ipAddress)
                                .type('application/x-www-form-urlencoded')
                                .send( item )
                                .encoding ('utf-8')
                                .end(function (response) {  //response end of unirest.post
                                    //console.log(response.body);
                                    console.log(coolerID, 'setChange in process...');
                                }); // close of .end for unirest.post
                                callback();
                            },
                            // 3rd param is the function to call when everything's done
                            function(err){
                                // All tasks are done now
                                console.log(coolerID, 'Set Point changed to: ', form_data);
                                unirest.post(ipAddress)
                                .type('application/x-www-form-urlencoded')
                                .send( postDataSet )
                                .encoding ('utf-8')
                                .end(function (response) {  //response end of unirest.post
                                    //console.log(response.body);
                                    fs.writeFile(xmlFile, response.body, function (err) { //write to the xml file
                                        if (err) return console.log(err);
                                        console.log('xml > ', xmlFile);
                                    }); // close of fs.writeFile
                                }); // close of .end for unirest.post
                                console.log(xmlFile, ' > 255');
                            }
                        );
                    }
                }
                res.end(out);
            }
        );
    } 
    //     ___              __  
    //    / _ \ ___  ____  / /__
    //   / // // _ \/ __/ /  '_/
    //  /____/ \___/\__/ /_/\_\ 
    //
    else if (req.url == "/PennTerminals/DocksetChange") {
        var circuitRack = PTvars.DockcircuitRack;
        var circuitSuction = PTvars.DockcircuitSuction;
        var circuitCircuit = PTvars.DockcircuitCircuit;
        var xmlFile = './PennTerminals/DockSet.xml';
        var coolerID = "Dock";
        var ipAddress = PTvars.ipAddressDock;
        var postDataSet = PTvars.postDataSetDock;
        var form_data = "";
        console.log('post url reached /DocksetChange');
        req.on(
            "readable",
            function () {
                var d = req.read();
                if (typeof d == 'string') {
                    form_data += d;
                    console.log('post was string');
                } else if (typeof d == 'object' && d instanceof Buffer) {
                    form_data += d.toString("utf-8");
                    console.log('post was object');
                }
            }
        );
        req.on(
            "end",
            function () {
                var out = '';
                if (!form_data) {
                    res.writeHead(200, { 'Content-Type': 'Application/xml', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
                    //out = "I got no form data";
                    console.log('got no data');
                 } else {
                    res.writeHead(200, { 'Content-Type': 'Application/xml', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
                    var obj = querystring.parse(form_data);
                    if (!obj) {
                        //out = "Form data didn't parse";
                        console.log('Form data didnt parse');
                    } else {
                        //out = "Node.js server got form data: " + querystring.stringify(obj, ' ', ' ');
                            var SPtoSEND = form_data;
                            var SPtoSEND3 = SPtoSEND - 5;
                            var SPtoSEND2 = SPtoSEND3 + 10;
                            var circuitCircuit1 = circuitCircuit + 3;
                            var circuitCircuit2 = circuitCircuit1 + 3;
                            var circuitCircuit3 = circuitCircuit2 + 3;
                            var circuitCircuit4 = circuitCircuit3 + 3;
                            var circuitCircuit5 = circuitCircuit4 + 3;
                            var circuitCircuit6 = circuitCircuit5 + 3;
                            var circuitCircuit7 = circuitCircuit6 + 3;
                            var postDataSetChange = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange1 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit1+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange2 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit2+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange3 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit3+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange4 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit4+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange5 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit5+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange6 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit6+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange7 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit7+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><temp_target>'+SPtoSEND+'</temp_target><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                        var setChangeArray = [postDataSetChange, postDataSetChange1];
                        // A setChange();
                        // 1st para in async.each() is the array of items
                        async.each( //might be .foreach 
                        setChangeArray,
                            // 2nd param is the function that each item is passed to
                            function(item, callback){
                                // Call an asynchronous function, often a save() to DB
                                // Async call is done, alert via callback
                                unirest.post(ipAddress)
                                .type('application/x-www-form-urlencoded')
                                .send( item )
                                .encoding ('utf-8')
                                .end(function (response) {  //response end of unirest.post
                                    //console.log(response.body);
                                    console.log(coolerID, 'setChange in process...');
                                }); // close of .end for unirest.post
                                callback();
                            },
                            // 3rd param is the function to call when everything's done
                            function(err){
                                // All tasks are done now
                                console.log(coolerID, 'Set Point changed to: ', form_data);
                                unirest.post(ipAddress)
                                .type('application/x-www-form-urlencoded')
                                .send( postDataSet )
                                .encoding ('utf-8')
                                .end(function (response) {  //response end of unirest.post
                                    //console.log(response.body);
                                    fs.writeFile(xmlFile, response.body, function (err) { //write to the xml file
                                        if (err) return console.log(err);
                                        console.log('xml > ', xmlFile);
                                    }); // close of fs.writeFile
                                }); // close of .end for unirest.post
                                console.log(xmlFile, ' > 255');
                            }
                        );
                    }
                }
                res.end(out);
            }
        );
    } 
//                                                                                                                           
//                                                  ,----..                                     ,----..                      
//    .--.--.                   ___                /   /   \                                   /   /   \                     
//   /  /    '.               ,--.'|_             /   .     :                                 /   .     :    .--.,    .--.,  
//  |  :  /`. /               |  | :,'           .   /   ;.  \       ,---,                   .   /   ;.  \ ,--.'  \ ,--.'  \ 
//  ;  |  |--`                :  : ' :          .   ;   /  ` ;   ,-+-. /  |                 .   ;   /  ` ; |  | /\/ |  | /\/ 
//  |  :  ;_        ,---.   .;__,'  /           ;   |  ; \ ; |  ,--.'|'   |                 ;   |  ; \ ; | :  : :   :  : :   
//   \  \    `.    /     \  |  |   |            |   :  | ; | ' |   |  ,"' |                 |   :  | ; | ' :  | |-, :  | |-, 
//    `----.   \  /    /  | :__,'| :            .   |  ' ' ' : |   | /  | |                 .   |  ' ' ' : |  : :/| |  : :/| 
//    __ \  \  | .    ' / |   '  : |__          '   ;  \; /  | |   | |  | |                 '   ;  \; /  | |  |  .' |  |  .' 
//   /  /`--'  / '   ;   /|   |  | '.'|          \   \  ',  /  |   | |  |/                   \   \  ',  /  '  : '   '  : '   
//  '--'.     /  '   |  / |   ;  :    ;           ;   :    /   |   | |--'     ___             ;   :    /   |  | |   |  | |   
//    `--'---'   |   :    |   |  ,   /             \   \ .'    |   |/        /  .\             \   \ .'    |  : \   |  : \   
//                \   \  /     ---`-'               `---`      '---'         \_ ; |             `---`      |  |,'   |  |,'   
//                 `----'                                                    /  ,"                         `--'     `--'     
//  
    //     ___        ____       
    //    / _ |      / __ \  ___ 
    //   / __ |     / /_/ / / _ \
    //  /_/ |_|     \____/ /_//_/
    //   
    else if (req.url == "/PennTerminals/AsetOn") {
        var circuitRack = PTvars.coolerAcircuitRack;
        var circuitSuction = PTvars.coolerAcircuitSuction;
        var circuitCircuit = PTvars.coolerAcircuitCircuit;
        var xmlFile = './PennTerminals/CAOnOff.xml';
        var coolerID = "Cooler A";
        var ipAddress = PTvars.ipAddressA;
        var postDataOn = PTvars.postDataOnA;
        var postDataOnOff = PTvars.postDataOnOffA;
        var postDataSet = PTvars.postDataSetA;
        console.log('post url reached /AsetOn');

        // setOn(); ------------------------------
            unirest.post(ipAddress)
            .type('application/x-www-form-urlencoded')
            .send( postDataOn )
            .encoding ('utf-8')
            .end(function (response) {  //response end of unirest.post
                //console.log(response.body);
                console.log(coolerID, ' On > 255');
            }); // close of .end for unirest.post
            
        // Use set value in cmd to update alarms ------------------------------
        unirest.post(ipAddress)
        .type('application/x-www-form-urlencoded')
        .send( postDataSet )
        .encoding ('utf-8')
        .end(function (response) {  //response end of unirest.post
            //console.log(response.body);
                            var doc = new DOMParser().parseFromString(response.body);
                            var SPtoSEND = doc.getElementsByTagName("temp_target")[0].childNodes[0].nodeValue;
                            var SPtoSEND3 = SPtoSEND - 5;
                            var SPtoSEND2 = SPtoSEND3 + 10;
                            var circuitCircuit1 = circuitCircuit + 3;
                            var circuitCircuit2 = circuitCircuit1 + 3;
                            var circuitCircuit3 = circuitCircuit2 + 3;
                            var circuitCircuit4 = circuitCircuit3 + 3;
                            var circuitCircuit5 = circuitCircuit4 + 3;
                            var circuitCircuit6 = circuitCircuit5 + 3;
                            var circuitCircuit7 = circuitCircuit6 + 3;
                            var postDataSetChange = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange1 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit1+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange2 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit2+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange3 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit3+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange4 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit4+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange5 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit5+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange6 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit6+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange7 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit7+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                        var setChangeArray = [postDataSetChange, postDataSetChange1, postDataSetChange2, postDataSetChange3, postDataSetChange4, postDataSetChange5, postDataSetChange6, postDataSetChange7];
                        async.each( 
                        setChangeArray,
                            function(item, callback){
                                unirest.post(ipAddress)
                                .type('application/x-www-form-urlencoded')
                                .send( item )
                                .encoding ('utf-8')
                                .end(function (response) {  //response end of unirest.post
                                    //console.log(response.body);
                                    console.log(coolerID, 'setAlarms for On in process...');
                                }); // close of .end for unirest.post
                                callback();
                            },
                            function(err){
                                // All tasks are done now, refresh OnOff xml file for browser to read updated value
                                console.log(coolerID, 'Status update: On');
                                unirest.post(ipAddress)
                                .type('application/x-www-form-urlencoded')
                                .send( postDataOnOff )
                                .encoding ('utf-8')
                                .end(function (response) {  //response end of unirest.post
                                    //console.log(response.body);
                                    fs.writeFile(xmlFile, response.body, function (err) { //write to the xml file
                                        if (err) return console.log(err);
                                        console.log('xml > ', xmlFile);
                                    }); // close of fs.writeFile
                                }); // close of .end for unirest.post
                                console.log(xmlFile, ' > 255');
                            }
                        );

        }); // close of .end for unirest.post
        console.log(coolerID, 'On cmd sending to > 255');
    } 
    //     ___        ____    ___   ___
    //    / _ |      / __ \  / _/  / _/
    //   / __ |     / /_/ / / _/  / _/ 
    //  /_/ |_|     \____/ /_/   /_/   
    // 
    else if (req.url == "/PennTerminals/AsetOff") {
        var circuitRack = PTvars.coolerAcircuitRack;
        var circuitSuction = PTvars.coolerAcircuitSuction;
        var circuitCircuit = PTvars.coolerAcircuitCircuit;
        var xmlFile = './PennTerminals/CAOnOff.xml';
        var coolerID = "Cooler A";
        var ipAddress = PTvars.ipAddressA;
        var postDataOff = PTvars.postDataOffA;
        var postDataOnOff = PTvars.postDataOnOffA;
        var postDataSet = PTvars.postDataSetA;
        console.log('post url reached /AsetOff');

        // setOff(); ------------------------------
            unirest.post(ipAddress)
            .type('application/x-www-form-urlencoded')
            .send( postDataOff )
            .encoding ('utf-8')
            .end(function (response) {  //response end of unirest.post
                //console.log(response.body);
                console.log(coolerID, ' Off > 255');
            }); // close of .end for unirest.post
            
        // Use set value in cmd to update alarms ------------------------------
        unirest.post(ipAddress)
        .type('application/x-www-form-urlencoded')
        .send( postDataSet )
        .encoding ('utf-8')
        .end(function (response) {  //response end of unirest.post
            //console.log(response.body);
                            var doc = new DOMParser().parseFromString(response.body);
                            var SPtoSEND = doc.getElementsByTagName("temp_target")[0].childNodes[0].nodeValue;
                            var SPtoSEND2 = 100;
                            var circuitCircuit1 = circuitCircuit + 3;
                            var circuitCircuit2 = circuitCircuit1 + 3;
                            var circuitCircuit3 = circuitCircuit2 + 3;
                            var circuitCircuit4 = circuitCircuit3 + 3;
                            var circuitCircuit5 = circuitCircuit4 + 3;
                            var circuitCircuit6 = circuitCircuit5 + 3;
                            var circuitCircuit7 = circuitCircuit6 + 3;
                            var postDataSetChange = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                            var postDataSetChange1 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit1+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                            var postDataSetChange2 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit2+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                            var postDataSetChange3 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit3+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                            var postDataSetChange4 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit4+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                            var postDataSetChange5 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit5+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                            var postDataSetChange6 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit6+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                            var postDataSetChange7 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit7+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                        var setChangeArray = [postDataSetChange, postDataSetChange1, postDataSetChange2, postDataSetChange3, postDataSetChange4, postDataSetChange5, postDataSetChange6, postDataSetChange7];
                        async.each( 
                        setChangeArray,
                            function(item, callback){
                                unirest.post(ipAddress)
                                .type('application/x-www-form-urlencoded')
                                .send( item )
                                .encoding ('utf-8')
                                .end(function (response) {  //response end of unirest.post
                                    //console.log(response.body);
                                    console.log(coolerID, 'setAlarms for Off in process...');
                                }); // close of .end for unirest.post
                                callback();
                            },
                            function(err){
                                // All tasks are done now, refresh OnOff xml file for browser to read updated value
                                console.log(coolerID, 'Status update: Off');
                                unirest.post(ipAddress)
                                .type('application/x-www-form-urlencoded')
                                .send( postDataOnOff )
                                .encoding ('utf-8')
                                .end(function (response) {  //response end of unirest.post
                                    //console.log(response.body);
                                    fs.writeFile(xmlFile, response.body, function (err) { //write to the xml file
                                        if (err) return console.log(err);
                                        console.log('xml > ', xmlFile);
                                    }); // close of fs.writeFile
                                }); // close of .end for unirest.post
                                console.log(xmlFile, ' > 255');
                            }
                        );

        }); // close of .end for unirest.post
        console.log(coolerID, 'Off cmd sending to > 255');
    }
    //     ___        ____       
    //    / _ )      / __ \  ___ 
    //   / _  |     / /_/ / / _ \
    //  /____/      \____/ /_//_/
    //    
    else if (req.url == "/PennTerminals/BsetOn") {
        var circuitRack = PTvars.coolerBcircuitRack;
        var circuitSuction = PTvars.coolerBcircuitSuction;
        var circuitCircuit = PTvars.coolerBcircuitCircuit;
        var xmlFile = './PennTerminals/CBOnOff.xml';
        var coolerID = "Cooler B";
        var ipAddress = PTvars.ipAddressB;
        var postDataOn = PTvars.postDataOnB;
        var postDataOnOff = PTvars.postDataOnOffB;
        var postDataSet = PTvars.postDataSetB;
        console.log('post url reached /BsetOn');

        // setOn(); ------------------------------
            unirest.post(ipAddress)
            .type('application/x-www-form-urlencoded')
            .send( postDataOn )
            .encoding ('utf-8')
            .end(function (response) {  //response end of unirest.post
                //console.log(response.body);
                console.log(coolerID, ' On > 255');
            }); // close of .end for unirest.post
            
        // Use set value in cmd to update alarms ------------------------------
        unirest.post(ipAddress)
        .type('application/x-www-form-urlencoded')
        .send( postDataSet )
        .encoding ('utf-8')
        .end(function (response) {  //response end of unirest.post
            //console.log(response.body);
                            var doc = new DOMParser().parseFromString(response.body);
                            var SPtoSEND = doc.getElementsByTagName("temp_target")[0].childNodes[0].nodeValue;
                            var SPtoSEND3 = SPtoSEND - 5;
                            var SPtoSEND2 = SPtoSEND3 + 10;
                            var circuitCircuit1 = circuitCircuit + 3;
                            var circuitCircuit2 = circuitCircuit1 + 3;
                            var circuitCircuit3 = circuitCircuit2 + 3;
                            var circuitCircuit4 = circuitCircuit3 + 3;
                            var circuitCircuit5 = circuitCircuit4 + 3;
                            var circuitCircuit6 = circuitCircuit5 + 3;
                            var circuitCircuit7 = circuitCircuit6 + 3;
                            var postDataSetChange = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange1 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit1+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange2 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit2+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange3 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit3+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange4 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit4+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange5 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit5+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange6 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit6+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange7 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit7+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                        var setChangeArray = [postDataSetChange, postDataSetChange1, postDataSetChange2, postDataSetChange3, postDataSetChange4, postDataSetChange5, postDataSetChange6, postDataSetChange7];
                        async.each( 
                        setChangeArray,
                            function(item, callback){
                                unirest.post(ipAddress)
                                .type('application/x-www-form-urlencoded')
                                .send( item )
                                .encoding ('utf-8')
                                .end(function (response) {  //response end of unirest.post
                                    //console.log(response.body);
                                    console.log(coolerID, 'setAlarms for On in process...');
                                }); // close of .end for unirest.post
                                callback();
                            },
                            function(err){
                                // All tasks are done now, refresh OnOff xml file for browser to read updated value
                                console.log(coolerID, 'Status update: On');
                                unirest.post(ipAddress)
                                .type('application/x-www-form-urlencoded')
                                .send( postDataOnOff )
                                .encoding ('utf-8')
                                .end(function (response) {  //response end of unirest.post
                                    //console.log(response.body);
                                    fs.writeFile(xmlFile, response.body, function (err) { //write to the xml file
                                        if (err) return console.log(err);
                                        console.log('xml > ', xmlFile);
                                    }); // close of fs.writeFile
                                }); // close of .end for unirest.post
                                console.log(xmlFile, ' > 255');
                            }
                        );

        }); // close of .end for unirest.post
        console.log(coolerID, 'On cmd sending to > 255');
    } 
    //     ___        ____    ___   ___
    //    / _ )      / __ \  / _/  / _/
    //   / _  |     / /_/ / / _/  / _/ 
    //  /____/      \____/ /_/   /_/   
    // 
    else if (req.url == "/PennTerminals/BsetOff") {
        var circuitRack = PTvars.coolerBcircuitRack;
        var circuitSuction = PTvars.coolerBcircuitSuction;
        var circuitCircuit = PTvars.coolerBcircuitCircuit;
        var xmlFile = './PennTerminals/CBOnOff.xml';
        var coolerID = "Cooler B";
        var ipAddress = PTvars.ipAddressB;
        var postDataOff = PTvars.postDataOffB;
        var postDataOnOff = PTvars.postDataOnOffB;
        var postDataSet = PTvars.postDataSetB;
        console.log('post url reached /BsetOff');

        // setOff(); ------------------------------
            unirest.post(ipAddress)
            .type('application/x-www-form-urlencoded')
            .send( postDataOff )
            .encoding ('utf-8')
            .end(function (response) {  //response end of unirest.post
                //console.log(response.body);
                console.log(coolerID, ' Off > 255');
            }); // close of .end for unirest.post
            
        // Use set value in cmd to update alarms ------------------------------
        unirest.post(ipAddress)
        .type('application/x-www-form-urlencoded')
        .send( postDataSet )
        .encoding ('utf-8')
        .end(function (response) {  //response end of unirest.post
            //console.log(response.body);
                            var doc = new DOMParser().parseFromString(response.body);
                            var SPtoSEND = doc.getElementsByTagName("temp_target")[0].childNodes[0].nodeValue;
                            var SPtoSEND2 = 100;
                            var circuitCircuit1 = circuitCircuit + 3;
                            var circuitCircuit2 = circuitCircuit1 + 3;
                            var circuitCircuit3 = circuitCircuit2 + 3;
                            var circuitCircuit4 = circuitCircuit3 + 3;
                            var circuitCircuit5 = circuitCircuit4 + 3;
                            var circuitCircuit6 = circuitCircuit5 + 3;
                            var circuitCircuit7 = circuitCircuit6 + 3;
                            var postDataSetChange = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                            var postDataSetChange1 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit1+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                            var postDataSetChange2 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit2+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                            var postDataSetChange3 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit3+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                            var postDataSetChange4 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit4+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                            var postDataSetChange5 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit5+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                            var postDataSetChange6 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit6+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                            var postDataSetChange7 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit7+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                        var setChangeArray = [postDataSetChange, postDataSetChange1, postDataSetChange2, postDataSetChange3, postDataSetChange4, postDataSetChange5, postDataSetChange6, postDataSetChange7];
                        async.each( 
                        setChangeArray,
                            function(item, callback){
                                unirest.post(ipAddress)
                                .type('application/x-www-form-urlencoded')
                                .send( item )
                                .encoding ('utf-8')
                                .end(function (response) {  //response end of unirest.post
                                    //console.log(response.body);
                                    console.log(coolerID, 'setAlarms for Off in process...');
                                }); // close of .end for unirest.post
                                callback();
                            },
                            function(err){
                                // All tasks are done now, refresh OnOff xml file for browser to read updated value
                                console.log(coolerID, 'Status update: Off');
                                unirest.post(ipAddress)
                                .type('application/x-www-form-urlencoded')
                                .send( postDataOnOff )
                                .encoding ('utf-8')
                                .end(function (response) {  //response end of unirest.post
                                    //console.log(response.body);
                                    fs.writeFile(xmlFile, response.body, function (err) { //write to the xml file
                                        if (err) return console.log(err);
                                        console.log('xml > ', xmlFile);
                                    }); // close of fs.writeFile
                                }); // close of .end for unirest.post
                                console.log(xmlFile, ' > 255');
                            }
                        );

        }); // close of .end for unirest.post
        console.log(coolerID, 'Off cmd sending to > 255');
    }
    //    _____       ____       
    //   / ___/      / __ \  ___ 
    //  / /__       / /_/ / / _ \
    //  \___/       \____/ /_//_/
    //  
    else if (req.url == "/PennTerminals/CsetOn") {
        var circuitRack = PTvars.coolerCcircuitRack;
        var circuitSuction = PTvars.coolerCcircuitSuction;
        var circuitCircuit = PTvars.coolerCcircuitCircuit;
        var xmlFile = './PennTerminals/CCOnOff.xml';
        var coolerID = "Cooler C";
        var ipAddress = PTvars.ipAddressC;
        var postDataOn = PTvars.postDataOnC;
        var postDataOnOff = PTvars.postDataOnOffC;
        var postDataSet = PTvars.postDataSetC;
        console.log('post url reached /CsetOn');

        // setOn(); ------------------------------
            unirest.post(ipAddress)
            .type('application/x-www-form-urlencoded')
            .send( postDataOn )
            .encoding ('utf-8')
            .end(function (response) {  //response end of unirest.post
                //console.log(response.body);
                console.log(coolerID, ' On > 255');
            }); // close of .end for unirest.post
            
        // Use set value in cmd to update alarms ------------------------------
        unirest.post(ipAddress)
        .type('application/x-www-form-urlencoded')
        .send( postDataSet )
        .encoding ('utf-8')
        .end(function (response) {  //response end of unirest.post
            //console.log(response.body);
                            var doc = new DOMParser().parseFromString(response.body);
                            var SPtoSEND = doc.getElementsByTagName("temp_target")[0].childNodes[0].nodeValue;
                            var SPtoSEND3 = SPtoSEND - 5;
                            var SPtoSEND2 = SPtoSEND3 + 10;
                            var circuitCircuit1 = circuitCircuit + 3;
                            var circuitCircuit2 = circuitCircuit1 + 3;
                            var circuitCircuit3 = circuitCircuit2 + 3;
                            var circuitCircuit4 = circuitCircuit3 + 3;
                            var circuitCircuit5 = circuitCircuit4 + 3;
                            var circuitCircuit6 = circuitCircuit5 + 3;
                            var circuitCircuit7 = circuitCircuit6 + 3;
                            var postDataSetChange = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange1 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit1+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange2 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit2+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange3 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit3+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange4 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit4+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange5 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit5+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange6 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit6+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange7 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit7+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                        var setChangeArray = [postDataSetChange, postDataSetChange1, postDataSetChange2, postDataSetChange3, postDataSetChange4, postDataSetChange5, postDataSetChange6, postDataSetChange7];
                        async.each( 
                        setChangeArray,
                            function(item, callback){
                                unirest.post(ipAddress)
                                .type('application/x-www-form-urlencoded')
                                .send( item )
                                .encoding ('utf-8')
                                .end(function (response) {  //response end of unirest.post
                                    //console.log(response.body);
                                    console.log(coolerID, 'setAlarms for On in process...');
                                }); // close of .end for unirest.post
                                callback();
                            },
                            function(err){
                                // All tasks are done now, refresh OnOff xml file for browser to read updated value
                                console.log(coolerID, 'Status update: On');
                                unirest.post(ipAddress)
                                .type('application/x-www-form-urlencoded')
                                .send( postDataOnOff )
                                .encoding ('utf-8')
                                .end(function (response) {  //response end of unirest.post
                                    //console.log(response.body);
                                    fs.writeFile(xmlFile, response.body, function (err) { //write to the xml file
                                        if (err) return console.log(err);
                                        console.log('xml > ', xmlFile);
                                    }); // close of fs.writeFile
                                }); // close of .end for unirest.post
                                console.log(xmlFile, ' > 255');
                            }
                        );

        }); // close of .end for unirest.post
        console.log(coolerID, 'On cmd sending to > 255');
    } 
    //    _____       ____    ___   ___
    //   / ___/      / __ \  / _/  / _/
    //  / /__       / /_/ / / _/  / _/ 
    //  \___/       \____/ /_/   /_/   
    //
    else if (req.url == "/PennTerminals/CsetOff") {
        var circuitRack = PTvars.coolerCcircuitRack;
        var circuitSuction = PTvars.coolerCcircuitSuction;
        var circuitCircuit = PTvars.coolerCcircuitCircuit;
        var xmlFile = './PennTerminals/CCOnOff.xml';
        var coolerID = "Cooler C";
        var ipAddress = PTvars.ipAddressC;
        var postDataOff = PTvars.postDataOffC;
        var postDataOnOff = PTvars.postDataOnOffC;
        var postDataSet = PTvars.postDataSetC;
        console.log('post url reached /CsetOff');

        // setOff(); ------------------------------
            unirest.post(ipAddress)
            .type('application/x-www-form-urlencoded')
            .send( postDataOff )
            .encoding ('utf-8')
            .end(function (response) {  //response end of unirest.post
                //console.log(response.body);
                console.log(coolerID, ' Off > 255');
            }); // close of .end for unirest.post
            
        // Use set value in cmd to update alarms ------------------------------
        unirest.post(ipAddress)
        .type('application/x-www-form-urlencoded')
        .send( postDataSet )
        .encoding ('utf-8')
        .end(function (response) {  //response end of unirest.post
            //console.log(response.body);
                            var doc = new DOMParser().parseFromString(response.body);
                            var SPtoSEND = doc.getElementsByTagName("temp_target")[0].childNodes[0].nodeValue;
                            var SPtoSEND2 = 100;
                            var circuitCircuit1 = circuitCircuit + 3;
                            var circuitCircuit2 = circuitCircuit1 + 3;
                            var circuitCircuit3 = circuitCircuit2 + 3;
                            var circuitCircuit4 = circuitCircuit3 + 3;
                            var circuitCircuit5 = circuitCircuit4 + 3;
                            var circuitCircuit6 = circuitCircuit5 + 3;
                            var circuitCircuit7 = circuitCircuit6 + 3;
                            var postDataSetChange = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                            var postDataSetChange1 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit1+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                            var postDataSetChange2 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit2+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                            var postDataSetChange3 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit3+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                            var postDataSetChange4 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit4+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                            var postDataSetChange5 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit5+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                            var postDataSetChange6 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit6+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                            var postDataSetChange7 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit7+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                        var setChangeArray = [postDataSetChange, postDataSetChange1, postDataSetChange2, postDataSetChange3, postDataSetChange4, postDataSetChange5, postDataSetChange6, postDataSetChange7];
                        async.each( 
                        setChangeArray,
                            function(item, callback){
                                unirest.post(ipAddress)
                                .type('application/x-www-form-urlencoded')
                                .send( item )
                                .encoding ('utf-8')
                                .end(function (response) {  //response end of unirest.post
                                    //console.log(response.body);
                                    console.log(coolerID, 'setAlarms for Off in process...');
                                }); // close of .end for unirest.post
                                callback();
                            },
                            function(err){
                                // All tasks are done now, refresh OnOff xml file for browser to read updated value
                                console.log(coolerID, 'Status update: Off');
                                unirest.post(ipAddress)
                                .type('application/x-www-form-urlencoded')
                                .send( postDataOnOff )
                                .encoding ('utf-8')
                                .end(function (response) {  //response end of unirest.post
                                    //console.log(response.body);
                                    fs.writeFile(xmlFile, response.body, function (err) { //write to the xml file
                                        if (err) return console.log(err);
                                        console.log('xml > ', xmlFile);
                                    }); // close of fs.writeFile
                                }); // close of .end for unirest.post
                                console.log(xmlFile, ' > 255');
                            }
                        );

        }); // close of .end for unirest.post
        console.log(coolerID, 'Off cmd sending to > 255');
    }
    //     ___        ____       
    //    / _ \      / __ \  ___ 
    //   / // /     / /_/ / / _ \
    //  /____/      \____/ /_//_/
    //   
    else if (req.url == "/PennTerminals/DsetOn") {
        var circuitRack = PTvars.coolerDcircuitRack;
        var circuitSuction = PTvars.coolerDcircuitSuction;
        var circuitCircuit = PTvars.coolerDcircuitCircuit;
        var xmlFile = './PennTerminals/CDOnOff.xml';
        var coolerID = "Cooler D";
        var ipAddress = PTvars.ipAddressD;
        var postDataOn = PTvars.postDataOnD;
        var postDataOnOff = PTvars.postDataOnOffD;
        var postDataSet = PTvars.postDataSetD;
        console.log('post url reached /DsetOn');

        // setOn(); ------------------------------
            unirest.post(ipAddress)
            .type('application/x-www-form-urlencoded')
            .send( postDataOn )
            .encoding ('utf-8')
            .end(function (response) {  //response end of unirest.post
                //console.log(response.body);
                console.log(coolerID, ' On > 255');
            }); // close of .end for unirest.post
            
        // Use set value in cmd to update alarms ------------------------------
        unirest.post(ipAddress)
        .type('application/x-www-form-urlencoded')
        .send( postDataSet )
        .encoding ('utf-8')
        .end(function (response) {  //response end of unirest.post
            //console.log(response.body);
                            var doc = new DOMParser().parseFromString(response.body);
                            var SPtoSEND = doc.getElementsByTagName("temp_target")[0].childNodes[0].nodeValue;
                            var SPtoSEND3 = SPtoSEND - 5;
                            var SPtoSEND2 = SPtoSEND3 + 10;
                            var circuitCircuit1 = circuitCircuit + 3;
                            var circuitCircuit2 = circuitCircuit1 + 3;
                            var circuitCircuit3 = circuitCircuit2 + 3;
                            var circuitCircuit4 = circuitCircuit3 + 3;
                            var circuitCircuit5 = circuitCircuit4 + 3;
                            var circuitCircuit6 = circuitCircuit5 + 3;
                            var circuitCircuit7 = circuitCircuit6 + 3;
                            var postDataSetChange = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange1 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit1+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange2 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit2+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange3 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit3+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange4 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit4+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange5 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit5+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange6 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit6+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange7 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit7+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                        var setChangeArray = [postDataSetChange, postDataSetChange1, postDataSetChange2, postDataSetChange3, postDataSetChange4, postDataSetChange5, postDataSetChange6, postDataSetChange7];
                        async.each( 
                        setChangeArray,
                            function(item, callback){
                                unirest.post(ipAddress)
                                .type('application/x-www-form-urlencoded')
                                .send( item )
                                .encoding ('utf-8')
                                .end(function (response) {  //response end of unirest.post
                                    //console.log(response.body);
                                    console.log(coolerID, 'setAlarms for On in process...');
                                }); // close of .end for unirest.post
                                callback();
                            },
                            function(err){
                                // All tasks are done now, refresh OnOff xml file for browser to read updated value
                                console.log(coolerID, 'Status update: On');
                                unirest.post(ipAddress)
                                .type('application/x-www-form-urlencoded')
                                .send( postDataOnOff )
                                .encoding ('utf-8')
                                .end(function (response) {  //response end of unirest.post
                                    //console.log(response.body);
                                    fs.writeFile(xmlFile, response.body, function (err) { //write to the xml file
                                        if (err) return console.log(err);
                                        console.log('xml > ', xmlFile);
                                    }); // close of fs.writeFile
                                }); // close of .end for unirest.post
                                console.log(xmlFile, ' > 255');
                            }
                        );

        }); // close of .end for unirest.post
        console.log(coolerID, 'On cmd sending to > 255');
    }
    //     ___        ____    ___   ___
    //    / _ \      / __ \  / _/  / _/
    //   / // /     / /_/ / / _/  / _/ 
    //  /____/      \____/ /_/   /_/   
    // 
    else if (req.url == "/PennTerminals/DsetOff") {
        var circuitRack = PTvars.coolerDcircuitRack;
        var circuitSuction = PTvars.coolerDcircuitSuction;
        var circuitCircuit = PTvars.coolerDcircuitCircuit;
        var xmlFile = './PennTerminals/CDOnOff.xml';
        var coolerID = "Cooler D";
        var ipAddress = PTvars.ipAddressD;
        var postDataOff = PTvars.postDataOffD;
        var postDataOnOff = PTvars.postDataOnOffD;
        var postDataSet = PTvars.postDataSetD;
        console.log('post url reached /DsetOff');

        // setOff(); ------------------------------
            unirest.post(ipAddress)
            .type('application/x-www-form-urlencoded')
            .send( postDataOff )
            .encoding ('utf-8')
            .end(function (response) {  //response end of unirest.post
                //console.log(response.body);
                console.log(coolerID, ' Off > 255');
            }); // close of .end for unirest.post
            
        // Use set value in cmd to update alarms ------------------------------
        unirest.post(ipAddress)
        .type('application/x-www-form-urlencoded')
        .send( postDataSet )
        .encoding ('utf-8')
        .end(function (response) {  //response end of unirest.post
            //console.log(response.body);
                            var doc = new DOMParser().parseFromString(response.body);
                            var SPtoSEND = doc.getElementsByTagName("temp_target")[0].childNodes[0].nodeValue;
                            var SPtoSEND2 = 100;
                            var circuitCircuit1 = circuitCircuit + 3;
                            var circuitCircuit2 = circuitCircuit1 + 3;
                            var circuitCircuit3 = circuitCircuit2 + 3;
                            var circuitCircuit4 = circuitCircuit3 + 3;
                            var circuitCircuit5 = circuitCircuit4 + 3;
                            var circuitCircuit6 = circuitCircuit5 + 3;
                            var circuitCircuit7 = circuitCircuit6 + 3;
                            var postDataSetChange = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                            var postDataSetChange1 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit1+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                            var postDataSetChange2 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit2+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                            var postDataSetChange3 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit3+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                            var postDataSetChange4 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit4+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                            var postDataSetChange5 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit5+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                            var postDataSetChange6 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit6+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                            var postDataSetChange7 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit7+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                        var setChangeArray = [postDataSetChange, postDataSetChange1, postDataSetChange2, postDataSetChange3, postDataSetChange4, postDataSetChange5, postDataSetChange6, postDataSetChange7];
                        async.each( 
                        setChangeArray,
                            function(item, callback){
                                unirest.post(ipAddress)
                                .type('application/x-www-form-urlencoded')
                                .send( item )
                                .encoding ('utf-8')
                                .end(function (response) {  //response end of unirest.post
                                    //console.log(response.body);
                                    console.log(coolerID, 'setAlarms for Off in process...');
                                }); // close of .end for unirest.post
                                callback();
                            },
                            function(err){
                                // All tasks are done now, refresh OnOff xml file for browser to read updated value
                                console.log(coolerID, 'Status update: Off');
                                unirest.post(ipAddress)
                                .type('application/x-www-form-urlencoded')
                                .send( postDataOnOff )
                                .encoding ('utf-8')
                                .end(function (response) {  //response end of unirest.post
                                    //console.log(response.body);
                                    fs.writeFile(xmlFile, response.body, function (err) { //write to the xml file
                                        if (err) return console.log(err);
                                        console.log('xml > ', xmlFile);
                                    }); // close of fs.writeFile
                                }); // close of .end for unirest.post
                                console.log(xmlFile, ' > 255');
                            }
                        );

        }); // close of .end for unirest.post
        console.log(coolerID, 'Off cmd sending to > 255');
    }
    //     ____       ____       
    //    / __/      / __ \  ___ 
    //   / _/       / /_/ / / _ \
    //  /___/       \____/ /_//_/
    // 
    else if (req.url == "/PennTerminals/EsetOn") {
        var circuitRack = PTvars.coolerEcircuitRack;
        var circuitSuction = PTvars.coolerEcircuitSuction;
        var circuitCircuit = PTvars.coolerEcircuitCircuit;
        var xmlFile = './PennTerminals/CEOnOff.xml';
        var coolerID = "Cooler E";
        var ipAddress = PTvars.ipAddressE;
        var postDataOn = PTvars.postDataOnE;
        var postDataOnOff = PTvars.postDataOnOffE;
        var postDataSet = PTvars.postDataSetE;
        console.log('post url reached /EsetOn');

        // setOn(); ------------------------------
            unirest.post(ipAddress)
            .type('application/x-www-form-urlencoded')
            .send( postDataOn )
            .encoding ('utf-8')
            .end(function (response) {  //response end of unirest.post
                //console.log(response.body);
                console.log(coolerID, ' On > 255');
            }); // close of .end for unirest.post
            
        // Use set value in cmd to update alarms ------------------------------
        unirest.post(ipAddress)
        .type('application/x-www-form-urlencoded')
        .send( postDataSet )
        .encoding ('utf-8')
        .end(function (response) {  //response end of unirest.post
            //console.log(response.body);
                            var doc = new DOMParser().parseFromString(response.body);
                            var SPtoSEND = doc.getElementsByTagName("temp_target")[0].childNodes[0].nodeValue;
                            var SPtoSEND3 = SPtoSEND - 5;
                            var SPtoSEND2 = SPtoSEND3 + 10;
                            var circuitCircuit1 = circuitCircuit + 3;
                            var circuitCircuit2 = circuitCircuit1 + 3;
                            var circuitCircuit3 = circuitCircuit2 + 3;
                            var circuitCircuit4 = circuitCircuit3 + 3;
                            var circuitCircuit5 = circuitCircuit4 + 3;
                            var circuitCircuit6 = circuitCircuit5 + 3;
                            var circuitCircuit7 = circuitCircuit6 + 3;
                            var postDataSetChange = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange1 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit1+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange2 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit2+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange3 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit3+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange4 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit4+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange5 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit5+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange6 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit6+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange7 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit7+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                        var setChangeArray = [postDataSetChange, postDataSetChange1, postDataSetChange2, postDataSetChange3, postDataSetChange4, postDataSetChange5, postDataSetChange6, postDataSetChange7];
                        async.each( 
                        setChangeArray,
                            function(item, callback){
                                unirest.post(ipAddress)
                                .type('application/x-www-form-urlencoded')
                                .send( item )
                                .encoding ('utf-8')
                                .end(function (response) {  //response end of unirest.post
                                    //console.log(response.body);
                                    console.log(coolerID, 'setAlarms for On in process...');
                                }); // close of .end for unirest.post
                                callback();
                            },
                            function(err){
                                // All tasks are done now, refresh OnOff xml file for browser to read updated value
                                console.log(coolerID, 'Status update: On');
                                unirest.post(ipAddress)
                                .type('application/x-www-form-urlencoded')
                                .send( postDataOnOff )
                                .encoding ('utf-8')
                                .end(function (response) {  //response end of unirest.post
                                    //console.log(response.body);
                                    fs.writeFile(xmlFile, response.body, function (err) { //write to the xml file
                                        if (err) return console.log(err);
                                        console.log('xml > ', xmlFile);
                                    }); // close of fs.writeFile
                                }); // close of .end for unirest.post
                                console.log(xmlFile, ' > 255');
                            }
                        );

        }); // close of .end for unirest.post
        console.log(coolerID, 'On cmd sending to > 255');
    }
    //     ____       ____    ___   ___
    //    / __/      / __ \  / _/  / _/
    //   / _/       / /_/ / / _/  / _/ 
    //  /___/       \____/ /_/   /_/   
    //   
    else if (req.url == "/PennTerminals/EsetOff") {
        var circuitRack = PTvars.coolerEcircuitRack;
        var circuitSuction = PTvars.coolerEcircuitSuction;
        var circuitCircuit = PTvars.coolerEcircuitCircuit;
        var xmlFile = './PennTerminals/CEOnOff.xml';
        var coolerID = "Cooler E";
        var ipAddress = PTvars.ipAddressE;
        var postDataOff = PTvars.postDataOffE;
        var postDataOnOff = PTvars.postDataOnOffE;
        var postDataSet = PTvars.postDataSetE;
        console.log('post url reached /EsetOff');

        // setOff(); ------------------------------
            unirest.post(ipAddress)
            .type('application/x-www-form-urlencoded')
            .send( postDataOff )
            .encoding ('utf-8')
            .end(function (response) {  //response end of unirest.post
                //console.log(response.body);
                console.log(coolerID, ' Off > 255');
            }); // close of .end for unirest.post
            
        // Use set value in cmd to update alarms ------------------------------
        unirest.post(ipAddress)
        .type('application/x-www-form-urlencoded')
        .send( postDataSet )
        .encoding ('utf-8')
        .end(function (response) {  //response end of unirest.post
            //console.log(response.body);
                            var doc = new DOMParser().parseFromString(response.body);
                            var SPtoSEND = doc.getElementsByTagName("temp_target")[0].childNodes[0].nodeValue;
                            var SPtoSEND2 = 100;
                            var circuitCircuit1 = circuitCircuit + 3;
                            var circuitCircuit2 = circuitCircuit1 + 3;
                            var circuitCircuit3 = circuitCircuit2 + 3;
                            var circuitCircuit4 = circuitCircuit3 + 3;
                            var circuitCircuit5 = circuitCircuit4 + 3;
                            var circuitCircuit6 = circuitCircuit5 + 3;
                            var circuitCircuit7 = circuitCircuit6 + 3;
                            var postDataSetChange = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                            var postDataSetChange1 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit1+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                            var postDataSetChange2 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit2+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                            var postDataSetChange3 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit3+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                            var postDataSetChange4 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit4+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                            var postDataSetChange5 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit5+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                            var postDataSetChange6 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit6+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                            var postDataSetChange7 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit7+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                        var setChangeArray = [postDataSetChange, postDataSetChange1, postDataSetChange2, postDataSetChange3, postDataSetChange4, postDataSetChange5, postDataSetChange6, postDataSetChange7];
                        async.each( 
                        setChangeArray,
                            function(item, callback){
                                unirest.post(ipAddress)
                                .type('application/x-www-form-urlencoded')
                                .send( item )
                                .encoding ('utf-8')
                                .end(function (response) {  //response end of unirest.post
                                    //console.log(response.body);
                                    console.log(coolerID, 'setAlarms for Off in process...');
                                }); // close of .end for unirest.post
                                callback();
                            },
                            function(err){
                                // All tasks are done now, refresh OnOff xml file for browser to read updated value
                                console.log(coolerID, 'Status update: Off');
                                unirest.post(ipAddress)
                                .type('application/x-www-form-urlencoded')
                                .send( postDataOnOff )
                                .encoding ('utf-8')
                                .end(function (response) {  //response end of unirest.post
                                    //console.log(response.body);
                                    fs.writeFile(xmlFile, response.body, function (err) { //write to the xml file
                                        if (err) return console.log(err);
                                        console.log('xml > ', xmlFile);
                                    }); // close of fs.writeFile
                                }); // close of .end for unirest.post
                                console.log(xmlFile, ' > 255');
                            }
                        );

        }); // close of .end for unirest.post
        console.log(coolerID, 'Off cmd sending to > 255');
    }
    //     ___              __         ____       
    //    / _ \ ___  ____  / /__      / __ \  ___ 
    //   / // // _ \/ __/ /  '_/     / /_/ / / _ \
    //  /____/ \___/\__/ /_/\_\      \____/ /_//_/
    // 
    else if (req.url == "/PennTerminals/DocksetOn") {
        var circuitRack = PTvars.DockcircuitRack;
        var circuitSuction = PTvars.DockcircuitSuction;
        var circuitCircuit = PTvars.DockcircuitCircuit;
        var xmlFile = './PennTerminals/DockOnOff.xml';
        var coolerID = "Dock";
        var ipAddress = PTvars.ipAddressDock;
        var postDataOn = PTvars.postDataOnDock;
        var postDataOnOff = PTvars.postDataOnOffDock;
        var postDataSet = PTvars.postDataSetDock;
        console.log('post url reached /DocksetOn');

        // setOn(); ------------------------------
            unirest.post(ipAddress)
            .type('application/x-www-form-urlencoded')
            .send( postDataOn )
            .encoding ('utf-8')
            .end(function (response) {  //response end of unirest.post
                //console.log(response.body);
                console.log(coolerID, ' On > 255');
            }); // close of .end for unirest.post
            
        // Use set value in cmd to update alarms ------------------------------
        unirest.post(ipAddress)
        .type('application/x-www-form-urlencoded')
        .send( postDataSet )
        .encoding ('utf-8')
        .end(function (response) {  //response end of unirest.post
            //console.log(response.body);
                            var doc = new DOMParser().parseFromString(response.body);
                            var SPtoSEND = doc.getElementsByTagName("temp_target")[0].childNodes[0].nodeValue;
                            var SPtoSEND3 = SPtoSEND - 5;
                            var SPtoSEND2 = SPtoSEND3 + 10;
                            var circuitCircuit1 = circuitCircuit + 3;
                            var circuitCircuit2 = circuitCircuit1 + 3;
                            var circuitCircuit3 = circuitCircuit2 + 3;
                            var circuitCircuit4 = circuitCircuit3 + 3;
                            var circuitCircuit5 = circuitCircuit4 + 3;
                            var circuitCircuit6 = circuitCircuit5 + 3;
                            var circuitCircuit7 = circuitCircuit6 + 3;
                            var postDataSetChange = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange1 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit1+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange2 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit2+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange3 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit3+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange4 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit4+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange5 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit5+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange6 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit6+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                            var postDataSetChange7 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit7+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit><almlo_limit><value>'+SPtoSEND3+'</value></almlo_limit></alarm></alarms></cmd>';
                        var setChangeArray = [postDataSetChange, postDataSetChange1, postDataSetChange2, postDataSetChange3, postDataSetChange4, postDataSetChange5, postDataSetChange6, postDataSetChange7];
                        async.each( 
                        setChangeArray,
                            function(item, callback){
                                unirest.post(ipAddress)
                                .type('application/x-www-form-urlencoded')
                                .send( item )
                                .encoding ('utf-8')
                                .end(function (response) {  //response end of unirest.post
                                    //console.log(response.body);
                                    console.log(coolerID, 'setAlarms for On in process...');
                                }); // close of .end for unirest.post
                                callback();
                            },
                            function(err){
                                // All tasks are done now, refresh OnOff xml file for browser to read updated value
                                console.log(coolerID, 'Status update: On');
                                unirest.post(ipAddress)
                                .type('application/x-www-form-urlencoded')
                                .send( postDataOnOff )
                                .encoding ('utf-8')
                                .end(function (response) {  //response end of unirest.post
                                    //console.log(response.body);
                                    fs.writeFile(xmlFile, response.body, function (err) { //write to the xml file
                                        if (err) return console.log(err);
                                        console.log('xml > ', xmlFile);
                                    }); // close of fs.writeFile
                                }); // close of .end for unirest.post
                                console.log(xmlFile, ' > 255');
                            }
                        );

        }); // close of .end for unirest.post
        console.log(coolerID, 'On cmd sending to > 255');
    }
    //     ___              __         ____    ___   ___
    //    / _ \ ___  ____  / /__      / __ \  / _/  / _/
    //   / // // _ \/ __/ /  '_/     / /_/ / / _/  / _/ 
    //  /____/ \___/\__/ /_/\_\      \____/ /_/   /_/   
    //  
    else if (req.url == "/PennTerminals/DocksetOff") {
        var circuitRack = PTvars.DockcircuitRack;
        var circuitSuction = PTvars.DockcircuitSuction;
        var circuitCircuit = PTvars.DockcircuitCircuit;
        var xmlFile = './PennTerminals/DockOnOff.xml';
        var xmlIntFile = './PennTerminals/DockOnOffInt.xml';
        var coolerID = "Dock";
        var ipAddress = PTvars.ipAddressDock;
        var postDataOff = PTvars.postDataOffDock;
        var postDataOnOff = PTvars.postDataOnOffDock;
        var postDataSet = PTvars.postDataSetDock;
        console.log('post url reached /DocksetOff');

        // setOff(); ------------------------------
            unirest.post(ipAddress)
            .type('application/x-www-form-urlencoded')
            .send( postDataOff )
            .encoding ('utf-8')
            .end(function (response) {  //response end of unirest.post
                //console.log(response.body);
                console.log(coolerID, ' Off > 255');
            }); // close of .end for unirest.post
            
        // Use set value in cmd to update alarms ------------------------------
        unirest.post(ipAddress)
        .type('application/x-www-form-urlencoded')
        .send( postDataSet )
        .encoding ('utf-8')
        .end(function (response) {  //response end of unirest.post
            //console.log(response.body);
                            var doc = new DOMParser().parseFromString(response.body);
                            var SPtoSEND = doc.getElementsByTagName("temp_target")[0].childNodes[0].nodeValue;
                            var SPtoSEND2 = 100;
                            var circuitCircuit1 = circuitCircuit + 3;
                            var circuitCircuit2 = circuitCircuit1 + 3;
                            var circuitCircuit3 = circuitCircuit2 + 3;
                            var circuitCircuit4 = circuitCircuit3 + 3;
                            var circuitCircuit5 = circuitCircuit4 + 3;
                            var circuitCircuit6 = circuitCircuit5 + 3;
                            var circuitCircuit7 = circuitCircuit6 + 3;
                            var postDataSetChange = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                            var postDataSetChange1 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit1+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                            var postDataSetChange2 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit2+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                            var postDataSetChange3 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit3+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                            var postDataSetChange4 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit4+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                            var postDataSetChange5 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit5+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                            var postDataSetChange6 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit6+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                            var postDataSetChange7 = '<cmd action=\"set_circuit\"  rack_id=\"'+circuitRack+'\" suction_id=\"'+circuitSuction+'\" circuit_id=\"'+circuitCircuit7+'\" auth=\"'+PTvars.auth+'\" acct = \"'+PTvars.acct+'\"><alarms><alarm sensor_num=\"1\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm><alarm sensor_num=\"2\"><almhi_limit><value>'+SPtoSEND2+'</value></almhi_limit></alarm></alarms></cmd>';
                        var setChangeArray = [postDataSetChange, postDataSetChange1, postDataSetChange2, postDataSetChange3, postDataSetChange4, postDataSetChange5, postDataSetChange6, postDataSetChange7];
                        async.each( 
                        setChangeArray,
                            function(item, callback){
                                unirest.post(ipAddress)
                                .type('application/x-www-form-urlencoded')
                                .send( item )
                                .encoding ('utf-8')
                                .end(function (response) {  //response end of unirest.post
                                    //console.log(response.body);
                                    console.log(coolerID, 'setAlarms for Off in process...');
                                }); // close of .end for unirest.post
                                callback();
                            },
                            function(err){
                                // All tasks are done now, refresh OnOff xml file for browser to read updated value
                                console.log(coolerID, 'Status update: Off');
                                unirest.post(ipAddress)
                                .type('application/x-www-form-urlencoded')
                                .send( postDataOnOff )
                                .encoding ('utf-8')
                                .end(function (response) {  //response end of unirest.post
                                    //console.log(response.body);
                                    fs.writeFile(xmlFile, response.body, function (err) { //write to the xml file
                                        if (err) return console.log(err);
                                        console.log('xml > ', xmlFile);
                                    }); // close of fs.writeFile
                                }); // close of .end for unirest.post
                                console.log(xmlFile, ' > 255');
                            }
                        );

        }); // close of .end for unirest.post
        console.log(coolerID, 'Off cmd sending to > 255');
    }
//                                                     
//            ____                                     
//          ,'  , `.                                   
//       ,-+-,.' _ |   ,--,                            
//    ,-+-. ;   , || ,--.'|                            
//   ,--.'|'   |  ;| |  |,       .--.--.               
//  |   |  ,', |  ': `--'_      /  /    '      ,---.   
//  |   | /  | |  || ,' ,'|    |  :  /`./     /     \  
//  '   | :  | :  |, '  | |    |  :  ;_      /    / '  
//  ;   . |  ; |--'  |  | :     \  \    `.  .    ' /   
//  |   : |  | ,     '  : |__    `----.   \ '   ; :__  
//  |   : '  |/      |  | '.'|  /  /`--'  / '   | '.'| 
//  ;   | |`-'       ;  :    ; '--'.     /  |   :    : 
//  |   ;/           |  ,   /    `--'---'    \   \  /  
//  '---'             ---`-'                  `----'   
//
    else
        res.end('Invalid Request!');
});
server.listen(8192); // - listen for any incoming requests
console.log('Node.js server at port 8192 is running..')



