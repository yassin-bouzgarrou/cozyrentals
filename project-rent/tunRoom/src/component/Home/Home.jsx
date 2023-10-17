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
              <h2 className=" text-3xl font-semibold  mt-16 mb-10  font-bigtitle">
                FIND YOUR PERFECT VACATION RENTAL{" "}
              </h2>
              <Filter></Filter>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div></div>
      <div>
        <div>
          <h3 className="mt-10  font-title text-3xl"> Recommended cities </h3>
          <p className="ml-5"> Based on your localitaion</p>
          <div className="  flex   -gap-24 -mt-20">
            <article class="relative    w-72 isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
              <img
                src="https://res.listglobally.com/listings/5828541/90891705/a749cce513632b59dcc3ea8a8fe70de6?mode=crop&height=300"
                alt="University of Southern California"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-3xl font-bold text-white">sfax</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                City of love
              </div>
            </article>
            <article class="relative w-72 isolate flex flex-col justify-end overflow-hidden rounded-2xl px-4 pb-4 pt-32 max-w-sm mx-auto mt-24">
              <img
                src="https://immoneuf.tunisienumerique.com/wp-content/uploads/2023/08/image-9-compressed.jpg"
                alt="University of Southern California"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-3xl font-bold text-white">sfax</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                City of love
              </div>
            </article>
            <article class="relative  w-72  isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
              <img
                src="https://res.listglobally.com/listings/5828541/90511032/95337c7d93e91f7e5eec54bc0e199868?mode=crop&height=300"
                alt="University of Southern California"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-3xl font-bold text-white">souse</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                City of love
              </div>
            </article>
            <article class="relative  w-72   isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
              <img
                src="https://res.listglobally.com/listings/5828541/90511032/95337c7d93e91f7e5eec54bc0e199868?mode=crop&height=300"
                alt="University of Southern California"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-3xl font-bold text-white">souse</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                City of love
              </div>
            </article>
            
          </div>
        </div>
        <p>ds</p>
        <p>d</p>
        <p>d</p>
        <p></p>
      </div>
    </>
  );
}

export default Home;
