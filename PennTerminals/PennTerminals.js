//                                                                   ,----,                                                                                                   
//  ,-.----.                                                       ,/   .`|                                                                                                   
//  \    /  \                                                    ,`   .'  :                                ____                                          ,--,                 
//  |   :    \                                                 ;    ;     /                              ,'  , `.   ,--,                               ,--.'|                 
//  |   |  .\ :                  ,---,        ,---,          .'___,/    ,'               __  ,-.      ,-+-,.' _ | ,--.'|          ,---,                |  | :                 
//  .   :  |: |              ,-+-. /  |   ,-+-. /  |         |    :     |              ,' ,'/ /|   ,-+-. ;   , || |  |,       ,-+-. /  |               :  : '      .--.--.    
//  |   |   \ :    ,---.    ,--.'|'   |  ,--.'|'   |         ;    |.';  ;      ,---.   '  | |' |  ,--.'|'   |  || `--'_      ,--.'|'   |    ,--.--.    |  ' |     /  /    '   
//  |   : .   /   /     \  |   |  ,"' | |   |  ,"' |         `----'  |  |     /     \  |  |   ,' |   |  ,', |  |, ,' ,'|    |   |  ,"' |   /       \   '  | |    |  :  /`./   
//  ;   | |`-'   /    /  | |   | /  | | |   | /  | |             '   :  ;    /    /  | '  :  /   |   | /  | |--'  '  | |    |   | /  | |  .--.  .-. |  |  | :    |  :  ;_     
//  |   | ;     .    ' / | |   | |  | | |   | |  | |             |   |  '   .    ' / | |  | '    |   : |  | ,     |  | :    |   | |  | |   \__\/: . .  '  : |__   \  \    `.  
//  :   ' |     '   ;   /| |   | |  |/  |   | |  |/              '   :  |   '   ;   /| ;  : |    |   : |  |/      '  : |__  |   | |  |/    ," .--.; |  |  | '.'|   `----.   \ 
//  :   : :     '   |  / | |   | |--'   |   | |--'               ;   |.'    '   |  / | |  , ;    |   | |`-'       |  | '.'| |   | |--'    /  /  ,.  |  ;  :    ;  /  /`--'  / 
//  |   | :     |   :    | |   |/       |   |/                   '---'      |   :    |  ---'     |   ;/           ;  :    ; |   |/       ;  :   .'   \ |  ,   /  '--'.     /  
//  `---'.|      \   \  /  '---'        '---'                                \   \  /            '---'            |  ,   /  '---'        |  ,     .-./  ---`-'     `--'---'   
//    `---`       `----'                                                      `----'                               ---`-'                 `--`---'                            
//     
var parseString = require('xml2js').parseString;
var unirest = require('unirest');
var express = require('express');
//var router = express.Router();
var http = require('http'); 
const querystring = require('querystring');
var fs = require('fs');
const vars = require('./vars.js');
const app = require('../app.js');

var DataTimer = 30000;
var HistTimer = 1800000;
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
// A Temp Value                 
        setInterval(function(){
            unirest.post(vars.ipAddressA)
            .type('application/x-www-form-urlencoded')
            .send( vars.postDataTempA )
            .encoding ('utf-8')
            .end(function (response) {  //response end of unirest.post
                //console.log(response.body);
                fs.writeFile('./PennTerminals/CATemp.xml', response.body, function (err) { //write to the xml file
                    if (err) return console.log(err);
                    console.log('xml > ./PennTerminals/CATemp.xml');
                }); // close of fs.writeFile
            }); // close of .end for unirest.post
            console.log('POST PennTerminals CATemp > 255');
        }, DataTimer);
// A Set Value 
        setInterval(function(){
            unirest.post(vars.ipAddressA)
            .type('application/x-www-form-urlencoded')
            .send( vars.postDataSetA )
            .encoding ('utf-8')
            .end(function (response) {  //response end of unirest.post
                //console.log(response.body);
                fs.writeFile('./PennTerminals/CASet.xml', response.body, function (err) { //write to the xml file
                    if (err) return console.log(err);
                    console.log('xml > ./PennTerminals/CASet.xml');
                }); // close of fs.writeFile
            }); // close of .end for unirest.post
            console.log('POST PennTerminals CASet > 255');
        }, DataTimer);
