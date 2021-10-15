import styled from "styled-components"

const RocketsStyle = styled.div`
box-sizing: border-box;
background-color: red;
display: flex;
justify-content: space-between;

> div {
    width: 700px;
    border: 2px solid black;
    padding: 10px;
    // width: 200px;
    background-color: #D1E1E4;
    p {
        text-align: center;
        color: red;
        font-size: 30px;
    }
    img {
        width: 100%;
    }
}

`

export default RocketsStyle