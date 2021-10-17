import styled from "styled-components";

export const StyledLogin = styled.div`
    position: absolute;
    top: 30%;
    right: 50%;
    transform: translateX(50%);
    display: flex;
    align-items: center;
    flex-direction: column;
    
> div {
    color: red;
}

#notReg {
    background-color: white;
    padding: 5px 25px;
    border-radius: 5px;
}

input[type=text], input[type=password] {
    text-align: center;
    width: 400px;
    height: 60px;
    border-radius: 10px;
    background: #E5DCC3;
    padding: 20px;
    color: #000;
    font-size: 25px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
}


input[type=submit] {
    position: relative;
    right: 10px;
    margin: 10px;
    width: 400px;
    height: 60px;
    border-radius: 10px;
    background: #E5DCC3;
    color: #000;
    font-size: 25px;
    position: relative;
    top: 50%;
    cursor: pointer;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010686;
    }
}
`

