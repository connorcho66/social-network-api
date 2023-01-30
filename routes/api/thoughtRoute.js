const router = require('express').Router();

const {
    getThoughts,
    getSingleThoughts,
    createThoughts,
    updateThoughts,
    deleteThoughts,
    createReaction,
    deleteReaction,
} = require('../../controllers/thoughtController')

router.route('/').get(getThoughts).post(createThoughts);

router.route('/:thoughtId').get(getSingleThoughts).put(updateThoughts).delete(deleteThoughts);

router.route('/thoughtId/reactions').post(createReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;