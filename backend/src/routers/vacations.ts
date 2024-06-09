import express, { Router } from "express";
import { getOne, add, update, patch, remove, getAllVacationsByUser, addFollow, removeFollow } from "../controllers/vacations/controller";
import validate from "../middlewares/input-validation";
import { addVacationValidator, patchVacationValidator, putVacationValidator } from '../controllers/vacations/validator';
import enforceAdmin from "../middlewares/enforce-admin";
import addImageToBody from "../middlewares/add-image-to-body";
import uploadImage from "../middlewares/upload-image";

const router = Router();
// router.get('/', getAll) = router.use('GET','/',getAll)
// router.get('/', getAll)
router.get('/user/:id([0-9a-fA-F-]+)', getAllVacationsByUser)
router.get('/:id([0-9a-fA-F-]+)', getOne);
router.post('/:vacationId([0-9a-fA-F-]+)/:userId([0-9a-fA-F-]+)', addFollow)
router.delete('/:vacationId([0-9a-fA-F-]+)/:userId([0-9a-fA-F-]+)', removeFollow)
router.post('/', addImageToBody, validate(addVacationValidator) ,uploadImage ,add)
router.put('/:id([0-9a-fA-F-]+)', addImageToBody, validate(putVacationValidator), uploadImage ,update)
router.patch('/:id([0-9a-fA-F-]+)', addImageToBody, validate(patchVacationValidator), uploadImage, patch)
router.delete('/:id([0-9a-fA-F-]+)', enforceAdmin ,remove)

export default router;