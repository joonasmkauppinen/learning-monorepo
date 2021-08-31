import React from 'react';
import styled from 'styled-components';
import { headingStyles, } from '@learning-monorepo/sample-stuff-common';
const StyledH1 = styled.h1 `
  ${headingStyles}
`;
export const HeadingBlock = ({ text }) => {
    return React.createElement(StyledH1, null, text);
};
//# sourceMappingURL=HeadingBlock.js.map