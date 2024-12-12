import React, {useState} from 'react' // Import React and the useState hook 
import datas from "./datas.json"; // Import data from a local JSON file

const Data = () => {
    const [nData, setData] = useState(datas);// Initialize state with the data from datas.json
    console.log(datas[0].id);

    const handleRemove = (itemId) =>{
        setData(nData.filter(item => item.id!==itemId))
    }

    const handleUpdate = (itemId) =>{
        setData(nData.map(items =>{
            if(items.id === itemId){
                return{name:"Updated"}; // Update the item name to "Updated"
            }
            else{
                return items; // Keep other items unchanged
            }
        }))
    }

  return (
    <div>
      <ul>
        {
            nData.map((items) => 
                <li key={items.id}>
                    {/* {console.log(items.id)}; */}
                    {items.name}
                    <br/>
                    <button onClick={() => handleRemove(items.id)}>Remove</button>
                    <button onClick={() => handleUpdate(items.id)}>Update</button>

                </li>
            ) 
        }
      </ul>
      <button onClick={() =>setData([])}>Clear All </button>
    </div>
  )
}

export default Data;