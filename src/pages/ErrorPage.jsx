import {Link} from "react-router-dom"

function ErrorPage(){
    return (
        <main className="h-screen w-full flex flex-col justify-center items-center bg-green-50">
            <h1 className="text-9xl font-extrabold text-green-200 tracking-widest">404</h1>
            <div className="bg-red-600 px-2 text-white rounded rotate-12 absolute">
                Page Not Found
            </div>
            <button className="mt-5">
                <a
                    className="relative inline-block text-sm font-medium text-red-600 group active:text-orange-500 focus:outline-none focus:ring"
                >
                    <span
                        className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-green-50 group-hover:translate-y-0 group-hover:translate-x-0"
                    ></span>

                    <span className="relative block px-8 py-3 bg-green-500 border border-current">
                        <Link to="/Home"> Home</Link>
                    </span>
                </a>
            </button>
        </main>
    
        )
}
export default ErrorPage;