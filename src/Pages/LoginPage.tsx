import { useState } from 'react';
import Navbar from '../Components/Navbar';
import Input from '../Components/Input';
import { useForm } from 'react-hook-form';
import UseAuth from '../hooks/UseAuth';
import { useNavigate } from 'react-router-dom';

enum Variant {
  Sign_up,
  Login_in
}

interface FormData {
  username?: string;
  email: string;
  password: string;
}

function LoginPage() {
  const [variant, setVariant] = useState<Variant>(Variant.Login_in);
  const { signup, Login } = UseAuth(); // Corrected function name
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    if (variant === Variant.Sign_up) {
      try {
        const response = await signup({ email: data.email, password: data.password, username: data.username });
        console.log(response);
      } catch (error) {
        console.error('Error during signup:', error);
        // Handle signup error (e.g., display error message to the user)
      }
    } else {
      try {
        const response = await Login({ email: data.email, password: data.password });
        console.log(response);
        navigate("/browse")
      } catch (error) {
        console.error('Error during login:', error);
        // Handle login error (e.g., display error message to the user)
      }
    }
  };

  return (
    <div className='relative bg-black h-screen w-screen bg-opacity-50'>
      <Navbar />
      <div className='flex justify-center items-center h-full'>
        <div className='bg-black bg-opacity-70 p-16 self-center mt-8 w-full max-w-md rounded-md'>
          <h2 className='text-white text-4xl font-semibold mb-8'>
           {variant === Variant.Sign_up ? "SignUp" : "Login"} 
          </h2>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
            {variant === Variant.Sign_up && (
              <Input id="Username" type="text" label="Username" {...register("username")} />
            )}

            <Input
              id="email"
              type="email"
              label="Email Address"
              required={variant === Variant.Sign_up}
              {...register("email", { required: variant === Variant.Sign_up })}
            />
            {errors.email && <span className="text-red-500">Email is required</span>}

            <Input
              id="password"
              type="password"
              label="Password"
              required={variant === Variant.Sign_up}
              {...register("password", { required: variant === Variant.Sign_up })}
            />
            {errors.password && <span className="text-red-500">Password is required</span>}

            <input type='submit' className='bg-red-400 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700' />
          </form>
          {variant === Variant.Login_in ? (
            <p className="text-neutral-500 mt-12" onClick={() => setVariant(Variant.Sign_up)}>
              <span className="text-white ml-1 hover:underline cursor-pointer">
                First time Netflix user?
              </span>
            </p>
          ) : (
            <p className="text-neutral-500 mt-12" onClick={() => setVariant(Variant.Login_in)}>
              <span className="text-white ml-1 hover:underline cursor-pointer">
                Already have an account?
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
