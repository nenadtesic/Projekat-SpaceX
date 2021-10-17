import styled from "styled-components"

const RocketsStyle = styled.div`
box-sizing: border-box;

> div {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px;
    > div {
        display: flex;
        justify-content: center;
        aligh-items: center;
    }
    p {
        text-align: center;
        color: white;
        font-size: 30px;
    }
}

`

export default RocketsStyle