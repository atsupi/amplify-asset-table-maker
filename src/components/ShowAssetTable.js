import React from 'react';  
import './ShowAssetTable.css';  
import AssetItem from './AssetItem';  

function ShowAssetTable(props) {
  //console.log(props.locList);
  const facility = props.locList[0];
  for (const elem of props.assettables) {
    if (elem['Facility'] === facility) {
      //console.log("Facility: %s is found", elem['Facility'])
    }
  }
  return (
    <div>
    {
      props.locList.map(location => {
        return (
        <div key={location}>
          <h2 className="Location"><p>{location}</p></h2>
          <table id="table">
            <tbody>
              <tr>
                <th>Serial#</th>
                <th>Date</th>
                <th>ReportedBy</th>
                <th>Location</th>
                <th>Storage</th>
                <th>Asset type</th>
                <th>Link</th>
              </tr>
              <AssetItem location={location} assettables={props.assettables}/>
            </tbody>
          </table>
        </div>
        );
      })
    }
    </div>
  );
}

export default ShowAssetTable;