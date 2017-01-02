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
const querystring = require('querystring');
const appVars = require('../app.js');

// IP Addresses
exports.ipAddressA = 'http://63.139.115.204:8081/html/xml.cgi';
//exports.ipAddressA = 'http://buckstafford.from-md.com:8082/html/xml.cgi';
exports.ipAddressB = 'http://63.139.115.204:8081/html/xml.cgi';
exports.ipAddressC = 'http://63.139.115.204:8081/html/xml.cgi';
exports.ipAddressD = 'http://63.139.115.204:8082/html/xml.cgi';
exports.ipAddressE = 'http://63.139.115.204:8081/html/xml.cgi';
exports.ipAddressDock = 'http://63.139.115.204:8081/html/xml.cgi';

var auth = 12345;
var acct = 50;
exports.auth = auth;
exports.acct = acct;

// COOLER A 
var coolerArelayNode = 98;
var coolerArelayMod = 1;
var coolerArelayPoint= 12;
var coolerAsensorNode= 8;
var coolerAsensorMod= 1;
var coolerAsensorPoint= 18;
var coolerAcircuitRack= 1;
var coolerAcircuitSuction= 2;
var coolerAcircuitCircuit= 1;
exports.coolerArelayNode = coolerArelayNode;
exports.coolerArelayMod = coolerArelayMod;
exports.coolerArelayPoint= coolerArelayPoint;
exports.coolerAsensorNode= coolerAsensorNode;
exports.coolerAsensorMod= coolerAsensorMod;
exports.coolerAsensorPoint= coolerAsensorPoint;
exports.coolerAcircuitRack= coolerAcircuitRack;
exports.coolerAcircuitSuction= coolerAcircuitSuction;
exports.coolerAcircuitCircuit= coolerAcircuitCircuit;

// COOLER B 
var coolerBrelayNode = 98;
var coolerBrelayMod = 1;
var coolerBrelayPoint= 11;
var coolerBsensorNode= 4;
var coolerBsensorMod= 1;
var coolerBsensorPoint= 18;
var coolerBcircuitRack= 1;
var coolerBcircuitSuction= 1;
var coolerBcircuitCircuit= 13;

// COOLER C 
var coolerCrelayNode = 98;
var coolerCrelayMod = 1;
var coolerCrelayPoint= 10;
var coolerCsensorNode= 2;
var coolerCsensorMod= 1;
var coolerCsensorPoint= 18;
var coolerCcircuitRack= 1;
var coolerCcircuitSuction= 1;
var coolerCcircuitCircuit= 5;

// COOLER D 
var coolerDrelayNode = 99;
var coolerDrelayMod = 1;
var coolerDrelayPoint= 9;
var coolerDsensorNode= 0;
var coolerDsensorMod= 0;
var coolerDsensorPoint= 3;
var coolerDcircuitRack= 1;
var coolerDcircuitSuction= 1;
var coolerDcircuitCircuit= 1;

// COOLER E 
var coolerErelayNode = 98;
var coolerErelayMod = 1;
var coolerErelayPoint= 13;
var coolerEsensorNode= 12;
var coolerEsensorMod= 1;
var coolerEsensorPoint= 18;
var coolerEcircuitRack= 1;
var coolerEcircuitSuction= 2;
var coolerEcircuitCircuit= 17;

// Dock     
var DockrelayNode = 98;
var DockrelayMod = 1;
var DockrelayPoint= 9;
var DocksensorNode= 1;
var DocksensorMod= 1;
var DocksensorPoint= 18;
var DockcircuitRack= 1;
var DockcircuitSuction= 1;
var DockcircuitCircuit= 13;

// History Modifiers
var	d = new Date();
var day = d.getDate()-1;
var month = d.getMonth()+1;
var year = d.getFullYear()-2000;
var hour = d.getHours();
var sampleRate = 1800;
var minute = 0;
var second = 0;

