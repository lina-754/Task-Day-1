// Express Server Entry Point
const express = require('express');
const { loadTasks, loadUsers, saveTasks, saveUsers} = require('./bouns');

const app = express();
const PORT = 6060;

// Local Database
const tasks = [];
const users = [];

loadTasks(tasks, "data/tasks.json");
loadUsers(users, "data/users.json");

// Middleware
app.use(express.json());

// Routes
app.get('/api/tasks', (req, res) => {
    // should get all tasks from tasks array
    res.json(tasks);
});

app.get('/api/tasks/search', (req, res) => {
    // query string should contain keyword and we should search in tasks array using this keyword
    // If the keyword exists on title or description we should respond with this task
    const keyword = req.query.keyword;
    if(!keyword){
    return res.status(400).json({error:"keyword are require"})
    }
    const search = keyword.toLowerCase();
    for(let i of tasks){
        if(i.title.toLowerCase().includes(search)||i.description.toLowerCase().includes(search)){
            return res.json(i);
        }
    }
    return res.status(400).json({error:"keyword not found"})
});

app.post('/api/tasks', (req, res) => {
    // body should contain these info title, description, priority(high, low, medium)
    const {title,description,priority} = req.body;
    if(!title || !description || !priority){
        return res.send("title, description, priority are require")
    }
    const newtask = {
        title,
        description,
        priority
    };
    tasks.push(newtask);
    // KEEP THIS CODE AFTER ADDING TASK TO TASKS ARRAY
    saveTasks(tasks, "data/tasks.json");
    return res.send("registed");
});

app.get("/profile", (req, res)  => {
    // we get query string from req and search user in users array
    const user = req.query.user;
    if(!user){
        return res.json({error:"user are require"});
    }
    const searchUser = user.toLowerCase();
    for(let i of users){
        if(i.username.toLowerCase()===searchUser){
            return res.json(i);
    }}
    return res.json({ error: "user not found" });
});

app.post("/register", (req, res)  => {
    // body should contain these info username, email, password
    const {username, email, password}=req.body;
    if(!username||!email||!password){
        return res.json({error:"username, email, password are require"});
    }
    const newUser={
        username, email, password
    };
    users.push(newUser);
    // KEEP THIS CODE AFTER ADDING USER TO USERS ARRAY
    saveUsers(users, "data/users.json");
    return res.status(201).json({ message: "User registered successfully", user: newUser });
});

app.post("/login", (req, res)  => {
    // body should contain these info username or email, password
    const {username, email, password}=req.body;
    if((!username && !email) || !password){
        return res.json({error:"username, email, password are require"});
    }
    for(let i of users){
        if((username.toLowerCase()===i.username.toLowerCase()
            ||email.toLowerCase()===i.email.toLowerCase())
            &&password.toLowerCase()===i.password.toLowerCase()){
                return res.json(i);
        }
    }
    return res.json({error:"user not found"});
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
