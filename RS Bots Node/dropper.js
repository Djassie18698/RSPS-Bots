// nieuwe dropper
function dropLogs() {
    var inventory_x = 1882;
    var inventory_y = 830;
    // drop logs from the inventory
    robot.moveMouse(inventory_x, inventory_y);
    robot.keyToggle('shift', 'down');
    robot.mouseClick();
    robot.keyToggle('shift', 'up');
    sleep(200);
}


// originele versie / kan voor items gebruikt worden die niet gedropt kunnen worden met shift
function dropLogs() {
    var inventory_x = 1882;
    var inventory_y = 830;
    // drop logs from the inventory
    robot.moveMouse(inventory_x, inventory_y);
    robot.mouseClick('right');
    robot.moveMouse(inventory_x, inventory_y + 70);
    robot.mouseClick();
    sleep(1000);
}