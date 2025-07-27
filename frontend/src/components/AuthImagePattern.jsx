const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        
        <div className="space-y-4 mb-8">
  {[...Array(5)].map((_, i) => (
    <div
      key={i}
      className={`max-w-sm px-4 py-2 rounded-lg bg-primary/10 ${
        i % 2 === 0 ? "ml-auto bg-primary/20" : "mr-auto"
      } animate-pulse`}
    >
      <div className="h-3 w-24 bg-primary/20 rounded mb-1"></div>
      <div className="h-3 w-40 bg-primary/10 rounded"></div>
    </div>
  ))}
</div>


        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;