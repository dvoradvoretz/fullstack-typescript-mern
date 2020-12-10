import pkg from 'express';
const { Router } = pkg;
import { getPromotions, createPromotion, updatePromotion, deletePromotion } from '../controllers/promotions/index.js';
const router = Router();
router.get('/promotions', getPromotions);
router.post('/create-promotions', createPromotion);
router.put('/update-promotion/:id', updatePromotion);
router.delete('/delete-promotion/:id', deletePromotion);
export default router;
