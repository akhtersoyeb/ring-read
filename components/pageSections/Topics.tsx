import { Button, Flex, VStack, Wrap, WrapItem, Text } from "@chakra-ui/react"

interface ITopics {
  title?: string;
  topics: Array<string>
}

export default function Topics(props: ITopics) {
  return (
    <VStack alignItems={'start'}>
      {props.title && (
        <Text fontWeight={'medium'} color={'gray.700'}>{props.title}</Text>
      )}
      <Wrap>
        {props.topics.map((topic) => (
          <WrapItem>
            <Button
              fontWeight={'normal'}
              fontSize={'sm'}
            >{topic}</Button>
          </WrapItem>
        ))}
      </Wrap>
    </VStack>
  )
}