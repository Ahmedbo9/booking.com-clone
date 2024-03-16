import { useForm } from 'react-hook-form';
export type SignInFormData = {
    email: string;
    password: string;
};


const SignIn = ()=> {
    const {register, formState: {errors}} = useForm<SignInFormData>();
    return (
        <form className='flex flex-col gap-5'>
            <h2 className='text-3xl font=bold'>Sign-in</h2>

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
        </form>
        
    );
}

export default SignIn;