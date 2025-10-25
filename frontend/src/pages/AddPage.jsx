import { Box, Button, Container, Heading, Input, VStack } from "@chakra-ui/react";
import { useSongStore } from "../store/song";
import { useState } from "react";

const AddPage = () => {
    const [newSong, setNewSong] = useState({title: "", artist: "", year: ""});

    const {addSong} = useSongStore(); 
    const handleAddSong = async () => {
        const {success, message} = await addSong(newSong);
        setNewSong({ title: "", artist: "", year: "" });
    }

    return (
		<Container maxW={"50%"}>

            <Heading as={"h1"} size={"2xl"} textAlign={"center"} mt={8}>Add song to playlist</Heading>

			<VStack spacing={8}>
				
				<Box w={"75%"} p={8} rounded={"lg"} shadow={"md"} mt={8} mb={8}>
					<VStack>

						<Input
                        placeholder='Title'
                        name='title'
                        value={newSong.title}
                        onChange={(e) => setNewSong({ ...newSong, title: e.target.value })}/>
						
                        <Input
                        placeholder='Artist'
                        name='artist'
                        value={newSong.artist}
                        onChange={(e) => setNewSong({ ...newSong, artist: e.target.value })}/>
						
                        <Input
                        placeholder='Release Year'
                        name="release year"
                        value={newSong.year}
                        onChange={(e) => setNewSong({ ...newSong, year: e.target.value })}/>

						<Button colorPalette="blue" onClick = {handleAddSong} w='full'>Add Song</Button>
                        
					</VStack>
				</Box>

			</VStack>
		</Container>
	);
};
export default AddPage;