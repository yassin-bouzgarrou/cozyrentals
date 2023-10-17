import BlackLogo from "../../assets/img/roomBackround.jpeg";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUserData } from "../State/UserAction.js";
import NavBar from "../Navbar/NavBar";
import Filter from "./Filter";

import { useSelector } from "react-redux";

function Home() {
  const userData = useSelector((state) => state.auth.userData);

  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      dispatch(fetchUserData(token));
    }
  }, [dispatch, token]);

  if (!userData || !token) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="" style={{ position: "fixed", zIndex: 1000 }}>
        <NavBar></NavBar>
      </div>
      <div
        className="relative 	background-repeat: no-repeat;"
        style={{
          backgroundImage: `url(${BlackLogo})`,
          height: "600px",
        }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <div className="flex h-full items-center justify-center">
            <div className="text-white">
              <h2 className="mb-4 text-3xl font-semibold mt-11 ">
                FIND YOUR PERFECT VACATION RENTAL{" "}
              </h2>
         <Filter></Filter>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div>


      </div>
      <div> 
        <div className="  flex      ">
          <p> best palce to go </p>
        <article class="relative  w-80 isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
    <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a" alt="University of Southern California" class="absolute inset-0 h-full w-full object-cover" />
    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    <h3 class="z-10 mt-3 text-3xl font-bold text-white">Paris</h3>
    <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">City of love</div>
</article>
<article class="relative w-80 isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
    <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a" alt="University of Southern California" class="absolute inset-0 h-full w-full object-cover" />
    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    <h3 class="z-10 mt-3 text-3xl font-bold text-white">Paris</h3>
    <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">City of love</div>
</article>
<article class="relative w-80  isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
    <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a" alt="University of Southern California" class="absolute inset-0 h-full w-full object-cover" />
    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    <h3 class="z-10 mt-3 text-3xl font-bold text-white">Paris</h3>
    <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">City of love</div>
</article>

        </div>
   <p></p>
   <p></p>
   <p></p>
   <p></p>
      </div>
    </>
  );
}

export default Home;
