// import React from "react";
// import "./HeroSection.css";
// import "../App.css";

// function HeroSection() {
//   return (
//     <div id="player-overlay">
//       <video src="/Videos/JaggeryNew.mp4" autoPlay loop muted />
//     </div>
//   );
// }

// export default HeroSection;



import React from 'react';

class HeroSection extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    this.updateVideoSize();
    window.addEventListener('resize', this.updateVideoSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateVideoSize);
  }

  updateVideoSize = () => {
    const { clientWidth } = document.documentElement;
    const video = this.videoRef.current;
    const aspectRatio = 24 / 24; // Change this to your desired aspect ratio
  
    const videoWidth = clientWidth >= 600 ? 600 : clientWidth; // Set maximum width to 600px, adjust as needed
    const videoHeight = videoWidth / aspectRatio;
  
    video.style.width = '100%';
    video.style.height = `${videoHeight}px`;
  };

  render() {
    return (
      <video ref={this.videoRef} src="/Videos/JaggeryNew.mp4" autoPlay loop muted >
        {/* Add your video source here */}
        {/* <video src="/Videos/JaggeryNew.mp4" autoPlay loop muted /> */}
      </video>
    );
  }
}

export default HeroSection;

