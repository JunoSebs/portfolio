export default function ExperienceCard({ title, company, location, date, teamSize, budget, details, technologies }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            <p className="text-blue-600 font-medium">{company}</p>
            <p className="text-sm text-gray-600">{location} • {date}</p>
          </div>
          {(teamSize || budget) && (
            <div className="text-right text-sm">
              {teamSize && <p className="text-gray-600">Team: {teamSize}</p>}
              {budget && <p className="text-gray-600">Budget: {budget}</p>}
            </div>
          )}
        </div>
        
        {technologies && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, idx) => (
                <span key={idx} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        <ul className="list-disc list-inside space-y-2">
          {details.map((point, idx) => (
            <li key={idx} className="text-gray-700 leading-relaxed">{point}</li>
          ))}
        </ul>
      </div>
    );
  }
  