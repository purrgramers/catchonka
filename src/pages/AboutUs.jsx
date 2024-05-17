import AboutDevs from "../components/AboutDevsSection";

function AboutUs() {
  return (
    <>
      <h1 className="p-8 text-3xl font-bold ">About Catchonkas</h1>
      <div className="container px-5 py-24 mx-auto text-center bg-indigo-200 rounded-full">
        <span className="text-4xl font-bold">
          {" "}
          Wanna know what other type of chonks there is in the area? <br />
          Create a profile with Catchonka and get to know them all!
        </span>
        <p className="text-2xl font-bold mt-4">CATCHONKA, the cat tinder</p>
      </div>
      <AboutDevs />
      <div></div>
    </>
  );
}
export default AboutUs;
