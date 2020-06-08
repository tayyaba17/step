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

package com.google.sps.servlets;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.FetchOptions;
import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.SortDirection;
import com.google.gson.Gson;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Servlet that returns some example content. TODO: modify this file to handle comments data */
@WebServlet("/num-comments")
public class NumCommentsServlet extends HttpServlet {
    private String comNum =  "5";
@Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

    comNum = request.getParameter("number-comments");
      
    int comLimit = Integer.parseInt(comNum);

    Query query = new Query("COMMENT").addSort("timestamp", SortDirection.DESCENDING);

    DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
    PreparedQuery results = datastore.prepare(query);

    ArrayList messages = new ArrayList<>();
    for (Entity entity : results.asList(FetchOptions.Builder.withLimit(comLimit))){
        long id = entity.getKey().getId();
        String msg = (String) entity.getProperty("COMMENT");
        messages.add(msg);
    }
    String json = convertToJsonUsingGson(messages);

    response.setContentType("text/html;");
    response.getWriter().println(json);

    response.sendRedirect("/data?number-comments=" + comNum);
  }

   private String convertToJsonUsingGson(ArrayList array) {
    Gson gson = new Gson();
    String json = gson.toJson(array);
    return json;
  }
 }