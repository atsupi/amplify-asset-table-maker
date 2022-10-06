import React, { useState, useEffect } from 'react';  
import './App.css';  
import { API } from 'aws-amplify';  
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'; 
import { listAssettables } from './graphql/queries';  
import { getAssettables } from './graphql/queries';  
import { createAssettable as createAssettableMutation, deleteAssettable as deleteAssettableMutation } from './graphql/mutations';  
const initialFormState = { id: '', PrimaryKey: '', Data: '', AssetType: '', Facility: '', ReportBy: '', Storage: '' }  
function App() {  
  const [assettables, setAssettables] = useState([]);  
  const [formData, setFormData] = useState(initialFormState);  
  useEffect(() => {  
    fetchAssettables();  
  }, []);  
  async function fetchAssettables() {  
    const apiData = await API.graphql({ query: listAssettables });  
    setAssettables(apiData.data.listAssettables.items);  
  }  
  async function createAssettable() {  
    if (!formData.AssetType || !formData.ReportBy || !formData.Storage) return;  
    await API.graphql({ query: createAssettableMutation, variables: { input: formData } });  
    setAssettables([ ...assettables, formData ]);  
    setFormData(initialFormState);  
  }  
  async function deleteAssettable({ id }) {
    const newAssettablesArray = assettables.filter(note => note.id !== id);  
    setAssettables(newAssettablesArray);  
    await API.graphql({ query: deleteAssettableMutation, variables: { input: { id } }});  
  }
  //const listItems = assettables.map(note => ({note.id}));
  const listItems = [1,2,3,4,5]
  return (  
    <div className="App">  
      <h1>My Assettables App</h1>  
      <div>{listItems}</div>
      <div style={{marginBottom: 30}}>  
        {
          assettables.map(note => (
            <div key={note.id || note.PrimaryKey}>
              <h2>{note.PrimaryKey}</h2>  
              <p>{note.Date} {note.ReportBy} {note.Facility} {note.Store} {note.AssetType}</p>
              <button onClick={() => deleteAssettable(note)}>Delete asset</button>  
            </div>  
          ))  
        }  
      </div>
      <AmplifySignOut /> 
    </div>  
  );  
}  
export default withAuthenticator(App);