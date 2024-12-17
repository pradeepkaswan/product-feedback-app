import { useState } from "react";
import { Link } from "@tanstack/react-router";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icons } from "@/components/ui/icons";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="md:grid md:grid-cols-3 lg:flex flex-col gap-2.5 lg:gap-6 md:mb-10 lg:w-[255px]">
      <Sheet>
        <div className="flex flex-col gap-2.5 lg:gap-6">
          <div
            style={{
              background:
                "radial-gradient(166.82% 166.82% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%)",
            }}
            className="h-18 w-full flex text-white justify-between items-center md:items-end md:h-full lg:h-[137px] px-6 md:p-6 md:rounded-[10px]"
          >
            <div className="flex flex-col">
              <span className="text-body-2 md:text-heading-2 font-bold">
                Frontend Mentor
              </span>
              <span className="text-body-3 md:text-body-2 font-medium">
                Feedback Board
              </span>
            </div>

            <div
              onClick={() => setOpen(!open)}
              className="flex justify-between cursor-pointer md:hidden items-center"
            >
              {open ? (
                <SheetClose>
                  <Icons.close />
                </SheetClose>
              ) : (
                <SheetTrigger asChild>
                  <Icons.hamburger />
                </SheetTrigger>
              )}
            </div>
          </div>

          <UserProfileCard />
        </div>

        <CategoryFilter />

        <RoadmapOverview />

        <SheetContent className="space-y-4">
          <UserProfileCard />
          <CategoryFilter />
          <RoadmapOverview />
        </SheetContent>
      </Sheet>
    </header>
  );
}

function UserProfileCard() {
  return (
    <div className="hidden justify-between md:flex bg-white items-center p-4 rounded-[10px]">
      <div className="flex gap-4 ">
        <Avatar>
          <AvatarImage src="https://utfs.io/f/SaHISTQGLky0Qsyu6otoDrF5TtWu8zwl0eKsYafi43qMHkGg" />
          <AvatarFallback>ZK</AvatarFallback>
        </Avatar>

        <div className="flex flex-col text-heading-4">
          <p className=" text-primary-300">Zena Kelley</p>
          <span className=" font-normal text-primary-400">@velvetround</span>
        </div>
      </div>

      <button>
        <Icons.logout className="text-primary-200 size-5 cursor-pointer hover:opacity-80" />
      </button>
    </div>
  );
}

function CategoryFilter() {
  return (
    <div className="hidden md:flex text-body-3 p-6 bg-white rounded-[10px]">
      <div className="flex flex-wrap space-y-1.5 gap-2">
        <div className="bg-primary-200 h-7.5 flex items-center rounded-[10px] text-white px-4">
          All
        </div>
        <div className="bg-primary-500 h-7.5 flex items-center rounded-[10px] text-primary-200 px-4">
          UI
        </div>
        <div className="bg-primary-500 h-7.5 flex items-center rounded-[10px] text-primary-200 px-4">
          UX
        </div>
        <div className="bg-primary-500 h-7.5 flex items-center rounded-[10px] text-primary-200 px-4">
          Enhancement
        </div>
        <div className="bg-primary-500 h-7.5 flex items-center rounded-[10px] text-primary-200 px-4">
          Bug
        </div>
        <div className="bg-primary-500 h-7.5 flex items-center rounded-[10px] text-primary-200 px-4">
          Feature
        </div>
      </div>
    </div>
  );
}

function RoadmapOverview() {
  return (
    <div className="hidden md:flex flex-col gap-6 p-6 bg-white rounded-[10px]">
      <div className="flex w-full items-center justify-between">
        <h3 className="text-heading-3 text-primary-300">Roadmap</h3>
        <Link
          viewTransition
          to="/roadmap"
          className="text-primary-200 transition-colors hover:text-[#8397F8] text-body-3 underline"
        >
          View
        </Link>
      </div>

      <div className="text-body-1 flex flex-col gap-2 text-primary-400">
        <div className="flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <div className="bg-orange size-2 rounded-full" />
            <span>Planned</span>
          </div>
          <span className="font-bold">0</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <div className="bg-primary-100 size-2 rounded-full" />
            <span>In-Progress</span>
          </div>
          <span className="font-bold">0</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <div className="bg-blue size-2 rounded-full" />
            <span>Live</span>
          </div>
          <span className="font-bold">0</span>
        </div>
      </div>
    </div>
  );
}