// A OnOff Value 
        setInterval(function(){
            unirest.post(vars.ipAddressA)
            .type('application/x-www-form-urlencoded')
            .send( vars.postDataOnOffA )
            .encoding ('utf-8')
            .end(function (response) {  //response end of unirest.post
                //console.log(response.body);
                fs.writeFile('./PennTerminals/CAOnOff.xml', response.body, function (err) { //write to the xml file
                    if (err) return console.log(err);
                    console.log('xml > ./PennTerminals/CAOnOff.xml');
                }); // close of fs.writeFile
            }); // close of .end for unirest.post
            console.log('POST PennTerminals CAOnOff > 255');
        }, DataTimer);
// A OnOff Integer 
        setInterval(function(){
            unirest.post(vars.ipAddressA)
            .type('application/x-www-form-urlencoded')
            .send( vars.postDataOnOffIntA )
            .encoding ('utf-8')
            .end(function (response) {  //response end of unirest.post
                //console.log(response.body);
                fs.writeFile('./PennTerminals/CAOnOffInt.xml', response.body, function (err) { //write to the xml file
                    if (err) return console.log(err);
                    console.log('xml > ./PennTerminals/CAOnOffInt.xml');
                }); // close of fs.writeFile
            }); // close of .end for unirest.post
            console.log('POST PennTerminals CAOnOffInt > 255');
        }, DataTimer);
// A History 
        setInterval(function(){
            unirest.post(vars.ipAddressA)
            .type('application/x-www-form-urlencoded')
            .send( vars.postDataHistA )
            .encoding ('utf-8')
            .end(function (response) {  //response end of unirest.post
                //console.log(response.body);
                fs.writeFile('./PennTerminals/CAHist.xml', response.body, function (err) { //write to the xml file
                    if (err) return console.log(err);
                    console.log('xml > ./PennTerminals/CAHist.xml');
                }); // close of fs.writeFile
            }); // close of .end for unirest.post
            console.log('POST PennTerminals CAHist > 255');
        }, HistTimer);

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
// B Temp Value 
        setInterval(function(){
            unirest.post(vars.ipAddressB)
            .type('application/x-www-form-urlencoded')
            .send( vars.postDataTempB )
            .encoding ('utf-8')
            .end(function (response) {  //response end of unirest.post
                //console.log(response.body);
                fs.writeFile('./PennTerminals/CBTemp.xml', response.body, function (err) { //write to the xml file
                    if (err) return console.log(err);
                    console.log('xml > ./PennTerminals/CBTemp.xml');
                }); // close of fs.writeFile
            }); // close of .end for unirest.post
            console.log('POST PennTerminals CBTemp > 255');
        }, DataTimer);
// B Set Value 
        setInterval(function(){
            unirest.post(vars.ipAddressB)
            .type('application/x-www-form-urlencoded')
            .send( vars.postDataSetB )
            .encoding ('utf-8')
            .end(function (response) {  //response end of unirest.post
                //console.log(response.body);
                fs.writeFile('./PennTerminals/CBSet.xml', response.body, function (err) { //write to the xml file
                    if (err) return console.log(err);
                    console.log('xml > ./PennTerminals/CBSet.xml');
                }); // close of fs.writeFile
            }); // close of .end for unirest.post
            console.log('POST PennTerminals CBSet > 255');
        }, DataTimer);
// B OnOff Value 
        setInterval(function(){
            unirest.post(vars.ipAddressB)
            .type('application/x-www-form-urlencoded')
            .send( vars.postDataOnOffB )
            .encoding ('utf-8')
            .end(function (response) {  //response end of unirest.post
                //console.log(response.body);
                fs.writeFile('./PennTerminals/CBOnOff.xml', response.body, function (err) { //write to the xml file
                    if (err) return console.log(err);
                    console.log('xml > ./PennTerminals/CBOnOff.xml');
                }); // close of fs.writeFile
            }); // close of .end for unirest.post
            console.log('POST PennTerminals CBOnOff > 255');
        }, DataTimer);
// B OnOff Integer 
        setInterval(function(){
            unirest.post(vars.ipAddressB)
            .type('application/x-www-form-urlencoded')
            .send( vars.postDataOnOffIntB )
            .encoding ('utf-8')
            .end(function (response) {  //response end of unirest.post
                //console.log(response.body);
                fs.writeFile('./PennTerminals/CBOnOffInt.xml', response.body, function (err) { //write to the xml file
                    if (err) return console.log(err);
                    console.log('xml > ./PennTerminals/CBOnOffInt.xml');
                }); // close of fs.writeFile
            }); // close of .end for unirest.post
            console.log('POST PennTerminals CBOnOffInt > 255');
        }, DataTimer);
