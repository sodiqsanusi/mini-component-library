import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const sizes = {
    small: {
      "--fontSize": 16 + "px",
      "--borderWidth": 1 + "px",
      "--paddingLeft": 24 + "px",
    },
    large: {
      "--fontSize": 21 + "px",
      "--borderWidth": 2 + "px",
      "--paddingLeft": 32 + "px",
    },
  }
  const styles = sizes[size];
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Label style={styles} width={width}>
        <IconWrapper>
          <Icon id={icon} size={size === "large" ? 21 : 16} strokeWidth={size === "large" ? 2 : 1}/>
        </IconWrapper>
        <SearchInput
          placeholder={placeholder}
        />
      </Label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  display: inline-block;
  border: none;
  outline: none;
  color: inherit;
  padding-left: var(--paddingLeft);
  font-size: var(--fontSize);
  &::placeholder {
    color: ${COLORS.gray500};
  }
  &:focus {
    outline: 2px solid -webkit-focus-ring-color;
  }
`;

const Label = styled.label`
  display: block;
  width: ${p => p.width + "px"};
  color: ${COLORS.gray700};
  border-bottom: var(--borderWidth) solid ${COLORS.black};
  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  display: inline-block;
  color: inherit;
`;

export default IconInput;
