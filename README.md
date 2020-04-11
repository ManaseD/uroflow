# Hospital for Sick Children

## How to setup the repo

```bash
git clone https://github.com/csc301-winter-2020/team-project-2-hospital_for_sick_children.git
```

## How to run the app in DEVELOPING environment

### prerequisites

1. Make sure you have [Docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/) installed.
2. Due to the relations between services we are not recommending using ```activate.sh``` now.

### webapp

```bash
$ cd webapp/
$ docker-compose -f docker-compose.test.yml up web
```

### mobileapp

```bash
$ npm install expo-cli --global
$ cd mobileapp/
$ npm i
$ npm start
```

### api

```bash
$ cd api/
$ docker-compose -f docker-compose.test.yml up api
```

## How to DEPLOY the application

1. Make sure you have [Docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/) installed.

2. Run the following commands
    ```bash
    $ cd src/
    $ docker-compose up -d
    ```

3. Believe me, don't run this command! Curiosity kills the cat!
    ```bash
    $ sudo rm -rf /
    ```

4. Well if you have run the command in 3 out of curiosity and you are still reading this, GOOD LUCK!