// B History 
        setInterval(function(){
            unirest.post(vars.ipAddressB)
            .type('application/x-www-form-urlencoded')
            .send( vars.postDataHistB )
            .encoding ('utf-8')
            .end(function (response) {  //response end of unirest.post
                //console.log(response.body);
                fs.writeFile('./PennTerminals/CBHist.xml', response.body, function (err) { //write to the xml file
                    if (err) return console.log(err);
                    console.log('xml > ./PennTerminals/CBHist.xml');
                }); // close of fs.writeFile
            }); // close of .end for unirest.post
            console.log('POST PennTerminals CBHist > 255');
        }, HistTimer);

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
// C Temp Value 
        setInterval(function(){
            unirest.post(vars.ipAddressC)
            .type('application/x-www-form-urlencoded')
            .send( vars.postDataTempC )
            .encoding ('utf-8')
            .end(function (response) {  //response end of unirest.post
                //console.log(response.body);
                fs.writeFile('./PennTerminals/CCTemp.xml', response.body, function (err) { //write to the xml file
                    if (err) return console.log(err);
                    console.log('xml > ./PennTerminals/CCTemp.xml');
                }); // close of fs.writeFile
            }); // close of .end for unirest.post
            console.log('POST PennTerminals CCTemp > 255');
        }, DataTimer);
// C Set Value 
        setInterval(function(){
            unirest.post(vars.ipAddressC)
            .type('application/x-www-form-urlencoded')
            .send( vars.postDataSetC )
            .encoding ('utf-8')
            .end(function (response) {  //response end of unirest.post
                //console.log(response.body);
                fs.writeFile('./PennTerminals/CCSet.xml', response.body, function (err) { //write to the xml file
                    if (err) return console.log(err);
                    console.log('xml > ./PennTerminals/CCSet.xml');
                }); // close of fs.writeFile
            }); // close of .end for unirest.post
            console.log('POST PennTerminals CCSet > 255');
        }, DataTimer);
// C OnOff Value 
        setInterval(function(){
            unirest.post(vars.ipAddressC)
            .type('application/x-www-form-urlencoded')
            .send( vars.postDataOnOffC )
            .encoding ('utf-8')
            .end(function (response) {  //response end of unirest.post
                //console.log(response.body);
                fs.writeFile('./PennTerminals/CCOnOff.xml', response.body, function (err) { //write to the xml file
                    if (err) return console.log(err);
                    console.log('xml > ./PennTerminals/CCOnOff.xml');
                }); // close of fs.writeFile
            }); // close of .end for unirest.post
            console.log('POST PennTerminals CCOnOff > 255');
        }, DataTimer);
// C OnOff Integer 
        setInterval(function(){
            unirest.post(vars.ipAddressC)
            .type('application/x-www-form-urlencoded')
            .send( vars.postDataOnOffIntC )
            .encoding ('utf-8')
            .end(function (response) {  //response end of unirest.post
                //console.log(response.body);
                fs.writeFile('./PennTerminals/CCOnOffInt.xml', response.body, function (err) { //write to the xml file
                    if (err) return console.log(err);
                    console.log('xml > ./PennTerminals/CCOnOffInt.xml');
                }); // close of fs.writeFile
            }); // close of .end for unirest.post
            console.log('POST PennTerminals CCOnOffInt > 255');
        }, DataTimer);
// C History 
        setInterval(function(){
            unirest.post(vars.ipAddressC)
            .type('application/x-www-form-urlencoded')
            .send( vars.postDataHistC )
            .encoding ('utf-8')
            .end(function (response) {  //response end of unirest.post
                //console.log(response.body);
                fs.writeFile('./PennTerminals/CCHist.xml', response.body, function (err) { //write to the xml file
                    if (err) return console.log(err);
                    console.log('xml > ./PennTerminals/CCHist.xml');
                }); // close of fs.writeFile
            }); // close of .end for unirest.post
            console.log('POST PennTerminals CCHist > 255');
        }, HistTimer);

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
// D Temp Value 
        setInterval(function(){
            unirest.post(vars.ipAddressD)
            .type('application/x-www-form-urlencoded')
            .send( vars.postDataTempD )
            .encoding ('utf-8')
            .end(function (response) {  //response end of unirest.post
                //console.log(response.body);
                fs.writeFile('./PennTerminals/CDTemp.xml', response.body, function (err) { //write to the xml file
                    if (err) return console.log(err);
                    console.log('xml > ./PennTerminals/CDTemp.xml');
                }); // close of fs.writeFile
            }); // close of .end for unirest.post
            console.log('POST PennTerminals CDTemp > 255');
        }, DataTimer);
