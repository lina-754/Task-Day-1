const fs =require("fs");
const { json } = require("stream/consumers");
/**
 * Load users from JSON file
 *
 * @param {string} dbFile //jsDoc
 *     This is the path to the json file
 */
let users = [];
function loadUsers(users, dbFile) {
    if(!fs.existsSync(dbFile)){
        return;
    }
    const result = fs.readFileSync(dbFile, "utf8");
    users.push(...JSON.parse(result));
    console.log(result);
}
loadUsers(users, "data/users.json");

/**
 * Load tasks from JSON file
 *
 * @param {string} dbFile
 *     This is the path to the json file
 */
function loadTasks(tasks, dbFile) {
    if(!fs.existsSync(dbFile)){
        return;
    }
    const result = fs.readFileSync(dbFile,"utf8");
    const parsed = JSON.parse(result);
    tasks.push(...parsed);
}

/**
 * Save tasks to JSON file
 *
 * @param {string} dbFile
 *     This is the path to the json file
 */
function saveTasks(tasks, dbFile) {
    if(!dbFile) return;
    fs.writeFileSync(dbFile,JSON.stringify(tasks,null,2),"utf8");
    console.log("Tasks saved successfully.");
}

/**
 * Save users to JSON file
 *
 * @param {string} dbFile
 *     This is the path to the json file
 */
function saveUsers(users, dbFile) {
    if(!dbFile) return;
    fs.writeFileSync(dbFile,JSON.stringify(users),"utf8");
    console.log("users saved successfully.");
}

module.exports = {
    loadUsers,
    loadTasks,
    saveTasks,
    saveUsers
};
