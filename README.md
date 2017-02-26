```
$ git clean -dfx
$ npm install
npm WARN deprecated phosphor@0.7.1: update to @phosphor/ namespace packages
npm WARN prefer global marked@0.3.6 should be installed with -g

> fsevents@1.1.1 install /Users/dallan/Documents/Repos/tstest/node_modules/fsevents
> node install

[fsevents] Success: "/Users/dallan/Documents/Repos/tstest/node_modules/fsevents/lib/binding/Release/node-v48-darwin-x64/fse.node" already installed
Pass --update-binary to reinstall or --build-from-source to recompile

> jupyterlab@0.16.2 postinstall /Users/dallan/Documents/Repos/tstest/node_modules/jupyterlab
> node scripts/dedupe.js


> tstest@0.1.0 prepublish /Users/dallan/Documents/Repos/tstest
> npm run build


> tstest@0.1.0 build /Users/dallan/Documents/Repos/tstest
> npm run build:src && npm run build:extension


> tstest@0.1.0 build:src /Users/dallan/Documents/Repos/tstest
> tsc --project src && node scripts/copyfiles.js

src/plugin.ts(27,23): error TS2345: Argument of type '{ commands: CommandRegistry; }' is not assignable to parameter of type 'IOptions'.
  Types of property 'commands' are incompatible.
    Type 'CommandRegistry' is not assignable to type 'CommandRegistry'. Two different types with this name exist, but they are unrelated.
      Types of property 'commandChanged' are incompatible.
        Type 'ISignal<CommandRegistry, ICommandChangedArgs>' is not assignable to type 'ISignal<CommandRegistry, ICommandChangedArgs>'. Two different types with this name exist, but they are unrelated.
          Types of property 'connect' are incompatible.
            Type '(slot: Slot<CommandRegistry, ICommandChangedArgs>, thisArg?: any) => boolean' is not assignable to type '(slot: Slot<CommandRegistry, ICommandChangedArgs>, thisArg?: any) => boolean'. Two different types with this name exist, but they are unrelated.
              Types of parameters 'slot' and 'slot' are incompatible.
                Type 'Slot<CommandRegistry, ICommandChangedArgs>' is not assignable to type 'Slot<CommandRegistry, ICommandChangedArgs>'. Two different types with this name exist, but they are unrelated.
                  Types of parameters 'sender' and 'sender' are incompatible.
                    Type 'CommandRegistry' is not assignable to type 'CommandRegistry'. Two different types with this name exist, but they are unrelated.

npm ERR! Darwin 16.0.0
npm ERR! argv "/usr/local/Cellar/node/6.4.0/bin/node" "/usr/local/bin/npm" "run" "build:src"
npm ERR! node v6.4.0
npm ERR! npm  v3.10.3
npm ERR! code ELIFECYCLE
npm ERR! tstest@0.1.0 build:src: `tsc --project src && node scripts/copyfiles.js`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the tstest@0.1.0 build:src script 'tsc --project src && node scripts/copyfiles.js'.
npm ERR! Make sure you have the latest version of node.js and npm installed.
npm ERR! If you do, this is most likely a problem with the tstest package,
npm ERR! not with npm itself.
npm ERR! Tell the author that this fails on your system:
npm ERR!     tsc --project src && node scripts/copyfiles.js
npm ERR! You can get information on how to open an issue for this project with:
npm ERR!     npm bugs tstest
npm ERR! Or if that isn't available, you can get their info via:
npm ERR!     npm owner ls tstest
npm ERR! There is likely additional logging output above.

npm ERR! Please include the following file with any support request:
npm ERR!     /Users/dallan/Documents/Repos/tstest/npm-debug.log

npm ERR! Darwin 16.0.0
npm ERR! argv "/usr/local/Cellar/node/6.4.0/bin/node" "/usr/local/bin/npm" "run" "build"
npm ERR! node v6.4.0
npm ERR! npm  v3.10.3
npm ERR! code ELIFECYCLE
npm ERR! tstest@0.1.0 build: `npm run build:src && npm run build:extension`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the tstest@0.1.0 build script 'npm run build:src && npm run build:extension'.
npm ERR! Make sure you have the latest version of node.js and npm installed.
npm ERR! If you do, this is most likely a problem with the tstest package,
npm ERR! not with npm itself.
npm ERR! Tell the author that this fails on your system:
npm ERR!     npm run build:src && npm run build:extension
npm ERR! You can get information on how to open an issue for this project with:
npm ERR!     npm bugs tstest
npm ERR! Or if that isn't available, you can get their info via:
npm ERR!     npm owner ls tstest
npm ERR! There is likely additional logging output above.

npm ERR! Please include the following file with any support request:
npm ERR!     /Users/dallan/Documents/Repos/tstest/npm-debug.log

npm ERR! Darwin 16.0.0
npm ERR! argv "/usr/local/Cellar/node/6.4.0/bin/node" "/usr/local/bin/npm" "install"
npm ERR! node v6.4.0
npm ERR! npm  v3.10.3
npm ERR! code ELIFECYCLE
npm ERR! tstest@0.1.0 prepublish: `npm run build`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the tstest@0.1.0 prepublish script 'npm run build'.
npm ERR! Make sure you have the latest version of node.js and npm installed.
npm ERR! If you do, this is most likely a problem with the tstest package,
npm ERR! not with npm itself.
npm ERR! Tell the author that this fails on your system:
npm ERR!     npm run build
npm ERR! You can get information on how to open an issue for this project with:
npm ERR!     npm bugs tstest
npm ERR! Or if that isn't available, you can get their info via:
npm ERR!     npm owner ls tstest
npm ERR! There is likely additional logging output above.

npm ERR! Please include the following file with any support request:
npm ERR!     /Users/dallan/Documents/Repos/tstest/npm-debug.log
```
