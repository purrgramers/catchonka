/* eslint-disable react/prop-types */
function CatProfileCard({ cat }) {
  return (
    <>
      {/*Cat Name, Age and Image*/}

      <div className="col-span-12  p-16 sm:col-span-6 ">
        <div className="flex items-center gap-4">
          <h1 className="text-4xl font-bold">{cat.name}</h1>{" "}
          <span className="text-3xl text-indigo-800 font-medium">
            • {cat.age} years
          </span>
        </div>
        <img src={cat.picture} className="bg-pink-100 mt-4" />
      </div>

      {/*Bio and other Info*/}

      <div className="col-span-12  p-16 sm:col-span-6 ">
        <div>
          <p className="text-indigo-800">Bio </p>
          <span className="text-2xl italic">{cat.bio} </span>
        </div>
        <div>
          <p className="text-indigo-800 mb-2"> Favorite Snack </p>
          <span className="bg-teal-500 text-white p-2 rounded">
            {" "}
            {cat.favouriteSnack}
          </span>
        </div>

        {/*Chonk Level*/}

        <div>
          <p className=" text-indigo-800 block">
            Chonk Level
            <span className="bg-blue-600 text-white p-2 rounded m-2 leading-none inline-flex items-center">
              {cat.chonkLevel}
            </span>
          </p>
        </div>

        {/*Features*/}

        <div className=" col-span-3  sm:col-span-3 flex text-center  mt-4 gap-4">
          <div className="bg-indigo-100 inline-grid p-2 rounded">
            <span className="text-indigo-800">Lives</span>
            <span className=" text-4xl font-bold p-2   leading-none inline-flex items-center">
              {cat.livesLeft}/9
            </span>
          </div>

          <div className="bg-indigo-100 inline-grid p-2 rounded">
            <span className="text-indigo-800">Mood</span>
            <span className=" text-4xl font-bold p-2   leading-none inline-flex items-center">
              {cat.catMood}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default CatProfileCard;
