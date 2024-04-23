import { Box, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Box p={4}>
      <Button as={Link} to="/todo" colorScheme="teal">Go to Todo App</Button>
    </Box>
  );
};

export default Index;