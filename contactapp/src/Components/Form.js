import React from 'react'
import { useState } from 'react'

function Form(props) {
    const user={fname:'',number:''}
    const[contactData,setContactData]=useState(user)
    function handleChange(e){
        if(e.target.name==='fname'){
            setContactData({...contactData,fname:e.target.value})

        }else{
            setContactData({...contactData,number:e.target.value})
        }

    }

    function handleAdd(){
        if(contactData.fname === "" || contactData.number === ""){
            window.alert("Fill All the Above Details")
            
        }else{
        console.log(contactData)
        props.addContact(contactData)
        setContactData({fname:'',number:''})
    }

    }
  return (
    <div className='container'>
        <h2 className='formhead'>Add Contacts</h2>
        <hr/>
        <form>
            <label><h3>Enter Name :</h3></label>
            <input type='text' placeholder='Enter name' name='fname' value={contactData.fname} onChange={handleChange}/>
            <label><h3>Enter Mobile Number :</h3></label>
            <input type='text' placeholder='Enter Mobile Number' name='number' value={contactData.number} onChange={handleChange}/>
        </form>
        <button className='btn' onClick={handleAdd}>Add Contact</button>
    </div>
  )
}

export default Form