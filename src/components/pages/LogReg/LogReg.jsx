import { useState } from "react";
import { Login } from "./login";
import { Registration } from "./registration";


function AuthRegContainer({ initial }) {
    const [type, setType] = useState(initial);
    return (
        <>
            {type === 'reg'
                ?
                <Registration setType={setType} />
                :
                <Login setType={setType} />
            }
        </>
    );
}

export default AuthRegContainer;
