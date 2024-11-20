



import {Router} from 'express';


const router = Router();


router.get('/', (req, res) => {
    res.send('Admin Api Route');
    console.log('GET request received at Admin Route');
});

export default router