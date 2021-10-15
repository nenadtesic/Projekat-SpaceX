import styled from "styled-components"

const StyledRegister = styled.div`

box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;

input[type=text] {
    width: 400px;
    height: 60px;
    border-radius: 4px;
    background: #E5DCC3;
    padding: 20px;
    color: #000;
    font-size: 25px;
    position: relative;
    top: 50%
    transform: translateY(-50%)

    ::placeholder {

        text-align: center;
        color: #000;
        font-size: 25px;
        position: relative;
        top: 50%
        transform: translateY(-50%)
    }
}

input[type=email] {
    width: 400px;
    height: 60px;
    border-radius: 4px;
    background: #E5DCC3;
    padding: 20px;
    color: #000;
    font-size: 25px;
    position: relative;
    top: 50%
    transform: translateY(-50%)

    ::placeholder {

        text-align: center;
        color: #000;
        font-size: 25px;
        position: relative;
        top: 50%
        transform: translateY(-50%)
    }
}

input[type=password] {
    width: 400px;
    height: 60px;
    border-radius: 4px;
    background: #E5DCC3;
    padding: 20px;
    color: #000;
    font-size: 25px;
    position: relative;
    top: 50%
    transform: translateY(-50%)

    ::placeholder {

        text-align: center;
        color: #000;
        font-size: 25px;
        position: relative;
        top: 50%
        transform: translateY(-50%)
    }
}

input[type=submit] {
    width: 400px;
    height: 60px;
    border-radius: 4px;
    background: #E5DCC3;
    // padding: 20px;
    color: #000;
    font-size: 25px;
    position: relative;
    top: 50%
    transform: translateY(-50%)

}

`

export default StyledRegister