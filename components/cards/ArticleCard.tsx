import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  HStack,
  Tag,
  SpaceProps,
  useColorModeValue,
  Container,
} from '@chakra-ui/react';


interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
}

interface IBlogAuthor {
  imgSrc: string;
  date: string;
  name: string;
}

interface IArticleCard {
  authorPictureSrc: string;
  authorName: string;
  date: string;
  title: string;
  seoText: string;
  coverPictureSrc: string;
  tags: Array<string>;
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} colorScheme={'twitter'} variant="solid" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};


export const BlogAuthor: React.FC<IBlogAuthor> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="25px"
        src={props.imgSrc}
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="normal" fontSize={'sm'}>{props.name}</Text>
      <Text fontWeight="normal" fontSize={'sm'}>—</Text>
      <Text fontWeight="normal" fontSize={'sm'}>{props.date}</Text>
    </HStack>
  );
};

const ArticleCard: React.FC<IArticleCard> = (props) => {
  return (
    <Container maxW={'7xl'}>
      <Box
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems={'center'}>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          <BlogAuthor imgSrc={props.authorPictureSrc} name={props.authorName} date={props.date} />

          <Heading marginTop="1" size={'md'}>
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              {props.title}
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="sm"
            noOfLines={{ base: 2, lg: 3 }}>
            {props.seoText}
          </Text>
          <BlogTags tags={props.tags} marginTop={2} />
        </Box>

        <Box
          width={{ base: '100%', sm: '25%' }}
          zIndex="2"
          marginLeft={{ base: '0', sm: '2%', lg: '5%' }}
        >
          <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
            <Image
              borderRadius="lg"
              src={props.coverPictureSrc}
              alt={`Unable to load picture for ${props.title}`}
              objectFit="contain"
            />
          </Link>
        </Box>

      </Box>

    </Container>
  );
};

export default ArticleCard;