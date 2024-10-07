import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

import { Icons } from "~/lib/icons";
import CalendarEntry from "~/lib/models/calendar-entry";

type CalendarWidgetProps = {
  entries: CalendarEntry[];
};
const CalendarWidget: React.FC<CalendarWidgetProps> = ({ entries }) => {
  return (
    <Card className="text-left w-full">
      <CardHeader>
        <CardTitle className="text-md">Upcoming shows..</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        {entries ? (
          entries.map((entry) => (
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/avatars/03.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="px-4 space-y-1">
                  <p className="text-sm font-medium leading-none line-clamp-1">
                    {entry.title}
                  </p>
                  <p className="text-sm text-muted-foreground pt-1">
                    {entry.date}
                  </p>
                </div>
              </div>
              <Button variant="outline" size="icon" title="Remind me!">
                <Icons.calendar className="w-4 h-4" />
              </Button>
            </div>
          ))
        ) : (
          <div>Waiting for calendar events</div>
        )}
      </CardContent>
    </Card>
  );
};

export default CalendarWidget;