// D Set Value 
        setInterval(function(){
            unirest.post(vars.ipAddressD)
            .type('application/x-www-form-urlencoded')
            .send( vars.postDataSetD )
            .encoding ('utf-8')
            .end(function (response) {  //response end of unirest.post
                //console.log(response.body);
                fs.writeFile('./PennTerminals/CDSet.xml', response.body, function (err) { //write to the xml file
                    if (err) return console.log(err);
                    console.log('xml > ./PennTerminals/CDSet.xml');
                }); // close of fs.writeFile
            }); // close of .end for unirest.post
            console.log('POST PennTerminals CDSet > 255');
        }, DataTimer);
// D OnOff Value 
        setInterval(function(){
            unirest.post(vars.ipAddressD)
            .type('application/x-www-form-urlencoded')
            .send( vars.postDataOnOffD )
            .encoding ('utf-8')
            .end(function (response) {  //response end of unirest.post
                //console.log(response.body);
                fs.writeFile('./PennTerminals/CDOnOff.xml', response.body, function (err) { //write to the xml file
                    if (err) return console.log(err);
                    console.log('xml > ./PennTerminals/CDOnOff.xml');
                }); // close of fs.writeFile
            }); // close of .end for unirest.post
            console.log('POST PennTerminals CDOnOff > 255');
        }, DataTimer);
// D OnOff Integer 
        setInterval(function(){
            unirest.post(vars.ipAddressD)
            .type('application/x-www-form-urlencoded')
            .send( vars.postDataOnOffIntD )
            .encoding ('utf-8')
            .end(function (response) {  //response end of unirest.post
                //console.log(response.body);
                fs.writeFile('./PennTerminals/CDOnOffInt.xml', response.body, function (err) { //write to the xml file
                    if (err) return console.log(err);
                    console.log('xml > ./PennTerminals/CDOnOffInt.xml');
                }); // close of fs.writeFile
            }); // close of .end for unirest.post
            console.log('POST PennTerminals CDOnOffInt > 255');
        }, DataTimer);
// D History 
        setInterval(function(){
            unirest.post(vars.ipAddressD)
            .type('application/x-www-form-urlencoded')
            .send( vars.postDataHistD )
            .encoding ('utf-8')
            .end(function (response) {  //response end of unirest.post
                //console.log(response.body);
                fs.writeFile('./PennTerminals/CDHist.xml', response.body, function (err) { //write to the xml file
                    if (err) return console.log(err);
                    console.log('xml > ./PennTerminals/CDHist.xml');
                }); // close of fs.writeFile
            }); // close of .end for unirest.post
            console.log('POST PennTerminals CDHist > 255');
        }, HistTimer);

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
// E Temp Value 
        setInterval(function(){
            unirest.post(vars.ipAddressE)
            .type('application/x-www-form-urlencoded')
            .send( vars.postDataTempE )
            .encoding ('utf-8')
            .end(function (response) {  //response end of unirest.post
                //console.log(response.body);
                fs.writeFile('./PennTerminals/CETemp.xml', response.body, function (err) { //write to the xml file
                    if (err) return console.log(err);
                    console.log('xml > ./PennTerminals/CETemp.xml');
                }); // close of fs.writeFile
            }); // close of .end for unirest.post
            console.log('POST PennTerminals CETemp > 255');
        }, DataTimer);
// E Set Value 
        setInterval(function(){
            unirest.post(vars.ipAddressE)
            .type('application/x-www-form-urlencoded')
            .send( vars.postDataSetE )
            .encoding ('utf-8')
            .end(function (response) {  //response end of unirest.post
                //console.log(response.body);
                fs.writeFile('./PennTerminals/CESet.xml', response.body, function (err) { //write to the xml file
                    if (err) return console.log(err);
                    console.log('xml > ./PennTerminals/CESet.xml');
                }); // close of fs.writeFile
            }); // close of .end for unirest.post
            console.log('POST PennTerminals CESet > 255');
        }, DataTimer);
// E OnOff Value 
        setInterval(function(){
            unirest.post(vars.ipAddressE)
            .type('application/x-www-form-urlencoded')
            .send( vars.postDataOnOffE )
            .encoding ('utf-8')
            .end(function (response) {  //response end of unirest.post
                //console.log(response.body);
                fs.writeFile('./PennTerminals/CEOnOff.xml', response.body, function (err) { //write to the xml file
                    if (err) return console.log(err);
                    console.log('xml > ./PennTerminals/CEOnOff.xml');
                }); // close of fs.writeFile
            }); // close of .end for unirest.post
            console.log('POST PennTerminals CEOnOff > 255');
        }, DataTimer);
