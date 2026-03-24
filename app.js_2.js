import React, { useState } from 'react';
import { ShieldAlert, ShieldCheck, AlertTriangle, Phone } from 'lucide-react';

function App() {
  const [text, setText] = useState('');
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeMessage = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://127.0.0.1:8000/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, phone_number: phone })
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      alert("Backend not running!");
    }
    setLoading(false);
  };

  const getRiskColor = (risk) => {
    if (risk === 'HIGH') return 'bg-red-100 border-red-500 text-red-700';
    if (risk === 'MEDIUM') return 'bg-yellow-100 border-yellow-500 text-yellow-700';
    return 'bg-green-100 border-green-500 text-green-700';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center gap-3 mb-8">
          <ShieldAlert className="text-blue-600" size={40} />
          <h1 className="text-3xl font-bold text-gray-800">AI Finance Guard</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Phone size={20}/> M-Pesa Transaction Simulation
            </h2>
            <div className="space-y-4">
              <input 
                type="text" placeholder="Recipient Phone"
                className="w-full p-3 border rounded-lg"
                value={phone} onChange={(e) => setPhone(e.target.value)}
              />
              <input 
                type="number" placeholder="Amount (KES)"
                className="w-full p-3 border rounded-lg"
                value={amount} onChange={(e) => setAmount(e.target.value)}
              />
              <textarea 
                placeholder="Paste message..."
                className="w-full p-3 border rounded-lg h-32"
                value={text} onChange={(e) => setText(e.target.value)}
              />
              <button 
                onClick={analyzeMessage}
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 rounded-lg"
              >
                {loading ? "Analyzing..." : "Verify Transaction"}
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {result ? (
              <div className={`p-6 rounded-xl border-l-8 ${getRiskColor(result.risk)}`}>
                <h3>RISK: {result.risk}</h3>
                <p>{result.reason}</p>
                <p>Confidence: {result.confidence}</p>
                <p>AI: {result.ai_analysis}</p>
                {result.risk === 'HIGH' && (
                  <div>STOP: DO NOT SEND KES {amount}</div>
                )}
              </div>
            ) : (
              <div>No analysis yet.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
