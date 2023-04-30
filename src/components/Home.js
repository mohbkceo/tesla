import React, { Component } from 'react'
import styled from 'styled-components'
import Section from './Section'

const Home = () => {
  return (
    <Container>
        <Section
        title= "Model-S"
        description= <a href='#'>Veie invetory</a>
        Leftbutton= "Custtom Order"
        Rightbutton= "Exixting Inventory"
        backgroundImage = 'model-s.jpg'
        />
        <Section
        title= "Model-Y"
        description= <a href='#'>Veie invetory</a>
        Leftbutton= "Custtom Order"
        Rightbutton= "Exixting Inventory"
        backgroundImage = 'model-y.jpg'
        />
        <Section
        title= "Model-3"
        description= <a href='#'>Veie invetory</a>
        Leftbutton= "Custtom Order"
        Rightbutton= "Exixting Inventory"
        backgroundImage = 'model-3.jpg'
        />
        <Section
        title= "Model-X"
        description= <a href='#'>Veie invetory</a>
        Leftbutton= "Custtom Order"
        Rightbutton= "Exixting Inventory"
        backgroundImage = 'model-x.jpg'
        
        />
        <Section
        title= "Lowest Cost Solar Panels in Algeria"
        description= "Money-back guarantee"
        Leftbutton= "Custtom Order"
        Rightbutton= "Learn more"
        backgroundImage = 'solar-panel.jpg'

        />
        <Section
        title= "Soler for new Roofs"
        description= "Solar Roofs costes less than a new Roof"
        Leftbutton= "Custtom Order"
        Rightbutton= "Learn more"
        backgroundImage = 'solar-roof.jpg'

        />
        <Section
        title= "Accessories"
        description= ""
        Leftbutton= "Shope Now"
        backgroundImage = 'accessories.jpg'

        />

    </Container>
  )
}

export default Home


const Container = styled.div`
   height: 100vh;
`