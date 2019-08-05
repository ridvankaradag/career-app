import React, { useState } from "react";
import {Link} from "react-router-dom";
import RegisterContainer from "./Styled/RegisterContainer";
import RegisterBox from "./Styled/RegisterBox";
import RegisterCard from "./Styled/RegisterCard";
import CardTitle from "./Styled/CardTitle";
import Input from "./Styled/Input";
import Label from "./Styled/Label";
import FormGroup from "./Styled/FormGroup";
import CardTitleText from "./Styled/CardTitleText";
import ButtonWrapper from "./Styled/ButtonWrapper";
import Button from "./Styled/Button";
import Form from "./Styled/Form";

function Register() {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
      
    }

    return (
        <RegisterContainer>
            <RegisterBox>
                <RegisterCard>
                    <CardTitle>
                        <CardTitleText>Register</CardTitleText>
                    </CardTitle>
                        <Form autoComplete="off"
                            onSubmit={onSubmit} 
                        >
                            <FormGroup>
                                <Label>First Name</Label>
                                <Input 
                                    type="text" 
                                    name="first_name" 
                                    placeholder="First Name"
                                    value={first_name}
                                    onChange={e => setFirstName(e.target.value)} required
                                />
                                <span className="login_focus"></span>
                            </FormGroup>
                            <FormGroup>
                                <Label>Last Name</Label>
                                <Input 
                                    type="text" 
                                    name="last_name" 
                                    placeholder="Last Name"
                                    value={last_name}
                                    onChange={e => setLastName(e.target.value)} required
                                />
                                <span className="login_focus"></span>
                            </FormGroup>
                            <FormGroup>
                                <Label>E-mail</Label>
                                <Input 
                                    type="email" 
                                    name="email" 
                                    placeholder="E-mail"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)} required
                                />
                                <span className="login_focus"></span>
                            </FormGroup>
                            <FormGroup>
                                <Label>Password</Label>
                                <Input 
                                    type="password" 
                                    name="password" 
                                    placeholder="Password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)} required
                                />
                                <span className="login_focus"></span>
                            </FormGroup>
                            <ButtonWrapper>
                                <Button type="submit">Register</Button>
                            </ButtonWrapper>

                            <div style={{marginTop: 10,width:'100%',    textAlign: 'center'}}>
                                <div style={{fontSize: '13px',lineHeight: 1.4,color: '#999'}}>
                                Have an account? <Link to="/login" >Sign in </Link>
                                </div>
                            </div>
                        </Form>
                    </RegisterCard>
                </RegisterBox>
        </RegisterContainer>
    );
}

export default Register;