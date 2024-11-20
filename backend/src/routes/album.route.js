



import {Router} from 'express';


const router = Router();


router.get('/', (req, res) => {
    res.send('Album Api Route');
    console.log('GET request received at Album Route');
});

export default router