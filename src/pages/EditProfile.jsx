import axios from "axios";
import { API_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function CreateProfile() {
  const { catId } = useParams();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [favouriteSnack, setFavouriteSnack] = useState("");
  const [chonkLevel, setChonkLevel] = useState("");
  const [catMood, setCatMood] = useState("");
  const [bio, setBio] = useState("");
  const [livesLeft, setLivesLeft] = useState("");
  const [picture, setPicture] = useState("");
  const [waitingForPicture, setWaitingForPicture] = useState(false);
  const [picturePreview, setPicturePreview] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const upload_preset = import.meta.env.VITE_UNSIGNED_UPLOAD_PRESET;

  const url = `https://api.cloudinary.com/v1_1/${
    import.meta.env.VITE_CLOUDINARY_NAME
  }/upload`;

  const navigate = useNavigate();

  useEffect(() => {
    const getCats = async () => {
      try {
        const response = await axios.get(`${API_URL}/cats/${catId}`);
        setName(response.data.name);
        setChonkLevel(response.data.chonkLevel);
        setAge(response.data.age);
        setCatMood(response.data.catMood);
        setBio(response.data.bio);
        setLivesLeft(response.data.livesLeft);
        setFavouriteSnack(response.data.favouriteSnack);
        setPicture(response.data.picture);
        setWaitingForPicture(false);
      } catch (error) {
        console.log("Error fetching cats:", error);
      }
    };

    getCats();

    return () => {};
  }, [catId]);

  const handlePictureChange = (e) => {
    setPicture(e.target.files[0]);
    setPicturePreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    setWaitingForPicture(false);
    setIsLoading(true);

    try {
      const dataToUpload = new FormData();

      dataToUpload.append("file", picture);
      dataToUpload.append("upload_preset", upload_preset);

      const response = await axios.post(url, dataToUpload);

      console.log(response.data.secure_url);
      setPicture(response.data.secure_url);
      setIsLoading(false);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent default when submmitting
    const catDetails = {
      name,
      age,
      favouriteSnack,
      chonkLevel,
      catMood,
      bio,
      livesLeft,
      picture,
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
        <h1 className="text-3xl font-bold mb-4">Edit profile</h1>
        {picture && (
          <img src={picture && picture} alt="a catchonka member photo" />
        )}
        <form id="pictureForm" onSubmit={handleFileUpload}>
          <label className="block flex-col-reverse relative  focus group text-indigo-700">
            Update Photo
            {/*preview of what is to be uploaded */}
            <input
              className="w-full h-5/6  p-0.5  rounded"
              type="file"
              accept="picture/png, picture/jpg, picture/webp , picture/jpeg"
              name="picture"
              onChange={handlePictureChange}
            />
            <div>
              {picturePreview && (
                <img
                  src={picturePreview && picturePreview}
                  alt="a catchonka member photo"
                />
              )}{" "}
            </div>
          </label>
          <p>
            {isLoading ? (
              "Uploading"
            ) : (
              <button type="submit" className="bg-indigo-500 p-2">
                UPLOAD IMAGE
              </button>
            )}
          </p>
        </form>
      </div>

      <div className="font-md sm:font-sm">
        <form id="profileForm" onSubmit={handleSubmit} className="space-y-4 ">
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
              id="chonk"
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
              id="mood"
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
      {/* <ImageUpload /> */}
    </div>
  );
}

export default CreateProfile;
