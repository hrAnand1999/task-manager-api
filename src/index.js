const express = require('express');
require('./db/mongoose.js');
const userRouter = require('./Router/user');
const taskRouter = require('./Router/task');

const app = express();
const port = process.env.PORT || 3000

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log(`Server is on the port ${port}`);
})


