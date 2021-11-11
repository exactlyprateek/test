import * as React from 'react';
import { Button } from '@chakra-ui/react';
// styles

// markup
const IndexPage = () => {
	const [ count, setCount ] = React.useState(0);
	return (
		<div>
      {/* <ChakraProvider> */}
 

			<div>hello</div>
			<Button>hello</Button>
			<button onClick={() => setCount(count + 1)}>{count}</button>
      
      {/* </ChakraProvider> */}
		</div>
	);
};

export default IndexPage;
