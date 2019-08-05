import styled from "styled-components";

const CardTitle = styled.div`
width: 100%;
position: relative;
z-index: 1;
display: flex;
flex-wrap: wrap;
flex-direction: column;
align-items: center;
background-repeat:no-repeat;
background-size: cover;
background-position: center;
padding: 70px 15px 74px;

::before {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(54,84,99,.7);
}
`;

export default CardTitle;