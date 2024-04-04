import { useEffect, useState } from "react";
export default Filter =(props)=>{
console.log("props-",props);
const keys=Array.from(props.data.keys());
const [selectedKey,setSelectedKey]=useState("Sort");

const [filteredValues,setFilteredValues]=useState({});
const values= props.data?.get(selectedKey);
console.log("values=:",values);
const clearFilter=()=>{
    console.log("clear filter");
    setFilteredValues({})
    props.sendFilters({})
}
const submitFilter=()=>{

props.sendFilters(filteredValues)

}
const toggleFilter=(filter,type)=>{
    if(type!="sort"){

    
    if(selectedKey in filteredValues){
          if(filteredValues[selectedKey].includes(filter)){
              let filters= filteredValues[selectedKey].filter((e)=>e!=filter);
              setFilteredValues({...filteredValues,[selectedKey]:
                filters})
          }
          else {
            setFilteredValues({...filteredValues,[selectedKey]:
                [...filteredValues[selectedKey],filter]
            
            })
          }
    }
    else {
        setFilteredValues({...filteredValues,[selectedKey]:
            [filter]
        
        
        })
    }
}
else {
    console.log("sort")
    setFilteredValues({...filteredValues,[selectedKey]:
        filter
    
    })
}
;
}
useEffect(()=>{
    console.log("filter ",filteredValues)
},[filteredValues])
    return (
        <div className="Modal_Contaner">

            <div className="modal">
                <div className="model_head">
                    Filters

                </div>
                <div className="filterBody">
                <div className="leftbar">

                    {
                      keys?.map((keyy)=>(
                   
                            <div onClick={()=>{setSelectedKey(keyy);}}  key={keyy} className={selectedKey==keyy?"selected":"filter_key"} >{keyy}</div>
                      ))
                    }
             
                </div>
                <div className="rightbar">
                 {
                    selectedKey!="Sort"?values?.map((value)=>(
                        <div className="filtervalues">
                             <input
            type="checkbox"
            id={"id_"+value}
            value={value}
            checked={filteredValues[selectedKey]&&filteredValues[selectedKey].includes(value)}
             onChange={() => toggleFilter(value,"")}
          />
                           <span style={{marginLeft:"0.4em"}}> {value}</span>
                        </div>
                    ))
                    :

            values?.map((value)=>(
                        <div className="filtervalues">
                       <input
            type="radio"
            value={value}
            name="radio"
            checked={filteredValues[selectedKey]&&filteredValues[selectedKey].includes(value)}
            onChange={()=>toggleFilter(value,"sort")}
          />
                           <span style={{marginLeft:"0.4em"}}> {value}</span>
                        </div>
                    ))
                    
                
                 }
                </div>
                </div>
                <div className="model_footer" style={{display:"flex",justifyContent:"end",padding:"1em",gap:"4"}}>

                  <div className="cancel" onClick={()=>clearFilter()}>
                    Clear Filter
 

                  </div>
                  <div className="submit" onClick={()=>submitFilter()}>
                    Apply

                  </div>
                </div>
            </div>


        </div>
    )
}