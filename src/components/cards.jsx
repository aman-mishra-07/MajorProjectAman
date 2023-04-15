import { Card, Button } from "flowbite-react"
import { Link } from "react-router-dom"



export default function Flowcards(props) {
    return (
       

            <div className="max-w-xs p-4 max-sm:p-1 flex-shrink-0 snap-start max-sm:w-44">
                <Card imgSrc={props.image}>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white max-sm:text-xs">
                       {props.heading}
                    </h5>

                    <Button className=" max-sm:text-xs">
                    <Link to="/Contact">
                        Book Now!
                    </Link>
                        </Button>

                </Card>
       </div>
   
    )
}