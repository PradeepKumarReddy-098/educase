import { useNavigate } from 'react-router-dom'
import {Container,HeaderWapper,Wapper,Header,Description,Button,Button2} from './style'

const Welcome = () =>{
    const navigate = useNavigate()
    return(
        <Container>
            <Wapper>
                <HeaderWapper>
                <Header>Welcome to PopX</Header>
                <Description>Lorem ipsum dolor sit amet,</Description>
                <Description>consectetur adipiscing elit.</Description>
                </HeaderWapper>
                <Button type='button' onClick={()=>navigate('/signup')}>Create Account</Button>
                <Button2 type='button' onClick={()=>navigate('/login')}>Already Registered? Login</Button2>
            </Wapper>
        </Container>
    )
}

export default Welcome