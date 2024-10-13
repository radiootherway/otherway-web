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
          {siteConfig.name}
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
        <a
          href="/docs/components"
          className={cn(
            "transition-colors hover:text-foreground/80",
            location.pathname?.startsWith("/docs/components") &&
              !location.pathname?.startsWith("/docs/component/chart")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Components
        </a>
        <a
          href="/blocks"
          className={cn(
            "transition-colors hover:text-foreground/80",
            location.pathname?.startsWith("/blocks")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Blocks
        </a>
        <a
          href="/charts"
          className={cn(
            "transition-colors hover:text-foreground/80",
            location.pathname?.startsWith("/docs/component/chart") ||
              location.pathname?.startsWith("/charts")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Charts
        </a>
        <a
          href="/themes"
          className={cn(
            "transition-colors hover:text-foreground/80",
            location.pathname?.startsWith("/themes")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Themes
        </a>
        <a
          href="/examples"
          className={cn(
            "transition-colors hover:text-foreground/80",
            location.pathname?.startsWith("/examples")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Examples
        </a>
        <a
          href="/colors"
          className={cn(
            "transition-colors hover:text-foreground/80",
            location.pathname?.startsWith("/colors")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Colors
        </a>
      </nav>
    </div>
  );
};
export default MainNav;
