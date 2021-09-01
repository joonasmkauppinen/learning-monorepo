import React, { VFC } from 'react';
import styled from 'styled-components';

import {
  headingStyles,
  HeadingBlockProps,
} from '@joonasmkauppinen/sample-stuff-common';

const StyledH1 = styled.h1`
  ${headingStyles}
`;

export const HeadingBlock: VFC<HeadingBlockProps> = ({ text }) => {
  return <StyledH1>{text}</StyledH1>;
};
