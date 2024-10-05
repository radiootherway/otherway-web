import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/remix";
import type { MetaFunction } from "@remix-run/node";

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

export default function Index() {
  return (
    <>
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
                <h1 className=" font-bold text-5xl md:text-6xl xl:text-7xl">
                  Radio{" "}
                  <span className="text-primary ">
                    otherway.
                  </span>
                </h1>
                <p className="mt-8  ">
                  Irish based radio station, broadcasting a varied selection of
                  shows with some of the best Irish DJ talent
                </p>
                <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
                  <a
                    href="https://twitter.com/radiootherway"
                    className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                  >
                    <span className="relative text-base font-semibold text-white">
                      Twitter
                    </span>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61566353473430"
                    className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                  >
                    <span className="relative text-base font-semibold text-primary dark:text-white">
                      Facebook
                    </span>
                  </a>
                  <a
                    href="https://instagram.com/radiootherway"
                    className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                  >
                    <span className="relative text-base font-semibold text-primary dark:text-white">
                      Instagram
                    </span>
                  </a>
                </div>
                <div className="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0 flex flex-wrap">
                  <div className="sm:mx-auto sm:w-full sm:max-w-md sm:overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-8 sm:px-10">
                      <div>
                        <p className="text-sm font-medium ">
                          Sign in with..
                        </p>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