// OnOff command Modifiers
var circuitCircuit1A = coolerAcircuitCircuit + 3;
var circuitCircuit1B = coolerBcircuitCircuit + 3;
var circuitCircuit1C = coolerCcircuitCircuit + 3;
var circuitCircuit1D = coolerDcircuitCircuit + 3;
var circuitCircuit1E = coolerEcircuitCircuit + 3;
var circuitCircuit1Dock = DockcircuitCircuit + 3;
  //A
  var circuitCircuit2A = circuitCircuit1A + 3;
  var circuitCircuit3A = circuitCircuit2A + 3;
  var circuitCircuit4A = circuitCircuit3A + 3;
  var circuitCircuit5A = circuitCircuit4A + 3;
  var circuitCircuit6A = circuitCircuit5A + 3;
  var circuitCircuit7A = circuitCircuit6A + 3;
  //B
  var circuitCircuit2B = circuitCircuit1B + 3;
  var circuitCircuit3B = circuitCircuit2B + 3;
  var circuitCircuit4B = circuitCircuit3B + 3;
  var circuitCircuit5B = circuitCircuit4B + 3;
  var circuitCircuit6B = circuitCircuit5B + 3;
  var circuitCircuit7B = circuitCircuit6B + 3;
  //C
  var circuitCircuit2C = circuitCircuit1C + 3;
  var circuitCircuit3C = circuitCircuit2C + 3;
  var circuitCircuit4C = circuitCircuit3C + 3;
  var circuitCircuit5C = circuitCircuit4C + 3;
  var circuitCircuit6C = circuitCircuit5C + 3;
  var circuitCircuit7C = circuitCircuit6C + 3; 
  //D
  var circuitCircuit2D = circuitCircuit1D + 3;
  var circuitCircuit3D = circuitCircuit2D + 3;
  var circuitCircuit4D = circuitCircuit3D + 3;
  var circuitCircuit5D = circuitCircuit4D + 3;
  var circuitCircuit6D = circuitCircuit5D + 3;
  var circuitCircuit7D = circuitCircuit6D + 3;
  //E
  var circuitCircuit2E = circuitCircuit1E + 3;
  var circuitCircuit3E = circuitCircuit2E + 3;
  var circuitCircuit4E = circuitCircuit3E + 3;
  var circuitCircuit5E = circuitCircuit4E + 3;
  var circuitCircuit6E = circuitCircuit5E + 3;
  var circuitCircuit7E = circuitCircuit6E + 3;
  //Dock
  var circuitCircuit2Dock = circuitCircuit1Dock + 3;
  var circuitCircuit3Dock = circuitCircuit2Dock + 3;
  var circuitCircuit4Dock = circuitCircuit3Dock + 3;
  var circuitCircuit5Dock = circuitCircuit4Dock + 3;
  var circuitCircuit6Dock = circuitCircuit5Dock + 3;
  var circuitCircuit7Dock = circuitCircuit6Dock + 3; 
