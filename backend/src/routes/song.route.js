



import {Router} from 'express';


const router = Router();


router.get('/', (req, res) => {
    res.send('Song Api Route');
    console.log('GET request received at Song Route');
});

export default router