import image from './assets/react.png'

function Card(){
   return(
      <div className='Card'>
           <img className='react' src={image} alt='photo of react'></img>
           <h1>this Card is made by a react</h1>
           <h5>and by amazing developer</h5>
      </div>

   );
``  
}

export default Card