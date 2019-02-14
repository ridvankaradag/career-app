import styled from "styled-components";

const Button = styled.a`
    border: 1px solid #f50057;
    color: #f50057;
    padding: 10px;
    text-decoration: none;
    transition: .2s;
    display: block;
    max-width: 200px;
    text-align: center;
    
    :hover {
      background-color: #f50057;
      color: #fff;
    }
`;

export default Button;