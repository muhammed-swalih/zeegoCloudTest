import React, { useEffect } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useLocation } from "react-router-dom";
function ZegoLiveRoom() {
  const location = useLocation();
  const roomDetails = location ? location.state : "nothing";
  const { roomId } = roomDetails;

  useEffect(() => {
    console.log(roomId);
  }, []);
  let myMeeting = async (element) => {
    const appID = 571779510;
    const serverSecret = "80633517828ef10bfa52b88c322e6d5f";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      "test User"
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,

      screenSharingConfig: {
        resolution: "HD", // You can set this to 'SD' for standard definition
        width: 1920, // Width of the screen sharing area
        height: 1080, // Height of the screen sharing area
        frameRate: 30, // Frame rate of the screen sharing
        maxBitRate: 5000, // Maximum bit rate for screen sharing
      },
      showScreenSharingButton: true,

      whiteboardConfig: {
        showCreateAndCloseButton: true, // Whether to display the button that is used to create/turn off the whiteboard. Displayed by default.
      },
      showRoomTimer: true,

      branding: {
        logoURL:
          "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708214400&semt=ais", // The branding LOGO URL.
      },

      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
    });
  };

  return (
    <div
      className="myCallContainer w-full h-screen md:w-[100vw] md:h-[100vh]"
      ref={myMeeting}
    ></div>
  );
}

export default ZegoLiveRoom;
