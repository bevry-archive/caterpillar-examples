// Import
import Logger from 'caterpillar'
import Human from 'caterpillar-human'

// Wrap
export default async function run() {
	// Create
	const logger = Logger.create()
	const human = Human.create()

	// Pipe logger output to our human interface, then our human interface output to stdout
	logger.pipe(human).pipe(process.stdout)

	// Log
	logger.log('warn', 'this is the first log entry')
	logger.log('info', 'this is the second log entry')

	// Wait
	setTimeout(function () {
		// Set debug mode
		logger.setConfig({ level: 7 })

		// Log
		logger.log('warn', 'this is the first log entry')
		logger.log('info', 'this is the second log entry')
	}, 0)
}
