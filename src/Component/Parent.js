import { createContext } from "react";
import Child from "./Child";
export const context=createContext();
function Parent()
{
    const customer={
     id:1,
     name:'Mayur',
     address:'Pune'       
    }
    return(
        <div>
            <context.Provider value={customer}>
                <Child/>
            </context.Provider>

        </div>
    );
}
export default Parent;