import axios from "axios"
import { API_URL } from "../utils/constants"
function CatProfileList(){
    const getProfiles = () => {axios.get}
    return(
        <section className="mx-auto grid max-w-4xl grid-cols-12 gap-4 bg-zinc-50 p-1">
  <div className="col-span-12 rounded-lg border border-gray-500 bg-gray-200 p-32 sm:col-span-8">
  </div>
  <div className="col-span-12 rounded-lg border border-gray-400 bg-gray-200 p-16 sm:col-span-4">
  </div>
            </section>
    )
}
export default CatProfileList