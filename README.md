# FinlexApp

## Live link


## Local Installation(using git and ng server)
Step 01: Run `git clone https://github.com/mds-rahulsingh/finlex-app`
Step 02: Go to the project directory
Step 03: Run `ng serve` for a dev server
Step 04: Open browser and navigate to `http://localhost:4200/`

## Local Installation(using git and node server)
Step 01: Run `git clone https://github.com/mds-rahulsingh/finlex-app`
Step 02: Go to the project directory
Step 03: Run `ng build --prod` to create build
Step 04: Run `npm run node:serve` for a dev server
Step 05: Open browser and navigate to `http://localhost:8080/`

## Local Installation(using git and Docker)
NOTE: Here is the link to my docker image[https://hub.docker.com/r/rahulsingh1991/finlex-app]- `docker pull rahulsingh1991/finlex-app`
Step 01: Run `git clone https://github.com/mds-rahulsingh/finlex-app`
Step 02: Go to the project directory
Step 03: Run `docker build . -t <user-name>/<project-name>`
Step 04: Run `docker images` to see if the docker image is created successfully
Step 05: Run `docker run -p 3000:80 <user-name>/<project-name>`
Step 06: Open browser and navigate to `http://localhost:3000/`

## Run Unit Test Case
Step 01: Run `ng test` to execute the unit tests

## Build
Step 01: Run `ng build` to build the project.