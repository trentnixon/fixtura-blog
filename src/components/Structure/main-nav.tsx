import Image from "next/image";

export const MainNav = () => {
  return (
    <nav className="relative z-20 flex shrink-0 items-center space-x-2 bg-layer-2 py-4 px-4 sm:px-6">
      <a href="#">
        {/* Logo */}
        <div className="h-7 text-heading">
          <Image
            src="/Images/FixturaLogoLarge.png"
            width={(668/11)}
            height={(418/11)}
            alt="Fixtura"
          />
        </div>
      </a>
      {/* <div className="flex flex-1 space-x-1.5 px-4">
        <a
          href="#"
          className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-secondary bg-secondary px-4 py-2.5 text-base font-semibold text-white shadow-sm hover:border-secondary-accent hover:bg-secondary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-secondary disabled:hover:bg-secondary disabled:hover:text-white dark:focus:ring-white/80"
        >
          Fixtura
        </a>
        <a
          href="#"
          className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-transparent bg-transparent px-4 py-2.5 text-base font-semibold text-text hover:bg-heading/5 hover:text-heading focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text"
        >
          Link
        </a>
        <a
          href="#"
          className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-transparent bg-transparent px-4 py-2.5 text-base font-semibold text-text hover:bg-heading/5 hover:text-heading focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text"
        >
          Link
        </a>
        <a
          href="#"
          className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-transparent bg-transparent px-4 py-2.5 text-base font-semibold text-text hover:bg-heading/5 hover:text-heading focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text"
        >
          Link
        </a>
      </div> */}
      {/* <div className="flex items-center space-x-2">right</div> */}
    </nav>
  );
};
