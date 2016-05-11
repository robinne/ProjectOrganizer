

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

don't forget to re-include
"postinstall": "typings install && npm run rebuild-sqlite3",
    "rebuild-sqlite3": "cd node_modules/sqlite3 && npm run prepublish && node-gyp configure --module_name=node_sqlite3 --module_path=../lib/binding/electron-v0.37-win32-x64 && node-gyp rebuild --target=0.37.8 --arch=x64 --target_platform=darwin --dist-url=https://atom.io/download/atom-shell --module_name=node_sqlite3 --module_path=../lib/binding/electron-v0.37-win32-x64"