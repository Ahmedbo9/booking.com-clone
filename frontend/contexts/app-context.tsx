import React, { useContext } from 'react';


type ToastMessage = {
    message: string;
    type: 'success' | 'error' | 'info';

}

type AppContext ={
    showToast : (toastMessage : ToastMessage) => void;
}

const AppContext = React.createContext<AppContext | undefined>(undefined)

export const AppContextProvider = ({children} : {children : React.ReactNode}) => {

    return (
        <AppContext.Provider value={{
            showToast : (toastMessage : ToastMessage) => {
                console.log(toastMessage);
            }
        }}> 

            {children}
            
         </AppContext.Provider>
    )


}
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('missing AppContextProvider in the component tree');
    }
    return context as AppContext;
}