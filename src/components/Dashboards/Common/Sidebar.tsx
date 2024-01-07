
import { Box, Heading, List, ListItem, Link } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

const Sidebar = () => {

  return (
    <Box
      as="aside"
      position="sticky"
      top="0"
      h="100%"
      w="20%"
      bgColor="gray.200"
      p="4"
      overflowY="auto"
    >
      <Heading textAlign="center" mb="4">
        Sidebar
      </Heading>
      <List spacing="3">
       
      </List>
    </Box>
  );
};

export default Sidebar;
