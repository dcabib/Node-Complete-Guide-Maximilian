const expect = require('chai').expect;
const sinon = require('sinon');
const mongoose = require('mongoose');

const User = require('../models/user');
const FeedController = require('../controllers/feed');

describe('Feed Controller', function() {
  before(function(done) {
    mongoose
      .connect(
        //'mongodb+srv://maximilian:fmFLrH6d0DjMxWcg@cluster0-ntrwp.mongodb.net/test-messages?retryWrites=true'
        'mongodb://localhost:27017/messages?retryWrites=true', { useNewUrlParser: true }
      )
      .then(result => {
        const user = new User({
          email: 'd@d.com',
          password: 'asdasd',
          name: 'Daniel',
          posts: [],
          _id: '5d1a00b76e0ac9ad2dc00fc0'
        });
        return user.save();
      })
      .then(() => {
        done();
      });
  });

  beforeEach(function() {});

  afterEach(function() {});

  it('should add a created post to the posts of the creator', function(done) {
    const req = {
      body: {
        title: 'Test Post',
        content: 'A Test Post'
      },
      file: {
        path: 'abc'
      },
      userId: '5d1a00b76e0ac9ad2dc00fc0'
    };
    const res = {
      status: function() {
        return this;
      },
      json: function() {}
    };

    FeedController.createPost(req, res, () => {}).then(savedUser => {
      expect(savedUser).to.have.property('posts');
      expect(savedUser.posts).to.have.length(1);
      done();
    });
  });

  after(function(done) {
    User.deleteMany({})
      .then(() => {
        return mongoose.disconnect();
      })
      .then(() => {
        done();
      });
  });
});
