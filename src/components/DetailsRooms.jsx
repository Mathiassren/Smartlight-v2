import React from "react";

// Scene identifiers mapped to names
const scenes = {
  "Arctic aurora": "tKth8rzTX0wYZVq",
  "Savanna sunset": "KLEODdeBkTlmpeO",
  "Spring blossom": "oQVyD43TSv-l7wW",
  "Tropical twilight": "xw56geVAuFVa89j",
  Read: "UjaifIAR-ZpItSO",
  Relax: "dX4QnopLDWI7YR3",
  Concentrate: "swIUmJMR2dL1XmP",
  Energize: "t47Ger4caKmDGfo",
  Bright: "nrnbG-NY8oIdiNL",
  Dimmed: "sA-kmfPhSxbJZvt",
  Nightlight: "eYfssDkk6HiO8dE",
};

const ModeSelector = () => {
  const handleModeChange = async (sceneName) => {
    try {
      const sceneId = scenes[sceneName];
      const groupId = "0"; // The ID of the group of lights you want to control

      const response = await fetch(
        `http://192.168.1.225/api/fLakOeK-QPDDW8Lpom2grdH9ZAr2i1ROdYlJIfLG/groups/${groupId}/action`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ scene: sceneId }),
        }
      );

      if (response.ok) {
        const jsonResponse = await response.json();
        console.log("Scene changed:", jsonResponse);
      } else {
        throw new Error("Failed to change scene");
      }
    } catch (error) {
      console.error("Error changing scene:", error);
    }
  };

  return (
    <div className="flex flex-wrap gap-4 p-4 bg-gray-900">
      {Object.keys(scenes).map((sceneName, index) => (
        <div
          key={index}
          className="w-24 h-24 flex flex-col items-center justify-center rounded-lg text-white text-center cursor-pointer transition-colors bg-gray-700 hover:bg-gray-600"
          onClick={() => handleModeChange(sceneName)}
        >
          <div className="text-3xl mb-2">{sceneName.charAt(0)}</div>
          <div className="text-sm">{sceneName}</div>
        </div>
      ))}
    </div>
  );
};

export default ModeSelector;
