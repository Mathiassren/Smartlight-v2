import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HeaderDetails from "../components/HeaderDetails";
import ModeSelector from "../components/DetailsRooms";
import Nav from "../components/Nav";

const RoomDetails = () => {
  const { roomId } = useParams();
  const [lights, setLights] = useState([]);
  const apiBase = `http://192.168.1.225/api/fLakOeK-QPDDW8Lpom2grdH9ZAr2i1ROdYlJIfLG`;

  useEffect(() => {
    fetch(`${apiBase}/groups/${roomId}`)
      .then((response) => response.json())
      .then((groupData) => {
        const lightIds = groupData.lights;
        Promise.all(
          lightIds.map((lightId) =>
            fetch(`${apiBase}/lights/${lightId}`).then((res) => res.json())
          )
        ).then((lightsDetails) => {
          setLights(
            lightsDetails.map((detail, index) => ({
              id: lightIds[index],
              name: detail.name,
              isOn: detail.state.on,
              brightness: detail.state.bri,
            }))
          );
        });
      })
      .catch((error) => console.error("Failed to fetch group details", error));
  }, [roomId]);

  const toggleLight = (lightId, currentState) => {
    const newState = !currentState;
    fetch(`${apiBase}/lights/${lightId}/state`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ on: newState }),
    })
      .then(() => {
        setLights((prevLights) =>
          prevLights.map((light) =>
            light.id === lightId ? { ...light, isOn: newState } : light
          )
        );
      })
      .catch((error) => console.error("Error toggling light state:", error));
  };

  const handleBrightnessChange = (newValue, lightId) => {
    const newBrightness = parseInt(newValue, 10);
    fetch(`${apiBase}/lights/${lightId}/state`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bri: newBrightness }),
    })
      .then(() => {
        setLights((prevLights) =>
          prevLights.map((light) =>
            light.id === lightId
              ? { ...light, brightness: newBrightness }
              : light
          )
        );
      })
      .catch((error) => console.error("Error updating brightness:", error));
  };

  return (
    <div className="text-white h-screen">
      <HeaderDetails
        lights={lights}
        onToggle={toggleLight}
        onBrightnessChange={handleBrightnessChange}
      />
      <ModeSelector />
      <Nav />
    </div>
  );
};

export default RoomDetails;
