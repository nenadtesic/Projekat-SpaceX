import styled from "styled-components"
import { NavLink as Link } from "react-router-dom"

export const Nav = styled.nav`
   
    background: black;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 5px;
    z-index: 10;
`

export const NavLink = styled(Link)`
    
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 20px;
    height: 100%;
    cursor: pointer;

    &.active {
        color: yellow;
    }
`


export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #E5DCC3;
    padding: 10px 22px;
    color: #000;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010686;
    }
`