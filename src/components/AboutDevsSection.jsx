function AboutDevs() {
  return (
    <>
      <div className="w-auto  grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
        <div>
          <div className="flex   items-center space-x-6 mb-4 ">
            <img
              className="h-24 w-24  object-cover object-center rounded-full "
              src="./src/assets/vee.jpg"
              alt="photo"
            />
            <div>
              <p className="text-xl  text-indigo-800 font-bold mb-1">
                Angelica Valenzuela
              </p>
              <p className="text-xl  text-indigo-500 font-normal mb-1">
                Developer
              </p>
            </div>
          </div>
          <div>
            <p className="text-indigo-900 leading-loose font-normal text-base">
              A little bit more of a chonk , with a big chonk in the heart and
              mind for creating , designing and developing web app.
            </p>
            <a
              href="https://github.com/avz-kitchen"
              className="text-base text-pink-600 font-normal"
            >
              To Github Profile
            </a>
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-6 mb-4 ">
            <img
              className="h-24 w-24  object-cover object-center rounded-full "
              src="./src/assets/raff.jpg"
              alt="photo"
            />
            <div>
              <p className="text-xl  text-indigo-800 font-bold mb-1">
                Raffaella Florissini
              </p>
              <p className="text-base text-indigo-600 font-normal">Developer</p>
            </div>
          </div>
          <div>
            <p className="text-indigo-900 leading-loose font-normal text-base">
              A plant and cat mom who is being introduced to the IT world. As a
              soon to be web dev, i really enjoyed working on this project and
              am very excited for this to become my day to day.
            </p>
            <a
              href="https://github.com/raffaellacff"
              className="text-base text-pink-600 font-normal"
            >
              To Github Profile
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutDevs;
