import React from 'react';
import Title from '../../../../components/Common/Title';
import SubTitle from '../../../../components/Common/SubTitle';

import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  flex-direction: column;
`;

const Wrapper = styled.div`
  min-height: 40vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

const PleaseChooseOption = () => (
  <>
    <Container>
      <Wrapper>
        <Title>Please Select a Option</Title>
        <SubTitle>Choosing Option will help you</SubTitle>
      </Wrapper>
    </Container>
  </>
);

export default PleaseChooseOption;
