function ProjectPage({ isOpen, onClose, src, clip, name, description, link }) {
  if (!isOpen) return null;

  return (
    <div 
      className="z-50 fixed inset-0 flex items-center justify-center bg-black/50"
      onClick={(e) => {
        // Close only if clicking the backdrop
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative bg-[#19191b] h-auto max-w-[90%] md:w-[750px] text-white overflow-hidden rounded-lg shadow-lg">
        <div className="relative z-10 p-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="mt-2 text-sm">{description}</p>
          </div>

          {clip && (
            <div className="mt-4">
              <video className="w-full rounded" src={clip} autoPlay loop muted></video>
            </div>
          )}

          {link && (
            <div className="mt-6 text-center">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 text-sm font-medium text-black bg-white rounded hover:bg-gray-200"
              >
                View Project
              </a>
            </div>
          )}

          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 text-xl font-bold w-8 h-8 flex items-center justify-center"
            aria-label="Close"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;