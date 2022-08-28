# node-server
## Setup

### Overview

1. Install prerequisites.
2. Clone the repository.
3. Install project dependencies.
4. Setup database and database user.
5. Define environment variables.
6. Run unit tests (just to make sure it all works).
7. Run the application.

### Prerequisites

- Node:
For windows [https://nodejs.org/en/download/package-manager/#windows]
For ubuntu [https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04]
For macos [https://nodejs.org/en/download/package-manager/#macos]
- Yarn:
For windows [https://www.liquidweb.com/kb/how-to-install-yarn-on-windows/]
For ubuntu [https://linuxize.com/post/how-to-install-yarn-on-ubuntu-20-04/]
For macos [https://tecadmin.net/install-yarn-macos/]
- MYSQL:
Mysql workbench [https://dev.mysql.com/downloads/workbench/]
- Mysql Client:
For windows: [https://www.microfocus.com/documentation/idol/IDOL_12_0/MediaServer/Guides/html/English/Content/Getting_Started/Configure/_TRN_Set_up_MySQL.htm]
For Ubuntu [https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04]
For macos [https://flaviocopes.com/mysql-how-to-install/]
- Visual Studio Code: [https://code.visualstudio.com/download]
### Clone the repository
```bash
git clone https://gitlab.com/cd-campus-hiring/node-server
```
### Install dependencies
```bash
yarn install
```
### Database
```bash
CREATE DATABASE testdb;
```
### Create .env file in the directory and update the data
```bash
DB_USERNAME=username
DB_PASSWORD=password
DB_DATABASE=testdb
HOST=localhost
```
### Run migration
```bash
yarn migrate
```
### To create new migration
```bash
yarn makemigration --name MIGRATION NAME
```
### To run eslint for all files.
```bash
yarn lint
```
### To run elslit with fix the error and warning automatically in all files.

```bash
yarn lint-fix
```
### To run the test
```bash
yarn test
```
### Run the application
```bash
yarn start
```
You can access the API via [http://localhost:9000](http://localhost:9000).

### Available api

To create an user [http://localhost:9000/user] in the post method to provide user data [full_name, email, password, created_at, updated_at].

To get all course [http://localhost:9000/course] to view sample response of all courses.

To get course details [http://localhost:9000/course/details] to view sample response of course details.

To get all account [http://localhost:9000/account] to view sample response of all the accounts.

To get account details [http://localhost:9000/account/details] to view sample response of account details.



