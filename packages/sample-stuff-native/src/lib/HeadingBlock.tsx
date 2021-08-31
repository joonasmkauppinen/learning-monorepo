import React, { VFC } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

import {
  headingStyles,
  HeadingBlockProps,
} from '@learning-monorepo/sample-stuff-common';

const StyledText = styled(Text)`
  ${headingStyles}
`;

export const HeadingBlock: VFC<HeadingBlockProps> = ({ level, text }) => {
  return <StyledText>{text}</StyledText>;
};
