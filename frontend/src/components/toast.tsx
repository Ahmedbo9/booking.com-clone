import { useEffect } from "react";

type ToastProps = {
    message: string;
    type: 'success' | 'error';
    onDismiss: () => void;
};



const Toast = ({message, type , onDismiss}: ToastProps) => {

    useEffect(() => {

        const timer = setTimeout(() => {
            onDismiss();
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    } , [onDismiss])

    const styles = type === 'success' ? ' fixed top-4 right-4 z-50  p-4 rounded-md bg-green-600 text-white max-w-md' 
    : type === 'error' ? 'fixed top-4 right-4 z-50  p-4 rounded-md bg-red-600 text-white max-w-md': '';

    return (
        <div className={styles}>
             <div className="flex justify-center items-center">
            <span className="text-lg font-semibold">
                {message}
            </span>
        </div>

        </div>
       
    )

}

export default Toast;