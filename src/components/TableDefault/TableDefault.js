import styled from "styled-components";

const TableDefault = styled.table`
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;
    border-collapse: collapse;
    box-shadow: 0 8px 10px #0000000d;
    background-color: #fff;
    
    & > thead  th {
        color: #fff;
        background-color: #343a40;
        vertical-align: bottom;
        border-bottom: 2px solid #454d55;
    }
    
    & > tbody {
        display: table-row-group;
        vertical-align: middle;
        border-color: inherit;
    }
    
    & th, & td {
        padding: .75rem;
        text-align: inherit;
    }
`;

export default TableDefault;