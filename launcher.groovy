long start, time

10.times{

	println "-- LOT $it --"
	println ""

	println "PhantomJS process start:"
	start = System.currentTimeMillis()
	println 'phantomjs phantomjs-app-render.js'.execute().text[0..-2]
	time = System.currentTimeMillis() - start
	println "Time to render tiger.png with PhantomJS process: " + time
	println ""

	println "PhantomJS node service start:"
	start = System.currentTimeMillis()
	println "http://127.0.0.1:8000/".toURL().text
	time = System.currentTimeMillis() - start
	println "Time to render tiger.png with PhantomJS node service: " + time
	println ""
}
