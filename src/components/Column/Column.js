import styled from "styled-components";

const Column = styled.div`
width: ${props => `calc((100% / 12) * ${props.gap})` || "100%"};
min-height: 50px;
background-color: yellow;
:last-child {
background-color: purple;
}
`;

export default Column;