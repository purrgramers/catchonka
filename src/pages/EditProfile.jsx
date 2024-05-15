

function EditProfile(){
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [favouriteSnack, setFavouriteSnack] = useState("");
    const [chonkLevel, setChonkLevel] = useState("");
    const [catMood, setCatMood] = useState("");
    const [bio, setBio] = useState("");
    const [livesLeft, setLivesLeft] = useState(0);
    const [pictureURL, setPictureURl] = useState(null);
    const [waitingForPictureURL, setWaitingForPictureURL] = useState(false);

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
      
return(

    <div className="mx-auto grid max-w-4xl grid-cols-1 sm:grid-cols-2 gap-8 p-4 ">
      <div>

      <h1 className="text-3xl font-bold">Create a new profile</h1>
      
      {pictureURL && <img src={pictureURL} alt="my cloudinary image" />}{" "}
        {/*preview of what is to be uploaded */}
        <input
          className="w-full h-full bg-indigo-50 p-0.5 rounded"
          type="file"
          onChange={handleFileUpload}
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
              placeholder="chonk lives"
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
            disabled={waitingForPictureURL} 
          >
            Create
          </button>{" "}
        </form>
       
      </div>
    </div>
)


}


export default EditProfile