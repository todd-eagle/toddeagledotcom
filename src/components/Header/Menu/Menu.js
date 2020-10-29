import React from 'react'
import {connect} from 'react-redux'
import {toggleMenu} from '../../../redux/reducers/menuReducer'
import {MainMenu, MenuButton, MenuIcon, Navigation,
        CloseButton, MenuLogo, MenuLink, CloseIcon} from '../../../styles/components/Menus'

const Menu = (props) => {

    const menuHandler = () => {
        props.toggleMenu()
    }

    return (
        <MainMenu>
            <MenuButton onClick={()=>menuHandler()}>
                <MenuIcon></MenuIcon>
            </MenuButton>
            <Navigation  menuState={props.menu.isMenuOpen}>
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
const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps, {toggleMenu})(Menu)
