const merge = (init, objs) => Object.assign({}, init, ...objs)

module.exports = (init, ...objs) => {
  if (init && objs.length > 0) {
    return merge(init, objs)
  }

  if (init) {
    return (...objs) => merge(init, objs)
  } else {
    return {}
  }
}
