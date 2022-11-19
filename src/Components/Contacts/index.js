import {useState, useEffect} from 'react'
import List from './List'
import Form from './Form'
import './styles.css';

function Contacts() {
const [contacts, setContacts] = useState([{
  fullname:"Mehmet",
  phone_number:"1232312323"
},
{
  fullname:"Ayşe",
  phone_number:"523423523"
},
{
  fullname:"Emel",
  phone_number:"2466235234"
},

]);

useEffect(() => {
console.log(contacts)
}, [contacts])

  return (
    <div id='container'>
      <h1>Contacts</h1>
      <List contacts={contacts}/>
      <Form addContacts={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts
