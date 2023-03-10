import React from 'react';

const userForm1 = () => {

    // collect form data 

    const formHandler = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.userName.value;

        const email = form.email.value;

        const phone = form.phone.value;
        
        const userInfo = {name,email,phone}

        console.log(userInfo)
    }


    /*
    
        Jokhn, form submit korle, akbare sob data form thekei dhorte chaibo,
        tokhon e.target = form hobe .
        orthat const form = e.target

        er por, input filed er , j name attribute er value dhorte chai tahole

        const userId = form.userId.value ( ekhane userId holo , input filed er name = "userId")

        summary korle, 
        userEmail = e.target.email.value (ekhane ekabarei email er value neya hoice .
             email ti input field er , name = "email" attribute)
    */

    return (
        <div className='w-[80%] mx-auto bg-slate-200 mt-5 p-5'>
            <div className='w-4/5 mx-auto'>
                <h1 className='text-center text-2xl'>Please Fill Up User Data</h1>

                <div className='bg-yellow-500 p-10 rounded-sm mt-5 hover:shadow-lg'>
                    <form onSubmit={formHandler} >
                        <div className='mb-2'>
                            <label htmlFor="userName" className='block mb-1'>User Name</label>
                            <input type="text" className='w-full p-1 rounded-sm outline-none' name='userName' />
                        </div>

                        <div className='mb-2'>
                            <label htmlFor="userName" className='block  mb-1'>User Email</label>
                            <input type="text" className='w-full p-1 rounded-sm outline-none' name='email' />
                        </div>

                        <div className='mb-2'>
                            <label htmlFor="userName" className='block  mb-1'>User Phone</label>
                            <input type="text" className='w-full p-1 rounded-sm outline-none' name='phone' />
                        </div>

                        <div>
                            <input type="submit" className='bg-green-100 px-2 py-1 rounded-sm' value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default userForm1;