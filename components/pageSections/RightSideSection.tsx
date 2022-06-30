import { Box } from "@chakra-ui/react";


export default function RightSideSection() {
  return (
    <Box
      display={{ base: 'none', xl: 'block' }}
      width={'400px'}
      minH={'100px'}
      bg={'red.300'}>

      Hello
    </Box>
  )
}
