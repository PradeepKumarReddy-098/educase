import { Container,AccoutnWapper,HeadWappers,Header, ImageContainer,ProfileContainer,ProfileImage,ProfileDetailsContainer,ProfileDescription,Description1,Description,DottedLines } from "./style"

const Account = () =>{
    return(
        <Container>
            <AccoutnWapper>
                <HeadWappers><Header>Account Settings</Header></HeadWappers>
                
                <ProfileContainer>
                    <ImageContainer>
                        <ProfileImage src="https://randomuser.me/api/portraits/women/79.jpg" alt="profile"/>
                    </ImageContainer>
                    <ProfileDetailsContainer>
                        <ProfileDescription>Marry Doe</ProfileDescription>
                        <Description>Marry@gmail.Com</Description>
                    </ProfileDetailsContainer>
                </ProfileContainer>
                
                <Description1>
                    Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
                    Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
                    Erat, Sed Diam
                </Description1>
                <DottedLines />
            </AccoutnWapper>
        </Container>
    )
}

export default Account