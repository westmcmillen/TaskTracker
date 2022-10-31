# TaskTracker

TaskTrack is a full-stack application to manage your daily tasks.

## Development

TaskTracker was design and developed by West McMillen in October 2022 using TypeScript, Angular, Node.js, Express, and PostgresSQL.

## Server

To begin, you will need to setup a postgres database on your local machine. The database should be named 'task_tracker'. Inside this database, you will need to create one table named 'task' and a another named 'archive'. Both tables should have the following schema:

1. id: varchar
2. created_at: timestamp
3. updated_at: timestamp
4. description: varchar
5. status: varchar
6. important: bool

The database should configured to port 5432

## Run

In the root folder, run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

In the server folder, run `npm run server` for a dev server. The server will be listening on `http://localhost:5000/`. The server will automatically reload if you change any of the source files.