//                                                                                                                                                   
//                                 ____                                                                                ____                          
//             ,----..           ,'  , `.     ,---,                                         ,--,   ,----..           ,'  , `.     ,---,              
//      ,--.  /   /   \       ,-+-,.' _ |   .'  .' `\   .--,                 ,--.          / .`|  /   /   \       ,-+-,.' _ |   .'  .' `\   .--,     
//     /  /| |   :     :   ,-+-. ;   , || ,---.'     \  |\  \               /  /|         /' / ; |   :     :   ,-+-. ;   , || ,---.'     \  |\  \    
//    '  / ' .   |  ;. /  ,--.'|'   |  ;| |   |  .`\  | ` \  `             '  / '        /  / .' .   |  ;. /  ,--.'|'   |  ;| |   |  .`\  | ` \  `   
//   /  / /  .   ; /--`  |   |  ,', |  ': :   : |  '  |  \ \  \           /  / /        /  / ./  .   ; /--`  |   |  ,', |  ': :   : |  '  |  \ \  \  
//  /  / ,   ;   | ;     |   | /  | |  || |   ' '  ;  :   , \  \         /  / ,        / ./  /   ;   | ;     |   | /  | |  || |   ' '  ;  :   , \  \ 
//  \ '\ \   |   : |     '   | :  | :  |, '   | ;  .  |   / /` /         \ '\ \       /  /  /    |   : |     '   | :  | :  |, '   | ;  .  |   / /` / 
//   \  \ '  .   | '___  ;   . |  ; |--'  |   | :  |  '  ` /  /           \  \ '     /  /  /     .   | '___  ;   . |  ; |--'  |   | :  |  '  ` /  /  
//    \  . | '   ; : .'| |   : |  | ,     '   : | /  ;  | .  /             \  . |   ;  /  /      '   ; : .'| |   : |  | ,     '   : | /  ;  | .  /   
//     \__\. '   | '/  : |   : '  |/      |   | '` ,/   ./__/               \__\. ./__;  /       '   | '/  : |   : '  |/      |   | '` ,/   ./__/    
//           |   :    /  ;   | |`-'       ;   :  .'                               |   : /        |   :    /  ;   | |`-'       ;   :  .'              
//            \   \ .'   |   ;/           |   ,.'                                 ;   |/          \   \ .'   |   ;/           |   ,.'                
//             `---`     '---'            '---'                                   `---'            `---`     '---'            '---'                  
//     
  //Temps -------------------------------------------------------------
    exports.postDataTempA = querystring.stringify({
      'msg' : '<cmd action=\"read_sensor\"><sensor node=\"'+coolerAsensorNode+'\" mod=\"'+coolerAsensorMod+'\" point=\"'+coolerAsensorPoint+'\"/></cmd>'
    });
    exports.postDataTempB = querystring.stringify({
      'msg' : '<cmd action=\"read_sensor\"><sensor node=\"'+coolerBsensorNode+'\" mod=\"'+coolerBsensorMod+'\" point=\"'+coolerBsensorPoint+'\"/></cmd>'
    });
    exports.postDataTempC = querystring.stringify({
      'msg' : '<cmd action=\"read_sensor\"><sensor node=\"'+coolerCsensorNode+'\" mod=\"'+coolerCsensorMod+'\" point=\"'+coolerCsensorPoint+'\"/></cmd>'
    });
    exports.postDataTempD = querystring.stringify({
      'msg' : '<cmd action=\"read_sensor\"><sensor node=\"'+coolerDsensorNode+'\" mod=\"'+coolerDsensorMod+'\" point=\"'+coolerDsensorPoint+'\"/></cmd>'
    });
    exports.postDataTempE = querystring.stringify({
      'msg' : '<cmd action=\"read_sensor\"><sensor node=\"'+coolerEsensorNode+'\" mod=\"'+coolerEsensorMod+'\" point=\"'+coolerEsensorPoint+'\"/></cmd>'
    });
    exports.postDataTempDock = querystring.stringify({
      'msg' : '<cmd action=\"read_sensor\"><sensor node=\"'+DocksensorNode+'\" mod=\"'+DocksensorMod+'\" point=\"'+DocksensorPoint+'\"/></cmd>'
    });
  //Sets -------------------------------------------------------------
    exports.postDataSetA = querystring.stringify({
      'msg' : '<cmd compress=\"0\" action=\"read_circuit\" rack_id=\"'+coolerAcircuitRack+'\" suction_id=\"'+coolerAcircuitSuction+'\" circuit_id=\"'+coolerAcircuitCircuit+'\"/></cmd>'
    });
    exports.postDataSetB = querystring.stringify({
      'msg' : '<cmd compress=\"0\" action=\"read_circuit\" rack_id=\"'+coolerBcircuitRack+'\" suction_id=\"'+coolerBcircuitSuction+'\" circuit_id=\"'+coolerBcircuitCircuit+'\"/></cmd>'
    });
    exports.postDataSetC = querystring.stringify({
      'msg' : '<cmd compress=\"0\" action=\"read_circuit\" rack_id=\"'+coolerCcircuitRack+'\" suction_id=\"'+coolerCcircuitSuction+'\" circuit_id=\"'+coolerCcircuitCircuit+'\"/></cmd>'
    });
    exports.postDataSetD = querystring.stringify({
      'msg' : '<cmd compress=\"0\" action=\"read_circuit\" rack_id=\"'+coolerDcircuitRack+'\" suction_id=\"'+coolerDcircuitSuction+'\" circuit_id=\"'+coolerDcircuitCircuit+'\"/></cmd>'
    });
    exports.postDataSetE = querystring.stringify({
      'msg' : '<cmd compress=\"0\" action=\"read_circuit\" rack_id=\"'+coolerEcircuitRack+'\" suction_id=\"'+coolerEcircuitSuction+'\" circuit_id=\"'+coolerEcircuitCircuit+'\"/></cmd>'
    });
    exports.postDataSetDock = querystring.stringify({
      'msg' : '<cmd compress=\"0\" action=\"read_circuit\" rack_id=\"'+DockcircuitRack+'\" suction_id=\"'+DockcircuitSuction+'\" circuit_id=\"'+DockcircuitCircuit+'\"/></cmd>'
    });
  //History -------------------------------------------------------------
    exports.postDataHistA = querystring.stringify({
      'msg' : '<cmd compress=\"0\" action=\"read_history\" nodetype=\"2\" node=\"'+coolerAsensorNode+'\" mod=\"'+coolerAsensorMod+'\" point=\"'+coolerAsensorPoint+'\" sample_rate=\"'+sampleRate+'\"><starttime><year>'+year+'</year><month>'+month+'</month><day>'+day+'</day><hour>'+hour+'</hour><minute>'+minute+'</minute><second>'+second+'</second></starttime></cmd>'
    });
    exports.postDataHistB = querystring.stringify({
      'msg' : '<cmd compress=\"0\" action=\"read_history\" nodetype=\"2\" node=\"'+coolerBsensorNode+'\" mod=\"'+coolerBsensorMod+'\" point=\"'+coolerBsensorPoint+'\" sample_rate=\"'+sampleRate+'\"><starttime><year>'+year+'</year><month>'+month+'</month><day>'+day+'</day><hour>'+hour+'</hour><minute>'+minute+'</minute><second>'+second+'</second></starttime></cmd>'
    });
    exports.postDataHistC = querystring.stringify({
      'msg' : '<cmd compress=\"0\" action=\"read_history\" nodetype=\"2\" node=\"'+coolerCsensorNode+'\" mod=\"'+coolerCsensorMod+'\" point=\"'+coolerCsensorPoint+'\" sample_rate=\"'+sampleRate+'\"><starttime><year>'+year+'</year><month>'+month+'</month><day>'+day+'</day><hour>'+hour+'</hour><minute>'+minute+'</minute><second>'+second+'</second></starttime></cmd>'
    });
    exports.postDataHistD = querystring.stringify({
      'msg' : '<cmd compress=\"0\" action=\"read_history\" nodetype=\"2\" node=\"'+coolerDsensorNode+'\" mod=\"'+coolerDsensorMod+'\" point=\"'+coolerDsensorPoint+'\" sample_rate=\"'+sampleRate+'\"><starttime><year>'+year+'</year><month>'+month+'</month><day>'+day+'</day><hour>'+hour+'</hour><minute>'+minute+'</minute><second>'+second+'</second></starttime></cmd>'
    });
    exports.postDataHistE = querystring.stringify({
      'msg' : '<cmd compress=\"0\" action=\"read_history\" nodetype=\"2\" node=\"'+coolerEsensorNode+'\" mod=\"'+coolerEsensorMod+'\" point=\"'+coolerEsensorPoint+'\" sample_rate=\"'+sampleRate+'\"><starttime><year>'+year+'</year><month>'+month+'</month><day>'+day+'</day><hour>'+hour+'</hour><minute>'+minute+'</minute><second>'+second+'</second></starttime></cmd>'
    });
    exports.postDataHistDock = querystring.stringify({
      'msg' : '<cmd compress=\"0\" action=\"read_history\" nodetype=\"2\" node=\"'+DocksensorNode+'\" mod=\"'+DocksensorMod+'\" point=\"'+DocksensorPoint+'\" sample_rate=\"'+sampleRate+'\"><starttime><year>'+year+'</year><month>'+month+'</month><day>'+day+'</day><hour>'+hour+'</hour><minute>'+minute+'</minute><second>'+second+'</second></starttime></cmd>'
    });
  //OnOff Value -------------------------------------------------------------
    exports.postDataOnOffA = querystring.stringify({
      'msg' : '<cmd compress=\"0\" action=\"read_relay\"><relay node=\"'+coolerArelayNode+'\" mod=\"'+coolerArelayMod+'\" point=\"'+coolerArelayPoint+'\"/></cmd>'
    });
    exports.postDataOnOffB = querystring.stringify({
      'msg' : '<cmd compress=\"0\" action=\"read_relay\"><relay node=\"'+coolerBrelayNode+'\" mod=\"'+coolerBrelayMod+'\" point=\"'+coolerBrelayPoint+'\"/></cmd>'
    }); 
    exports.postDataOnOffC = querystring.stringify({
      'msg' : '<cmd compress=\"0\" action=\"read_relay\"><relay node=\"'+coolerCrelayNode+'\" mod=\"'+coolerCrelayMod+'\" point=\"'+coolerCrelayPoint+'\"/></cmd>'
    });
    exports.postDataOnOffD = querystring.stringify({
      'msg' : '<cmd compress=\"0\" action=\"read_relay\"><relay node=\"'+coolerDrelayNode+'\" mod=\"'+coolerDrelayMod+'\" point=\"'+coolerDrelayPoint+'\"/></cmd>'
    });
    exports.postDataOnOffE = querystring.stringify({
      'msg' : '<cmd compress=\"0\" action=\"read_relay\"><relay node=\"'+coolerErelayNode+'\" mod=\"'+coolerErelayMod+'\" point=\"'+coolerErelayPoint+'\"/></cmd>'
    });
    exports.postDataOnOffDock = querystring.stringify({
      'msg' : '<cmd compress=\"0\" action=\"read_relay\"><relay node=\"'+DockrelayNode+'\" mod=\"'+DockrelayMod+'\" point=\"'+DockrelayPoint+'\"/></cmd>'
    });
  //OnOff Integer -------------------------------------------------------------
    exports.postDataOnOffIntA = querystring.stringify({
      'msg' : '<cmd compress=\"0\" action=\"read_relay\" num_only=\"1\"><relay node=\"'+coolerArelayNode+'\" mod=\"'+coolerArelayMod+'\" point=\"'+coolerArelayPoint+'\"/></cmd>'
    });
    exports.postDataOnOffIntB = querystring.stringify({
      'msg' : '<cmd compress=\"0\" action=\"read_relay\" num_only=\"1\"><relay node=\"'+coolerBrelayNode+'\" mod=\"'+coolerBrelayMod+'\" point=\"'+coolerBrelayPoint+'\"/></cmd>'
    }); 
    exports.postDataOnOffIntC = querystring.stringify({
      'msg' : '<cmd compress=\"0\" action=\"read_relay\" num_only=\"1\"><relay node=\"'+coolerCrelayNode+'\" mod=\"'+coolerCrelayMod+'\" point=\"'+coolerCrelayPoint+'\"/></cmd>'
    });
    exports.postDataOnOffIntD = querystring.stringify({
      'msg' : '<cmd compress=\"0\" action=\"read_relay\" num_only=\"1\"><relay node=\"'+coolerDrelayNode+'\" mod=\"'+coolerDrelayMod+'\" point=\"'+coolerDrelayPoint+'\"/></cmd>'
    });
    exports.postDataOnOffIntE = querystring.stringify({
      'msg' : '<cmd compress=\"0\" action=\"read_relay\" num_only=\"1\"><relay node=\"'+coolerErelayNode+'\" mod=\"'+coolerErelayMod+'\" point=\"'+coolerErelayPoint+'\"/></cmd>'
    });
    exports.postDataOnOffIntDock = querystring.stringify({
      'msg' : '<cmd compress=\"0\" action=\"read_relay\" num_only=\"1\"><relay node=\"'+DockrelayNode+'\" mod=\"'+DockrelayMod+'\" point=\"'+DockrelayPoint+'\"/></cmd>'
    });
  //set On -------------------------------------------------------------
    exports.postDataOnA = querystring.stringify({
      'msg' : '<cmd compress=\"0\" action=\"write_digi_op\" auth=\"'+auth+'\" acct=\"'+acct+'\"><relays><relay node=\"'+coolerArelayNode+'\" mod=\"'+coolerArelayMod+'\" point=\"'+coolerArelayPoint+'\" op_mode=\"2\"/></relays></cmd>'
    });
    exports.postDataOnB = querystring.stringify({
      'msg' : '<cmd compress=\"0\" action=\"write_digi_op\" auth=\"'+auth+'\" acct=\"'+acct+'\"><relays><relay node=\"'+coolerBrelayNode+'\" mod=\"'+coolerBrelayMod+'\" point=\"'+coolerBrelayPoint+'\" op_mode=\"2\"/></relays></cmd>'
    });
    exports.postDataOnC = querystring.stringify({
      'msg' : '<cmd compress=\"0\" action=\"write_digi_op\" auth=\"'+auth+'\" acct=\"'+acct+'\"><relays><relay node=\"'+coolerCrelayNode+'\" mod=\"'+coolerCrelayMod+'\" point=\"'+coolerCrelayPoint+'\" op_mode=\"2\"/></relays></cmd>'
    });
    exports.postDataOnD = querystring.stringify({
      'msg' : '<cmd compress=\"0\" action=\"write_digi_op\" auth=\"'+auth+'\" acct=\"'+acct+'\"><relays><relay node=\"'+coolerDrelayNode+'\" mod=\"'+coolerDrelayMod+'\" point=\"'+coolerDrelayPoint+'\" op_mode=\"2\"/></relays></cmd>'
    });
    exports.postDataOnE = querystring.stringify({
      'msg' : '<cmd compress=\"0\" action=\"write_digi_op\" auth=\"'+auth+'\" acct=\"'+acct+'\"><relays><relay node=\"'+coolerErelayNode+'\" mod=\"'+coolerErelayMod+'\" point=\"'+coolerErelayPoint+'\" op_mode=\"2\"/></relays></cmd>'
    });
    exports.postDataOnDock = querystring.stringify({
      'msg' : '<cmd compress=\"0\" action=\"write_digi_op\" auth=\"'+auth+'\" acct=\"'+acct+'\"><relays><relay node=\"'+DockrelayNode+'\" mod=\"'+DockrelayMod+'\" point=\"'+DockrelayPoint+'\" op_mode=\"2\"/></relays></cmd>'
    });
  //set Off -------------------------------------------------------------
    exports.postDataOffA = querystring.stringify({
      'msg' : '<cmd compress=\"0\" action=\"write_digi_op\" auth=\"'+auth+'\" acct=\"'+acct+'\"><relays><relay node=\"'+coolerArelayNode+'\" mod=\"'+coolerArelayMod+'\" point=\"'+coolerArelayPoint+'\" op_mode=\"3\"/></relays></cmd>'
    });
    exports.postDataOffB = querystring.stringify({
      'msg' : '<cmd compress=\"0\" action=\"write_digi_op\" auth=\"'+auth+'\" acct=\"'+acct+'\"><relays><relay node=\"'+coolerBrelayNode+'\" mod=\"'+coolerBrelayMod+'\" point=\"'+coolerBrelayPoint+'\" op_mode=\"3\"/></relays></cmd>'
    });
    exports.postDataOffC = querystring.stringify({
      'msg' : '<cmd compress=\"0\" action=\"write_digi_op\" auth=\"'+auth+'\" acct=\"'+acct+'\"><relays><relay node=\"'+coolerCrelayNode+'\" mod=\"'+coolerCrelayMod+'\" point=\"'+coolerCrelayPoint+'\" op_mode=\"3\"/></relays></cmd>'
    });
    exports.postDataOffD = querystring.stringify({
      'msg' : '<cmd compress=\"0\" action=\"write_digi_op\" auth=\"'+auth+'\" acct=\"'+acct+'\"><relays><relay node=\"'+coolerDrelayNode+'\" mod=\"'+coolerDrelayMod+'\" point=\"'+coolerDrelayPoint+'\" op_mode=\"3\"/></relays></cmd>'
    });
    exports.postDataOffE = querystring.stringify({
      'msg' : '<cmd compress=\"0\" action=\"write_digi_op\" auth=\"'+auth+'\" acct=\"'+acct+'\"><relays><relay node=\"'+coolerErelayNode+'\" mod=\"'+coolerErelayMod+'\" point=\"'+coolerErelayPoint+'\" op_mode=\"3\"/></relays></cmd>'
    });
    exports.postDataOffDock = querystring.stringify({
      'msg' : '<cmd compress=\"0\" action=\"write_digi_op\" auth=\"'+auth+'\" acct=\"'+acct+'\"><relays><relay node=\"'+DockrelayNode+'\" mod=\"'+DockrelayMod+'\" point=\"'+DockrelayPoint+'\" op_mode=\"3\"/></relays></cmd>'
    });
