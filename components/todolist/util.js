import { useEffect } from "react";
import { gapi } from "gapi-script";

const utilGoogle = () => {
  const CLIENT_ID =
    "863727614400-ncmg6aoq5qkmme3nr5as964d7kon77iu.apps.googleusercontent.com";
  const API_KEY = "AIzaSyBq6JHLqHVm6sdfB-F-zxWINeZCF0hrmrw";
  const SCOPE = "https://www.googleapis.com/auth/calendar";

  const login = (events, successCallback, failedCallback) => {
    const authParams = {
      response_type: "permission", // Retrieves an access token only
      client_id: CLIENT_ID, // Client ID from Cloud Console
      immediate: false, // For the demo, force the auth window every time
      scope: [
        "profile",
        "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events",
      ], // Array of scopes
    };

    gapi.load("client:auth2", () => {
      gapi.auth2.init({ client_id: CLIENT_ID });
      gapi.auth.authorize(authParams, (res) => {
        gapi.client.setApiKey(API_KEY);
        gapi.client
          .load(
            "https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest"
          )
          .then(
            () => {
              const batch = gapi.client.newBatch();
              events.map((r, j) => {
                batch.add(
                  gapi.client.calendar.events.insert({
                    calendarId: "primary",
                    resource: events[j],
                  })
                );
              });
              batch.then(() => {
                console.log("all jobs now dynamically done!!!");
                successCallback();
              });
            },
            (err) => {
              console.log("auth failed", err);
              failedCallback();
            }
          );
      });
    });
  };
  return { login };
};

export { utilGoogle };
