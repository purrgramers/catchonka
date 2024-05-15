import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";
import { API_URL } from "../utils/constants";

function EditProfile() {
  const { catId } = useParams();
  const navigate = useNavigate();

  const [name, updateName] = useState("");
  const [age, updateAge] = useState(1);
  const [favouriteSnack, updateFavouriteSnack] = useState("");
  const [chonkLevel, updateChonkLevel] = useState(null);
  const [catMood, updateCatMood] = useState("");
  const [bio, updateBio] = useState("");
  const [livesLeft, updateLivesLeft] = useState(null);
  const [picture, updatePicture] = useState(null);
  const [waitingForPicture, updateWaitingForPicture] = useState(false);

  useEffect(() => {
    const getCats = async () => {
      try {
        const response = await axios.get(`${API_URL}/cats/${catId}`);
        updateName(response.data.name)
        updateChonkLevel(response.data.chonkLevel);
        updateCatMood(response.data.catMood);
        updateBio(response.data.bio);
        updateLivesLeft(response.data.livesLeft);
        updateFavouriteSnack(response.data.favouriteSnack)
        updatePicture(response.data.picture);
        updateWaitingForPicture(false);
      } catch (error) {
        console.log("Error fetching cats:", error);
      }
    };

    getCats();

    return () => {};
  }, [catId]);

  const handleFileUpload = async (e) => {
    updateWaitingForPicture(true);

    const url = `https://api.cloudinary.com/v1_1/${
      import.meta.env.VITE_CLOUDINARY_NAME
    }/upload`;

    const dataToUpload = new FormData();
    dataToUpload.append("file", e.target.files[0]);
    dataToUpload.append(
      "upload_preupdate",
      `${import.meta.env.VITE_UNSIGNED_UPLOAD_PRESET}`
    );

    axios
      .put(url, dataToUpload)
      .then((response) => {
        console.log("RESPONSE ", response.data);
        updatePicture(response.data.secure_url);
        updateWaitingForPicture(false);
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCatDetails = {
      name,
      age,
      favouriteSnack,
      chonkLevel,
      catMood,
      bio,
      livesLeft,
      picture,
    };

    axios
      .put(`${API_URL}/cats/${catId}`, newCatDetails)
      // eslint-disable-next-line no-unused-vars
      .then((response) => {
        navigate(`/cats/${catId}`);
      })
      .catch((e) => console.log("error updating project", e));
  };

  const handleDelete = () => {
    axios
    .delete(`${API_URL}/cats/${catId}`)
    .then(()=> {
    navigate("/cats")
    })
    .catch((error)=> {
      console.error("Error deleting cat:", error);  
    })
  };

  return (
    <div className="mx-auto grid max-w-4xl grid-cols-1 sm:grid-cols-2 gap-8 p-4 ">
      {console.log("rendering edit content")}
      <div>
        <h1 className="text-3xl font-bold mb-2">Edit profile</h1>
        {picture && <img src={picture} alt="my cloudinary image"  />}{" "}
        {/*preview of what is to be uploaded */}
        <input
          className="w-full  bg-indigo-50 p-0.5 rounded"
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
              placeholder={name}
              value={name}
              onChange={(e) => {
                updateName(e.target.value);
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
              placeholder={age}
              value={age}
              onChange={(e) => {
                updateAge(e.target.value);
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
              placeholder={bio}
              value={bio}
              onChange={(e) => {
                updateBio(e.target.value);
              }}
            />
          </label>
          <label className="block text-indigo-700">
            Favourite Snack:{" "}
            <input
              className="w-full bg-indigo-50 p-2 rounded"
              type="text"
              name="favouriteSnack"
              placeholder= {favouriteSnack}
              value={favouriteSnack}
              onChange={(e) => {
                updateFavouriteSnack(e.target.value);
              }}
            />
          </label>
          <label className="block text-indigo-700">
            Chonk Level:{" "}
            <select
              className="bg-indigo-50 w-full p-2 rounded"
              value={chonkLevel}
              onChange={(e) => updateChonkLevel(e.target.value)}
              required
            >
              <option value={chonkLevel}>{chonkLevel}</option>
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
              onChange={(e) => updateCatMood(e.target.value)}
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
              placeholder={livesLeft}
              value={livesLeft}
              onChange={(e) => {
                updateLivesLeft(e.target.value);
              }}
              required
            />
          </label>
          <button
            className="block bg-yellow-300 text-indigo-900  p-2 rounded font-bold uppercase hover:bg-yellow-500 hover:text-indigo-900"
            type="submit"
            disabled={waitingForPicture}
          >
            Save Profile
          </button>{" "}
          <button className="block bg-red-500 text-white  p-2 rounded font-bold uppercase hover:bg-red-600" type="button" onClick={handleDelete}>Delete</button>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
