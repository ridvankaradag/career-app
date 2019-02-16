import styled from "styled-components";

const Column = styled.div`
    width: ${props => `calc((100% / 12) * ${props.gap} - 10px)` || "100%"};
    min-height: 50px;
    margin: 0 5px;
    margin-right: ${props => `calc((100% / 12) * ${props.rightSpace} - 10px)` || "5px"}
`;

export default Column;