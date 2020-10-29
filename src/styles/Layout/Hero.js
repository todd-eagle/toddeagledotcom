import styled, {css} from 'styled-components'
import {Colors} from '../Base/Colors'

let rigthBkColor = '#603FD8'
let leftBkColor = '#282828'

export const HeroSection = styled.div`
    position: relative;
    background:  linear-gradient(to right, ${leftBkColor}  50%, ${rigthBkColor} 50%);
    transition: background-position 5s;
    &::before {
        background:  linear-gradient(to right, ${leftBkColor}  50%, #333 25%, ${leftBkColor} 25%);
        content: '';    
        height: 100%;
        position: absolute;
        top: 0; left: 0;
        opacity: 0;
        width: 100%;
        height:100%;
        z-index: 0;
        transition: opacity .4s linear;
    }

    ${props => props.menuState ? css `
        &::before {
        opacity: 1;
        }
    ` : null}

    /* &:hover {
    &::before {
      opacity: 1;
    }
  } */

    display: flex;
    flex-direction: column;
    min-height: 100vh;
    align-items: center;
    overflow: hidden;
    text-overflow: clip;
`
export const GreetWrapper = styled.div`
    position: relative;
    display: flex;
    height: 75vh;
    flex-direction: column;
    justify-content: center;
    z-index: 2;
`
export const GreetText = styled.p`
    font-family: acier-bat-solid, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: calc(3rem + 2vw);
    text-align: center;
    color: ${Colors.color.fontSecondaryColor};
`
const BackgroundFont = styled.p`
    position: relative;
    font-family: acumin-pro, sans-serif;
    position: absolute;
    font-weight: 700;
    font-style: normal;
    text-transform: uppercase;
    color: ${Colors.color.fontSecondaryColor};
    opacity: .03;
    z-index: 1;
`
export const MassiveFont = styled(BackgroundFont)`
    font-size: 30rem;
`
export const ExpressFont = styled(BackgroundFont)`
    font-size: 24rem;
    bottom: -7rem;
    right: -2rem;
`
export const RouterFont = styled(BackgroundFont)`
    font-family: acier-bat-outline, sans-serif;
    font-weight: 400;
    top: 32rem;
    font-size: 22rem;
    right: 7rem;
    z-index: 1;
`
export const ReduxFont = styled(RouterFont)`
    top: unset;
    font-size: 26rem;
    bottom: 10rem;
    left: -3rem;
`
const SquareDecor = styled.div`
    position: absolute;
    background-color: #fafafa;
    height: 5rem;
    width: 5rem;
    bottom: 0;
    opacity: .2;
`
export const TopMiddleSq = styled(SquareDecor)`
    top: 0; 
`
export const TopLeftSq = styled(SquareDecor)`
    top: 0;
    left: 0;
    height: 2rem;
    width: 10rem;
`
export const TopRightSq = styled(SquareDecor)`
    top: 0;
    right: 0;
    width: 2rem;
    height: 8rem;
`
export const BottomLeftSq = styled(SquareDecor)`
    left: 0;
    height: 4rem;
    width: 5rem;
`
export const BottomMiddleSq = styled(SquareDecor)`
    bottom: 0; 
`
export const BottomRightSq = styled(SquareDecor)`
    right: 0;
    height: 3rem;
    width: 6.5rem;
`
export const MyName = styled.div`
    display: flex;
    align-items: center;
    margin-top: 2rem;
    position: relative;
    font-family: acier-bat-gris, sans-serif;
    font-weight: 400;
    font-style: normal;;
    background-color: ${Colors.color.primary};
    background-size: auto;
    color: ${Colors.color.fontSecondaryColor};
    font-size: calc(2rem + 7vw);
    border: 1px solid #f2f2f2;
    padding: 0 3rem;
    z-index: 100;
    height: calc(4rem + 7vw);
`
export const SkillzWrapper = styled.div`
    display: flex;
    justify-content: center;
    font-family: acier-bat-solid, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size:calc(1rem + 1.6vw);
    color: ${Colors.color.fontPrimaryColor};
`
export const HeroLeftSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 50%;
    padding-right: 2rem;
`
export const HeroRightSide = styled.div`
    display: flex;
    padding-left: 2rem;
    align-items: center;
    width: 50%;
`
const HeroDevelopDesign = styled.div`
    background-color: #f2f2f2;
    padding: 1rem;
`
export const Develop = styled(HeroDevelopDesign)`
     margin-top: calc(2.5rem + 1vw);
`
export const Design = styled(HeroDevelopDesign)`
     margin-top: 3rem;
`
export const ReactRight = styled(HeroDevelopDesign)`
    margin-top: calc(2.5rem + 1vw);
    color: ${Colors.color.fontSecondaryColor};
    background-color: ${Colors.color.primary};
    padding: 1rem;
    border: 1px solid #f2f2f2;
`
export const TWrapper = styled.div`
    display: flex;
`
export const GhostMenu = styled.div`
    width: ${props => !props.menuState ? '0' : '42rem'};
    transition: all 0.4s ease-in;
`
