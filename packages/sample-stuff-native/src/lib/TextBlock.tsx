import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

import { textStyles } from '@joonasmkauppinen/sample-stuff-common';

const StyledText = styled(Text)`
  ${textStyles};
`;

export const TextBlock = () => {
  return <StyledText />;
};
