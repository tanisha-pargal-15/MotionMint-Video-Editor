export default function Home() {
  return (
    <main className="bg-background text-textPrimary min-h-screen flex flex-col items-center justify-center p-10">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
        MotionMint Video Editor
        </h1>
        <p className="text-textSecondary text-lg max-w-xl mx-auto mb-8">
          A fast, free, and private way to edit your videos directly in the browser. No downloads. No watermarks.
        </p>
        <a
          href="/editor"
          className="bg-button hover:bg-buttonHover text-white font-semibold py-3 px-6 rounded-lg transition"
        >
          🎬 Launch Editor
        </a>
      </div>

      {/* Footer / Credit */}
      <p className="mt-16 text-sm text-textSecondary">
        Created by <a href="https://github.com/tanisha-pargal-15" target="_blank" className="underline hover:text-accentAqua">Tanisha Pargal</a>
      </p>
    </main>
  );
}
