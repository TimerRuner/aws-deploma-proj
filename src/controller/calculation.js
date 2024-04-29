import s3 from "../modules/s3/index.js";
import axios from "axios";

class Calculation {

    async upload(req, res) {
        try {
            const { state, period } = req.body
            const { doc } = req.files

            if(doc) {
                await s3.uploadFile(doc, {state, period})
            }
            res.end()
        } catch (e) {
            console.error(e);
        }
    }

    async calculations(req, res) {
        const result = await axios.get('https://9wh2fj2iq8.execute-api.eu-central-1.amazonaws.com/Production/calculations')
        res.send(result.data)
    }
    async calculation(req, res) {
        try {
            const id = req.query.period
            const result = await axios.get(`https://9wh2fj2iq8.execute-api.eu-central-1.amazonaws.com/Production/calculations/${id}`)
            res.send(result?.data)
        } catch (error) {
            console.log(error)
        }
    }
}

export default new Calculation