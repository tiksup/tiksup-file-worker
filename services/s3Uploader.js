import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import dotenv from 'dotenv';

dotenv.config();

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export const uploadS3File = async (filename, buffer) => {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: filename,
    Body: buffer,
  };

  const command = new PutObjectCommand(params);

  try {
    const result = await s3.send(command);
    console.log('Archivo subido exitosamente a S3:', result);
    return result;
  } catch (error) {
    console.error('Error al subir archivo a S3:', error);
    throw error;
  }
};
