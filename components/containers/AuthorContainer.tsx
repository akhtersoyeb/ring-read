import { Box, VStack, Text, Link } from '@chakra-ui/react'
import { SmallAuthorCard } from '../cards/AuthorCard'

export default function AuthorContainer() {
  return (
    <>
      Container for big author cards is not ready yet
    </>
  )
}

export function SmallAuthorContainer() {
  return (
    <VStack spacing={'15px'} alignItems={'start'}>
      <Text pb={2}>Recommended Authors</Text>
      <VStack spacing={'10px'}>
        <SmallAuthorCard />
        <SmallAuthorCard />
        <SmallAuthorCard />
        <SmallAuthorCard />
        <SmallAuthorCard />
      </VStack>
      <Link color={'green.700'}>See the full list</Link>
    </VStack>
  )
}
