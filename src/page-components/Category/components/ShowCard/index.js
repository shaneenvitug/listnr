import React from 'react';
import { Flex } from '@rebass/grid';
import Image from 'shared-components/Image';
import PropTypes from 'prop-types';
import Header from 'shared-components/Typography/Header';
import Paragraph from 'shared-components/Typography/Paragraph';
function ShowCard({
  title,
  description,
  images,
}) {
  return (
    <Flex flexDirection="column">
      <Image src={images.squareLarge.url} alt={`${title} cover picture`} />
      <Header
        variant="s"
        transparent={false}
        text={title}
        linesToShow={1}
      />
      <Paragraph
        variant="m"
        transparent
        text={description}
        linesToShow={3}
        lineHeight={1}
      />
    </Flex>
  );
}

ShowCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  images: PropTypes.shape({
    squareLarge: PropTypes.shape({
      url: PropTypes.string,
    }),
  }),
};

ShowCard.defaultProps = {
  title: null,
  description: null,
  images: null,
};

export default ShowCard;

