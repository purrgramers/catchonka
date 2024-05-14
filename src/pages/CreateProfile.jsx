import axios from "axios";
import { API_URL } from "../utils/constants";
import { useState } from "react";
import {useNavigate} from "react-router-dom"

function CreateProfile() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [favouriteSnack, setFavouriteSnack] = useState("");
  const [chonkLevel, setChonkLevel] = useState(null);
  const [catMood, setCatMood] = useState(null);
  const [bio, setBio] = useState("");
  const [livesLeft, setLivesLeft] = useState(0);
  const [pictureURL, setPictureURl] = useState(null);
  const [waitingForPictureURL, setWaitingForPictureURL] = useState(false);

  const navigate = useNavigate();

  const handleFileUpload = (e) => {
    setWaitingForPictureURL(true);

    const url = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_NAME}/upload`; 

    const dataToUpload = newFormData();
    dataToUpload.append("file", e.target.files[0]);
    dataToUpload.append("upload_preset", import.meta.env.bcn8fofx);

  }

  const handleSubmit = (e) => {
    e.preventDefault();            // prevent default when submmitting 
    
    const catDetails = {
      name, 
      age, 
      favouriteSnack, 
      chonkLevel, 
      catMood, 
      bio, 
      livesLeft,
      pictureURL
    }                        
                              // post response new catDetails
    axios.post(`${API_URL}/cats`, catDetails, dataToUpload)
    .then(response => {       // navigate to list of cats when profile is created
      navigate("/cats");
      setPictureURl(response.data.secure_url);
      setWaitingForPictureURL(false);
    })
    .catch(e => console.log("error creating new cat", e))
  }

  return(
    <div className="mx-auto grid max-w-4xl grid-cols-12 gap-4 bg-zinc-50 p-1">
      <div className="col-span-6 p-16 sm:col-span-3">

        </div>
      <h1 className="text-3xl font-bold">Create a new profile</h1>
      <div className="col-span-6   p-16 sm:col-span-3 font-md sm:font-sm" >
        <form onSubmit={handleSubmit}>
          <label className=" flex-col-reverse relative  focus group text-indigo-700">
            Name: <input className="bg-indigo-50 p-2 rounded" type="text" name="name" placeholder="chonk name" value={name} onChange={(e)=> {setName(e.target.value)}}/>
          </label>
          <label className="text-indigo-700">
            Age: <input  className="bg-indigo-50 p-2 rounded"  type="number" min="0" max="20" name="age" placeholder="chonk age" value={age} onChange={(e)=> {setAge(e.target.value)}}/>
          </label>
          <label className="text-indigo-700">
            Favourite Snack: <input  className="bg-indigo-50 p-2 rounded"  type="text" name="favouriteSnack" placeholder="chonk fav snack" value={favouriteSnack} onChange={(e)=> {setFavouriteSnack(e.target.value)}}/>
          </label>          
          <label className="text-indigo-700">
            Chonk Level: <select className="bg-indigo-50 p-2 rounded"   value={chonkLevel} onChange={(e) => setChonkLevel(e.target.value)}>
                        <option value="">Select Chonk Level</option>
                        <option value="Category 1">MINI CHONK</option>
                        <option value="Category 2">CHONK</option>
                        <option value="Category 3">CHONK CHONK</option>
                        <option value="Category 4">BIG CHONK</option>
                    </select>
          </label>
          <label className="text-indigo-700">
          Mood: <select className="bg-indigo-50 p-2 rounded"  value={catMood} onChange={(e) => setCatMood(e.target.value)}>
                        <option value="">Select emoji</option>
                        <option value="Category 1">😼</option>
                        <option value="Category 2">😻</option>
                        <option value="Category 3">🦖</option>
                        <option value="Category 4">🌪️</option>
                        <option value="Category 5">🦦</option>
                    </select>
          </label>
          <label className="text-indigo-700">
            Bio: <input className="bg-indigo-50 p-2 rounded"   type="text" name="bio" placeholder="chonk bio" value={bio} onChange={(e)=> {setBio(e.target.value)}}/>
          </label>
          <label className="text-indigo-700">
            Lives left: <input className="bg-indigo-50 p-2 rounded"  type="number" min="1" max="9" name="livesLeft" placeholder="chonk lives" value={livesLeft} onChange={(e)=> {setLivesLeft(e.target.value)}}/>
          </label>
          <button className="bg-yellow-300 text-indigo-900  p-2 rounded font-bold uppercase hover:bg-yellow-500 hover:text-indigo-900" type="submit" disabled={waitingForPictureURL}>Create</button> {/* disable create button while image has not been ulpoaded */}
        </form>
        {pictureURL && <img src={pictureURL} alt="my cloudinary image"/>}  {/*preview of what is to be uploaded */}
        <input className="bg-indigo-50 p-0.5 rounded" type="file" onChange={(e) => handleFileUpload(e)} />
      </div>
      
    </div>
  );
}

export default CreateProfile;
