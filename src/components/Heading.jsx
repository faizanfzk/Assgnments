import "./Heading.css"
import { Input } from '@chakra-ui/react'

export const Heading=()=>{
    return(
        <div className="head">
            <p className="p1">Find The Right <br /><span>Four-Day</span> Week Job</p>
           <div className="input">
           <Input className="I" placeholder='Type job title keyword' w={500} h='12' />
               </div> 
               
            

        </div>
    )
}