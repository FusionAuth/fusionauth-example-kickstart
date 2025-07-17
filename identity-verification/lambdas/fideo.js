// tag::failthreshold
const FAIL_THRESHOLD = 0.6;
// end::failthreshold

// tag::validate
function validate(result, user, registration, formContext) {
  try {

    var fideoAPIKey = getAPIKey();

    if (!fideoAPIKey) {
      throw new Error("No API Key available");
    }

    var emails = [ user.email ];
    var firstName  = user.firstName;

    var response = fetch("https://api.fideo.ai/verify", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + fideoAPIKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        emails: emails,
        name: { given : firstName } 
      })
    });
    
    var registrationSucceed = false;
    
    if (response.status == 200) {
      try {
        var responseData = JSON.parse(response.body);
        var risk = responseData.risk;
        if (risk && risk < FAIL_THRESHOLD) {
          registrationSucceed = true;
        }
      } catch (e) {
        console.log(e);
      }
    }
    
    if (!registrationSucceed) {
      result.errors.generalErrors = [{
        // with the "invalid" error code that we have defined in the theme
        code: '[invalid]user.identityverification.fail'
      }];
    }
  } catch (error) {
    // default to accepting registrations if Fideo is down
    console.log("General error:", error);
  }
}
// end::validate

// tag::getapikey
// pull API key off of application.data field using a limited API key
function getAPIKey() {
  var response = fetch("http://localhost:9012/api/application/e9fdb985-9173-4e01-9d73-ac2d60d1dc8e", {
    method: "GET",
    headers: {
      "Authorization": "AZG3wqG2fD8ZCJmyPUAgAZG3wqG2fD8ZCJmyPUAg-not-for-prod"
    }
  });

  var fideoAPIKey = "";
  if (response.status === 200) {
    // a successful response as defined in the Application API
    var jsonResponse = JSON.parse(response.body);
    var application = jsonResponse.application;
    var data = application.data;
    fideoAPIKey = data.fideoAPIKey;
  }
  return fideoAPIKey;
}
// end::getapikey

// tag::startofregistration
function trackRegistrationStarted(email) {
  var response = fetch("http://example.com/trackregistrationstarted", {
    method: "POST",
    headers: {
      "Authorization": "APIKEY",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email
    })
  });

  if (response.status !== 200) {
    console.log("error tracking registration: " + response.status);
  }
}
// end::startofregistration
