import { TextField, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateMeetingCode() {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");

  const handleSubmit = () => {
    navigate("/liveRoom", { state: { roomId: roomId } });
  };

  useEffect(() => {
    console.log(roomId);
  }, []);
  return (
    <div className="px-4 py-4 w-full h-screen">
      <div className=" w-full h-full flex items-center justify-center">
        <div className=" flex flex-col gap-2">
          <TextField
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            label="enter your meeting code"
          />
          <Button onClick={handleSubmit} variant="contained">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CreateMeetingCode;
