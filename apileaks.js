const apiUrl = "https://spectra.wallarm.tools/api/v1";

// Google API key
const googleApiKey = "AIzaSyA7v-jP3tZKc9JxPQfFjLTuV0ZO74odEXM";

// JWT Token
const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

// Fake password example
const dbPassword = "P@ssw0rd123";

// Making a sample API request (just as an example, not a real request)
function callApi() {
    console.log("Calling API at " + apiUrl);
    console.log("Using Google API Key: " + googleApiKey);
    console.log("JWT Token: " + jwtToken);
}

callApi();
