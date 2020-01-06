const { authenticate } = require('@feathersjs/authentication').hooks

module.exports = {
  before: {
    all: [],
    find: [
      hook => {
        hook.params.query = Object.assign({}, hook.params.query, { user_id: hook.params.user.id })
        return hook
      }
    ],
    get: [],
    create: [
      hook => {
        hook.data = Object.assign({}, hook.data, { user_id: hook.params.user.id })
        return hook
      }
    ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
