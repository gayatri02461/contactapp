import { BiMessageDetail } from "react-icons/bi";
import { IoCallOutline } from "react-icons/io5";
import { useState } from "react";

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
    const onSubmit = (event) => {
        event.preventDefault(event);
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
    }

    return (
        <div className="flex ">
            <div className="flex flex-col justify-center items-center">

                <div className="flex space-x-10 mt-3">
                    <button className="bg-black text-white h-[40px] w-[220px] " type="">
                        <div className="flex justify-center space-x-2">
                            <BiMessageDetail className="size-6 mx-3" />VIA SUPPORT CHAT
                        </div></button>

                    <button className="bg-black text-white w-[220px] h-[40px]" type="">
                        <div className="flex justify-center space-x-2">
                            < IoCallOutline className="size-6 mx-3" />VIA CALL
                        </div></button>
                </div>



                <button className=" mt-3 h-[40px] w-[472px] border border-gray-400" type=""><div className="flex justify-center space-x-2">
                    <BiMessageDetail className="size-6 mx-3" />VIA EMAIL FORM
                </div></button>



                <form onSubmit={onSubmit} className="flex flex-col ">

                    <div className="relative mt-4">
                        <label className=" absolute top-[-14px] left-5 px-1 bg-white text-black text-xs" htmlFor="fname">Name</label>


                        <input className="block border border-gray-400  w-[440px] h-[40px]" type="text " id="fname" />

                    </div>

                    <div className="relative mt-4">
                        <label className=" absolute top-[-14px] left-5 px-1 bg-white text-black text-xs" htmlFor="mail">E-mail</label>


                        <input className="block border border-gray-400  w-[440px] h-[40px]" type="email" id="mail" />

                    </div>

                    <div className="relative mt-4">
                        <label className=" absolute top-[-14px] left-5 px-1 bg-white  text-xs" htmlFor="textarea">Text</label>


                        <textarea className="block  border text-black border-gray-400 w-[440px] h-[120px]" name="text" id="textarea" />
                    </div>

                    <input className="bg-black self-end rounded-md text-white mt-3 w-[220px] h-[40px]" type="submit" name="Submit" />

                </form>
                <div className="self-start">
                    {name + " " + text + " " + email}
                </div>
            </div>

            <img src="/logo.png" alt="" />
        </div>
    );
}

export default Form;