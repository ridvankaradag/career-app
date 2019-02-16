import styled from "styled-components";

const FormInputButton = styled.input`
    display: block;
    margin: 0;
    padding: 5px 10px;
    color: inherit;
    width: auto;
    font-family: inherit;
    font-size: 1.2rem;
    font-weight: inherit;
    border: none;
    border-radius: 0.4rem;
    transition: all 300ms;
    box-shadow: 0 8px 10px #0000000d;
    background-color: #2c3e50;
    color: #fff;
    cursor: pointer;
    
    :hover {
    outline: none;
    box-shadow: 0 16px 20px #0000000d;
    background-color: #1c2229;
    }
`;

export default FormInputButton;