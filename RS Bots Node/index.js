// import the robotjs library
var robot = require("robotjs");

function main() {
    console.log("Starting...");
    sleep(4000);

    // basic infinite loop
    var number_of_loops = 0;
    while (number_of_loops < 5) {
        var tree = findTree();
        // If we can't find a tree, write error message and exit out of the loop
        if (tree == false);
            console.log('Could not find a tree!');
            break;
        // chop down first tree
        robot.moveMouse(tree.x, tree.y);
        robot.mouseClick();
        sleep(4000);

        dropLogs();

        number_of_loops = number_of_loops + 1;
    }

    console.log("Done.");
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

    var sample_color = img.colorAt(tree)
}

function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

//main();
testScreenCapture();
