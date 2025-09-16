export default function TechLeadershipCard({ title, company, location, duration, teamSize, technologies, achievements }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600 mb-4">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <p className="text-blue-600 font-medium">{company}</p>
          <p className="text-sm text-gray-600">{location} • {duration}</p>
        </div>
        <div className="text-right">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            Team: {teamSize}
          </span>
        </div>
      </div>
      
      <div className="mb-4">
        <h4 className="font-semibold text-gray-700 mb-2">Key Technologies:</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, idx) => (
            <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-gray-700 mb-2">Leadership Achievements:</h4>
        <ul className="list-disc list-inside space-y-1">
          {achievements.map((achievement, idx) => (
            <li key={idx} className="text-gray-600 text-sm">{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}