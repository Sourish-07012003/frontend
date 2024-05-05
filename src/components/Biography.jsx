import React from "react";
const Biography = ({imageUrl}) => {
    return (
         <div className='container biography'>
            <div className="banner">
                <img src={imageUrl} alt="about.png"/>
                </div>
                <div className="banner">
                  <p>Biography</p>
                  <h3>Who We Are</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus possimus saepe ipsam accusantium ipsum. Corrupti suscipit neque earum. Cupiditate, ipsa quia animi ab consequuntur harum blanditiis, nostrum dolor sed laboriosam eius soluta eveniet quibusdam adipisci sit! Fugit perspiciatis suscipit rerum, quibusdam accusantium odit repudiandae minus et iusto, qui fuga esse.</p> 
                  <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo non tempore voluptatibus sunt corrupti asperiores distinctio obcaecati officiis odit eos tempora, magni fugit provident nam facere laudantium? Minima eos maiores iure doloremque cupiditate veritatis quisquam.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vel!</p>
                </div>


         </div>
)};

export default Biography;