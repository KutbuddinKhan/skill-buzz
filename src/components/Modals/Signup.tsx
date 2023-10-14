import { authModalState } from '@/atoms/authModalAtom';
import { auth, firestore } from "@/firebase/firebase";
import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';

const Signup = () => {

    const setAuthModalState = useSetRecoilState(authModalState);
    const handleClick = () => {
        setAuthModalState((prev) => ({ ...prev, type: "login" }));
    };

    const [inputs, setInputs] = useState({ email: "", displayName: "", password: "" });
    const router = useRouter();

    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);


    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleRegister = async (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (!inputs.email || !inputs.password || !inputs.displayName) return alert("Please fill all the fields");
        try {
            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
            if (!newUser) return;
            router.push('/');

        } catch (error: any) {
            alert(error.message)
        }
    };

    useEffect(() => {
        if (error) alert(error.message);
    }, [error])

    return (
        <form className="space-y-6 px-6 py-4" onSubmit={handleRegister}>
            <h3 className="text-xl font-medium text-white">Register to Skill Buzz</h3>
            <div>
                <label htmlFor="email" className="text-sm font-medium block mb-2 text-gray-300">
                    Email
                </label>
                <input
                    onChange={handleChangeInput}
                    type="email"
                    name='email'
                    id='email'
                    className="border-2 outline-none sm:text-sm rounded-lg focus:right-blue focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 text-white"
                    placeholder='youremail@gmail.com' />
            </div>
            <div>
                <label htmlFor="displayName" className="text-sm font-medium block mb-2 text-gray-300">
                    Display Name
                </label>
                <input
                    onChange={handleChangeInput}
                    type="displayName"
                    name='displayName'
                    id='displayName'
                    className="border-2 outline-none sm:text-sm rounded-lg focus:right-blue focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 text-white"
                    placeholder='Cristiano Ronaldo' />
            </div>
            <div>
                <label htmlFor="password" className="text-sm font-medium block mb-2 text-gray-300">
                    Password
                </label>
                <input
                    onChange={handleChangeInput}
                    type="password"
                    name='password'
                    id='password'
                    className="border-2 outline-none sm:text-sm rounded-lg focus:right-blue focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 text-white" placeholder='**********' />
            </div>

            <button
                type='submit'
                className="w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s">
                {loading ? "Registering..." : "Register"}
            </button>

            <div className="text-sm font-medium text-gray-300" >
                Already have an account? {" "}
                <a href='#' className="text-blue-700 border:underline" onClick={handleClick}
                >
                    Log in
                </a>
            </div>
        </form>
    )
}

export default Signup
