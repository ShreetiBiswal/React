const Contact=()=>(
    <div>
        <h1 className="text-3xl m-4 p-4 font-bold">Contact us</h1>
        <form>
            <input
            type="text"
            className="border border-black p-2 m-2"
            placeholder="name">
            </input>
            <input
            className="border border-black p-2 m-2"
            placeholder="message">
            </input>
            <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">Submit</button>
        </form>
    </div>
)

export default Contact;