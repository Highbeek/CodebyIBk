import React,{useState} from "react";
import YouTube from "react-youtube";
import { motion, AnimatePresence } from "framer-motion";

const YouTubePlayer = ({ videoUrl, onClose }) => {
  const [showYouTubeVideo, setShowYouTubeVideo] = useState(true);

  const handleClose = () => {
    setShowYouTubeVideo(false);
    onClose();
  };

  const opts = {
    playerVars: {
      modestbranding: 1,
      controls: 1,
      showinfo: 0,
      rel: 0, 
      iv_load_policy: 3, 
    },
  };

  const onReady = (event) => {
    event.target.playVideo();
  };

  const onEnd = (event) => {
    event.target.playVideo();
  };

  return (
    <AnimatePresence>
      {showYouTubeVideo && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-50"
          onClick={handleClose}
        >
          
          <div className="relative w-[80%] h-[80%] max-w-[1280px] max-h-[720px] m-4">
            <div className="aspect-w-16 aspect-h-9 w-full h-full relative">
              <YouTube
                videoId={videoUrl.split("/").pop()}
                opts={opts}
                onReady={onReady}
                onEnd={onEnd} 
              />
             
              <div
                className="h-[800px]"
                style={{
                  zIndex: 1,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default YouTubePlayer;
