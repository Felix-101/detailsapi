const express = require('express');
const User_detailsRouter = require('./Routes/user_details'); // Renamed for clarity
const connectDb = require('./util');
const app = express();

app.use(express.json());
// Correctly use the router for all routes starting with '/api'
app.use('/api', User_detailsRouter);

connectDb();
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
