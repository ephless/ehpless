import {Router} from 'express';


const router = Router();


router.get('/', (req, res) => {
    res.send('Users Api Route');
    console.log('GET request received at User Route');
});

export default router;