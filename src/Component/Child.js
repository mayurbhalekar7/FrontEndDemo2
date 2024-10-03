import { useContext } from "react";
import { context } from "./Parent";


function Child()
{
    const data = useContext(context);
    return(
        <div>
            <h1>{data.id}</h1>
            <h1>{data.name}</h1>
            <h1>{data.address}</h1>
        </div>
    );
}

export default Child;