import { useState } from "react";
import { Link } from "react-router-dom";
import useJob from "../utils/useJob";
import Header from "./Header";

const Job = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedRemote, setSelectedRemote] = useState("");
  const JOB = useJob();

  if (!JOB) return null;

  // Extract unique locations
  const locations = [...new Set(JOB.map(j => j.location).filter(location => location))];

  // Filter the JOB array based on the search query, selected location, and remote option
  const filteredJobs = JOB.filter(j => 
    (j.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    j.title.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (selectedLocation === "" || j.location === selectedLocation) &&
    (selectedRemote === "" || j.remote === selectedRemote)
  );

  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="w-screen h-20 bg-[#343d44] flex items-center">
        <div className="w-[70%] ml-[5%] flex justify-center ">

          <input
            className="px-4 py-2 text-red-500 text-lg font-mono border rounded w-[40%] font-extrabold h-12 placeholder:text-red-600 placeholder:text-lg placeholder:font-serif"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
          />

          <select
            className="px-4 py-2 text-red-500 text-lg font-mono border rounded w-[15%] font-extrabold h-12 ml-4"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option className="" value="">locations</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>

          <select
            className="px-4 py-2 text-red-500 text-lg font-mono border rounded w-[15%] font-extrabold h-12 ml-4"
            value={selectedRemote}
            onChange={(e) => setSelectedRemote(e.target.value)}
          >
            <option value="">All Types</option>
            <option value="yes">Remote</option>
            <option value="no">Onsite</option>
          </select>
          
        </div>
      </div>

      <div className="bg-blue-100 flex flex-wrap justify-center items-center gap-4 p-10">
        {filteredJobs.map((j) => (
          <Link to={"/jobpage/" + j.id} key={j.id}>
            <div key={j.id}>
              <div className="mt-1 bg-blue-200 relative rounded-lg w-[380px] h-[300px] flex flex-col p-3 ">
                <div className="text-2xl flex justify-start font-sans font-bold text-[#0066ff] p-2 ">
                  <div>{j.title}</div>
                </div>
                <div className="ml-2 flex justify-start text-lg font-semibold ">
                  <div className="text-black">
                    {j.company.toUpperCase()}
                  </div>
                </div>
                <div className="mt-2 flex font-medium text-2xl">
                  <div className="ml-1 rounded-3xl px-2">
                    {j.location ? j.location : "Not Available"}{j.remote === 'yes' ? " (remote)" : " (onsite)"}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Job;
