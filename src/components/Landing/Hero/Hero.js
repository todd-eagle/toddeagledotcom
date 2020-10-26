import React from 'react'
import Header from '../../Header/Header'
import {HeroSection, MassiveFont, ExpressFont, 
        TopLeftSq, TopMiddleSq, TopRightSq, 
        BottomLeftSq, BottomMiddleSq, BottomRightSq,
        MyName, GreetWrapper, SkillzWrapper,
        HeroLeftSide, HeroRightSide, Develop, Design, ReactRight,
        GreetText, RouterFont, ReduxFont} from '../../../styles/Layout/Hero'

const Hero = () => {

    return(
        <HeroSection>
            <Header />
            <TopLeftSq></TopLeftSq>
            <TopMiddleSq></TopMiddleSq>
            <TopRightSq></TopRightSq>
            <BottomLeftSq></BottomLeftSq>
            <BottomMiddleSq></BottomMiddleSq>
            <BottomRightSq></BottomRightSq>
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
            <MassiveFont>MassiveJs</MassiveFont>
            <RouterFont>Router</RouterFont>
            <ReduxFont>Redux</ReduxFont>
            <ExpressFont>Express</ExpressFont>
        </HeroSection>
    )
}
export default Hero