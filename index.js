// import the robotjs library
var robot = require("robotjs");

function main() {
    console.log("Starting...");
    sleep(4000);

    // basic infinite loop
    while (true) {
        var tree = findTree();
        // If we can't find a tree, write error message and exit out of the loop
        if (tree == false) {
            rotateCamera();
            continue;
        }

        // chop down first tree
        robot.moveMouse(tree.x, tree.y);
        robot.mouseClick();
        sleep(4000);

        dropLogs();
    }
}

function dropLogs() {
    var inventory_x = 1882;
    var inventory_y = 760;
    // inventory dropper
    robot.moveMouse(inventory_x, inventory_y);
    robot.mouseClick('right');
    robot.moveMouse(inventory_x, inventory_y+ 75);
    robot.mouseClick();
    sleep(1000);
}

function testScreenCapture() {
    // taking a screenshot
    var img = robot.screen.capture(0, 0, 1920, 1080);

    var pixel_color = img.colorAt(24, 14);
    console.log(pixel_color);
}

function findTree() {
    var x =  300, y = 300, width = 1300, height = 500
    var img = robot.screen.capture(x, y, width, height);

    var tree_colors = ["766137", "705c34", "735e35","7d6639"];

    for (var i = 0; i < 100; i++) {
        var random_x = getRandomInt(0, width-1);
        var random_y = getRandomInt(0, height-1);
        var sample_color = img.colorAt(random_x, random_y);

        if (tree_colors.includes(sample_color)){
            var screen_x = random_x + x;
            var screen_y = random_y = y;

            console.log("Found a tree at: " + screen_x + ", " + screen_y + " color " + sample_color);
        }
    }
///    for (var i = 0; i < width; i++) {
///        for (var j = 0; j < height; j++) {
///            var sample_color = img.colorAt(i, j);
///        }
///    }
}

function rotateCamera() {
    console.log("Rotating camera, no logs were found");
    robot.keyToggle ('right', 'down');
    sleep(1000);
    robot.keyToggle ('right', 'up');
}

function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

main();

