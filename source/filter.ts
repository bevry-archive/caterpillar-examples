// Import
import Logger from 'caterpillar'
import Filter from 'caterpillar-filter'

// Wrap
export default async function run() {
	// Create
	const logger = Logger.create()
	const filter = Filter.create({ level: 6 }) // omit log level entries above 6

	// Pipe logger output to filter, then filter output to stdout
	logger.pipe(filter).pipe(process.stdout)

	// Log
	logger.log('info', 'this is the first log entry') // info is level 6
	logger.log('debug', 'this is the second log entry') // debug is level 7, this will be omitted by our filter
	logger.log('info', 'this is the third log entry') // info is level 6
}
