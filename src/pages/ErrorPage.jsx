import {Link} from "react-router-dom"

function ErrorPage(){
    return (
        <main class="h-screen w-full flex flex-col justify-center items-center bg-green-50">
            <h1 class="text-9xl font-extrabold text-green-200 tracking-widest">404</h1>
            <div class="bg-red-600 px-2 text-white rounded rotate-12 absolute">
                Page Not Found
            </div>
            <button class="mt-5">
                <a
                    class="relative inline-block text-sm font-medium text-red-600 group active:text-orange-500 focus:outline-none focus:ring"
                >
                    <span
                        class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-green-50 group-hover:translate-y-0 group-hover:translate-x-0"
                    ></span>

                    <span class="relative block px-8 py-3 bg-green-500 border border-current">
                        <router-link to="/Home"> Home</router-link>
                    </span>
                </a>
            </button>
        </main>
    
        )
}
export default ErrorPage;