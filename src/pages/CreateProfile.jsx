import axios from "axios";
import { API_URL } from "../utils/constants";
import { useState } from "react";

function CreateProfile() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [favouriteSnack, setFavouriteSnack] = useState("");
  const [chonkLevel, setChonkLevel] = useState(null);
  const [catMood, setCatMood] = useState(null);
  const [bio, setBio] = useState("");
  const [livesLeft, setLivesLeft] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return(
    <div>
      <h1>Create a new profile</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Name: <input type="text" name="name" placeholder="chonk name" value={name} onChange={(e)=> {setName(e.target.value)}}/>
          </label>
          <label>
            Age: <input type="number" min="0" max="20" name="age" placeholder="chonk age" value={age} onChange={(e)=> {setAge(e.target.value)}}/>
          </label>
          <label>
            Favourite Snack: <input type="text" name="favouriteSnack" placeholder="chonk fav snack" value={favouriteSnack} onChange={(e)=> {setFavouriteSnack(e.target.value)}}/>
          </label>          
          <label>
            Chonk Level: <input type="dropdown" name="chonkLevel" placeholder="chonk level" value={chonkLevel} onChange={(e)=> {setChonkLevel(e.target.value)}}/>
          </label>
          <label>
            Mood: <input type="text" name="catMood" placeholder="chonk default mood" value={catMood} onChange={(e)=> {setCatMood(e.target.value)}}/>
          </label>
          <label>
            Bio: <input type="text" name="bio" placeholder="chonk bio" value={bio} onChange={(e)=> {setBio(e.target.value)}}/>
          </label>
          <label>
            Lives left: <input type="number" min="1" max="9" name="livesLeft" placeholder="chonk lives" value={livesLeft} onChange={(e)=> {setLivesLeft(e.target.value)}}/>
          </label>
        </form>
      </div>

    </div>
  );
}

export default CreateProfile;

