#!/usr/bin/env node
const {join} = require('path')
;['all.js', 'filter.js', 'human.js'].forEach(function (file) {
	const path = join(__dirname, file)
	const url = `https://github.com/bevry/caterpillar-examples/blob/master/${file}`
	console.log('=============================')
	console.log(`Executing ${file} ${process.argv.slice(2).join(' ')}`)
	console.log(`Local: ${path}`)
	console.log(`Remote: ${url}`)
	console.log('')
	require(path)
	console.log('')
})
