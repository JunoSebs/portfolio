export default function CanadianProfile() {
  return (
    <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-lg border border-red-200 mb-6">
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-3">🇨🇦</span>
        <h2 className="text-xl font-bold text-red-800">Canadian Market Ready</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold text-red-700 mb-2">Work Authorization</h3>
          <ul className="text-sm text-red-600 space-y-1">
            <li>✅ Permanent Resident of Canada</li>
            <li>✅ No visa sponsorship required</li>
            <li>✅ Available for immediate start</li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold text-red-700 mb-2">Location Flexibility</h3>
          <ul className="text-sm text-red-600 space-y-1">
            <li>📍 Currently in Toronto, ON</li>
            <li>🚀 Open to relocation across Canada</li>
            <li>💻 Remote/Hybrid work ready</li>
          </ul>
        </div>
      </div>

      <div className="mt-4 p-3 bg-white rounded border border-red-200">
        <p className="text-sm text-red-700">
          <strong>Target Markets:</strong> Toronto, Vancouver, Montreal, Calgary, Ottawa, Waterloo Region
        </p>
      </div>
    </div>
  );
}