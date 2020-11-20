import React, { useContext } from 'react';

import Section from './styles/Section';
import Card from './styles/Card';
import CardContainer from './styles/CardContainer';
import IconContainer from './styles/IconContainer';

import GlobalStore from '../../Store/getStore';

import GoogleLogin from './GoogleLogin';
import FacebookLogin from './FacebookLogin';
import GithubIcon from './GithubLogin';

import LogOutButton from './LogOutButton';

import Title from '../../components/Common/Title';

const Login = () => {
  const { user } = useContext(GlobalStore);

  const { value } = user;
  return (
    <Section>
      <Card>
        <CardContainer>
          {value !== null ? (
            <>
              <Title>Sign Out</Title>
              <LogOutButton />
            </>
          ) : (
            <>
              <Title>Login</Title>
              <IconContainer>
                <GoogleLogin />
                <FacebookLogin />
                <GithubIcon />
              </IconContainer>
            </>
          )}
        </CardContainer>
      </Card>
    </Section>
  );
};

export default Login;
