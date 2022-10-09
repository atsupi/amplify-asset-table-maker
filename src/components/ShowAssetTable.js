import React from 'react';  
import './ShowAssetTable.css';  

function ShowAssetTable2(props) {
  const facility = props.location
  for (const elem of props.assettables) {
    if (elem['Facility'] === facility) {
      console.log("Facility: %s is found", elem['Facility'])
    }
  }
  const item = props.assettables.map(note => (
    note.Facility === facility && 
      <tr>
        <td>{note.PrimaryKey.split('#')[1]}</td>
        <td>{note.Date}</td>
        <td>{note.ReportBy}</td>
        <td>{note.Facility}</td>
        <td>{note.Storage}</td>
        <td>{note.AssetType}</td>
        <td>
          <button onClick={() => console.log("ShowAssetTable onClick")}>Delete</button>
        </td>
      </tr>
  ))  
  return (
    <div>
      <h2>{facility}</h2>
      <table id="table">
        <tr>
          <th>Serial#</th>
          <th>Date</th>
          <th>ReportedBy</th>
          <th>Location</th>
          <th>Storage</th>
          <th>Asset type</th>
          <th>Link</th>
        </tr>
        {item}
      </table>
    </div>
  );
}

function ShowAssetTable(props) {
  const facility = props.location
  for (const elem of props.assettables) {
    if (elem['Facility'] === facility) {
      console.log("Facility: %s is found", elem['Facility'])
    }
  }
  const item = props.assettables.map(note => (
    note.Facility === facility && 
      <tr>
        <td>{note.PrimaryKey.split('#')[1]}</td>
        <td>{note.Date}</td>
        <td>{note.ReportBy}</td>
        <td>{note.Facility}</td>
        <td>{note.Storage}</td>
        <td>{note.AssetType}</td>
        <td>
          <button onClick={() => console.log("ShowAssetTable onClick")}>Delete</button>
        </td>
      </tr>
  ))  
  return (
    <div>
      <h2>{facility}</h2>
      <table id="table">
        <tr>
          <th>Serial#</th>
          <th>Date</th>
          <th>ReportedBy</th>
          <th>Location</th>
          <th>Storage</th>
          <th>Asset type</th>
          <th>Link</th>
        </tr>
        {item}
      </table>
    </div>
  );
}

export default ShowAssetTable;