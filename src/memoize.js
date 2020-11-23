module.exports = fn => {
  const cache = {}

  return (...args) => {
    const prop = JSON.stringify(args)

    if (cache[prop]) return cache[prop]

    cache[prop] = fn(...args)

    return cache[prop]
  }
}
