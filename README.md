### Requirements for running the application

- Node.js version 22.16.0 (If you use volta, the application will automatically select the Node.js & NPM versions)

### Instruction for running the application

- Install application dependencies with the command - **npm install**
- Run the application with the command - **npm run start:local** (Or you can use - **npm run start:prod** but remember build application before with the command - **npm run build**)

### After running the application

- Application will be available on http://localhost:3000
- Calculate delivery fee feature will have an endpoint **POST /api/delivery/calculate-fee**

### Unit tests

- Run unit tests with the command - **npm run test**

### Additional information

- You can find the request & response contracts by paths **/src/core/delivery/request** and **/src/core/delivery/response**
- Application has eslint and prettier rules configured, you can use it by IDE or see a scripts section in the package.json file
- If you have any questions, contact me by Telegram—@viko_o. I will be answering immediately