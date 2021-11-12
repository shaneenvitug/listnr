import { Flex, Box } from '@rebass/grid';
import Paragraph from 'shared-components/Typography/Paragraph';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Header from 'shared-components/Typography/Header';
import SortButton from 'shared-components/SortButton';
import spacing from 'styling/spacing';
import { StyledBox, StyledCategoryShows, TextWrapper, ShowCardWrapper } from './styled';
import ShowCard from '../ShowCard';

function CategoryShows({ shows, description }) {
  // added state to be able to update/sort the shows data array
  const [data, setData] = useState(shows);
  // added sort order state to check active state for the sort option button
  const [sortOrder, setSortOrder] = useState('');

  const handleSort = (sortType) => {
    setSortOrder(sortType);
    if (sortType === 'ascending') {
      const sortAscending = [...shows].sort((a, b) => a.name.localeCompare(b.name));
      setData(sortAscending);
    } else {
      const sortDescending = [...shows].sort((a, b) => b.name.localeCompare(a.name));
      setData(sortDescending);
    }
  };

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
      <Box paddingY={spacing.xs}>
        <Flex justifyContent="space-between" alignItems="center">
          <Header as="h3" variant="m" text={`${shows.length} Podcasts`} />
          <SortButton
            sortOrder={sortOrder}
            onOptionClick={e => handleSort(e)}
            options={[
              {
                key: 'ascending',
                value: 'Sort A-Z',
              },
              {
                key: 'descending',
                value: 'Sort Z-A',
              },
            ]}
          />
        </Flex>
      </Box>
      <ShowCardWrapper>
        {data.map(show => (
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
