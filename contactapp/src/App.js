import { useEffect, useState } from 'react';
import './App.css';
import ContactList from './Components/ContactList';
import Form from './Components/Form';
import Header from './Components/Header';
import uuid4 from 'uuid4';

function App() {
  const localStorageKey="contact"
  const[listItem,setListItems]=useState(()=>{
    return JSON.parse(localStorage.getItem(localStorageKey))
  })
  useEffect(()=>{
    localStorage.setItem(localStorageKey,JSON.stringify(listItem))
  },[listItem])

  function addContact(data){
    console.log("Data from Child to parent in app", data)
    setListItems([...listItem,{id:uuid4(),data}])

  }

  function removeContact(id){
    const updatedList=listItem.filter((val)=>{
      return val.id!==id
    })
    setListItems(updatedList)
  }
  return (
    <div className="App">
      <Header/>
      <Form addContact={addContact}/>
      <ContactList Items={listItem} removeContact={removeContact}/>
    </div>
  );
}

export default App;
