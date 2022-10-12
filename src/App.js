import React, { useState, useEffect } from 'react';  
import './App.css';  
import { API, graphqlOperation } from 'aws-amplify';  
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'; 
import { listAssettables, listAssetSortByDate, listAssetBySpecificFacility } from './graphql/queries';  
import { createAssettable as createAssettableMutation, deleteAssettable as deleteAssettableMutation } from './graphql/mutations';  
import ShowAssetTable from './components/ShowAssetTable';  
const initialFormState = { PrimaryKey: '', Date: '', AssetType: '', Facility: '', ReportBy: '', Storage: '', type: '' }  

function App() {  
  const [assettables, setAssettables] = useState([]);  
  const [formData, setFormData] = useState(initialFormState);  
  useEffect(() => {  
    fetchAssettables();  
  }, []);  
/*  async function fetchAssettables() {  
    const apiData = await API.graphql({ query: listAssettables});  
    setAssettables(apiData.data.listAssettables.items);  
  }  
//*/
/*  async function fetchAssettables() {  
    const apiData = await API.graphql(graphqlOperation(listAssetBySpecificFacility, {
      Facility: "DarkRoom",
      sortDirection: 'ASC',
      limit: 10,
      nextToken: null
    }));  
    setAssettables(apiData.data.listAssetBySpecificFacility.items);  
  }  
//*/
  async function fetchAssettables() {  
    const apiData = await API.graphql(graphqlOperation(listAssetSortByDate, {
      type: "asset",
      sortDirection: 'ASC',
      limit: 40,
      nextToken: null
    }));  
    setAssettables(apiData.data.listAssetSortByDate.items);  
  }  
//*/
  async function createAssettable() {  
    if (!formData.AssetType || !formData.ReportBy || !formData.Storage) return;  
    await API.graphql({ query: createAssettableMutation, variables: { input: formData } });  
    setAssettables([ ...assettables, formData ]);  
    setFormData(initialFormState);  
  }  
  async function deleteAssettable({ id }) {
    console.log("Deletion request of id %d", id)
    const newAssettablesArray = assettables.filter(note => note.id !== String(id));  
    setAssettables(newAssettablesArray);  
    await API.graphql({ query: deleteAssettableMutation, variables: { input: { id } }});  
  }
  const showHeader = (
      <h1>My Assettables App</h1>
  )
  //const listItems = assettables.map(note => ({note.id}));
  //const listItems = [1,2,3,4,5] // for debug
  const listItems = []
  const locList = []
  for (let asset of assettables) {
    if (locList.indexOf(asset.Facility) < 0) {
      locList.push(asset.Facility)
    }
  }
  //console.log(locList); // for debug
  return (  
    <div className="App">  
      {showHeader}  
      <div>{listItems}</div> {/* for debug */}
      <ShowAssetTable assettables={assettables} locList={locList} deleteitem={deleteAssettable}/>
      <AmplifySignOut /> 
    </div>  
  );  
}  
export default withAuthenticator(App);