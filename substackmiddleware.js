function logOriginalUrl(req, res, next) {
  console.log("Request URL:", req.originalUrl);
  next();
}

function logMethod(req, res, next) {
  console.log("Request Type:", req.method);
  next();
}

const logStuff = [logOriginalUrl, logMethod];
app.get("/user/:id", logStuff, (req, res, next) => {
  res.send("User Info");
});
