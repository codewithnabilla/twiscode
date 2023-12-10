"use client";

import { useEffect, useState } from "react";

function Teams() {
  const [teamMembers, setTeamMembers] = useState([]);
  const jobTitles = [
    "Web Developer",
    "UX Designer",
    "Fullstack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Product Manager",
    "Mobile Developer",
    "QA Engineer",
    "Graphic Designer",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=9");
        const data = await response.json();
        setTeamMembers(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-20 pt-5">
      <h1 className="text-3xl font-bold text-center mt-10">Meet Our Teams</h1>
      <div className="grid grid-rows-9 md:grid-cols-3 gap-4 justify-center mt-10">
        {teamMembers.map((member, index) => (
          <div key={index}>
            <div className=" bg-gray-100 text-center rounded-lg p-4">
              <img
                src={member.picture.large}
                alt={`${member.name.first} ${member.name.last}`}
                className="rounded-full mx-auto"
              />
              <h1>{`${member.name.first} ${member.name.last}`}</h1>
              <h1>{member.email}</h1>
              <p>{jobTitles[index]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teams;
