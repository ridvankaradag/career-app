import styled from "styled-components";
import {Link} from "react-router-dom";

const Job = styled(Link)`
    color: #000;
    cursor: pointer;
    display: block;
    padding-bottom: 30px;
    padding-top: 30px;
    text-align: center;
    text-decoration: none;
    width: calc(100% / 3);
    transition: .4s;
    position: relative;
    
    :hover {
    background-color: #f50057;
    color: #fff;
    }
    :hover::after {
     width: 100%;
    }
    ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    height: 3px;
    width: 80%;
    background-color: #f50057;
    transform: translateX(-50%);
    transition: .4s;
    }
`;

export default Job;