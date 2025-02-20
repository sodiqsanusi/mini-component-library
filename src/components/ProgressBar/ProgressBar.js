/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {

  const sizeVariables = {
    small: {
      "--height": 8 + "px",
      "--borderRadiusBar": 4 + "px",
      "--borderRadius": 4 + "px",
    },
    medium: {
      "--height": 12 + "px",
      "--borderRadiusBar": 4 + "px",
      "--borderRadius": 4 + "px",
    },
    large: {
      "--height": 24 + "px",
      "--borderRadius": 8 + "px",
      "--borderRadiusBar": 4 + "px",
      "--padding": 4 + "px",
    },
  }

  const styles = sizeVariables[size];

  return (
    <ProgressContainer style={styles} value={value} aria-valuenow={value} max={100}>
      {value}
      <VisuallyHidden>{value} % of 100%</VisuallyHidden>
    </ProgressContainer>
  );
};

const ProgressContainer = styled.progress`
  box-shadow: 0px 2px 4px ${COLORS.transparentGray35} inset;
  height: var(--height);
  border-radius: var(--borderRadius);
  background-color: ${COLORS.transparentGray15};
  padding: var(--padding);
  appearance: none;

  &::-webkit-progress-bar {
    background-color: transparent;
    border-radius: var(--borderRadius);
  }
  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-radius: ${p => p.value === 100 ? "var(--borderRadiusBar)" : "var(--borderRadiusBar) 0 0 var(--borderRadiusBar)"};
  }
`;

export default ProgressBar;
