import styled from 'styled-components'

const Header = styled.header`
    background-color: ${props => props.headerColor || "palevioletred"};
    background-image: url('${props => props.backgroundImage || null}');
    background-position: 0%;
    background-size: cover;
    min-height: 300px;
    color: ${props => props.textColor || "#fff"};
    :hover {
      opacity: .6;
    }
`;

export default Header;