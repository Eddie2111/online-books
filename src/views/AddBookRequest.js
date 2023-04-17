import axios from 'axios'
export default function AddBookRequest(){
    const submitHandle=async(e)=>{
        e.preventDefault();
        const data = {
                Book_Title:e.target.Book_Title.value,
                ISBN_no:e.target.ISBN_no.value,
                Book_type:e.target.Book_type.value,
                Book_Rating:e.target.Book_Rating.value,
                Publication_Year : e.target.Publication_Year.value,
                Book_Authors:e.target.Book_Authors.value,
                Book_condition:e.target.Book_condition.value,
        }
        await axios.post("http://localhost:2000/addBookRequest", data, {withCredentials:true})
        .then(res=> { console.log(res) })
        .catch(err => alert(err) )
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
            </div>
            <div className="flex flex-wrap mb-6">
                <label htmlFor="isbn_no" className="block text-gray-700 font-bold mb-2">
                ISBN no
                </label>
                <input
                type="text"
                name="ISBN_no"
                id="isbn_no"
                placeholder="ISBN no"
                required
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="flex flex-wrap mb-6">
                <label htmlFor="book_type" className="block text-gray-700 font-bold mb-2">
                Book Type
                </label>
                <input
                type="text"
                name="Book_type"
                id="book_type"
                placeholder="Book Type"
                required
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="flex flex-wrap mb-6">
                <label htmlFor="book_rating" className="block text-gray-700 font-bold mb-2">
                Book Rating
                </label>
                <input
                type="text"
                name="Book_Rating"
                id="book_rating"
                placeholder="Book Rating"
                required
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="flex flex-wrap mb-6">
                <label htmlFor="publication_year" className="block text-gray-700 font-bold mb-2">
                Publication Year
                </label>
                <input
                type="text"
                name="Publication_Year"
                id="publication_year"
                placeholder="Publication Year"
                required
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="flex flex-wrap mb-6">
                <label htmlFor="book_authors" className="block text-gray-700 font-bold mb-2">
                Book Authors
                </label>
                <input
                type="text"
                name="Book_Authors"
                id="book_authors"
                placeholder="Book Authors"
                required
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="flex flex-wrap mb-6">
                <label htmlFor="book_condition" className="block text-gray-700 font-bold mb-2">
                Book Condition
                </label>
                <input
                type="text"
                name="Book_condition"
                id="book_condition"
                placeholder="Book Condition"
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
