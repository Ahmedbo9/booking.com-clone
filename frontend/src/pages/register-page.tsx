import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../../contexts/app-context";
import { useNavigate } from "react-router-dom";

export type RegisterFormData = {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    confirmPassword: string;
}


const Register =() => {

    const navigate = useNavigate();

    const {showToast} = useAppContext();

    const {register , watch , handleSubmit , formState: {errors}} = useForm<RegisterFormData>();

    const mutation = useMutation(apiClient.register, {
        onSuccess: () => {
            showToast({message: "Account created successfully", type: "success"});
            navigate('/');
        },
        onError: (error: Error) => {
            showToast({message: error.message, type: "error"});
        }
    
    })
    const onSubmit = handleSubmit((data)=>{
        console.log(data);
        mutation.mutate(data);
    });
    

    return (
        <form className="flex flex-col gap-5 p-5 m-5 bg-white shadow-lg rounded-lg" onSubmit={onSubmit}>
            <h2 className="text-3xl font-bold">Create an account</h2>
            <div className=" flex flex-col md:flex-row gap-5 ">
                <label className="text-grey -799 text-sm font-bold flex-1">
                    First Name
                    <input type="text" className="border rounded w-full py-1 px-2 font-normal " {...register("firstName" ,{required:"First name is required"}) } />
                    {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName.message}</span>}

                </label>
                <label className="text-grey -799 text-sm font-bold flex-1">
                    Last Name
                    <input type="text" className="border rounded w-full py-1 px-2 font-normal" {...register("lastName" , {required:"Last name is required"})} />
                    {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName.message}</span>}

                </label>
            </div>
            <label className="text-grey -799 text-sm font-bold flex-1">
                    Email
                    <input type="email" className="border rounded w-full py-1 px-2 font-normal" {...register("email" , {required:"Email is required"})} />
                    {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </label>

            <label className="text-grey -799 text-sm font-bold flex-1">
                    Password
                    <input type="password" className="border rounded w-full py-1 px-2 font-normal" {...register("password" , {required:"Password is required" , minLength:{value:8, message:'Password must contain 8 characters'}})} />
                    {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
            </label>

            <label className="text-grey -799 text-sm font-bold flex-1">
                    Confirm password
                    <input type="password" className="border rounded w-full py-1 px-2 font-normal" {...register("confirmPassword" , {
                        validate :(value) =>{
                            if (!value) {
                                return "Confirm password is required"
                            
                            } else if (value !== watch("password")) {
                                return "Passwords do not match"
                            }

                        }
                    })} />
                    {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>}
            </label>
            <span>
                <button type="submit" className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 tet-xl">
                    Register account 
                </button>
            </span>
        </form>
    )
}

export default Register;