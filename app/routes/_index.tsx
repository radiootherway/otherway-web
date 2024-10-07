import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/remix";
import type { MetaFunction } from "@remix-run/node";
import CalendarWidget from "~/components/widgets/calendar/calendar-widget";
import IconLink from "~/components/widgets/icon-link";
import { Icons } from "~/lib/icons";
import { getCalendarEntries } from "~/lib/services/google-calendar-reader";
import { json, useLoaderData } from "@remix-run/react";
import CalendarEntry from "~/lib/models/calendar-entry";

export const meta: MetaFunction = () => {
  return [
    { title: "Radio:Otherway" },
    {
      name: "description",
      content:
        "Irish based radio station, broadcasting a varied selection of shows with some of the best Irish DJ talent!",
    },
  ];
};

export const loader = async () => {
  const entries = await getCalendarEntries();
  return entries;
};

export default function Index() {
  return (
    <main className="space-y-40 mb-40">
      <div className="relative" id="home">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700" />
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600" />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="relative pt-36 ml-auto">
            <div className="lg:w-2/3 text-center mx-auto">
              <h1 className=" font-bold text-5xl md:text-6xl xl:text-7xl text-foreground">
                Radio <span className="text-primary ">Otherway.</span>
              </h1>
              <p className="mt-8 text-base text-muted-foreground">
                Irish based radio station, broadcasting a varied selection of
                shows with some of the best Irish DJ talent
              </p>
              <div className="mt-16 flex flex-wrap flex-col justify-center gap-y-4 gap-x-6">
                <h2>Join us on....</h2>
                <div className="gap-2 py-2 space-x-4">
                  <IconLink
                    href="https://twitter.com/radiootherway"
                    text="Twitter"
                    icon={<Icons.twitter className="w-4 h-4" />}
                  />
                  <IconLink
                    href="https://www.facebook.com/profile.php?id=61566353473430"
                    text="Facebook"
                    icon={<Icons.facebook className="w-4 h-4" />}
                  />
                  <IconLink
                    href="https://instagram.com/radiootherway"
                    text="Instagram"
                    icon={<Icons.instagram className="w-4 h-4" />}
                  />
                </div>
              </div>
              <div className="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0 flex flex-wrap">
                <div className="sm:mx-auto sm:w-full sm:max-w-md sm:overflow-hidden sm:rounded-lg">
                  <div className="px-4 py-8 sm:px-10">
                    <div>
                      <p className="text-sm font-medium ">Sign in with..</p>
                      <div className="mt-1 ">
                        <div>
                          <SignedOut>
                            <SignInButton />
                          </SignedOut>
                          <SignedIn>
                            <SignOutButton />
                          </SignedIn>
                        </div>
                      </div>
                    </div>
                    <CalendarWidget
                      entries={
                        useLoaderData<
                          typeof loader
                        >() as unknown as CalendarEntry[]
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
