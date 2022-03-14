import { Card } from '../models/cards.js'

function index(req, res) {
  Card.find({})
  .then(cards => {
    res.render('cards/index', {
      cards,
      title: "🃏 "
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/cards")
  })
}

export {
  index
}