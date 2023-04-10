import Flowcards from '../components/cards';
export default function Services(props) {
    return(
        
     <> 
     <div className='flex flex-row overflow-auto snap-x'>

      <Flowcards heading="PRE-WEDDING" image="img/services/prewed.jpg"></Flowcards>
      <Flowcards heading="WEDDING" image="img/services/wedding.jpg"></Flowcards>
      <Flowcards heading="BABY SHOOT" image='img/services/baby.jpg'></Flowcards>
      <Flowcards heading="EVENTS" image="img/services/events.jpg"></Flowcards>
      <Flowcards heading="POTRAIT" image="img/services/potrait.jpg"></Flowcards>
      <Flowcards heading="LANDSCAPES" image="img/services/landscape.jpg"></Flowcards>
      <Flowcards heading="INDUSTRIAL" image="img/services/industry.jpg"></Flowcards>
      <Flowcards heading="FASHION" image="img/services/fashion.jpg"></Flowcards>
      <Flowcards heading="VIDEOGRAPHY" image="img/services/video.jpg"></Flowcards>
      <Flowcards heading="PRODUCT" image="img/services/product.jpg"></Flowcards>
     </div>
      
      
    </>
      
       
     
      
    )
    
}