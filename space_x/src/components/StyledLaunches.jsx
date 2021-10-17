import styled from "styled-components";

const StyledLaunches = styled.div`
padding: 15px;
margin: 40px 0;
width: 100%;
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 20px;
grid-row-gap: 20px;

> div {
    width: 300px;
    margin-bottom: 50px;
}

#votesId {
    background-color: white;
    font-size: 30px;

    >span{
        color: green;
    }
}

button {
    width: 50%;
}

#launchName{
    font-size: 25px;
    color: white;
}

#btnGreen {
    color: green;
    font-size: 20px;
    padding: 5px;
}

#btnRed {
    color: red;
    font-size: 20px;
    padding: 5px;
}
`

export default StyledLaunches