import { create } from "zustand";

export const useSongStore = create((set) => ({
    songs: [],
    setSongs: (songs) => set({songs}),
    addSong: async (newSong) => {

        if (!newSong.title || !newSong.artist || !newSong.year) {
			return { success: false, message: "Please fill out all fields." };
		}
        
        const res = await fetch("/api/songs", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newSong),
		});

        const data = await res.json();
		set((state) => ({ songs: [...state.songs, data.data] }));
		return { success: true, message: "Song added to the playlist" };
    },
	fetchSongs: async () => {
		const res = await fetch ("/api/songs");
		const data = await res.json();
		set({songs: data.data});
	},
	deleteSong: async (id) => {
		const res = await fetch(`/api/songs/${id}`, {
			method: "DELETE",
		});
		const data = await res.json();
		if (!data.success) { return { success:false, message: data.message }; }
		set(state => ({songs: state.songs.filter(song => song._id !== id)}));
		return { success: true, message: data.message };
	}
}));