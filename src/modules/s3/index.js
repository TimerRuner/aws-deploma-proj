import AWS from "aws-sdk";


class S3Service {
    S3Client

    constructor() {
        AWS.config.update({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        })
        this.S3Client = new AWS.S3({})
    }

    generateUniqueFileName (filename) {
       return `${filename.state}_${filename.period}`
    }

    async uploadFile(file, naming) {
        if(!file) return ""
        const params = {
            Bucket: process.env.BACKET_NAME,
            Key: this.generateUniqueFileName(naming),
            Body: file.data,
        };

        await this.S3Client.upload(params).promise();
    }
}

export default new S3Service()
