import React, {useEffect, useState} from 'react'
import { TransitionGroup, CSSTransition  } from 'react-transition-group'
import images2 from './images';

function ImageSlider() {

    const [index, setIndex] = useState(0);
    const [direction,setDirection] = useState('slide-right');
    const [counter, setCounter] = useState(0);
    

    useEffect(() => {

       console.log(counter)
       if(counter === 3 ) {
           console.log('guzel');
           setCounter(0);
       }
         
        const timer = setInterval(() => {
            setCounter( prevSlide => prevSlide + 1
                
            );
           
        },1000);  

        return() => {
        
            clearInterval(timer);
          
        }
     
    },[]);
 
    const slideLeft = () => {
        const nextIndex = index -1;
        if(nextIndex < 0) {
            setIndex(images2.length-1)
        } else {
            setIndex(nextIndex);
        }
        setDirection('slide-left')
    };

    const slideRight = () => {
        setIndex((index +1) % images2.length);
        setDirection('slide-right')
    };


    const childFactory = (direction) => (child) => React.cloneElement(child, {
        classNames: direction,
    });

    let timeout = null;
    let myCounter = 0;
    myCounter = counter;
    //console.log(myCounter)
    

    if(myCounter === 4) setCounter(0);

  return ( 

      images2.length > 0 && (
      <div>
         <div className='image-slider'>
                 <button onClick={slideLeft}>{"<"}</button>
                 <div className='image-wrapper'>
                 <TransitionGroup
                  childFactory={childFactory(direction)}
                 >
                     <CSSTransition
                     key={images2[index]}
                     timeout={1000}
                     classNames={direction}
                     >
                         <img src={images2[counter]} />
                     </CSSTransition>
                 </TransitionGroup>
                 </div>

              
               
               
                 <button onClick={slideRight}>{'>'}</button>
            </div>
            <div>Count: {counter}</div>
          </div>
        
      )

     
        
  );
}

export default ImageSlider