import React, { useState, useEffect } from 'react';  
import './App.css';  
import { API } from 'aws-amplify';  
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'; 
import { listAssettables } from './graphql/queries';  
import { createAssettable as createAssettableMutation, deleteAssettable as deleteAssettableMutation } from './graphql/mutations';  
import ShowAssetTable from './components/ShowAssetTable';  
const initialFormState = { PrimaryKey: '', Date: '', AssetType: '', Facility: '', ReportBy: '', Storage: '' }  

function App() {  
  const [assettables, setAssettables] = useState([]);  
  const [formData, setFormData] = useState(initialFormState);  
  useEffect(() => {  
    fetchAssettables();  
  }, []);  
  async function fetchAssettables() {  
    const apiData = await API.graphql({ query: listAssettables});  
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
  const showHeader = (
      <h1>My Assettables App</h1>
  )
  //const listItems = assettables.map(note => ({note.id}));
  const listItems = [1,2,3,4,5] // for debug
  const table = API.graphql({ query: listAssettables});
  console.log(table);
  const locList = []
  for (let asset of assettables) {
    if (locList.indexOf(asset.Facility) < 0) {
      locList.push(asset.Facility)
    }
  }
  console.log(locList);
  return (  
    <div className="App">  
      {showHeader}  
      <div>{listItems}</div> {/* for debug */}
      <ShowAssetTable assettables={assettables} locList={locList}/>
      <AmplifySignOut /> 
    </div>  
  );  
}  
export default withAuthenticator(App);