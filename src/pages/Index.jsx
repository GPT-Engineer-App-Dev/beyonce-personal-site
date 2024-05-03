import { Box, Flex, Text, Image, Link, Heading, VStack, SimpleGrid } from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube, FaSpotify } from 'react-icons/fa';

const Index = () => {
  return (
    <Box>
      <Flex as="header" justifyContent="space-between" p={4} bg="gray.800" color="white">
        <Heading as="h1" size="lg">Beyoncé</Heading>
        <Flex as="nav">
          <Link p={2} href="#biography">Biography</Link>
          <Link p={2} href="#gallery">Gallery</Link>
          <Link p={2} href="#videos">Videos</Link>
        </Flex>
      </Flex>
      <Flex direction="column" align="center" id="biography" p={4}>
        <Heading as="h2" size="xl" mb={4}>Biography</Heading>
        <Text maxWidth="container.md" textAlign="center">
          Beyoncé Giselle Knowles-Carter is an American singer, songwriter, and actress. Born and raised in Houston, Texas, Beyoncé performed in various singing and dancing competitions as a child.
        </Text>
      </Flex>
      <Box id="gallery" p={4}>
        <Heading as="h2" size="xl" mb={4} textAlign="center">Gallery</Heading>
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4}>
          <Image src="https://via.placeholder.com/150" alt="Beyoncé Image 1"/>
          <Image src="https://via.placeholder.com/150" alt="Beyoncé Image 2"/>
          <Image src="https://via.placeholder.com/150" alt="Beyoncé Image 3"/>
          <Image src="https://via.placeholder.com/150" alt="Beyoncé Image 4"/>
        </SimpleGrid>
      </Box>
      <VStack id="videos" spacing={4} p={4}>
        <Heading as="h2" size="xl" mb={4}>Music Videos</Heading>
        <Link href="https://www.youtube.com/watch?v=video1" isExternal>
          <Image src="https://via.placeholder.com/300x170" alt="Music Video 1"/>
        </Link>
        <Link href="https://www.youtube.com/watch?v=video2" isExternal>
          <Image src="https://via.placeholder.com/300x170" alt="Music Video 2"/>
        </Link>
      </VStack>
      <Flex as="footer" p={4} justifyContent="center" bg="gray.700" color="white">
        <Link href="https://instagram.com/beyonce" isExternal mx={2}><FaInstagram /></Link>
        <Link href="https://twitter.com/beyonce" isExternal mx={2}><FaTwitter /></Link>
        <Link href="https://youtube.com/beyonce" isExternal mx={2}><FaYoutube /></Link>
        <Link href="https://spotify.com/beyonce" isExternal mx={2}><FaSpotify /></Link>
      </Flex>
    </Box>
  );
};

export default Index;