import axios from 'axios'
export default function AddWishList(){
    const submitHandle = async(e)=>{
        e.preventDefault();
    const data = {
        Book_Title : e.target.Book_Title.value, 
        Publication_Year : e.target.Publication_Year.value,
    }
    await axios.post("http://localhost:2000/WishList", data, {withCredentials:true})
    .then(res=>{console.log(res);alert("Created!")})
    .catch(res=>{console.log(res)})
    }
    return(
        <div>
            <form onSubmit={submitHandle} className="w-full max-w-lg mx-auto">
            <div className="flex flex-wrap mb-6">
                <label htmlFor="book_title" className="block text-gray-700 font-bold mb-2">
                Book Title
                </label>
                <input
                type="text"
                name="Book_Title"
                id="book_title"
                placeholder="Book Title"
                required
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <label htmlFor="publication_year" className="block text-gray-700 font-bold mb-2">
                Publication Year
                </label>
                <input
                type="text"
                name="Publication_Year"
                placeholder="Publication Year"
                required
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="flex flex-wrap">
                <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Submit
                </button>
            </div>
            </form>
        </div>
    )
}
