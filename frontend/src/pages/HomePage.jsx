import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import { useEffect } from "react";
import { useSongStore } from "../store/song";
import SongCard from "../components/SongCard";

const HomePage = () => {
    const { fetchSongs, songs } = useSongStore();

    useEffect(() => {fetchSongs();}, [fetchSongs]);

	return (
		<Container maxW='75%' py={12} px={12} >

			<VStack spacing={12}>

				<SimpleGrid	columns={3} w={"75%"}>
					{songs.map((song) => (<SongCard key={song.title} song={song}/>))}
				</SimpleGrid>

				{songs.length === 0 && (<Text fontSize='32px' textAlign={"center"} fontWeight='bold' color='gray.500'>Playlist empty</Text>)}

			</VStack>

		</Container>
	);
};
export default HomePage;