import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResponsiveControl } from "@/components/layouts/responsive-control";

export const Route = createFileRoute("/roadmap")({
  component: RoadmapComponent,
});

function RoadmapComponent() {
  return (
    <ResponsiveControl>
      <div className="h-[100px] md:rounded-[10px] md:mt-14 lg:mt-19.5 px-6 flex items-center justify-between bg-primary-300 w-full">
        <div className="flex flex-col gap-1">
          <Link to=".." viewTransition>
            <Button
              variant="ghost"
              withArrow
              className="-mx-6 h-5 text-[0.8125rem] px-6 leading-[1.1875rem]"
            >
              Go Back
            </Button>
          </Link>
          <h3 className="text-heading-3 text-white">Roadmap</h3>
        </div>

        <Link to="/new" viewTransition>
          <Button>+ Add Feedback</Button>
        </Link>
      </div>

      <div className="hidden md:grid grid-cols-3 mt-8"></div>

      <Tabs defaultValue="account" className="w-full md:hidden">
        <TabsList>
          <TabsTrigger value="planned">Planned</TabsTrigger>
          <TabsTrigger value="in-progress">In-Progress</TabsTrigger>
          <TabsTrigger value="live">Live</TabsTrigger>
        </TabsList>
        <TabsContent value="planned">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="in-progress">
          Change your password here.
        </TabsContent>
        <TabsContent value="live">Change your password here.</TabsContent>
      </Tabs>
    </ResponsiveControl>
  );
}
