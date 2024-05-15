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
        console.log("Error fetching cats:", error);
      }
    };

    getCats();

    return () => {};
  }, []);

  return (
    <section className="mx-auto grid max-w-4xl grid-row-12 gap-4 p-1">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-center px-2 mx-auto">
        {cats &&
          cats?.map((cats, index) => {
            return (
              <article
                key={index}
                className="bg-white h-full  p-4 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border"
              >
                <div className="flex justify-between items-center w-full pb-4 mb-auto">
                  <div className="flex items-center">
                    <div className="pr-3">
                      <img
                        className="h-12 w-12 rounded-full border-2 border-indigo-500 object-cover"
                        src={cats.picture}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-1">
                      <div className="">
                        <p className="text-md font-semibold text-indigo-900 ">{cats.name}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="text-md flex items-center text-indigo-500 ">
                      • {cats.age} years
                    </div>
                  </div>
                </div>
                <div className="relative  overflow-hidden rounded-xl overflow-hidden">
                  <img
                    className=" w-full h-80  object-cover  transition-transform duration-300 transform group-hover:scale-105"
                    src={cats.picture}
                    alt=""
                  />
                </div>

       

                <Link
                  className="flex justify-center items-center bg-pink-700 bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100"
                  to={"/cats/" + cats.id}
                >
                  See Profile
                  <svg
                    className="ml-2 w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 5l7 7-7 7M5 5l7 7-7 7"
                    ></path>
                  </svg>
                </Link>

                <h3 className="font-medium text-l leading-8">
                  <span className="bg-indigo-200 uppercase font-medium text-indigo-500 p-2 mt-2 rounded  leading-none inline-flex items-center">
                    {cats.chonkLevel}
                  </span>
                </h3>

                <div></div>
              </article>
            );
          })}
      </div>
    </section>
  );
}
export default CatProfileList;
