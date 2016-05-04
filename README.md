

Create MEAN stack program

Create Angular2 files from angular.io. Created "BasicAngular2" branch to keep these files for future projects.


4/21
install foundation apps to play with.
create a basic layout of components.


switch electron/web-
"start": "tsc && concurrently \"npm run tsc:w\" \"electron main.js\" ",
"start": "tsc && concurrently \"npm run tsc:w\" \"npm run lite\" ",

and include/exclude from index <script>var server = require("./server");</script>

and change rest api calls to exclude http:localhost:8000