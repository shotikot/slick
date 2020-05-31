import React from "react";
import "./Team.css";

const Member = ({ name, position, photo }) => {
  return (
    <div className="member">
      <img src={photo} alt={name} />
      <div className="member-info">
        <p className="member-name">{name}</p>
        <p className="member-position">{position}</p>
      </div>
    </div>
  );
};

export const Team = () => {
  const items = [
    {
      name: "Johan Mathers",
      position: "CEO",
      photo: require("./photos/ceo.jpg"),
    },
    {
      name: "Michael Doe",
      position: "Programmer",
      photo: require("./photos/prog.jpg"),
    },
    {
      name: "Nate Smith",
      position: "Engineer",
      photo: require("./photos/progger.jpg"),
    },
    {
      name: "Sean Leonard",
      position: "Marketer",
      photo: require("./photos/marketer.jpg"),
    },
  ];
  return (
    <div className="team-container">
      <h1>Team Members</h1>
      <p>
        Here are people, whol will make your life successfull,
        <br /> they are ready to help you 24/7.
      </p>
      <div className="team">
        {items.map((item, i) => {
          return (
            <Member
              key={i}
              name={item.name}
              position={item.position}
              photo={item.photo}
            />
          );
        })}
      </div>
    </div>
  );
};
