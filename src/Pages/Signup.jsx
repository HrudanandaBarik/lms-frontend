import { useState } from "react";
import HomeLayout from "../Layouts/HomeLayout";
import {BsPersonCircle} from 'react-icons/bs';
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch } from "react-redux";
import {toast} from 'react-hot-toast';
import { createAccount } from "../Redux/Slices/AuthSlice";
import { isEmail, isValidPassword } from "../Helpers/regexMatcher";

function Signup(){

    const dispatch = useDispatch();
    const navigate = useNavigate();

   const [previewImage, setPreviewImage] = useState("");

   const [signupDetails, setSignupDetails] = useState({
    fullName: '',
    email: '',
    password: '',
    avatar: ''
    });

    function handleUserInput(e) {
        const {name, value} = e.target;
        setSignupDetails({
            ...signupDetails,
            [name]: value
        })
    }

    function getImage(event){
        event.preventDefault();

        const uploadedImage = event.target.files[0];

        if(uploadedImage){
            setSignupDetails({
                ...signupDetails,
                avatar: uploadedImage
            });
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            fileReader.addEventListener("load", function () {
            setPreviewImage(this.result);
        })
        }
    }

    async function createNewAccount(event){
        event.preventDefault();
        if(!signupDetails.email || !signupDetails.password || !signupDetails.fullName || !signupDetails.avatar){
           toast.error("Please fill all the details");
           return;
        }
        
        //checking name field length
        if(signupDetails.fullName.length < 5){
            toast.error("Name should be atleast of 5 characters");
            return;
        }
         
        //checking valid email
        if(!isEmail(signupDetails.email)){
            toast.error("Invalid email id");
            return;
        }

        //checking password validation
        if(!isValidPassword(signupDetails.password) ){
            toast.error("Password should be one uppercase ,one lowercase, one special character and length should be 8 to 15 characters.");
            return;
        }

        const formData = new FormData();
        formData.append("fullName", signupDetails.fullName);
        formData.append("email", signupDetails.email);
        formData.append("password", signupDetails.password);
        formData.append("avatar", signupDetails.avatar);

        //dispatch create account action
        const response = await dispatch(createAccount(formData));
        if(response?.payload?.success)
            navigate("/");

        setSignupDetails({
            fullName: '',
            email: '',
            password: '',
            avatar: ''
        });
        setPreviewImage("");

    }

    return (
        <HomeLayout>
            <div className="flex items-center justify-center h-[100vh]">
                <form noValidate onSubmit={createNewAccount} className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px__black]">
                    <h1 className="text-center text-2xl font-bold">Registration Page</h1>

                    <label htmlFor="image_uploads" className="cursor-pointer">
                    { previewImage ? (
                            <img className="w-24 h-24 rounded-full m-auto" src={previewImage}/>
                        ) : (
                            <BsPersonCircle className="w-24 h-24 rounded-full m-auto" />
                        )}
                    </label>
                    <input
                        onChange={getImage}
                        type="file" 
                        className="hidden"
                        name="image_uploads"
                        id="image_uploads"
                        accept=".jpg, .jpeg, .png, .svg"
                    />

                    <div className="flex flex-col gap-1">
                        <label htmlFor="fullName" className="font-semibold">Name</label>
                        <input 
                            onChange={handleUserInput}
                            value={signupDetails.fullName}
                            required
                            type="text" 
                            name="fullName"
                            className="bg-transparent px-2 py-1 border"
                            placeholder="enter your username..."
                            id="fullName" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="font-semibold">Email</label>
                        <input 
                            onChange={handleUserInput}
                            value={signupDetails.email}
                            required
                            type="email" 
                            name="email"
                            className="bg-transparent px-2 py-1 border"
                            placeholder="enter your Email..."
                            id="email" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="password" className="font-semibold">Password</label>
                        <input 
                            required
                            onChange={handleUserInput}
                            value={signupDetails.password}
                            type="password" 
                            name="password"
                            className="bg-transparent px-2 py-1 border"
                            placeholder="enter your Password..."
                            id="password" />
                    </div>

                    <button type="submit" className="mt-2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer">
                          Create Account
                    </button>

                    <p className="text-center">
                            Already have an account ? <Link to="/login" className="link cusror-pointer text-accent">Login</Link>
                    </p>

                </form>

            </div>
        </HomeLayout>
    );
}

export default Signup;