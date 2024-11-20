



import {Router} from 'express';


const router = Router();


router.get('/', (req, res) => {
    res.send(' Stats Api Route');
    console.log('GET request received at Stats Route');
});

export default router