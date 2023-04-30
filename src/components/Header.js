import React, {useState} from 'react'
import styled from 'styled-components';
import { selectCars } from '../features/car/CarSliese';
import {selectObject} from '../features/lists/ListNames';
import { useSelector } from 'react-redux';
import ClearAllIcon from '@mui/icons-material/ClearAll';

const Header = () => {
  const [BurgerStates, setBurgerStates] = useState(false)
  const cars = useSelector(selectCars)
  const object = useSelector(selectObject)
  console.log(cars)
  return (
    <Container>
        <a href='/'>
            <img src='images/logo.svg' />
        </a>
        <Menu>
          {cars && cars.map((car, index) => (
            <a key={index} href='#'>{car}</a> 
          ))}
        </Menu>
        <RightMenue>
         <a href='#'>SHOPE</a> 
         <a href='#'> ACCOUNT</a> 

         <CostumeMenue onClick={() => setBurgerStates(true)} />
             
        </RightMenue>
        <BurgerNav show = {BurgerStates}>
          <o><v onClick = {() => setBurgerStates(false)}>✖</v></o>
          <CarDetected>
          {cars && cars.map((car, index) => (
            <li key={index}><a  href='#'>{car}</a> </li>
          ))}
          </CarDetected>
          {object && object.map((cobjecar, indexs) => (
            <li> <a key={indexs} href='#'>{cobjecar}</a></li>
          ))}
        </BurgerNav>
        
    </Container>
  )
}


export default Header
const Container = styled.div`
   min-height: 60px;
   position: fixed;
   background: rgba(255, 255, 255, 0.7);
   display: flex;
   align-items: center;
   padding: 0 20px;
   z-index: 999;
   width: 100%;
  justify-content: space-between;
`
const Menu = styled.div`
display: flex;
align-items: center;
flex: 1;
justify-content: center;
@media (max-width: 768px){
  display: none;
}
a{
  font-weight: 600;
  text-transform: uppercase;
  padding: 5px 10px;
  border-radius: 3px;
  flex-wrap: no-wrap;
}
a:hover{
  background-color: rgb(255, 240, 240);
  color: rgb(71, 71, 71);
}
`
const RightMenue = styled.div`
display: flex;
justify-content:center;

align-items: center;
@media (max-width: 768px){
  justify-content:center;
}
a{
  font-weight: 600;
  text-transform: uppercase;
  padding: 5px 2px;
  margin-right: 10px;
  border-radius: 3px;
  flex-wrap: no-wrap;
  
}
a:hover{
  background-color: rgb(255, 240, 240);
  color: rgb(71, 71, 71);
}
`

const CostumeMenue = styled(ClearAllIcon)`
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   
   &:hover {
    transition: 0.9s; 
    background-color: rgb(255, 240, 240);
     
  }
`
const BurgerNav = styled.div`
position:fixed;
top:0;
right:0;
height: 100%;
background: #fff;
width:300px;
padding: 30px 20px;
display: flex;
flex-direction: column;
text-align: start;
transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
li{
  border-bottom: 1px solid #00000033;
  padding: 20px 0;
  position: relative;
  left:10px;
  list-style: none;
}
a{
  font-weight: 600;
  padding:5px 10px;
  border-radius: 1.3px;
}
a:hover{
  color:black;
  background: #00000017;
}

o{
  display: felx;
  justify-content: flex-end;
  cursor:pointer;
}
v{
  padding:2px 3px;
  border-radius: 1.8px;
}
v:hover{
  color:black;
  background: #00000017;
}

`
const CarDetected = styled.div`
  @media (min-width: 768px){
    display: none;
  }
`