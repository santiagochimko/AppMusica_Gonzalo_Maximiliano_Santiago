import { useEffect, useState } from "react";

const matchScreen = () =>{
    const [data, setdata] = useState();
    
    return data ?(
        <div>hola mundo</div>
    ): (
        <p> Loading</p>
    );
};

export default matchScreen;