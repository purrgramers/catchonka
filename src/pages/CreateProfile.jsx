import axios from "axios";
import { API_URL } from "../utils/constants";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateProfile(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [favouriteSnack, setFavouriteSnack] = useState("");
  const [chonkLevel, setChonkLevel] = useState(null);
  const [catMood, setCatMood] = useState(null);
  const [bio, setBio] = useState("");
  const [livesLeft, setLivesLeft] = useState(null);
  const [picture, setPicture] = useState(null);
  const [waitingForPicture, setWaitingForPicture] = useState(false);

  const navigate = useNavigate();

  const handleFileUpload = async (e) => {
    setWaitingForPicture(true);

    const url = `https://api.cloudinary.com/v1_1/${import.meta.env.drv4bvkmy}/upload`;

    const dataToUpload = new FormData();
    dataToUpload.append("file", e.target.files[0]);
    dataToUpload.append("upload_preset", `${import.meta.env.VITE_UNSIGNED_UPLOAD_PRESET}`);

    axios
    .post(url, dataToUpload)
    .then((response)=> {
      console.log('RESPONSE ', response.data);
      setPicture(response.data.secure_url);
      setWaitingForPicture(false);
    })
    .catch((error)=> {
      console.error("Error uploading file:", error);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent default when submmitting

    const currentCatId = parseInt(props.catId);
    const catDetails = {
      name,
      age,
      favouriteSnack,
      chonkLevel,
      catMood,
      bio,
      livesLeft,
      picture,
      catId: currentCatId,
    };

    try {
    await axios.post(`${API_URL}/cats`, catDetails);
      navigate("/");
    } catch (error) {
      console.log("error creating new cat", error);
    }
  };

  return (
    <div className="mx-auto grid max-w-4xl grid-cols-1 sm:grid-cols-2 gap-8 p-4 ">
      <div>

      <h1 className="text-3xl font-bold">Create a new profile</h1>
      
      {picture && <img src={picture} alt="my cloudinary image" />}{" "}
        {/*preview of what is to be uploaded */}
        <input
          className="w-full h-full bg-indigo-50 p-0.5 rounded"
          type="file"
          onChange={(e) => handleFileUpload(e)}
        />
        </div>

      <div className="font-md sm:font-sm">
        <form onSubmit={handleSubmit} className="space-y-4 ">
          <label className="block flex-col-reverse relative  focus group text-indigo-700">
            Name:{" "}
            <input
              className="w-full bg-indigo-50 p-2 rounded"
              type="text"
              name="name"
              placeholder="chonk name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </label>

          <label className="inline-block text-indigo-700">
            Age:{" "}
            <input
              className="w-full bg-indigo-50 p-2 rounded"
              type="number"
              min="0"
              max="20"
              name="age"
              placeholder="chonk age"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
              required
            />
          </label>

          <label className="block text-indigo-700">
            Bio:
            <input
              className="w-full bg-indigo-50 p-2 rounded"
              type="text"
              name="bio"
              placeholder="chonk bio"
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
          </label>

          <label className="block text-indigo-700">
            Favourite Snack:{" "}
            <input
              className="w-full bg-indigo-50 p-2 rounded"
              type="text"
              name="favouriteSnack"
              placeholder="chonk fav snack"
              value={favouriteSnack}
              onChange={(e) => {
                setFavouriteSnack(e.target.value);
              }}
            />
          </label>

          <label className="block text-indigo-700">
            Chonk Level:{" "}
            <select
              className="bg-indigo-50 w-full p-2 rounded"
              value={chonkLevel}
              onChange={(e) => setChonkLevel(e.target.value)}
              required
            >
              <option value="">Select Chonk Level</option>
              <option value="MINI CHONK">MINI CHONK</option>
              <option value="CHONK">CHONK</option>
              <option value="CHONK CHONK">CHONK CHONK</option>
              <option value="BIG CHONK">BIG CHONK</option>
            </select>
          </label>
          <label className="block text-indigo-700">
            Mood:{" "}
            <select
              className="bg-indigo-50 p-2 w-full rounded"
              value={catMood}
              onChange={(e) => setCatMood(e.target.value)}
            >
              <option value="">Select emoji</option>
              <option value="😼">😼</option>
              <option value="😻">😻</option>
              <option value="🦖">🦖</option>
              <option value="🌪️">🌪️</option>
              <option value="🦦">🦦</option>
            </select>
          </label>

          <label className="inline-block text-indigo-700">
            Lives left:{" "}
            <input
              className="w-full bg-indigo-50 p-2 rounded"
              type="number"
              min="1"
              max="9"
              name="livesLeft"
              placeholder="chonk live"
              value={livesLeft}
              onChange={(e) => {
                setLivesLeft(e.target.value);
              }}
              required
            />
          </label>
          <button
            className="block bg-yellow-300 text-indigo-900  p-2 rounded font-bold uppercase hover:bg-yellow-500 hover:text-indigo-900"
            type="submit"
            disabled={waitingForPicture} 
          >
            Create
          </button>{" "}
        </form>
       
      </div>
    </div>
  );
}

export default CreateProfile;
