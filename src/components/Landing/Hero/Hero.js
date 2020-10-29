import React from 'react'
import {connect} from 'react-redux'
import Header from '../../Header/Header'
import {HeroSection, MassiveFont, ExpressFont, 
        TopLeftSq, TopMiddleSq, TopRightSq, 
        BottomLeftSq, BottomMiddleSq, BottomRightSq,
        MyName, GreetWrapper, SkillzWrapper,
        HeroLeftSide, HeroRightSide, Develop, Design, ReactRight,
        GreetText, RouterFont, ReduxFont, TWrapper, GhostMenu} from '../../../styles/Layout/Hero'

const Hero = (props) => {

    return(
        <HeroSection menuState={props.menu.isMenuOpen}>
            <Header />
            <TopLeftSq></TopLeftSq>
            <TopMiddleSq></TopMiddleSq>
            <TopRightSq></TopRightSq>
            <BottomLeftSq></BottomLeftSq>
            <BottomMiddleSq></BottomMiddleSq>
            <BottomRightSq></BottomRightSq>
            <TWrapper>  
                <GreetWrapper>
                    <GreetText>Hello.</GreetText>
                    <GreetText>I'm</GreetText>
                    <MyName>Todd Eagle</MyName>
                    <SkillzWrapper>
                        <HeroLeftSide>
                            <Develop>Web Developer.</Develop>
                            <Design>Web Designer.</Design>
                        </HeroLeftSide>
                        <HeroRightSide>
                        <ReactRight>React Enthusiast.</ReactRight>
                        </HeroRightSide>
                    </SkillzWrapper>
                </GreetWrapper>
                <GhostMenu menuState={props.menu.isMenuOpen}></GhostMenu>
            </TWrapper>      
            <MassiveFont>MassiveJs</MassiveFont>
            <RouterFont>Router</RouterFont>
            <ReduxFont>Redux</ReduxFont>
            <ExpressFont>Express</ExpressFont>
        </HeroSection>
    )
}

const mapStateToProps =  reduxState => reduxState
export default connect(mapStateToProps)(Hero)