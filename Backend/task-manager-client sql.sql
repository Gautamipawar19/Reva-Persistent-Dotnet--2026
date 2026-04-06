create database TaskManagerDb;

use TaskManagerDb;

UPDATE Tasks
SET IsCompleted = 1  /* task complete then show 1 and task not complete then show 0 */
WHERE Id = 15;
