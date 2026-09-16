const PageLoader = () => {
  return (
    <div
      className="wave-bouncing-loading-animation"
      role="alert"
      aria-busy="true"
      aria-label="Loading"
    >
      <span>•</span>
      <span>•</span>
      <span>•</span>
    </div>
  );
};

export default PageLoader;
