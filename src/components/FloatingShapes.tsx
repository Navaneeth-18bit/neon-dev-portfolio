const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Cyan blob */}
      <div 
        className="floating-shape animate-float w-72 h-72 bg-neon-cyan/30 top-20 right-20"
      />
      
      {/* Magenta blob */}
      <div 
        className="floating-shape animate-float-delayed w-96 h-96 bg-neon-magenta/20 top-1/3 -right-20"
      />
      
      {/* Purple blob */}
      <div 
        className="floating-shape animate-float-slow w-80 h-80 bg-neon-purple/25 bottom-40 left-10"
      />
      
      {/* Small accent blob */}
      <div 
        className="floating-shape animate-float w-40 h-40 bg-primary/30 top-2/3 right-1/3"
      />

      {/* Abstract line decorations */}
      <svg 
        className="absolute top-10 right-10 w-80 h-80 opacity-40" 
        viewBox="0 0 200 200"
      >
        <circle 
          cx="100" 
          cy="100" 
          r="80" 
          className="line-decoration"
          strokeDasharray="10 5"
        />
        <circle 
          cx="100" 
          cy="100" 
          r="60" 
          stroke="hsl(320, 100%, 50%)"
          strokeWidth="1"
          fill="none"
          opacity="0.4"
        />
        <line 
          x1="100" 
          y1="20" 
          x2="180" 
          y2="100" 
          className="line-decoration"
        />
        <line 
          x1="100" 
          y1="20" 
          x2="20" 
          y2="100" 
          stroke="hsl(270, 95%, 65%)"
          strokeWidth="1"
          opacity="0.3"
        />
      </svg>

      {/* Curved line */}
      <svg 
        className="absolute top-1/4 right-40 w-60 h-60 opacity-30" 
        viewBox="0 0 100 100"
      >
        <path 
          d="M10,50 Q50,10 90,50 T170,50" 
          stroke="hsl(185, 100%, 50%)"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default FloatingShapes;
