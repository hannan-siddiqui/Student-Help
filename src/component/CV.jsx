import React from 'react';

const CV = (props) => {

        console.log(props);

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto bg-white p-8 shadow-md rounded-lg">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold">Mohd Hannan</h1>
          <p className="text-lg text-gray-600">Masters in Computer Science and Application</p>
          <p className="text-lg text-gray-600">Aligarh Muslim University (Sep 22 – July 24)</p>
        </header>
        <div className="contact text-center mb-8">
          <p className="text-gray-700"><a href="mailto:siddiquihannan824@gmail.com" className="text-blue-500">siddiquihannan824@gmail.com</a></p>
          <div className="flex justify-center space-x-4">
            <a href="https://www.linkedin.com/in/hannan-siddiqui-990961258/" className="text-blue-500">LinkedIn</a>
            <a href="https://github.com/hannan-siddiqui" className="text-blue-500">GitHub</a>
          </div>
        </div>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold">Web Developer Intern</h3>
            <p className="text-gray-600">CodSoft (remote) | Sep 23 – Nov 23</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>Developed the front-end part of an ecommerce web app using ReactJS and Tailwind CSS.</li>
              <li>Used Python and Django to make models for saving and retrieving data from databases.</li>
              <li>Used MongoDB for creating Databases.</li>
            </ul>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold">Cruise Chronicle</h3>
              <p className="text-gray-600">ReactJS, Redux, Django, Python, Tailwind, SQLite</p>
              <p className="text-gray-700">A blogging website serving as a platform to read, write, update, and view articles.</p>
              <a href="https://github.com/hannan-siddiqui/Cruise_Chronicles" className="text-blue-500">GitHub Link</a>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold">Student-Help</h3>
              <p className="text-gray-600">ReactJS, Redux, Django, Python, Tailwind, MongoDB</p>
              <p className="text-gray-700">A platform to connect students and recruiters, where students can display their skills, projects, DSA Sheet, technical blogs, and work experience.</p>
              <a href="https://github.com/hannan-siddiqui/Student-Help" className="text-blue-500">GitHub Link</a>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold">Bite-Buddy</h3>
              <p className="text-gray-600">ReactJS, Redux, Tailwind</p>
              <p className="text-gray-700">A food ordering app built using ReactJS, Redux, and Tailwind CSS with Swiggy API.</p>
              <a href="https://github.com/hannan-siddiqui/BiteBuddy" className="text-blue-500">GitHub Link</a>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold">Netflix-Gpt</h3>
              <p className="text-gray-600">ReactJS, Redux, Firebase, Tailwind</p>
              <p className="text-gray-700">An OTT platform to watch movies with OpenAI integration for suggesting movies.</p>
              <a href="https://github.com/hannan-siddiqui/Netflix-Gpt" className="text-blue-500">GitHub Link</a>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold">Static</h3>
              <p className="text-gray-600">HTML, CSS, JavaScript, Django, SQLite</p>
              <p className="text-gray-700">A dynamic auction platform using Django. The project incorporates HTML, CSS, and JavaScript for the frontend and Django framework for API functionality.</p>
              <a href="https://github.com/hannan-siddiqui/Static" className="text-blue-500">GitHub Link</a>
            </div>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <p className="text-gray-700">Languages: Java, Python, C++, JavaScript, HTML/CSS, SQL, Data Structures and Algorithms.</p>
            <p className="text-gray-700">Frameworks, tools, and libraries: Django, React, Redux, Tailwind, MongoDB, SQL, Docker, Git, Flask, Linux.</p>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Awards & Achievements</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <p className="text-gray-700">1st rank in CodeHawk (Coding competition organized by AMU)</p>
              <p className="text-gray-700">2nd rank in university on Geeks for Geeks (a coding and e-learning platform)</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <p className="text-gray-700">Top 5 in AMUHACK (Hackathon organized by AMU)</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <p className="text-gray-700">Top 1% coder in India on Coding Ninjas Platform (a coding and e-learning platform)</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <p className="text-gray-700">Internshala Student Partner Campus Ambassador (organized program for students to give them a roadmap for becoming a software engineer and two coding competitions)</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CV;
