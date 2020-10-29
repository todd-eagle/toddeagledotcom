import styled from 'styled-components'

export const MenuButton = styled.button`
    position: relative;
    margin-top: .5rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
    z-index: 150;
    height: 4rem;
`
export const MenuIcon = styled.span`
    position: relative;
    top: .8rem;
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
    }

    &::before {
        top: -1rem;
    }
    &::after {
        top: 1rem;
    }
`
export const CloseIcon = styled(MenuIcon)`
     background-color: transparent;
     &::before,
     &::after {
        top: -1.25rem;
        left: 0.3rem;
        width: 2.5rem;
        height: .5rem;
        transform: rotate(45deg);
     }

     &::after {
        transform: rotate(-45deg); 
     }

`
export const MainMenu = styled.div`
`
export const CloseButton = styled.button`
    position: relative;
    margin-left: 4rem;
    margin-top: 3rem;
    background: transparent;
    border: 2px solid #f2f2f2;
    border-radius: 50%;
    width: 3.5rem;
    height: 3.5rem;
    cursor: pointer;
    z-index:250;
`
export const MenuLogo = styled.div`
    margin-top: -1rem;
    font-family: acier-bat-gris, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 3.5rem;
    text-align: center;
    padding: 0 0 3rem 0;

    &::after {
        content: "";
        margin: 0 auto;
        height: .6rem;
        display: block;
        width: 5.5rem;
        background-color: #9b9b9b;
        border: 1px solid #f2f2f2;
    }
`
export const MenuLink = styled.div`
    position: relative;
    padding: 1rem 10rem;
    text-align: center;
`
export const Navigation = styled.div`
    position: absolute;
    margin-right: ${props => !props.menuState ? '-42rem' : '0'};
    font-family: acier-bat-solid, sans-serif;
    font-weight: 400;
    font-size: 3rem;
    color: #f2f2f2;
    background-color: #333333;
    height: 100vh;
    z-index: 210;
    border-left: 1px solid #f2f2f2;
    top: 0;
    right: 0rem;
    box-shadow: -16px 1px 20px -4px rgba(242,242,242,0.1);
    transition: all 0.4s ease-in;
`