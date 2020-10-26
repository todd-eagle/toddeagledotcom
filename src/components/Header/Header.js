import React from 'react'
import {MainHeader, Logo} from '../../styles/Layout/Header'
import Menu from '../Header/Menu/Menu'


const Header = () => {
    return (
        <MainHeader>
            <Logo>me.</Logo>
            <Menu />
        </MainHeader>
    )
}
export default Header