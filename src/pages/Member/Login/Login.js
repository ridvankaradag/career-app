import React, { useState } from "react";
import {Link} from "react-router-dom";

import ButtonWrapper from "../Register/Styled/ButtonWrapper";
import Button from "../Register/Styled/Button";
import CardTitleText from "../Register/Styled/CardTitleText";
import CardTitle from "../Register/Styled/CardTitle";
import FormGroup from "../Register/Styled/FormGroup";
import Label from "../Register/Styled/Label";
import Input from "../Register/Styled/Input";
import RegisterContainer from "../Register/Styled/RegisterContainer";
import RegisterBox from "../Register/Styled/RegisterBox";
import RegisterCard from "../Register/Styled/RegisterCard";
import Form from "../Register/Styled/Form";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if(email === 'elif' && password === '1'){
            window.location.replace(window.location.origin + '/dashboard');
        }else{
            alert('Error, please try again');
        }
    }

    return (
        <RegisterContainer>
            <RegisterBox>
                <RegisterCard>
                    <CardTitle>
                        <CardTitleText>
                            Sign In
                        </CardTitleText>
                    </CardTitle>
                        <Form autoComplete="off"
                            onSubmit={onSubmit} 
                        >
                            <FormGroup>
                                <Label>E-mail</Label>
                                <Input 
                                    type="text" 
                                    name="email" 
                                    placeholder="E-mail"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)} required
                                />
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
                            </FormGroup>
                            <ButtonWrapper>
                                <Button type="submit">Login</Button>
                            </ButtonWrapper>
                            <div style={{marginTop: 10,width:'100%',    textAlign: 'center'}}>
                                <div style={{fontSize: '13px',lineHeight: 1.4,color: '#999'}}>
                                Don't have an account? <Link to="/register" >Sign Up</Link>
                                </div>
                            </div>
                        </Form>
                    </RegisterCard>
                </RegisterBox>
        </RegisterContainer>
    );
}

export default Login;