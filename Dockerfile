FROM node:18

WORKDIR /app

COPY . .

RUN npm install @aws-sdk/client-s3 @aws-sdk/s3-request-presigner express mongoose multer dotenv jsonwebtoken express-validator

EXPOSE 3000

ENV AWS_REGION=${AWS_REGION}
ENV AWS_ACCESS_KEY=${AWS_ACCESS_KEY}
ENV AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY}
ENV AWS_BUCKET_NAME=${AWS_BUCKET_NAME}

CMD ["node", "server.js"]
