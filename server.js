const express = require("express");
const app = express();

// Database connection and initialization
const Song = require("./model/Song.js");
const connectDB = require("./db.js");
connectDB();


app.use(express.json());


app.get("/api/songs", async (req, res) => {
    try {
        const songs = await Song.find({});
        res.status(200).json({ success: true, data: songs });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching songs" });
    }
});


app.post("/api/songs", async (req, res) => {
    const song = req.body;

    if (!song.title || !song.artist || !song.year) {
        return res.status(400).send("Please provide all the details");
    }

    const newSong = new Song(song);
    try {
        await newSong.save();
        res.status(201).json({ success: true, data: newSong });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error adding song" });
    }
});


app.delete("/api/songs/:id", async(req, res) => {
    const { id } = req.params;

	try {
		await Song.findByIdAndDelete(id);
		res.status(200).json({ success: true, message: "Song deleted" });
	} catch (error) {
		console.log("Error deleting song:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}

});


app.listen(5000, () => {
    console.log("Server started at http://localhost:5000");
});
