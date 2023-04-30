import React from 'react'
import styled from 'styled-components'
import { Fade } from "react-awesome-reveal"; /// nasserry

const Section = ({title, description, Leftbutton, Rightbutton, backgroundImage}) => {

  return (
    <Wrap bgImage = {backgroundImage}>
        <Fade direction="right">
        <ItemText>

            <h1>{title}</h1>
            <p>{description}</p>
        </ItemText>
        </Fade>
        <Buttons>
         <Fade direction="left">
        <ButtonGroup>
            {Leftbutton &&
            <LeftButton>
               <a href={Leftbutton}>{Leftbutton}</a>
            </LeftButton> }
            
            {Rightbutton && 
            <RightButton >
                <a href={Rightbutton}>{Rightbutton}</a>
            </RightButton>}
        </ButtonGroup>
        </Fade>
        <ButtonArrow  src="/images/down-arrow.svg"/>
        </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap  = styled.div`
height: 100vh;
width: 100vw;
background-image: ${props => `url("images/${props.bgImage}")`};
background-size: cover;
background-position: center;
background-repeat: no-repeat;
display:flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`


const ItemText = styled.div`
padding-top: 15vh;
text-align: center;

`
const ButtonGroup = styled.div`
display:flex;
margin-bottom: 30px;
@media (max-width: 768px){
    flex-direction: column;
}
`
const LeftButton = styled.div`
background: #393c41;
margin-bottom: 12px;
color: #ffff;
width: 256px;
height:40px;
display:flex;
justify-content: center;
align-items:center;
border-radius:3px;
opacity: 0.85;
text-transform: uppercase;
font-size:12px;
cursor: pointer;
margin-right: 20px;
a{
    color: #ffff;
}
`

const RightButton = styled(LeftButton)`
margin-right: 0px;
background: #ffff;
opacity: 0.65;
a{
    color: #393c41;
}
`
const ButtonArrow = styled.img`
width: 60px;
height: 40px;
overflow-x: hidden;
animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`

`