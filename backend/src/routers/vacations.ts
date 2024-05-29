import express, { Router } from "express";
import { getAll, getOne, add, update, patch, remove } from "../controllers/vacations/controller";
import validate from "../middlewares/input-validation";
import { addVacationValidator, patchVacationValidator, putVacationValidator } from '../controllers/vacations/validator';
import enforceAdmin from "../middlewares/enforce-admin";
import addImageToBody from "../middlewares/add-image-to-body";
import uploadImage from "../middlewares/upload-image";
import { v4 as uuidv4 } from 'uuid';

const router = Router();
// router.get('/', getAll) = router.use('GET','/',getAll)
router.get('/', getAll)
router.get('/:id([0-9a-fA-F-]+)', getOne);
router.post('/', addImageToBody, validate(addVacationValidator) ,uploadImage ,add)
router.put('/:id([0-9a-fA-F-]+)', addImageToBody, validate(putVacationValidator), uploadImage ,update)
router.patch('/:id([0-9a-fA-F-]+)', addImageToBody, validate(patchVacationValidator), uploadImage, patch)
router.delete('/:id([0-9a-fA-F-]+)', enforceAdmin ,remove)

export default router;