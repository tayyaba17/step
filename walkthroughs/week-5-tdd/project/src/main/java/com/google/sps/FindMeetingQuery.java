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

    for (Event event: events){
        TimeRange before = TimeRange.fromStartEnd(TimeRange.START_OF_DAY, event.getWhen().start(), false);
        TimeRange after = TimeRange.fromStartEnd(event.getWhen().end(), TimeRange.END_OF_DAY, true);
        return Arrays.asList(before, after);

    }
    return Arrays.asList();

  }
}
