import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
  setTimeout(() => {
    console.log(req.body);
    if (req.body.form[0] === 'pipiyo') {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  }, 3000);
});

export default router;
