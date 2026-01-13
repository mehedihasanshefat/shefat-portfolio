import Link from "next/link";

function TextLogo() {
  return (
    <Link
      href="/"
      className="hidden group md:flex items-center gap-0.5 sm:gap-1 text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-tight"
      aria-label="Home - Shefat"
    >
      {/* Opening bracket with enhanced hover */}
      <span
        className="text-cyan-600 dark:text-cyan-400 
                   transition-all duration-300 
                   group-hover:text-cyan-500 dark:group-hover:text-cyan-300
                   group-hover:scale-110 group-hover:-translate-x-0.5"
      >
        &lt;
      </span>

      {/* Gradient name with improved contrast */}
      <span
        className="bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-900 
                   dark:from-neutral-200 dark:via-neutral-100 dark:to-neutral-50
                   bg-clip-text text-transparent 
                   bg-size-200 bg-pos-0
                   transition-all duration-500 
                   group-hover:bg-pos-100
                   "
      >
        Shefat
      </span>

      {/* Closing bracket with enhanced hover */}
      <span
        className="text-purple-600 dark:text-purple-400 
                   transition-all duration-300 
                   group-hover:text-purple-500 dark:group-hover:text-purple-300
                   group-hover:scale-110 group-hover:translate-x-0.5"
      >
        /&gt;
      </span>
    </Link>
  );
}

export default TextLogo;
