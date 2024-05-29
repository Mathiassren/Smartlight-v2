import React, { useState, useEffect } from "react";
import Toggle from "react-styled-toggle";
import { Link } from "react-router-dom";
import CustomSlider from "./CustomSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faUtensils,
  faBed,
  faCouch,
  faComputer,
} from "@fortawesome/free-solid-svg-icons";

const iconList = [faBath, faComputer, faUtensils, faBed, faCouch];

const getRandomIcon = () => {
  const randomIndex = Math.floor(Math.random() * iconList.length);
  return iconList[randomIndex];
};

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const apiBase =
    "http://192.168.1.225/api/fLakOeK-QPDDW8Lpom2grdH9ZAr2i1ROdYlJIfLG/groups";

  useEffect(() => {
    fetch(apiBase)
      .then((response) => response.json())
      .then((data) => {
        const roomArray = Object.entries(data).map(([id, room]) => ({
          id,
          name: room.name,
          type: room.type.toLowerCase(), // Assuming each room has a 'type' attribute
          lights: room.lights.length,
          isLightOn: room.state.all_on,
          brightness: room.action.bri || 0,
          icon: getRandomIcon(), // Generate a random icon for each room
        }));
        setRooms(roomArray);
      })
      .catch((error) => console.error("Error fetching rooms:", error));
  }, []);

  const handleBrightnessChange = (newValue, roomId) => {
    const newBrightness = parseInt(newValue, 10);
    fetch(`${apiBase}/${roomId}/action`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bri: newBrightness }),
    })
      .then(() => {
        setRooms((prevRooms) =>
          prevRooms.map((room) =>
            room.id === roomId ? { ...room, brightness: newBrightness } : room
          )
        );
      })
      .catch((error) => console.error("Failed to update brightness:", error));
  };

  const toggleLight = (roomId, currentState) => {
    const newState = !currentState;
    fetch(`${apiBase}/${roomId}/action`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ on: newState }),
    })
      .then(() => {
        setRooms((prevRooms) =>
          prevRooms.map((room) =>
            room.id === roomId ? { ...room, isLightOn: newState } : room
          )
        );
      })
      .catch((error) => console.error("Error updating light state:", error));
  };

  return (
    <main className="pl-2 overflow-hidden pr-2">
      {rooms.map((room) => (
        <div
          className="bg-[#363636] my-2 p-4 shadow-2xl w-full rounded-lg flex flex-col justify-between pr-4 h-[115px]"
          key={room.id}
        >
          <div className="flex w-full justify-between items-center pl-4 pr-4">
            <Link
              to={`/rooms/${room.id}`}
              className="flex items-center text-white"
            >
              <FontAwesomeIcon icon={room.icon} className="w-10 h-10" />
              <p className="pl-6">{room.name}</p>
            </Link>
            <div className="flex items-center">
              <Toggle
                checked={room.isLightOn}
                onChange={() => toggleLight(room.id, room.isLightOn)}
              />
            </div>
          </div>
          <CustomSlider
            value={room.brightness}
            onChange={(newValue) => handleBrightnessChange(newValue, room.id)}
            min={0}
            max={254}
          />
        </div>
      ))}
    </main>
  );
};

export default Rooms;
