import styled from "styled-components";

const FlexWrapper = styled.div`
    display: flex;
    flex-direction: ${props => props.flexDirection || "initial"};
    justify-content: ${props => props.justifyContent || "initial"};
    align-items: ${props => props.alignItems || "initial"};
    flex-wrap: ${props => props.flexWrap || "wrap"};
`;

export default FlexWrapper;