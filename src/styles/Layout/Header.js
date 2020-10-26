import styled from 'styled-components'
import {Colors} from '../Base/Colors'

export const MainHeader = styled.header`
    padding: 1rem 5rem;
    align-self: start;
    display: flex;
    height: 8rem;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`
export const Logo = styled.div`
    font-family: acumin-pro, sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 4rem;
    color: ${Colors.color.logoFont};
`