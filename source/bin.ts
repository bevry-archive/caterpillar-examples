/* eslint no-console:0 */
import all from './all.js'
import filter from './filter.js'
import human from './human.js'
const files = { all, filter, human }

// Wrap
export default async function run() {
	for (const [file, run] of Object.entries(files)) {
		const url = `https://github.com/bevry/caterpillar-examples/blob/master/source/${file}.ts`
		console.log('=============================')
		console.log('Executing', file, process.argv.slice(2).join(' '))
		console.log('Source:', url)
		console.log('')
		await run()
		console.log('')
	}
}

// Run
run()
