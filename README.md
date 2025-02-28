<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
---

### **📜 README.md Content for GitHub**
Copy the below content and paste it into your **GitHub README.md** file:

```md
# 🚀 NestJS + Kafka + MySQL Setup Guide

This project is a NestJS application integrated with **Kafka** and **MySQL**.

---

## 📌 Installation Guide

### **1️⃣ Install Dependencies**
Run the following command to install dependencies:
```sh
npm install
```

---

## **🛠️ Setting Up MySQL**
1. Download **MySQL** from [MySQL Official Website](https://dev.mysql.com/downloads/installer/).
2. Start MySQL service.
3. Create a database:
```sql
CREATE DATABASE nestcrud;
```

---

## **📡 Setting Up Apache Kafka**
### **Windows Installation**
1. Download **Kafka** from [Apache Kafka](https://kafka.apache.org/downloads).
2. Extract Kafka and **navigate to the Kafka folder**:
```sh
cd kafka
```
3. Start **Zookeeper**:
```sh
bin/windows/zookeeper-server-start.bat config/zookeeper.properties
```
4. Start **Kafka Broker**:
```sh
bin/windows/kafka-server-start.bat config/server.properties
```
5. Create Kafka Topic:
```sh
bin/windows/kafka-topics.bat --create --topic product-topic --bootstrap-server localhost:9092
```

### **Linux/Mac Installation**
1. Install Kafka:
```sh
wget https://downloads.apache.org/kafka/3.5.0/kafka_2.13-3.5.0.tgz
tar -xzf kafka_2.13-3.5.0.tgz
cd kafka_2.13-3.5.0
```
2. Start **Zookeeper**:
```sh
bin/zookeeper-server-start.sh config/zookeeper.properties
```
3. Start **Kafka Broker**:
```sh
bin/kafka-server-start.sh config/server.properties
```
4. Create Kafka Topic:
```sh
bin/kafka-topics.sh --create --topic product-topic --bootstrap-server localhost:9092
```

---

## **📝 Configure `.env` File**
Create a **`.env`** file in the root directory and add:
```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=yourpassword
DB_NAME=nestcrud
KAFKA_BROKER=localhost:9092
```

---

## **💾 Run Migrations**
Run the following command to apply database migrations:
```sh
npm run migrate:up
```

---

## **🚀 Start the Application**
Run the NestJS app in development mode:
```sh
npm run start:dev
```

---

## **📡 Testing Kafka**
### **1️⃣ Sending a Message**
Use `curl` or **Postman** to send a message:
```sh
curl -X POST http://localhost:3000/products -H "Content-Type: application/json" -d '{"name": "Test Product", "price": 100}'
```

### **2️⃣ Check Kafka Consumer Logs**
Run:
```sh
npm run start:dev
```
If Kafka is working correctly, you should see this in the logs:
```
✅ Kafka Consumer connected
📩 New message received
📝 Topic: product-created
📜 Message: {"name": "Test Product", "price": 100}
```

---

## **📌 Git Commands to Push Code to GitHub**
Run the following commands **inside your project folder** to push the project to GitHub:

```sh
git init  # Initialize Git
git add .  # Add all files
git commit -m "Initial commit"  # Commit files
git branch -M main  # Rename the default branch to main
git remote add origin https://github.com/your-username/nestjs-kafka-mysql.git  # Link repo
git push -u origin main  # Push code to GitHub
```

---

## **🎯 Additional Commands**
| Command | Description |
|----------|------------|
| `npm run start` | Start the application normally |
| `npm run start:dev` | Start the application in development mode |
| `npm run migrate:up` | Run database migrations |

---

## **📜 License**
This project is **open-source** and available under the **MIT License**.

---

### **💬 Need Help?**
If you have any issues, feel free to create an **Issue** in the repository.

---

Now, **commit** this `README.md` in GitHub, and your repository will have a **clear setup guide** for anyone who clones it! 🚀🔥 Let me know if you need any modifications.

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
