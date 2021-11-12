import { Flex } from '@rebass/grid';
import Paragraph from 'shared-components/Typography/Paragraph';
import PropTypes from 'prop-types';
import React from 'react';
import Header from 'shared-components/Typography/Header';
import { StyledBox, StyledCategoryShows, TextWrapper, ShowCardWrapper } from './styled';
import ShowCard from '../ShowCard';
function CategoryShows({ shows, description }) {
  return (
    <StyledCategoryShows>
      <Flex justifyContent="space-between" alignItems="center" flexWrap="wrap">
        <StyledBox>
          {description && (
          <TextWrapper>
            <Paragraph text={description} variant="l" transparent />
          </TextWrapper>
          )}
        </StyledBox>
      </Flex>
      <Header as="h3" variant="m" text={`${shows.length} Podcasts`} />
      <ShowCardWrapper>
        {shows.map(show => (
          <ShowCard
            key={show.id}
            title={show.name}
            description={show.description}
            images={show.images}
          />
        ))
        }
      </ShowCardWrapper>
    </StyledCategoryShows>
  );
}

CategoryShows.propTypes = {
  shows: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    images: PropTypes.shape({
      squareLarge: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
  })),
  description: PropTypes.string,
};

CategoryShows.defaultProps = {
  shows: [],
  description: null,
};

export default CategoryShows;
