'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  if (!robot) {
    return null;
  }

  const repairRobot = {};

  for (const key in robot) {
    if (repairRobot[robot[key]]) {
      return null;
    }
    repairRobot[robot[key]] = key;
  };

  return repairRobot;
}

module.exports = inverseRobot;
