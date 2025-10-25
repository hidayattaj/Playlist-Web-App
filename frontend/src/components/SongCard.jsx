import { Box, Heading, HStack, Button, Text, Icon } from "@chakra-ui/react";
import { FaRegTrashAlt } from 'react-icons/fa'
import { useSongStore } from "../store/song";

const SongCard = ({ song }) => {

    const {deleteSong} = useSongStore();

    const handleDeleteSong = async (id) => {
        const {success, message} = await deleteSong(id);
    }

	return (
		<Box shadow='lg' m={4} bg="gray.200" rounded='lg' overflow='hidden' transition='all 0.3s' _hover={{ transform: "translateY(-5px)", shadow: "xl" }}>

			<Box p={4}>
                
				<Text fontWeight='bold' fontSize='xl' mb={2}>{song.title}</Text>

                <Heading as='h3' fontWeight="normal" size='md' mb={1}>{song.artist}</Heading>
                <Heading as='h3' fontWeight="normal" size='md' mb={2}>{song.year}</Heading>
                    
				<HStack justify="flex-end" w="full">
					<Button onClick={() => handleDeleteSong(song._id)} bg="transparent" color="red.400" _hover={{ bg: "red.400", color: "white" }}>
  						<Icon as={FaRegTrashAlt} boxSize={6} />
					</Button>
				</HStack>

			</Box>

		</Box>
	);
};
export default SongCard;