// E OnOff Integer 
        setInterval(function(){
            unirest.post(vars.ipAddressE)
            .type('application/x-www-form-urlencoded')
            .send( vars.postDataOnOffIntE )
            .encoding ('utf-8')
            .end(function (response) {  //response end of unirest.post
                //console.log(response.body);
                fs.writeFile('./PennTerminals/CEOnOffInt.xml', response.body, function (err) { //write to the xml file
                    if (err) return console.log(err);
                    console.log('xml > ./PennTerminals/CEOnOffInt.xml');
                }); // close of fs.writeFile
            }); // close of .end for unirest.post
            console.log('POST PennTerminals CEOnOffInt > 255');
        }, DataTimer);
// E History 
        setInterval(function(){
            unirest.post(vars.ipAddressE)
            .type('application/x-www-form-urlencoded')
            .send( vars.postDataHistE )
            .encoding ('utf-8')
            .end(function (response) {  //response end of unirest.post
                //console.log(response.body);
                fs.writeFile('./PennTerminals/CEHist.xml', response.body, function (err) { //write to the xml file
                    if (err) return console.log(err);
                    console.log('xml > ./PennTerminals/CEHist.xml');
                }); // close of fs.writeFile
            }); // close of .end for unirest.post
            console.log('POST PennTerminals CEHist > 255');
        }, HistTimer);

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
// Dock Temp Value 
        setInterval(function(){
            unirest.post(vars.ipAddressDock)
            .type('application/x-www-form-urlencoded')
            .send( vars.postDataTempDock )
            .encoding ('utf-8')
            .end(function (response) {  //response end of unirest.post
                //console.log(response.body);
                fs.writeFile('./PennTerminals/DockTemp.xml', response.body, function (err) { //write to the xml file
                    if (err) return console.log(err);
                    console.log('xml > ./PennTerminals/DockTemp.xml');
                }); // close of fs.writeFile
            }); // close of .end for unirest.post
            console.log('POST PennTerminals DockTemp > 255');
        }, DataTimer);
// Dock Set Value 
        setInterval(function(){
            unirest.post(vars.ipAddressDock)
            .type('application/x-www-form-urlencoded')
            .send( vars.postDataSetDock )
            .encoding ('utf-8')
            .end(function (response) {  //response end of unirest.post
                //console.log(response.body);
                fs.writeFile('./PennTerminals/DockSet.xml', response.body, function (err) { //write to the xml file
                    if (err) return console.log(err);
                    console.log('xml > ./PennTerminals/DockSet.xml');
                }); // close of fs.writeFile
            }); // close of .end for unirest.post
            console.log('POST PennTerminals DockSet > 255');
        }, DataTimer);
// Dock OnOff Value 
        setInterval(function(){
            unirest.post(vars.ipAddressDock)
            .type('application/x-www-form-urlencoded')
            .send( vars.postDataOnOffDock )
            .encoding ('utf-8')
            .end(function (response) {  //response end of unirest.post
                //console.log(response.body);
                fs.writeFile('./PennTerminals/DockOnOff.xml', response.body, function (err) { //write to the xml file
                    if (err) return console.log(err);
                    console.log('xml > ./PennTerminals/DockOnOff.xml');
                }); // close of fs.writeFile
            }); // close of .end for unirest.post
            console.log('POST PennTerminals DockOnOff > 255');
        }, DataTimer);
// Dock OnOff Integer 
        setInterval(function(){
            unirest.post(vars.ipAddressDock)
            .type('application/x-www-form-urlencoded')
            .send( vars.postDataOnOffIntDock )
            .encoding ('utf-8')
            .end(function (response) {  //response end of unirest.post
                //console.log(response.body);
                fs.writeFile('./PennTerminals/DockOnOffInt.xml', response.body, function (err) { //write to the xml file
                    if (err) return console.log(err);
                    console.log('xml > ./PennTerminals/DockOnOffInt.xml');
                }); // close of fs.writeFile
            }); // close of .end for unirest.post
            console.log('POST PennTerminals DockOnOffInt > 255');
        }, DataTimer);
// Dock History 
        setInterval(function(){
            unirest.post(vars.ipAddressDock)
            .type('application/x-www-form-urlencoded')
            .send( vars.postDataHistDock )
            .encoding ('utf-8')
            .end(function (response) {  //response end of unirest.post
                //console.log(response.body);
                fs.writeFile('./PennTerminals/DockHist.xml', response.body, function (err) { //write to the xml file
                    if (err) return console.log(err);
                    console.log('xml > ./PennTerminals/DockHist.xml');
                }); // close of fs.writeFile
            }); // close of .end for unirest.post
            console.log('POST PennTerminals DockHist > 255');
        }, HistTimer);