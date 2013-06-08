phantomjs-prespawned-benchmark
==============================

### About
A really simple test to quickly validate how different perform a PhantomJS process bridged through websockets (in a NodeJS context) vs spawning a new PhantomJS process to render a SVG.

### Demo

- Install npm, node and groovy
- npm install phantom
- node node-app-render.js
- groovy launcher.groovy

### Output example from my MacBook Pro

  -- LOT 0 --

	PhantomJS process start:
	Inner snippet took: 235
	Time to render tiger.png with PhantomJS process: 1264 ms

	PhantomJS node service start:
	Inner snippet took: 275
	Time to render tiger.png with PhantomJS node service: 314 ms

	-- LOT 1 --

	PhantomJS process start:
	Inner snippet took: 236
	Time to render tiger.png with PhantomJS process: 1236 ms

	PhantomJS node service start:
	Inner snippet took: 272
	Time to render tiger.png with PhantomJS node service: 275 ms

	-- LOT 2 --

	PhantomJS process start:
	Inner snippet took: 241
	Time to render tiger.png with PhantomJS process: 1245 ms

	PhantomJS node service start:
	Inner snippet took: 220
	Time to render tiger.png with PhantomJS node service: 222 ms

	-- LOT 3 --

	PhantomJS process start:
	Inner snippet took: 241
	Time to render tiger.png with PhantomJS process: 1267 ms

	PhantomJS node service start:
	Inner snippet took: 215
	Time to render tiger.png with PhantomJS node service: 216 ms

	-- LOT 4 --

	PhantomJS process start:
	Inner snippet took: 234
	Time to render tiger.png with PhantomJS process: 1234 ms

	PhantomJS node service start:
	Inner snippet took: 212
	Time to render tiger.png with PhantomJS node service: 214 ms

	-- LOT 5 --

	PhantomJS process start:
	Inner snippet took: 233
	Time to render tiger.png with PhantomJS process: 1234 ms

	PhantomJS node service start:
	Inner snippet took: 214
	Time to render tiger.png with PhantomJS node service: 214 ms

	-- LOT 6 --

	PhantomJS process start:
	Inner snippet took: 272
	Time to render tiger.png with PhantomJS process: 1281 ms

	PhantomJS node service start:
	Inner snippet took: 227
	Time to render tiger.png with PhantomJS node service: 229 ms

	-- LOT 7 --

	PhantomJS process start:
	Inner snippet took: 234
	Time to render tiger.png with PhantomJS process: 1235 ms

	PhantomJS node service start:
	Inner snippet took: 208
	Time to render tiger.png with PhantomJS node service: 210 ms

	-- LOT 8 --

	PhantomJS process start:
	Inner snippet took: 237
	Time to render tiger.png with PhantomJS process: 1270 ms

	PhantomJS node service start:
	Inner snippet took: 224
	Time to render tiger.png with PhantomJS node service: 226 ms

	-- LOT 9 --

	PhantomJS process start:
	Inner snippet took: 235
	Time to render tiger.png with PhantomJS process: 1239 ms

	PhantomJS node service start:
	Inner snippet took: 213
	Time to render tiger.png with PhantomJS node service: 215 ms


### License in Three Lines

Copyright (c) 2013 Pablo Molnar @pmolnar

You may use this work without restrictions, as long as this notice is included.
The work is provided "as is" without warranty of any kind, neither express nor implied.
