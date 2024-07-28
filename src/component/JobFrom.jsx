import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const JobForm = () => {
  const navigate = useNavigate();

  const titleRef = useRef(null);
  const companyRef = useRef(null);
  const descRef = useRef(null);
  const linkRef = useRef(null);
  const locationRef = useRef(null);
  const qualificationRef = useRef(null);
  const remoteRef = useRef(null);
  const worktypeRef = useRef(null);
  

  const handleJobFormSubmit = async (e) => {
    e.preventDefault();
    const title = titleRef.current ? titleRef.current.value : '';
    const company = companyRef.current ? companyRef.current.value : '';
    const desc = descRef.current ? descRef.current.value : '';
    const link = linkRef.current ? linkRef.current.value : '';
    const qualification = qualificationRef.current ? qualificationRef.current.value : '';
    const location = locationRef.current ? locationRef.current.value : '';
    const remote = remoteRef.current ? remoteRef.current.value : '';
    const worktype = worktypeRef.current ? worktypeRef.current.value : '';
    

    const payload = {
      title,
      company,
      desc,
      link,
      qualification,
      location,
      remote,
      worktype,
    };

    try {
      await axios.post("http://127.0.0.1:8000/api/job/", payload);
                      
      navigate("/student");
    } catch (error) {
      console.error("Error submitting the job form", error);
    }
  };

  return (
    <div className="bg-neutral-700 mt-0 pt-0">
      <form
        className="p-10 flex items-center flex-col bg-neutral-700"
        onSubmit={handleJobFormSubmit}
      >
        <div className="flex flex-col w-screen justify-center items-center">
          <div className="w-[60%] ">
            <h1 className="text-white font-extrabold text-3xl">
              Add Job Details
            </h1>
          </div>

          <div className="mt-10 flex flex-col w-screen">
            <div className="flex flex-col items-center">
              <label className="flex flex-col w-[60%] mt-6">
                <span className="text-white font-semibold">Job Role</span>
                <input
                  className="mt-2 border text-white font-semibold border-cyan-300 rounded-lg p-2 bg-neutral-700"
                  type="text"
                  ref={titleRef}
                  placeholder="Job role.."
                />
              </label>

              <label className="flex flex-col w-[60%] mt-6">
                <span className="text-white font-semibold">Company Name</span>
                <input
                  className="mt-2 border text-white font-semibold border-cyan-300 rounded-lg p-2 bg-neutral-700"
                  type="text"
                  ref={companyRef}
                  placeholder="Company name"
                />
              </label>

              <label className="flex flex-col w-[60%] mt-6">
                <span className="text-white font-semibold">location</span>
                <input
                  className="mt-2 border text-white font-semibold border-cyan-300 rounded-lg p-2 bg-neutral-700"
                  type="text"
                  ref={locationRef}
                  placeholder="location "
                />
              </label>

              {/* remote, hybrid, part-time */}
              <div className="h-[1px] w-[90%] mt-6 bg-red-500"></div>

              <div className="flex mt-3 gap-4">
                <div className="w-40 h-40 mt-4 text-lg flex flex-col text-white border border-red-400 p-4 rounded-xl">
                  <div className="text-lg font-bold ">Remote?</div>
                  <select
                    className="mt-2 text-red-600 rounded-lg p-2 bg-neutral-800"
                    ref={remoteRef}
                    name="remote"
                    id="remote-select"
                  >
                    <option className="text-red-600 rounded-lg p-2" value="yes">
                      Yes
                    </option>
                    <option className="text-red-600 rounded-lg p-2" value="no">
                      No
                    </option>
                  </select>
                </div>
                <div className="w-40 h-40 mt-4 text-lg flex flex-col text-white border border-red-400 p-4 rounded-xl">
                  <div className="text-lg font-bold ">Work Type?</div>
                  <select
                    className="mt-2 text-red-600 rounded-lg p-2 bg-neutral-800"
                    ref={worktypeRef}
                    name="worktype"
                    id="worktype-select"
                  >
                    <option className="text-red-600 rounded-lg p-2" value="part-time">
                      Part-time
                    </option>
                    <option className="text-red-600 rounded-lg p-2" value="full-time">
                      Full-time
                    </option>
                  </select>
                </div>
              </div>

              <label className="flex flex-col w-[60%] mt-6">
                <span className="text-white font-semibold">About Job</span>
                <textarea
                  ref={descRef}
                  className="mt-2 h-56 border text-white font-semibold border-cyan-300 rounded-lg p-2 bg-neutral-700"
                  placeholder="Job description"
                ></textarea>
              </label>

              <label className="flex flex-col w-[60%] mt-6">
                <span className="text-white font-semibold">Qualification</span>
                <textarea
                  ref={qualificationRef}
                  className="mt-2 h-56 border text-white font-semibold border-cyan-300 rounded-lg p-2 bg-neutral-700"
                  placeholder="Job qualification"
                ></textarea>
              </label>

              <label className="flex flex-col w-[60%] mt-6">
                <span className="text-white font-semibold">Apply Link</span>
                <input
                  className="mt-2 border text-white font-semibold border-cyan-300 rounded-lg p-2 bg-neutral-700"
                  type="url"
                  ref={linkRef}
                  placeholder="Apply link"
                />
              </label>
            </div>
          </div>
        </div>

        <div className="w-[90%] h-[2px] my-10 rounded-lg bg-slate-200"></div>

        <button
          className="w-[400px] p-3 ml-7 mt-5 bg-amber-700 rounded-lg text-white"
          type="submit"
        >
          Add Job
        </button>
      </form>
    </div>
  );
};

export default JobForm;
