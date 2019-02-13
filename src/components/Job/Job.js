import styled from "styled-components";

const Job = styled.a`
    color: #000;
    cursor: pointer;
    display: block;
    padding-bottom: 30px;
    padding-top: 30px;
    text-align: center;
    text-decoration: none;
    width: calc(100% / 3);
    :hover {
    background-color: #f50057;
    color: #fff;
}
`;

export default Job;