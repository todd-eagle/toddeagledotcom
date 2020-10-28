import React, {useState} from 'react'
import {MainMenu, MenuButton, MenuIcon, Navigation,
        CloseButton, MenuLogo, MenuLink, CloseIcon} from '../../../styles/components/Menus'

const Menu = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const menuToggle = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const menuHandler = () => {
        menuToggle()
    }

    return (
        <MainMenu>
            <MenuButton onClick={()=>menuHandler()}>
                <MenuIcon></MenuIcon>
            </MenuButton>
            <Navigation  menuState={isMenuOpen}>
                <CloseButton onClick={()=>menuHandler()}>
                    <CloseIcon></CloseIcon>
                </CloseButton>
                <MenuLogo>me.</MenuLogo>
                <MenuLink>Stuff I Use.</MenuLink>
                <MenuLink>Stuff I Like.</MenuLink>
                <MenuLink>Contact Stuff.</MenuLink>
                <MenuLink>Other Stuff.</MenuLink>
            </Navigation>    
        </MainMenu>    
    )
}
export default Menu
