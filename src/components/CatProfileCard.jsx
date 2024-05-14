/* eslint-disable react/prop-types */
function CatProfileCard({ cat }) {
  return (
    <>
      {/*Cat Name Age and Image*/}

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

      <div className="col-span-12  p-16  sm:col-span-6 justify-between gap-8 ">
        <div className="row-span-12 sm:row-span-6 flex gap-4 justify-center">
          <p className="text-indigo-800">Bio </p>
          <span className="text-2xl italic">{cat.bio} </span>
        </div>
        <div className="row-span-12   mt-4  sm:col-span-6 flex gap-4">
          <p className="text-indigo-800"> Favorite Snack </p>
          <span className="bg-teal-500 text-white p-2 rounded">
            {" "}
            {cat.favouriteSnack}
          </span>
        </div>

        {/*Chonk Level*/}

        <div className="row-span-12  sm:col-span-6 flex  mt-4 gap-4">
          <span className="text-indigo-800">Chonk Level </span>
          <span className="bg-blue-600 text-white p-2 rounded  leading-none inline-flex items-center">
            {cat.chonkLevel}
          </span>
        </div>

        {/*Features*/}

        <div className=" row-span-12  sm:col-span-6 flex  mt-4 gap-4">
          <div className="col-span-4  sm:col-span-4 bg-indigo-100 inline-grid p-2 rounded">
            <span className="text-indigo-800">Lives</span>
            <span className=" text-4xl font-bold p-2   leading-none inline-flex items-center">
              {cat.livesLeft} /9
            </span>
          </div>

          <div className="col-span-4  sm:col-span-4 bg-indigo-100 inline-grid p-2 rounded">
            <span className="text-indigo-800">Purr Sound </span>
            <span className=" text-4xl font-bold p-2   leading-none inline-flex items-center">
              Play
            </span>
          </div>

          <div className="col-span-4  sm:col-span-4 bg-indigo-100 inline-grid p-2 rounded">
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
