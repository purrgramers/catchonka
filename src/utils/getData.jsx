import { API_URL } from "./constants";
import { useState } from "react";
import axios from "axios";

const [name, setName] = useState("");
const [age, setAge] = useState(0);
const [favouriteSnack, setFavouriteSnack] = useState("");
const [chonkLevel, setChonkLevel] = useState("");
const [catMood, setCatMood] = useState("");
const [bio, setBio] = useState("");
const [livesLeft, setLivesLeft] = useState(0);
const [pictureURL, setPictureURl] = useState(null);
const [waitingForPictureURL, setWaitingForPictureURL] = useState(false);



      try {
        const response = await axios.get(`${API_URL}/cats/${catId}`);
        setCats(response.data);
        setPictureURl(response.data.secure_url);
        setWaitingForPictureURL(false);
      } catch (error) {
        console.log("Error fetching cats:", error);

        console.log("error uploading image");
        setWaitingForPictureURL(false);
      }