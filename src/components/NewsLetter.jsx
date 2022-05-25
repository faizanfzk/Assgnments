
import { Input } from '@chakra-ui/react'
import { Heading2 } from './Heading2'
export const News=()=>{
    return(
        <div style={{width:"100%",height:"190px",marginTop:"40px"}}>
            <div style={
                {width:"40%",height:"90%",margin:"auto",borderRadius:"10px",
                backgroundColor:"rgb(64,122,207)",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",}}>

                    <h2 style={{color:"white",fontSize:"27px",fontWeight:"bolder",textAlign:"center",paddingTop:"10px"}}>Subscribe to our Newsletter</h2>
                    <Input  w={80} placeholder='Your Email' h='12' bg="white" ml="20px" mt="10px"/>
                    <button style={{backgroundColor:"rgb(56,161,105)",height:"50px",width:"150px",marginLeft:"10px",color:"white",
                fontWeight:"bold",borderRadius:"10px"}}>Submit</button>
                <p style={{color:"white",textAlign:"center",paddingTop:"5px"}}>Receive the best job offer every week! ✌️</p>
            </div>

           
        </div>
    )
}