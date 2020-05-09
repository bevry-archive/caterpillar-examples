// Caterpillar Logger: https://github.com/bevry/caterpillar
import Logger from 'caterpillar'
// Filter transform: https://github.com/bevry/caterpillar-filter
import Filter from 'caterpillar-filter'
// Human transform: https://github.com/bevry/caterpillar-human
import Human from 'caterpillar-human'
// Browser transform: https://github.com/bevry/caterpillar-browser
import Browser from 'caterpillar-browser'

// Wrap
export default async function run() {
	// Determine our log level, info or debug
	const level = process?.argv?.indexOf('-d') === -1 ? 6 : 7

	// Create the logger and streams
	const logger = Logger.create({ level })
	const filter = Filter.create()
	const human = Human.create()

	// Where to output?
	// @ts-ignore
	if (typeof window !== 'undefined') {
		// Create the browser compatibility layer
		const browser = new Browser()

		// Pipe to filter to human to browser
		logger.pipe(filter).pipe(human).pipe(browser)
	} else {
		// Pipe to filter to human to stdout
		logger.pipe(filter).pipe(human).pipe(process.stdout)

		// If we are debugging, then write the original logger data to debug.log
		if (level === 7) {
			const { createWriteStream } = await import('fs')
			logger.pipe(createWriteStream('./debug.log'))
		}
	}

	// Log messages
	logger.log('emergency', 'this is level 0')
	logger.log('emerg', 'this is level 0')
	logger.log('alert', 'this is level 1')
	logger.log('critical', 'this is level 2')
	logger.log('crit', 'this is level 2')
	logger.log('error', 'this is level 3')
	logger.log('err', 'this is level 3')
	logger.log('warning', 'this is level 4')
	logger.log('warn', 'this is level 4')
	logger.log('notice', 'this is level 5')
	logger.log('note', 'this is level 5')
	logger.log('info', 'this is level 6')
	logger.log('default', 'this is level 6')
	logger.log('debug', 'this is level 7')
	logger.log('this is level 6, the default level')
	logger.log(
		'you',
		'can',
		'also',
		'use',
		'as',
		'many',
		'arguments',
		'as',
		'you',
		'want',
		1,
		[2, 3],
		{ four: 5 }
	)
}
