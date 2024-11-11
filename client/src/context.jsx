import React, { useState } from "react";

export const AppContext = React.createContext();
export const AppContextProvider = ({ children }) => {
    const [checked, setChecked] = useState(false);

    return (
        <AppContext.Provider value={{ checked, setChecked }}>
            {children}
        </AppContext.Provider>
    );
};
