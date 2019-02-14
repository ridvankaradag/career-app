import styled from 'styled-components'

const Header = styled.header`
    background-color: ${props => props.headerColor || "palevioletred"};
    background-position: 0%;
    background-size: cover;
    color: ${props => props.textColor || "#fff"};
    box-shadow: inset 0 -10px 8px #00000030;
    :hover {
      opacity: .98;
    }
`;

export default Header;