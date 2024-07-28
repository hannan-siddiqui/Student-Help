import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Form = ({ studentId }) => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user?.userInfo);
  const U = useSelector((store) => store.user?.user);

  const nameRef = useRef();
  const rollnoRef = useRef();
  const enrlnoRef = useRef();
  const emailRef = useRef();
  const skillsRef = useRef();
  const linkRef = useRef();
  const linkedinRef = useRef();
  const githubRef = useRef();
  const twitterRef = useRef();

  const [projects, setProjects] = useState(
    user?.projects || [{ title: "", tech:"", description: "", link: "" }]
  );

  const [leetcode, setLeetcode] = useState(user?.leetcode || null);

  useEffect(() => {
    setLeetcode(user?.leetcode || null);
  }, [user]);

  const handleAddProject = (e) => {
    e.preventDefault();
    setProjects([...projects, { title: "",tech:"", description: "", link: "" }]);
  };

  const handleRemoveProject = (e, index) => {
    e.preventDefault();
    const newProjects = projects.filter((_, i) => i !== index);
    setProjects(newProjects);
  };

  const handleProjectChange = (index, field, value) => {
    const newProjects = projects.map((project, i) => {
      if (i === index) {
        return { ...project, [field]: value };
      }
      return project;
    });
    setProjects(newProjects);
  };

  const handleFormSubmit = async (e, action) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const rollno = rollnoRef.current.value;
    const enrlno = enrlnoRef.current.value;
    const skills = skillsRef.current.value;
    const email = U.email;
    const link = linkRef.current.value;
    const linkedin = linkedinRef.current.value;
    const github = githubRef.current.value;
    const twitter = twitterRef.current.value;

    const payload = {
      name,
      rollno,
      enrlno,
      email,
      skills,
      link,
      linkedin,
      github,
      twitter,
      projects,
      leetcode,
    };

    try {
      if (action === 'add') {
        await axios.post("http://127.0.0.1:8000/api/student/", payload);
      } else {
        await axios.put(`http://127.0.0.1:8000/api/update/${user?.id}`, payload);
      }
      navigate("/student");
    } catch (error) {
      console.error(`There was an error ${action === 'add' ? 'adding' : 'updating'} the student!`, error);
    }
  };

  return (
    <div className="bg-neutral-700 mt-0 pt-0">
      <form className="p-20 flex items-center flex-col bg-neutral-700" onSubmit={(e) => handleFormSubmit(e, user?.rollno ? 'update' : 'add')}>
        <div className="flex">
          <div className="w-96 ml-10">
            <h1 className="text-white font-extrabold text-3xl">Personal details</h1>
          </div>

          <div className="flex flex-col">
            <div className="flex gap-8">
              <label className="flex flex-col">
                <span className="text-white font-semibold">Name</span>
                <input
                  className="mt-2 w-96 border text-white font-semibold border-cyan-300 rounded-lg p-2 bg-neutral-700"
                  type="text"
                  ref={nameRef}
                  defaultValue={user?.name?user?.name:"name "}
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-semibold">Roll No</span>
                <input
                  className="mt-2 w-96 border text-white font-semibold border-cyan-300 rounded-lg p-2 bg-neutral-700"
                  type="text"
                  ref={rollnoRef}
                  defaultValue={user?.rollno?user?.rollno:"roll no "}
                />
              </label>
            </div>
            <div className="flex mt-8 gap-8">
              <label className="flex flex-col">
                <span className="text-white font-semibold">Email</span>
                <input
                  className="mt-2 w-96 border text-white font-semibold border-cyan-300 rounded-lg p-2 bg-neutral-700"
                  type="text"
                  ref={emailRef}
                  value={U?.email}
                  readOnly
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-semibold">Enrollment No</span>
                <input
                  className="mt-2 w-96 border text-white font-semibold border-cyan-300 rounded-lg p-2 bg-neutral-700"
                  type="text"
                  ref={enrlnoRef}
                  defaultValue={user?.enrlno?user?.enrlno:"enrl no"}
                />
              </label>
            </div>
          </div>
        </div>

        <div className="w-[90%] h-[2px] my-10 rounded-lg bg-slate-200"></div>

        <div className="flex">
          <div className="w-96 ml-10">
            <h1 className="text-white font-extrabold text-3xl">Social Links</h1>
            <h1 className="text-neutral-400 text-lg">Your Social Links.</h1>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-8">
              <div>
                <label className="flex flex-col">
                  <span className="text-white font-semibold">GitHub</span>
                  <input
                    className="mt-2 w-96 border text-white font-semibold border-cyan-300 rounded-lg p-2 bg-neutral-700"
                    type="text"
                    ref={githubRef}
                    defaultValue={user?.github?user?.github:"github "}
                  />
                </label>
              </div>
              <div>
                <label className="flex flex-col">
                  <span className="text-white font-semibold">LinkedIn</span>
                  <input
                    className="mt-2 w-96 border text-white font-semibold border-cyan-300 rounded-lg p-2 bg-neutral-700"
                    type="text"
                    ref={linkedinRef}
                    defaultValue={user?.linkedin?user?.linkedin:"linkedin"}
                  />
                </label>
              </div>
            </div>
            <div className="flex mt-8 gap-8">
              <div>
                <label className="flex flex-col">
                  <span className="text-white font-semibold">Twitter</span>
                  <input
                    className="mt-2 w-96 border text-white font-semibold border-cyan-300 rounded-lg p-2 bg-neutral-700"
                    type="text"
                    ref={twitterRef}
                    defaultValue={user?.twitter?user?.twitter:"twitter "}
                  />
                </label>
              </div>
              <div>
                <label className="flex flex-col">
                  <span className="text-white font-semibold">Other</span>
                  <input
                    className="mt-2 w-96 border text-white font-semibold border-cyan-300 rounded-lg p-2 bg-neutral-700"
                    type="text"
                    ref={linkRef}
                    defaultValue={user?.link?user?.link:"link "}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[90%] h-[2px] my-10 rounded-lg bg-slate-200"></div>

        <div className="mt-6 flex">
          <div className="w-[410px]">
            <h1 className="text-white font-extrabold text-3xl ml-10">Technical Skills</h1>
          </div>
          <div>
            <textarea
              className="ml-4 w-[800px] h-[110px] align-text-top mt-2 border text-white font-semibold border-cyan-300 rounded-lg p-2 bg-neutral-700"
              cols="30"
              rows="15"
              ref={skillsRef}
              defaultValue={user?.skills || ""}
            ></textarea>
          </div>
        </div>

        <div className="w-[90%] h-[2px] my-10 rounded-lg bg-slate-200"></div>

{/* projects ----------------- */}
        <div className="mt-6 flex">
          <div className="w-[410px]">
            <h1 className="text-white font-extrabold text-3xl ml-10">Projects</h1>
          </div>

          <div className="ml-4 w-[800px] flex  flex-col">
            {projects.map((project, index) => (
              <div key={index} className="flex flex-col gap-6 mt-4">
                <div className="flex flex-col">
                  <label className="flex flex-col w-[700px]">
                    <span className="text-white font-semibold">Project {index + 1} Title</span>
                    <input
                      className="w-[700px] mt-2 border text-white font-semibold border-cyan-300 rounded-lg p-2 bg-neutral-700"
                      type="text"
                      value={project.title}
                      onChange={(e) => handleProjectChange(index, "title", e.target.value)}
                    />
                  </label>

                  <label className="mt-4 flex flex-col w-[700px]">
                    <span className="text-white font-semibold">Project {index + 1} tech stack used </span>
                    <input
                      className="w-[700px] mt-2 border text-white font-semibold border-cyan-300 rounded-lg p-2 bg-neutral-700"
                      type="text"
                      value={project.tech}
                      onChange={(e) => handleProjectChange(index, "tech", e.target.value)}
                    />
                  </label>

                  <label className="flex flex-col mt-4">
                    <span className="text-white font-semibold">Project {index + 1} Description</span>
                    <textarea
                      className="mt-2 w-[700px] h-24 border text-white font-semibold border-cyan-300 rounded-lg p-2 bg-neutral-700"
                      value={project.description}
                      onChange={(e) => handleProjectChange(index, "description", e.target.value)}
                    ></textarea>
                  </label>
                  <label className="flex flex-col mt-4">
                    <span className="text-white font-semibold">Project {index + 1} Link</span>
                    <input
                      className="mt-2 w-[700px] border text-white font-semibold border-cyan-300 rounded-lg p-2 bg-neutral-700"
                      type="text"
                      value={project.link}
                      onChange={(e) => handleProjectChange(index, "link", e.target.value)}
                    />
                  </label>
                </div>
                <div>
                  <button className="p-2 mt-2 bg-red-600 rounded-lg text-white" onClick={(e) => handleRemoveProject(e, index)}>
                    Remove Project {index + 1}
                  </button>
                </div>
              </div>
            ))}
            <div>
              <button className="w-[400px] p-3 mt-5 bg-amber-700 rounded-lg text-white" onClick={handleAddProject}>
                Add Project
              </button>
            </div>
          </div>
        </div>

        <button className="w-[400px] p-3 ml-7 mt-5 bg-amber-700 rounded-lg text-white" type="submit">
          {user?.rollno ? "Save" : "Add Details"}
        </button>
      </form>
    </div>
  );
};

export default Form;
