import {
  Input,
  InputGroup,
  InputLeftElement
} from "@chakra-ui/react"

import { SearchIcon } from "@chakra-ui/icons"

export default function SearchBar() {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents='none'
        children={<SearchIcon color='gray.500' />}
      />
      <Input borderColor={'gray.700'} rounded={'2xl'} type='text' placeholder='Search' />
    </InputGroup>
  )
}
