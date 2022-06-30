import {
  Box,
  Button,
  useColorModeValue,
  VStack
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";
import SearchBar from "../forms/SearchBar";
import Topics from "./Topics";
import { SmallAuthorCard } from "../cards/AuthorCard";
import { SmallAuthorContainer } from "../containers/AuthorContainer";

const DemoTopics: string[] = [
  'Tech',
  'Life Style',
  'Food',
  'Art',
  'Mental Health',
  'Psychology',
  'Travel'
]


export default function RightSideSection() {
  return (
    <Box
      display={{ base: 'none', xl: 'block' }}
      width={'400px'}>

      <VStack spacing={'20px'}>

        <Button
          px={8}
          bg={useColorModeValue('#151f21', 'gray.900')}
          color={'white'}
          fontWeight={'normal'}
          width={'full'}
          rounded={'2xl'}
          _hover={{
            boxShadow: 'lg',
          }}
        >
          Upgrade Plan
        </Button>

        <SearchBar />

        <Topics title="Recommended Topics" topics={DemoTopics} />

        <SmallAuthorContainer />

      </VStack>
    </Box>
  )
}
