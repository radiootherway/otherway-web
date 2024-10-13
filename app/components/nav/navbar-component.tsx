import { buttonVariants } from "~/components/ui/button";
import { siteConfig } from "~/config/site";
import { Icons } from "~/lib/icons";
import { cn } from "~/lib/utils";

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        {/* <MainNav />
        <MobileNav /> */}

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            Command Menu
            {/* <CommandMenu /> */}
          </div>
          <nav className="flex items-center">
            <a href={siteConfig.links.instagram} target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "h-8 w-8 px-0"
                )}
              >
                <Icons.gitHub className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </div>
            </a>
            <a href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "h-8 w-8 px-0"
                )}
              >
                <Icons.twitter className="h-3 w-3 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </a>
            Mode Toggle
            {/* <ModeToggle /> */}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
