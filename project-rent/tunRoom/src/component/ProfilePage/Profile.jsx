import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserData } from "../State/UserAction.js";
import { useDispatch } from "react-redux";
import NavBar from "../Navbar/NavBar";
function Profile() {
  const userData = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      dispatch(fetchUserData(token));
    }
  }, [dispatch, token]);

  console.log(userData);
  if (!userData || !token) {
    return <div>Loading...</div>;
  }






const parsedDate = new Date(userData.date_joined);


const currentDate = new Date();
const timeDifference = currentDate - parsedDate;
const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// Format the date
const options = { year: 'numeric', month: 'short', day: 'numeric' };
const formattedDate = parsedDate.toLocaleDateString('en-US', options);

// Create the final formatted string
const result = `${formattedDate} (${daysAgo} days ago)`;




  return (
    <div>
      <NavBar></NavBar>
      <div class="h-full bg-gray-200 p-8">
        <div class="bg-white rounded-lg shadow-xl pb-8">
          <div class="absolute right-12 mt-4 rounded"></div>
        
          <div class="flex flex-col items-center   mt-[42px]">
            <img
              src={userData.profile_picture}
              class="w-40 border-4 border-white rounded-full"
            />
            <div class="flex items-center space-x-2 mt-2">
              <p class="text-2xl">{userData.username}</p>
              <span class="bg-black rounded-full p-1" title="Verified">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-gray-100 h-2.5 w-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
          <div class="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
            <div class="flex items-center space-x-4 mt-2">
              <button class="flex items-center bg-black  text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                </svg>
                <span>Connect</span>
              </button>
              <button class="flex items-center bg-black  text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Message</span>
              </button>
            </div>
          </div>
        </div>

        <div class="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
          <div class="w-full flex flex-col 2xl:w-1/3">
            <div class="flex-1 bg-white rounded-lg shadow-xl p-8">
              <h4 class="text-xl text-gray-900 font-bold">Personal Info</h4>
              <ul class="mt-2 text-gray-700">
                <li class="flex border-y py-2">
                  <span class="font-bold w-24">Full name:</span>
                  <span class="text-gray-700">{userData.firstName + " " + userData.lastName}</span>
                </li>
                <li class="flex border-b py-2">
                  <span class="font-bold w-24">Age:</span>
                  <span class="text-gray-700">22</span>
                </li>
                <li class="flex border-b py-2">
                  <span class="font-bold w-24">Joined:</span>
                  <span class="text-gray-700">{result}</span>
                </li>
                <li class="flex border-b py-2">
                  <span class="font-bold w-24">Mobile:</span>
                  <span class="text-gray-700">(123) 123-1234</span>
                </li>
                <li class="flex border-b py-2">
                  <span class="font-bold w-24">Email:</span>
                  <span class="text-gray-700">{userData.email}</span>
                </li>
                <li class="flex border-b py-2">
                  <span class="font-bold w-24">Location:</span>
                  <span class="text-gray-700">New York, US</span>
                </li>
                <li class="flex border-b py-2">
                  <span class="font-bold w-24">Languages:</span>
                  <span class="text-gray-700">English, Spanish</span>
                </li>
              </ul>
            </div>
          
          </div>
          <div class="flex flex-col w-full 2xl:w-2/3">
       
            <div class="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
              <h4 class="text-xl text-gray-900 font-bold">History Rented houses</h4>

              <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
                <div class="px-6 py-6 bg-gray-100 border border-gray-300 rounded-lg shadow-xl">
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-sm text-indigo-600">
                      Total Revenue
                    </span>
                    <span class="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default">
                      7 days
                    </span>
                  </div>
                  <div class="flex items-center justify-between mt-6">
                    <div>
                      <svg
                        class="w-12 h-12 p-2.5 bg-indigo-400 bg-opacity-20 rounded-full text-indigo-600 border border-indigo-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1"
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <div class="flex flex-col">
                      <div class="flex items-end">
                        <span class="text-2xl 2xl:text-3xl font-bold">
                          $8,141
                        </span>
                        <div class="flex items-center ml-2 mb-1">
                          <svg
                            class="w-5 h-5 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                            ></path>
                          </svg>
                          <span class="font-bold text-sm text-gray-500 ml-0.5">
                            3%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="px-6 py-6 bg-gray-100 border border-gray-300 rounded-lg shadow-xl">
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-sm text-green-600">
                      New Orders
                    </span>
                    <span class="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default">
                      7 days
                    </span>
                  </div>
                  <div class="flex items-center justify-between mt-6">
                    <div>
                      <svg
                        class="w-12 h-12 p-2.5 bg-green-400 bg-opacity-20 rounded-full text-green-600 border border-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1"
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        ></path>
                      </svg>
                    </div>
                    <div class="flex flex-col">
                      <div class="flex items-end">
                        <span class="text-2xl 2xl:text-3xl font-bold">217</span>
                        <div class="flex items-center ml-2 mb-1">
                          <svg
                            class="w-5 h-5 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                            ></path>
                          </svg>
                          <span class="font-bold text-sm text-gray-500 ml-0.5">
                            5%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="px-6 py-6 bg-gray-100 border border-gray-300 rounded-lg shadow-xl">
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-sm text-blue-600">
                      New Connections
                    </span>
                    <span class="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default">
                      7 days
                    </span>
                  </div>
                  <div class="flex items-center justify-between mt-6">
                    <div>
                      <svg
                        class="w-12 h-12 p-2.5 bg-blue-400 bg-opacity-20 rounded-full text-blue-600 border border-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        ></path>
                      </svg>
                    </div>
                    <div class="flex flex-col">
                      <div class="flex items-end">
                        <span class="text-2xl 2xl:text-3xl font-bold">54</span>
                        <div class="flex items-center ml-2 mb-1">
                          <svg
                            class="w-5 h-5 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                            ></path>
                          </svg>
                          <span class="font-bold text-sm text-gray-500 ml-0.5">
                            7%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-4"></div>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-xl p-8">
          <div class="flex items-center justify-between">
            <h4 class="text-xl text-gray-900 font-bold">Connections (532)</h4>
            <a href="#" title="View All">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-gray-500 hover:text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                ></path>
              </svg>
            </a>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-8 mt-8">
            <a
              href="#"
              class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection1.jpg"
                class="w-16 rounded-full"
              />
              <p class="text-center font-bold text-sm mt-1">Diane Aguilar</p>
              <p class="text-xs text-gray-500 text-center">
                UI/UX Design at Upwork
              </p>
            </a>
            <a
              href="#"
              class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection2.jpg"
                class="w-16 rounded-full"
              />
              <p class="text-center font-bold text-sm mt-1">Frances Mather</p>
              <p class="text-xs text-gray-500 text-center">
                Software Engineer at Facebook
              </p>
            </a>

            <a
              href="#"
              class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection4.jpg"
                class="w-16 rounded-full"
              />
              <p class="text-center font-bold text-sm mt-1">Donna Serrano</p>
              <p class="text-xs text-gray-500 text-center">
                System Engineer at Tesla
              </p>
            </a>
            <a
              href="#"
              class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection5.jpg"
                class="w-16 rounded-full"
              />
              <p class="text-center font-bold text-sm mt-1">Randall Tabron</p>
              <p class="text-xs text-gray-500 text-center">
                Software Developer at Upwork
              </p>
            </a>
            <a
              href="#"
              class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection6.jpg"
                class="w-16 rounded-full"
              />
              <p class="text-center font-bold text-sm mt-1">John McCleary</p>
              <p class="text-xs text-gray-500 text-center">
                Software Engineer at Laravel
              </p>
            </a>
            <a
              href="#"
              class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection7.jpg"
                class="w-16 rounded-full"
              />
              <p class="text-center font-bold text-sm mt-1">Amanda Noble</p>
              <p class="text-xs text-gray-500 text-center">
                Graphic Designer at Tailwind CSS
              </p>
            </a>
            <a
              href="#"
              class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection8.jpg"
                class="w-16 rounded-full"
              />
              <p class="text-center font-bold text-sm mt-1">Christine Drew</p>
              <p class="text-xs text-gray-500 text-center">
                Senior Android Developer at Google
              </p>
            </a>
            <a
              href="#"
              class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection9.jpg"
                class="w-16 rounded-full"
              />
              <p class="text-center font-bold text-sm mt-1">Lucas Bell</p>
              <p class="text-xs text-gray-500 text-center">
                Creative Writer at Upwork
              </p>
            </a>
            <a
              href="#"
              class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection10.jpg"
                class="w-16 rounded-full"
              />
              <p class="text-center font-bold text-sm mt-1">Debra Herring</p>
              <p class="text-xs text-gray-500 text-center">
                Co-Founder at Alpine.js
              </p>
            </a>
            <a
              href="#"
              class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection11.jpg"
                class="w-16 rounded-full"
              />
              <p class="text-center font-bold text-sm mt-1">Benjamin Farrior</p>
              <p class="text-xs text-gray-500 text-center">
                Software Engineer Lead at Microsoft
              </p>
            </a>
            <a
              href="#"
              class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection12.jpg"
                class="w-16 rounded-full"
              />
              <p class="text-center font-bold text-sm mt-1">Maria Heal</p>
              <p class="text-xs text-gray-500 text-center">
                Linux System Administrator at Twitter
              </p>
            </a>
            <a
              href="#"
              class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection13.jpg"
                class="w-16 rounded-full"
              />
              <p class="text-center font-bold text-sm mt-1">Edward Ice</p>
              <p class="text-xs text-gray-500 text-center">
                Customer Support at Instagram
              </p>
            </a>
            <a
              href="#"
              class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection14.jpg"
                class="w-16 rounded-full"
              />
              <p class="text-center font-bold text-sm mt-1">Jeffery Silver</p>
              <p class="text-xs text-gray-500 text-center">
                Software Engineer at Twitter
              </p>
            </a>
            <a
              href="#"
              class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection15.jpg"
                class="w-16 rounded-full"
              />
              <p class="text-center font-bold text-sm mt-1">Jennifer Schultz</p>
              <p class="text-xs text-gray-500 text-center">
                Project Manager at Google
              </p>
            </a>
            <a
              href="#"
              class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection16.jpg"
                class="w-16 rounded-full"
              />
              <p class="text-center font-bold text-sm mt-1">Joseph Marlatt</p>
              <p class="text-xs text-gray-500 text-center">
                Team Lead at Facebook
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
