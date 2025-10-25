import { Container, Flex, HStack, Button, Text, Icon } from "@chakra-ui/react"
import { FaPlusSquare, FaHome } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
		<Container maxW={"50%"} px={4} mb={12}>
			<Flex h={16} alignItems={"center"} justifyContent={"space-between"} flexDir={{base: "column", sm: "row",}}>
				<Text fontSize={28}	fontWeight={"bold"}	textTransform={"uppercase"}	textAlign={"center"}>My Playlist</Text>
				<HStack spacing={2} alignItems={"center"}>
                    <Link to={"/"}>
						<Button bg="transparent" _hover={{ bg: "gray.300" }}><Icon as={FaHome} color="blue.400" boxSize={6}/></Button>
					</Link>
                    <Link to={"/add"}>
						<Button bg="transparent" _hover={{ bg: "gray.300" }}><Icon as={FaPlusSquare} color="blue.400" boxSize={6}/></Button>
					</Link>
                </HStack>
			</Flex>
		</Container>
	);
};
export default Navbar;