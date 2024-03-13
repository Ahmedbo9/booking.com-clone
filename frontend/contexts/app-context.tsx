import React, { useContext, useState } from 'react';
import Toast from '../src/components/toast';


type ToastMessage = {
    message: string;
    type: 'success' | 'error';

}

type AppContext ={
    showToast : (toastMessage : ToastMessage) => void;
}

const AppContext = React.createContext<AppContext | undefined>(undefined)

export const AppContextProvider = ({children} : {children : React.ReactNode}) => {

    const [toasts, setToasts] = useState<ToastMessage|undefined>(undefined);

    return (
        <AppContext.Provider value={{
            showToast : (toastMessage : ToastMessage) => {
                setToasts(toastMessage);
            }
        }}> 


        {toasts && (<Toast message={toasts.message} type={toasts.type} onDismiss={()=>setToasts(undefined)}/>)}

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