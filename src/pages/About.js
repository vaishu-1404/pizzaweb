import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg';
import '../styles/About.css';
function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{ backgroundImage: `url(${MultiplePizzas})`}}></div>
      <div className='aboutBottom'>
        <h1>ABOUT US</h1>
        <p>
        A bustling pizza shop is a delightful haven for food enthusiasts seeking a slice of culinary heaven. 
        Nestled in the heart of the city, the inviting aroma of freshly baked dough and simmering tomato 
        sauce wafts through the air, enticing passersby with its irresistible charm. Inside, a vibrant 
        mosaic of ingredients lines the counter, from plump, ripe tomatoes to a kaleidoscope of colorful 
        toppings. The pizzaiolos work their magic behind the scenes, deftly tossing dough into the air
        before generously ladling on velvety cheese and a medley of savory toppings. The wood-fired oven,
        with its dancing flames, crisps the crust to perfection, creating a symphony of textures and flavors.
        Customers can choose from classic margheritas to gourmet creations, catering to every palate. The 
        atmosphere is a harmonious blend of convivial chatter and the occasional ecstatic sigh as patrons 
        savor each mouthwatering bite. Whether dining in or taking away, the pizza shop offers a slice of 
        culinary delight that leaves everyone coming back for more, forging a deep connection between this 
        iconic eatery and the community it serves.
        </p>
      </div>
    </div>
  )
}

export default About
