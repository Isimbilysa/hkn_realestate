export default function DroneVideo() {
  // Placeholder YouTube embed URL
  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ?si=y_y_y_y_y_y_y_y"; // Rick Astley - Never Gonna Give You Up

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6 text-center">
        <div className="space-y-4 mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Experience Our Properties from Above
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Get a unique perspective with our stunning drone footage of available plots.
          </p>
        </div>
        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-xl">
          <iframe
            src={videoUrl}
            title="Drone Video of Plots"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
