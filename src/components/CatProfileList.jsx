import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_URL } from "../utils/constants";
function CatProfileList() {
  const [cats, setCats] = useState(null);


  useEffect(() => {
    const getCats = async () => {
      try {
        const response = await axios.get(`${API_URL}/cats`);
        setCats(response.data);
      } catch (error) {
        console.log('Error fetching cats:', error);
      }
    };

    getCats();

    return () => {
    };
  }, []);

  return (
    <section className="mx-auto grid max-w-4xl grid-cols-12 gap-4 bg-zinc-50 p-1">
      <div className="col-span-12 rounded-lg border border-gray-500 bg-gray-200 p-32 sm:col-span-8">
        {cats && cats?.map((cats, i) => {
          return (
            <Link to={"/cats/"+ cats.id} key={i}>
            <div className="bg-yellow-200 p-4 gap-4 font-bold ">
              <p>{cats.name}</p> 
            </div>
        </Link>
          )
        })}
      </div>
      <div className="col-span-12 rounded-lg border border-gray-400 bg-gray-200 p-16 sm:col-span-4"></div>
    </section>
  );
}
export default CatProfileList;
