import {Router} from "express"
import calculation from "../controller/calculation.js";

const router = new Router()

router.post('/upload', calculation.upload)
router.get('/calculations', calculation.calculations)
router.get('/calculation', calculation.calculation)
router.get('/', (req, res) => {
    res.send('Hello world')
})

export default router