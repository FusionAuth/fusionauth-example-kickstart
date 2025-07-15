// tag::failthreshold
const FAIL_THRESHOLD = 0.6;
// end::failthreshold

// tag::validate
function validate(result, user, registration, formContext) {
  try {

    const fideoAPIKey = getAPIKey();

    if (!fideoAPIKey) {
      throw new Error("No API Key available");
    }

    const emails = [ user.email ];
    const firstName  = user.firstName;

    const response = fetch("https://api.fideo.ai/verify", {
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
    
    let registrationSucceed = false;
    
    if (response.status == 200) {
      try {
        const responseData = JSON.parse(response.body);
        const risk = responseData.risk;
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
  const response = fetch("http://localhost:9012/api/application/e9fdb985-9173-4e01-9d73-ac2d60d1dc8e", {
    method: "GET",
    headers: {
      "Authorization": "AZG3wqG2fD8ZCJmyPUAgAZG3wqG2fD8ZCJmyPUAg-not-for-prod"
    }
  });

  let fideoAPIKey = "";
  if (response.status === 200) {
    // a successful response as defined in the Application API
    const jsonResponse = JSON.parse(response.body);
    const application = jsonResponse.application;
    const data = application.data;
    fideoAPIKey = data.fideoAPIKey;
  }
  return fideoAPIKey;
}
// end::getapikey
