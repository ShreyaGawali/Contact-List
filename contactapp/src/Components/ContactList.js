import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

function ContactList(props) {

    
    console.log(" Data from app to child", props.Items)
    const result=props.Items
    const showResult=result.map((val)=>{
        return(
            <div className='contacts' style={{ width: '400px' }}>
                <div >{val.data.fname}</div>                                             
                <div>{val.data.number}</div>
                <span onClick={()=>{props.removeContact(val.id)}}><DeleteIcon/></span>
            </div>
        )
    })
    return (
    <div className='list'>
        <div><h3>Contact List</h3></div>
        <hr/>
        <div>{showResult}</div>
    </div>  

  )
}

export default ContactList


// here if we write  (in map) val.fname it will show error ,earlier it will not show error but now we are passing uuid4 so structure of array is changed
//so after watching complete object it is clear that our name and number is in data of object (val) so thats why 
// it is very necessary for us to wriye val.data.name and val.data.number so that we can see the values in the ciontact list.             