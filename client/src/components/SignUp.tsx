import NavBar from "./NavBar";
import {useForm, Form} from "react-hook-form";
import {useState} from "react";

function SignUp() {

    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    return (
        <>
            <NavBar ></NavBar>

            <div className="flex items-center justify-center pt-35">
                <form className="flex flex-col space-y-4 align-middle" onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                    <label htmlFor="username">Username</label>
                    <input {...register("username")}
                           id="username"
                           placeholder="example123"
                    />
                    <label htmlFor="email">Email</label>
                    <input {...register("email")}
                           id="email"
                           placeholder="example@gmail.com"
                           type="email"
                    />
                    <label htmlFor="password">Password</label>
                    <input {...register("password")}
                           id="password"
                           placeholder="*********"
                           type="password"
                    />
                    <p>{data}</p>
                    <button type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >Submit</button>
                </form>
            </div>

        </>
    )
}

export default SignUp;