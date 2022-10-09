import React from 'react'

function AssetItem (props) {
  //console.log(props.location);
  const facility=props.location
  const item = props.assettables.map(note => (
    (note.Facility === facility && note.PrimaryKey.split('#')[0] !== "Facility") && 
      <tr key={note.PrimaryKey}>
        <td>{note.PrimaryKey.split('#')[1]}</td>
        <td>{note.Date}</td>
        <td>{note.ReportBy}</td>
        <td>{note.Facility}</td>
        <td>{note.Storage}</td>
        <td>{note.AssetType}</td>
        <td>{note.id}</td>
        <td>
          <button onClick={() => props.deleteitem(note)}>Delete</button>
        </td>
      </tr>
  ))  
  return (
    <>
    {item}
    </>
  )
}

export default AssetItem;