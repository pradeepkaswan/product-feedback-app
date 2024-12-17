import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ResponsiveControl } from "@/components/layouts/responsive-control";
import { SiteHeader } from "@/components/sections/site-header";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <ResponsiveControl className="md:mt-14 lg:mt-19.5">
      <div className="flex flex-col lg:flex-row lg:gap-7.5">
        <SiteHeader />
        <main className="flex-1">
          <SuggestionsToolbar />

          <div className="p-6 md:px-0 pt-8">
            <div className="bg-white rounded-[10px] h-[460px] md:h-[600px] px-6  flex flex-col items-center justify-center text-center">
              <img src="/images/illustration-empty.svg" alt="" />
              <p className="text-heading-3 text-primary-300 mt-10">
                There is no feedback yet.
              </p>
              <p className="text-primary-400 text-body-3 font-normal mt-3.5 mb-6">
                Got a suggestion? Found a bug that needs to be squashed? We love
                hearing about new ideas to improve our app.
              </p>
              <Link to="/new" viewTransition>
                <Button>+ Add Feedback</Button>
              </Link>
            </div>

            <div></div>
          </div>
        </main>
      </div>
    </ResponsiveControl>
  );
}

function SuggestionsToolbar() {
  return (
    <div className="h-14 md:h-18 px-6 md:p-4 flex justify-between items-center bg-primary-300 md:rounded-[10px]">
      <div className="flex gap-9.5 items-center">
        <span className="hidden text-white md:flex gap-4 items-center">
          <Icons.suggestions />
          <span className="text-heading-3">6 Suggestions</span>
        </span>
        <span className="text-heading-4 gap-2 flex items-center text-primary-500">
          <span className="font-normal whitespace-nowrap">Sort by :</span>

          <Select defaultValue="most-upvotes">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="most-upvotes">Most Upvotes</SelectItem>
              <SelectSeparator />
              <SelectItem value="least-upvotes">Least Upvotes</SelectItem>
              <SelectSeparator />
              <SelectItem value="most-comments">Most Comments</SelectItem>
              <SelectSeparator />
              <SelectItem value="least-comments">Least Comments</SelectItem>
            </SelectContent>
          </Select>
        </span>
      </div>

      <Link to="/new" viewTransition>
        <Button>+ Add Feedback</Button>
      </Link>
    </div>
  );
}
