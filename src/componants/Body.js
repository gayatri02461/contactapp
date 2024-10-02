import Form from './Form.js'
function Body() {
    return (
        <div className="flex flex-col  justify-center items-center min-h-screen ">
            <div className='flex flex-col justify-center items-center mr-64 ml-64'>
                <span className="text-[48px]  font-bold  self-start">CONTACT US</span>
                <span className="text-[16px]  text-left ">LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </span>
            </div>

            <Form />
        </div>



    )
}
export default Body;