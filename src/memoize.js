module.exports = (fn, lifespan = 2000) => {
  const memos = {}

  return (...args) => {
    const key = `${fn.name}(${JSON.stringify(args)})`

    if (!(key in memos)) {
      memos[key] = {}
      memos[key].value = fn(...args)
    } else {
      clearTimeout(memos[key].lifespan)
    }

    if (lifespan !== false) {
      memos[key].lifespan = setTimeout(() => { delete memos[key] }, lifespan)
    }

    return memos[key].value
  }
}
