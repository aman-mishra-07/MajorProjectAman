import { Carousel } from "flowbite-react"
import  cinematogarphy  from '../img/servicesBG/cinematography.jpg'
import  videography  from '../img/servicesBG/videography.jpg'
import  editing  from '../img/servicesBG/editing.jpg'
import  photography  from '../img/servicesBG/photography.jpg'
import  photoediting  from '../img/servicesBG/photoediting.jpg'

export default function Flowcrousal(){
    return(
      
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
  <Carousel slideInterval={5000}>
    <img className=""
      src={ editing }
      alt="..."
    />
    <img className=""
      src={photoediting}
      alt="..."
    />
    <img className=""
      src={photography}
      alt="..."
    />
    <img className=""
      src={ videography }
      alt="..."
    />
    <img className=""
      src={ cinematogarphy }
      alt="..."
    />
  </Carousel>
</div>
    
    )
}