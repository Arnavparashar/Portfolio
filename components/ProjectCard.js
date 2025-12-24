export default function ProjectCard({ project }) {
  return (
    <div
      className="
        project-card
        group
        flex
        flex-col
        h-full
        transition-transform
        duration-300
        ease-out
        hover:-translate-y-1.5
      "
    >
      {/* Icon / Preview */}
      <div
        className="
          h-40
          w-full
          rounded-xl
          flex
          items-center
          justify-center
          bg-[#050f1f]
          border
          border-white/5
        "
      >
        <div className="project-icon">
          <img
            src={project.icon}
            alt={`${project.title} icon`}
            className="
              h-11
              w-11
              object-contain
              grayscale
              opacity-80
              transition-all
              duration-300
              ease-out
              group-hover:grayscale-0
              group-hover:opacity-100
              group-hover:scale-105
            "
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow px-1">
        <h4 className="mt-4 font-semibold text-white tracking-tight">
          {project.title}
        </h4>

        <p className="text-sm text-muted mt-2 leading-relaxed">
          {project.description}
        </p>

        {project.impact && (
          <p className="text-sm mt-3 text-white/90 leading-relaxed">
            <span className="font-medium text-white">Impact:</span>{" "}
            {project.impact}
          </p>
        )}

        {/* Actions — FIXED ALIGNMENT */}
        <div className="mt-auto pt-6 flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              View Code
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
