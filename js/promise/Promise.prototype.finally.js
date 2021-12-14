Promise.prototype.finally2 = function(cb) {
  return this.then(function(value) {
    return Promise.resolve(cb()).then(function() {
      return value
    })
  }, function(err) {
    return Promise.resolve(cb()).then(function() {
      throw err
    })
  })
}