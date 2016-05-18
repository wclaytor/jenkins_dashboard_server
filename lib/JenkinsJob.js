var _ = require('lodash');

//@param JenkinsJsonProvider provider
var JenkinsJob = function () {
    
};

// @TODO: make sure these match up with what is returned by Jenkins API
const SUCCESS_STATUS = 'SUCCESS';
const FAILURE_STATUS = 'FAILURE';
const ABORTED_STATUS = 'ABORTED';
const IN_PROGRESS_STATUS = 'IN PROGRESS';
const STATUS = [SUCCESS_STATUS, ABORTED_STATUS, FAILURE_STATUS, IN_PROGRESS_STATUS];


/*
Returns the builds for this job
 */
JenkinsJob.getBuilds = function getBuilds() {
    return [];
};

/*
Returns the health which is some kind of calculation of how this
job has been performing over time.
 */
JenkinsJob.getJobHealth = function getJobHealth() {
    
};

/*
Return the current status - see above for constants.
@TODO: returning random for now; will be replaced by actual JSON returned value
 */
JenkinsJob.getCurrentStatus = function getCurrentStatus() {
    return _.sample(STATUS);
};

module.exports = JenkinsJob;