// Check the output of robot.getScreenSize(). If the result you're given do not match what you expect,
// ie. { width: 1536, height: 864 } when you were expecting 1920x1080, you can do a few things to correct this. 
//In the Windows display settings, if the application scaling is not 100%, try changing it to 100%. You can also sometimes change this on a per-application basis with the "Disable display scaling on high DPI settings" property. 
//Alternatively, you can write a function to translate your coordinates:

///function coordinate(x) {
///    return x * (1536 / 1920);
///}
var robot = require('robotjs');
console.log(robot.getScreenSize());