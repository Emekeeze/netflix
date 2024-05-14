import { forwardRef } from 'react';

interface InputProps {
  id: string;
  label: string;
  type?: string;
  required?: boolean; // Add required prop
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ id, label, type, required }, ref) => {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        ref={ref}
        required={required} // Conditionally apply the required attribute
        className="block rounded-md px-6 pt-6 pb-1 w-full text-md"
      />
      <label className="absolute text-md text-zinc-40 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder:shown-100 peer-placeholder:shown-translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">
        {label}
      </label>
    </div>
  );
});

export default Input;
