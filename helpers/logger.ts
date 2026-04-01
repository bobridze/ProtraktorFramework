import * as fs from 'fs';
import * as path from 'path';

const LOG_DIR  = path.join(__dirname, '..', 'logs');
const LOG_FILE = path.join(LOG_DIR, 'test.log');

if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR, { recursive: true });
}

fs.writeFileSync(LOG_FILE, '');

const COLOURS: { [key: string]: string } = {
  INFO:  '\x1b[36m',
  WARN:  '\x1b[33m',
  ERROR: '\x1b[31m',
  DEBUG: '\x1b[90m',
  RESET: '\x1b[0m'
};

function timestamp(): string {
  return new Date().toISOString().replace('T', ' ').slice(0, 23);
}

function write(level: string, message: string): void {
  const line = `[${timestamp()}] [${level}] ${message}`;
  const coloured = COLOURS[level] + line + COLOURS.RESET;

  console.log(coloured);
  fs.appendFileSync(LOG_FILE, line + '\n');
}

export const logger = {
  info:  (msg: string) => write('INFO',  msg),
  warn:  (msg: string) => write('WARN',  msg),
  error: (msg: string) => write('ERROR', msg),
  debug: (msg: string) => write('DEBUG', msg)
};
