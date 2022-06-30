import {
  VStack,
  StackDivider
} from "@chakra-ui/react";

import ArticleCard from "../cards/ArticleCard";

import * as articleData from '../../data/articles.json'


export default function ArticleContainer() {
  return (
    <VStack
      spacing={'20px'}
      divider={<StackDivider borderColor='gray.300' />}
    >
      <ArticleCard
        authorPictureSrc={articleData[0].authorPictureSrc}
        authorName={articleData[0].authorName}
        date={articleData[0].date}
        title={articleData[0].title}
        seoText={articleData[0].seoText}
        coverPictureSrc={articleData[0].coverPictureSrc}
        tags={articleData[0].tags}
      />
      <ArticleCard
        authorPictureSrc={articleData[1].authorPictureSrc}
        authorName={articleData[1].authorName}
        date={articleData[1].date}
        title={articleData[1].title}
        seoText={articleData[1].seoText}
        coverPictureSrc={articleData[1].coverPictureSrc}
        tags={articleData[1].tags}
      />
      <ArticleCard
        authorPictureSrc={articleData[1].authorPictureSrc}
        authorName={articleData[1].authorName}
        date={articleData[1].date}
        title={articleData[1].title}
        seoText={articleData[1].seoText}
        coverPictureSrc={articleData[1].coverPictureSrc}
        tags={articleData[1].tags}
      />
      <ArticleCard
        authorPictureSrc={articleData[1].authorPictureSrc}
        authorName={articleData[1].authorName}
        date={articleData[1].date}
        title={articleData[1].title}
        seoText={articleData[1].seoText}
        coverPictureSrc={articleData[1].coverPictureSrc}
        tags={articleData[1].tags}
      />
      <ArticleCard
        authorPictureSrc={articleData[1].authorPictureSrc}
        authorName={articleData[1].authorName}
        date={articleData[1].date}
        title={articleData[1].title}
        seoText={articleData[1].seoText}
        coverPictureSrc={articleData[1].coverPictureSrc}
        tags={articleData[1].tags}
      />
    </VStack>
  )
}
