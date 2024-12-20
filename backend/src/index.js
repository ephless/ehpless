import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import adminRoutes from './routes/admin.route.js';
import authRoutes from './routes/auth.route.js';
import songRoutes from './routes/song.route.js';
import albumRoutes from './routes/album.route.js';
import statsRoutes from './routes/stats.route.js';



dotenv.config();


const app = express();
const PORT = process.env.PORT || 5100;

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/albums", albumRoutes);
app.use("/api/stats", statsRoutes);


app.get('/', (req, res) => {
    res.send('Hello World!');
    console.log('GET request received at '+req.path);

});



app.listen(PORT, () => {
    console.log("Server is running on http://localhost:"+PORT);
    console.log('Press Ctrl+C to stop the server');
})