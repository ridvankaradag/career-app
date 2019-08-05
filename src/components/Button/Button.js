import styled from "styled-components";

const Button = styled.a`
    border: 1px solid #f50057;
    
    padding: 10px;
    text-decoration: none;
    transition: .2s;
    display: block;
    width: 100%;
    text-align: center;
    background-color: #f50057;color: #fff;
    
    :hover {
      background-color: #f50057;
      color: #fff;
      text-decoration: none;
      opacity: 0.8;
    }
`;

export default Button;