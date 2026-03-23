import React from 'react';

const Features = () => {
  const points = [
    { title: "Soil Secret", desc: "The perfect PH balance for spicy ginger.", icon: "🧪" },
    { title: "Pest Shield", desc: "Natural ways to keep your crops safe.", icon: "🛡️" },
    { title: "Harvesting", desc: "When to dig for maximum weight.", icon: "⚖️" }
  ];

  return (
    <div className="py-12 max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
      {points.map((p, i) => (
        <div key={i} className="p-8 bg-white/60 backdrop-blur-md rounded-3xl border border-white shadow-sm hover:shadow-md transition">
          <div className="text-4xl mb-4">{p.icon}</div>
          <h4 className="text-xl font-bold text-slate-800 mb-2">{p.title}</h4>
          <p className="text-slate-500">{p.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;