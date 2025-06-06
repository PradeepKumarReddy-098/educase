import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; 
  @media (max-width: 768px) {
    padding: 20px; 
  }
  @media (min-width: 769px) {
    background-color: #f0f2f5;
  }
`;

export const HeaderWapper = styled.div`
 margin-bottom:10px;
`

// Form Wrapper
export const FormWrapper = styled.div`
  background-color: #fffdfd;
  padding: 40px;
  border-radius: 8px;
  min-height: 100vh;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 420px; 
  box-sizing: border-box;

  @media (min-width: 769px) {
    margin: auto;
  }
`;

// Form Header
export const Header = styled.h2`
  text-align: left;
  color: #333;
  margin:2px;
  font-family: sans-serif;
`;

export const Description = styled.p`
  text-align: left;
  color: #666;
  font-size: 14px;
  margin-bottom: 30px;
  padding:0;
  margin: 0;
`;

// Input Group for Floating Label

export const FormGroup = styled.div`
  position: relative;
  margin-top: 25px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 18px 15px 6px 15px;
  border: 1px solid #E3E3E3;
  border-radius: 6px;
  font-size: 15px;
  color: #1D1D1D;
  background-color: #fff;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
`;

export const Label = styled.label`
  position: absolute;
  left: 15px;
  top: -10px;
  font-size: 15px;
  color: #662fe8;
  font-weight:500;
  background-color: #F7F8F9;
  padding:3px;
  z-index: 2;
`;

export const Span = styled.span`
 color:red;
`

// Login Button
export const LoginButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #aeb2b6; /* Example primary color */
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const RadioInput = styled.input`
  margin-left:10px;
  margin-top: 10px;
`

export const RadioLabel = styled.label`
  margin-bottom:10px;
`

export const SignupButton = styled.button`
   width: 100%;
   padding: 12px;
   color: #fff;
   border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  background-color: #0056b3;
  position: relative;
  top:90%;
`

export const Wapper = styled(FormWrapper)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: #fff;
`

export const Button = styled(SignupButton)`
  margin-top:12px;
  background-color: #3d56e4;
`

export const Button2 = styled(SignupButton)`
  margin-top:12px;
  background-color: #9d6bec;
`

export const HeadWappers = styled.div`
  background-color: #ffff;
  padding:18px;
`

export const AccoutnWapper = styled(FormWrapper)`
background-color:#eff1f2;
padding:0;
`

export const AccountHeader = styled.div`
  background-color: #ffffff;
`
export const ProfileContainer = styled.div`
padding:15px;
  display: flex;
  align-items: center;
  margin-top: 25px;
`

export const ImageContainer = styled.div``

export const ProfileImage = styled.img`
  border-radius:50%;
  height: 70px;
  width:70px;
`

export const ProfileDetailsContainer = styled.div`
 margin-left:15px;
`

export const ProfileDescription = styled.h4`
margin: 0;
`
export const Description1 = styled(Description)`
  margin-top: 10px;
  padding:10px 18px;
`

export const DottedLines = styled.hr`
  border-style: dashed;
  border-width: 1px;
  border-color: #757171;
`