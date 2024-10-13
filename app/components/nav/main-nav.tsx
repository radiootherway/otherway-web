import { useLocation } from "@remix-run/react";
import { siteConfig } from "~/config/site";
import { Icons } from "~/lib/icons";
import { cn } from "~/lib/utils";

const MainNav = () => {
  const location = useLocation();
  return (
    <div className="mr-4 hidden md:flex">
      <a href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold lg:inline-block">
          {siteConfig.title}
        </span>
      </a>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <a
          href="/docs"
          className={cn(
            "transition-colors hover:text-foreground/80",
            location.pathname === "/docs"
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Docs
        </a>
      </nav>
    </div>
  );
};
export default MainNav;