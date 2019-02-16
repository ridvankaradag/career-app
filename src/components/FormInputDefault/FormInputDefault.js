import styled from "styled-components";

const FormInputDefault = styled.input`
    display: block;
    margin: 0;
    padding: 5px 10px;
    color: inherit;
    width: calc(100% - 20px);
    font-family: inherit;
    font-size: 1.2rem;
    font-weight: inherit;
    border: none;
    border-radius: 0.4rem;
    transition: box-shadow 300ms;
    box-shadow: 0 8px 10px #0000000d;
    
    ::placeholder {
        color: #ccc;
        font-size: 1rem;
    }
    
    :focus {
    outline: none;
    box-shadow: 0 16px 20px #0000000d;
    }
`;

export default FormInputDefault;