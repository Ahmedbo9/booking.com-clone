import { RegisterFormData } from './pages/register-page';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string;


export const register = async (formData: RegisterFormData) => {

    console.log(API_BASE_URL);
    
    const respone = await fetch (`${API_BASE_URL}/api/users/register`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })

    const responseBody = await respone.json();
     console.log('register',responseBody);

    if (!respone.ok) {
        throw new Error(responseBody.message);
    }
}

export const validateToken = async () => {
    const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
        credentials: "include",
    });

    if (!response.ok) {
        throw new Error("Token is not valid");
    }

    console.log('validate-token',response);
    return response.json();
}



    

