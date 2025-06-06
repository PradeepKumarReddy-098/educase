import { useNavigate } from 'react-router-dom';
import {Container,HeaderWapper,FormWrapper,Header,Description,FormGroup,Label,Input,LoginButton} from './style'

const LoginScreen = () => {
  const navigate = useNavigate()
  return (
    <>
      <Container>
        <FormWrapper>
          <HeaderWapper>
          <Header>Sign in to your</Header>
          <Header>PopX account</Header>
          </HeaderWapper>
          <Description>
            Lorem ipsum dolor sit amet,
          </Description>
          <Description>consectetur adipiscing elit.</Description>
          <form>
            <FormGroup>
              <Label htmlFor="email">Email Address</Label>
              <Input
                type="email"
                id="email"
                placeholder="Enter email address"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="Enter password"
                required
              />
            </FormGroup>
            <LoginButton type="submit" onClick={()=>navigate('/account')}>Login</LoginButton>
          </form>
        </FormWrapper>
      </Container>
    </>
  );
};

export default LoginScreen;