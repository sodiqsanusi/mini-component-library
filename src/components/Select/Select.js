import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Layout>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationSelect>
        {displayedValue}
        <IconWrapper>
          <Icon id="chevron-down" size={24} strokeWidth={2} />
        </IconWrapper>
      </PresentationSelect>
    </Layout>
  );
};

const Layout = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0%;
  cursor: pointer;
`;

const PresentationSelect = styled.div`
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  padding: 12px 16px;
  padding-right: 48px;
  border-radius: 8px;

  ${NativeSelect}:focus ~ & {
    outline: 2px dotted black;
    outline: 5px auto -webkit-focus-ring-color;
  }
  ${NativeSelect}:hover ~ & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 12px;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 24px;
  height: 24px;
  pointer-events: none;
`;

export default Select;
