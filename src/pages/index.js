import * as React from 'react';
import { Button, Heading, Container } from '@chakra-ui/react';
// styles

// markup
const IndexPage = () => {
	const [ count, setCount ] = React.useState(0);
	return (
		<Container>
      {/* <ChakraProvider> */}
 

			<Heading>hello</Heading>
			{/* <Button>hello</Button> */}
			<Button mt="4" onClick={() => setCount(count + 1)}>{count}</Button>
      
      {/* </ChakraProvider> */}
		</Container>
	);
};

export default IndexPage;
