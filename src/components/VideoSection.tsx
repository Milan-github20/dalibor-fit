import { motion } from "framer-motion";

// Izbor videa — postavi samo jedan od ova dva:
// • MP4: stavi .mp4 fajl u folder public/ i npr. napiši "/moj-video.mp4"
// • YouTube: stavi ID videa (iz URL-a ...?v=VIDEO_ID), npr. "dQw4w9WgXcQ"
const MP4_VIDEO_SRC = ""; // npr. "/video.mp4"
const YOUTUBE_VIDEO_ID = "_70Q-Xj3rEo"; // zamijeni s ID-om svog videa iz URL-a ...?v=ID

const VideoSection = () => {
  const useMp4 = Boolean(MP4_VIDEO_SRC);
  const useYouTube = Boolean(YOUTUBE_VIDEO_ID);
  const hasVideo = useMp4 || useYouTube;

  if (!hasVideo) return null;

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden border-2 border-border bg-card shadow-xl shadow-black/20">
            <div className="flex items-center gap-2 px-4 py-3 bg-muted/80 border-b border-border">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs text-muted-foreground font-medium ml-2 truncate">
                DA Fitness — video
              </span>
            </div>

            <div className="relative w-full aspect-video bg-muted">
              {useMp4 ? (
                <video
                  src={MP4_VIDEO_SRC}
                  className="absolute inset-0 w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                  poster=""
                >
                  Tvoj preglednik ne podržava video.
                </video>
              ) : (
                <iframe
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0`}
                  title="DA Fitness video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
