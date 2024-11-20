



import {Router} from 'express';


const router = Router();


router.get('/', (req, res) => {
    res.send('Auth Api Route');
    console.log('GET request received at Auth Route');
});

export default router