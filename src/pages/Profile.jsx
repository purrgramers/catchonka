import axios from "axios";
import { API_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CatProfileCard from "../components/CatProfileCard";
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
          <CatProfileCard cat={cat} />
        </>
      )}
    </div>
  );
}
export default Profile;
