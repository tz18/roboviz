Requires:
  * express
  * periodic-function
  * cote
  * socket.io

Usage:
  set PORT=something;
  node sockend.js
    //starts the webserver
  node jointpublisher.js ./bodypart.json
    //(on another computer on the same network if you want)
