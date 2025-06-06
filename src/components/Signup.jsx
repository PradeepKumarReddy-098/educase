import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Container,FormWrapper,HeaderWapper,Header,FormGroup,Label,Input,Span,RadioInput,RadioLabel,SignupButton} from "./style";

const Signup = () => {
    const [formDetails,setFormDetails] = useState({fullName:"Marry Doe",phone:'Marry Doe',email:'Marry Doe',password:'Marry Doe',company:'Marry Doe',agency:'Yes'})
    const navigate = useNavigate()
    return(
        <Container>
            <FormWrapper>
                <HeaderWapper>
                    <Header>Create your</Header>
                    <Header>PopX account</Header>
                </HeaderWapper>
                    <FormGroup>
                        <Label htmlFor="name">Full Name<Span>*</Span></Label>
                        <Input type="text" id="name" value={formDetails.fullName} onChange={(e) => setFormDetails({...formDetails, fullName: e.target.value})} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="number">Phone Number<Span>*</Span></Label>
                        <Input type="tel" id="number" value={formDetails.phone} onChange={(e) => setFormDetails({...formDetails, phone: e.target.value})} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="email">Email address<Span>*</Span></Label>
                        <Input type="text" id="email" value={formDetails.email} onChange={(e) => setFormDetails({...formDetails, email: e.target.value})} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password">Password<Span>*</Span></Label>
                        <Input type="password" id="password" value={formDetails.password} onChange={(e) => setFormDetails({...formDetails, password: e.target.value})} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="company">Company Name<Span>*</Span></Label>
                        <Input type="text" id="company" value={formDetails.company} onChange={(e) => setFormDetails({...formDetails, company: e.target.value})} required/>
                    </FormGroup>
                    <FormGroup>
                        <RadioLabel>Are You an agency?<Span>*</Span></RadioLabel><br />
                        <RadioInput type="radio" value="Yes" name="agency" checked={formDetails.agency==='Yes'} onChange={(e)=>setFormDetails({...formDetails,agency:e.target.value})} /> <RadioLabel>Yes</RadioLabel>
                        <RadioInput type="radio" value='No' name="agency" checked={formDetails.agency==='No'} onChange={(e)=>setFormDetails({...formDetails,agency:e.target.value})}/> <RadioLabel>No</RadioLabel>
                    </FormGroup>
                    <SignupButton type='botton' onClick={()=>navigate('/account')}>Create Account</SignupButton>
            </FormWrapper>
        </Container>
    )
}

export default Signup