import { useState } from 'react'
import AudioRecorder from './components/AudioRecorder';
import VideoRecorder from './components/VideoRecorder';
import './App.css'

const App = () => {
  let [recordOption, setRecordOption] = useState("video");

  const toggleRecordOption = (type) => {
    return () => {
        setRecordOption(type);
    };
  };

  return (
    <div>
        <h1>React Media Recorder</h1>
        <div className="button-flex">
            <button onClick={toggleRecordOption("video")}>
              Record Video
            </button>
            <button onClick={toggleRecordOption("audio")}>
              Record Audio
            </button>
        </div>
        <div>
            {recordOption === "video" ? <VideoRecorder /> : <AudioRecorder />}
        </div>
    </div>
);
}

export default App
