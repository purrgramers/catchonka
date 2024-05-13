import axios from "axios";
import { API_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function Profile() {
  const [cat, setCat] = useState(null);
  const { catId } = useParams();

  useEffect(() => {
    const getCat = async () => {
      try {
        const response = await axios.get(`${API_URL}/cats/${catId}`);
        setCat(response.data);
      } catch (error) {
        console.log("Error fetching beer:", error);
      }
    };

    getCat();

    return () => {};
  }, [catId]);

  return (
    <div className="mx-auto grid max-w-4xl grid-cols-12 gap-4  p-1">
      {cat && (
        <>
          {console.log("rendering content")}
          {/*Name and Image*/}

          <div className="col-span-12 rounded-lg border border-gray-400 bg-gray-200 p-16 sm:col-span-6 ">
            <div className="flex items-center gap-4">
              <h1 className="text-4xl">{cat.name}</h1>{" "}
              <span className="text-3xl text-green-800 font-regular">
                • {cat.age} years
              </span>
            </div>
            <img
              src="https://img.freepik.com/premium-vector/sexy-cat-cartoon-hand-drawn_19875-244.jpg"
              className="bg-pink-100 mt-4"
            />
          </div>
          {/*Other Info*/}
          <div className="col-span-12 rounded-lg border border-gray-400 bg-gray-200 p-16 sm:col-span-6">
          <span> Bio : Hipster ipsum tattooed brunch I'm baby.</span>
            <h3>{cat.favouriteSnack}</h3>
          <span>Chonk Level</span>
          <span className="bg-blue-600 text-white p-2 rounded  leading-none inline-flex items-center">{cat.chonkLevel}</span>
          </div>
        </>
      )}
    </div>
  );
}
export default Profile;
