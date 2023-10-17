import BlackLogo from "../../assets/img/roomBackround.jpeg";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUserData } from "../State/UserAction.js";
import NavBar from "../Navbar/NavBar";

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
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default Home;
