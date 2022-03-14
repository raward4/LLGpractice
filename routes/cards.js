import { Router } from 'express'
import * as cardsCtrl from '../controllers/cards.js'

const router = Router()



export {
  router
}

router.get('/', cardsCtrl.index)