import { Card, Button } from "flowbite-react"
import { Link } from "react-router-dom"



export default function Flowcards(props) {
    return (
       

            <div className="max-w-xs p-4 flex-shrink-0 snap-start w-80">
                <Card imgSrc={props.image}>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                       {props.heading}
                    </h5>

                    <Button>
                    <Link to="/Contact">
                        Book Now!
                    </Link>
                        </Button>

                </Card>
       </div>
   
    )
}