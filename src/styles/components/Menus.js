import styled from 'styled-components'

export const MenuButton = styled.button`
    margin-top: .5rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
`
export const MenuIcon = styled.span`
    position: relative;
    width: 3.5rem;
    height: 3px;
    background-color: #f2f2f2;
    display: inline-block;

    &::before,
    &::after {
        width: 3.5rem;
        height: 3px;
        background-color: #f2f2f2;
        display: inline-block;
    }

    &::before,
    &::after {
        content: "";
        position: absolute;
        left: 0;
        transition: all 0.2s;
    }

    &::before {
        top: -1rem;
    }
    &::after {
        top: 1rem;
    }
`