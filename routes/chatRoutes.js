import { Router } from 'express'
import DataModel from '../models/chatModel.js'

const router = Router()

router.post('/data', async (req, res) => {
  const { name, mail, hiddenText } = req.body

  try {
    const newData = new DataModel({ name, mail, hiddenText })
    await newData.save()
    res.status(201).json({ message: 'Data saved successfully', data: newData })
  } catch (error) {
    res.status(500).json({ message: 'Error saving data', error })
  }
})

export default router
