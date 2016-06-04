Create MEAN stack program

Create Angular2 files from angular.io. Created "BasicAngular2" branch to keep these files for future projects.



switch electron/web-
"start": "tsc && concurrently \"npm run tsc:w\" \"electron main.js\" ",
"start": "tsc && concurrently \"npm run tsc:w\" \"npm run lite\" ",

and include/exclude from index <script>var server = require("./server");</script>

and change rest api calls to exclude http:localhost:8000

Notes on sqlite3:
npm install sqlite3 --save
a binary is created at sqlite3/lib/binding/node-v46-winj32-x64/node_sqlite3.node
got the dreaded error - is looking for "electron" in .node name.
before trying the postinstall below, will try electron's solution:
    npm install --save-dev electron-rebuild.
        Error with node-gyp rebuild. Try to install .net framework 2 sdk from microsoft.com. Didn't help.
        updated node-gyp:
            cd to where node.exe is and go to node_modules\npm and run: >npm install -g node-gyp@latest. Did not work.
        Install visual studio 2015 express for desktop. vcbuild is at C:\Program Files (x86)\Microsoft Visual Studio 8\VC\vcpackages. 
        Added that to Path, still did not work.
        Ran npm install -g --msvs_version=2015 node-gyp rebuild. THIS WORKED. IT MUST HAVE NEEDED 2015 SETTING
        Re-run entire electron-rebuild...it ran, will check to see what it did later.
        Reran again using >npm install --msvs_version=2015 electron-rebuild. Seems to have done "something". Then ran in .bin 
        directory> electron-rebuild. Failed.
        Try>set GYP_MSVS_VERSION=2015. then run electron-rebuild in node modules bin dir.
        >.\node_modules\.bin\electron-rebuild.cmd 
        Nothing errored...and, the sqlite3 
        binding with electron path is there!!!
        It worked.
        For next time, see if this sticks (file remains) or if I need to run the "set" each time followed by rebuild.

        


Could be obsolete...
don't forget to re-include
"postinstall": "typings install && npm run rebuild-sqlite3",
    "rebuild-sqlite3": "cd node_modules/sqlite3 && npm run prepublish && node-gyp configure --module_name=node_sqlite3
        --module_path=../lib/binding/electron-v0.37-win32-x64 && node-gyp rebuild --target=0.37.8 --arch=x64 --target_platform=darwin
        --dist-url=https://atom.io/download/atom-shell --module_name=node_sqlite3 --module_path=../lib/binding/electron-v0.37-win32-x64"