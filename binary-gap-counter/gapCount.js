function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  // check possible inputs - done
  if (typeof N !== 'number') return 0
  // check possible outputs

  const binaryString = N.toString(2)
  // convert number to binary array of strings
  const binaryArray = [...binaryString]
  // many binary gap
  const freq = {}
  binaryArray.forEach(e => {
    // object prop initialized
    freq[e] = freq[e]
      ? ++freq[e]
      : 1
  })

  // SPECIAL CASES
  if (freq["0"] === 0 || (freq[1] === 0 || freq[1] === 1)) {
    return 0
  }

  // cnt 0 = 0 -> bgap = 0
  // cnt 0 - odd / even - don't matter
  // cnt 1 = 0 -> bgap = 0
  // cnt 1 - odd / even -
  // one binary gap

  // start recursion on binary array
  let maxdiff = 0
  let counter = 0
  function countGap(binStr) {
    if (counter > 20) {
      return
    }
    // end case
    if (binStr.length === 0) {
      return
    }
    // look for first 1
    const firstOneIdx = binStr.indexOf('1')
    // find second 1
    const secondOneIdx = binStr.substring(firstOneIdx + 1).indexOf('1')

    if (secondOneIdx === -1) {
      return
    }
    // calculate distance
    if (maxdiff < (secondOneIdx - firstOneIdx)) {
      maxdiff = (secondOneIdx - firstOneIdx)
    }
    // call function with rest
    countGap(binStr.substring(secondOneIdx + 1))
    // compare results
  }
  countGap(binaryString)

  return maxdiff
}

const call = (num, func, cb) => cb(func(num))

call(34, solution, console.log)
call(777, solution, console.log)