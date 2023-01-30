const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction');

// Schema to create thoughts model
const thoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min: 1,
            max: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

thoughtsSchema
    .virtual('reactionCount')

    .get(function () {
        return this.reactions.length;
    })

const Thoughts = model('Thoughts', thoughtsSchema);

module.exports = Thoughts;