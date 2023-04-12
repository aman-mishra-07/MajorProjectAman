export default function ContactForm(props) {
    return(
        <>
        <div className="leftcmax-md:h-fit max-sm:w-50 p-8 bg-slate-900 bg-opacity-70 border border-white h-fit w-100 m-5 rounded-2xl  ">
                    <h1 className="text-center text-4xl max-sm:text-2xl">{props.formname}</h1>
                    <p className="text-center text-md max-sm:text-sm">{props.msg}</p>
                    <form action="form.php" className="p-4 flex flex-col max-sm:p-1 ">
                        <label htmlFor="user">Name</label>
                        <input type="text" name="user" placeholder="Enter your name" className="bg-transparent m-2 rounded-2xl border-white " />
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Enter your email" className="bg-transparent m-2 rounded-2xl border-white " />
                        <label htmlFor="phone">Phone Number</label>
                        <input type="text" name="phone" placeholder="###-###-####" className="bg-transparent m-2 rounded-2xl border-white " />
                        <input type="submit" value="Submit" className=" bg-sky-700 p-2 m-2 rounded-2xl hover:bg-sky-600 " />
                    
                    </form>
                    
                </div>
        </>
    )
    
}