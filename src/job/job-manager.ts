import logger from '../helpers/Logger';

class JobManager {
    private running: string[] = [];

    isRunning(name: string): boolean {
        const isJobRunning = this.running.includes(name);

        logger.debug(`[${name}]: Job is ${!isJobRunning && 'not'} running`);

        return isJobRunning;
    }

    start(name: string): void {
        logger.debug(`[${name}]: Job started`);

        this.running.push(name);
    }

    stop(name: string): void {
        logger.debug(`[${name}]: Job stopped`);

        this.running = this.running.filter((running) => running !== name);
    }

    // eslint-disable-next-line class-methods-use-this
    log(name: string, message: string): void {
        logger.debug(`[${name}]: ${message}`);
    }
}

const jobManager = new JobManager();

export default jobManager;
