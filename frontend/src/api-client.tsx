import { RegisterFormData } from './pages/register-page';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string;


export const register = async (formData: RegisterFormData) => {

    console.log(API_BASE_URL);
    
    const respone = await fetch (`${API_BASE_URL}/api/users/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })

    const responseBody = await respone.json();

    if (!respone.ok) {
        throw new Error(responseBody.message);
    }
}


