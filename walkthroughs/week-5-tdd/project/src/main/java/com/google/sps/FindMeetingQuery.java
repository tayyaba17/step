// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
import java.lang.String;

public final class FindMeetingQuery {

  public Collection<TimeRange> query(Collection<Event> events, MeetingRequest request) {
    Collection<String> attendees = request.getAttendees();

    if (attendees.isEmpty()){
      return Arrays.asList(TimeRange.WHOLE_DAY);
    }

    if (request.getDuration() >= (TimeRange.WHOLE_DAY.duration() + 1)){
      return Arrays.asList();
    }

    Collection<Event> eventTotal = new ArrayList<>();
    for (Event event: events){
        eventTotal.add(new Event(event.getTitle(), TimeRange.fromStartDuration(event.getWhen().start(), event.getWhen().duration()),
           attendees));
    }

    Collection<TimeRange> availability = new ArrayList<>();
    int startTime = TimeRange.START_OF_DAY;
    int endTime = TimeRange.END_OF_DAY;
    for (Event event: eventTotal){
      TimeRange before = TimeRange.fromStartEnd(startTime, event.getWhen().start(), false);
      availability.add(before);
      startTime = event.getWhen().end(); 
    }
    availability.add(TimeRange.fromStartEnd(startTime, TimeRange.END_OF_DAY, true));
    return availability;

  }
}
