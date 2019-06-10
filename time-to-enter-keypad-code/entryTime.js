function entryTime(s, keypad) {
    s = s.toString()
    keypad = keypad.toString()

    let entryTime = 0
    let firstKey = s.charAt(0)

    let sArr = s.split('')

    const row0 = keypad.slice(0, 3).split('')
    const row1 = keypad.slice(3, 6).split('')
    const row2 = keypad.slice(6, 9).split('')

    const col0 = [row0[0], row1[0], row2[0]]
    const col1 = [row0[1], row1[1], row2[1]]
    const col2 = [row0[2], row1[2], row2[2]]

    const rows = [row0, row1, row2]
    const cols = [col0, col1, col2]
    console.log(rows)
    console.log(cols)

    
    const findRowOrCol = (sElem, rowsOrCols) => {
        return rowsOrCols.findIndex((rowsOrCol, idx) => {
            return rowsOrCol.includes(sElem)
        })
    }

    const collectPositions = (rowsOrCols) => {
        return sArr.map(sElem => {
            return findRowOrCol(sElem, rowsOrCols)
        });
    }

    const calcDistances = () => {
        const rowPosArr = collectPositions(rows)
        const colPosArr = collectPositions(cols)

        function doCalc (positionsArr) {
            positionsArr.forEach((position, idx, array) => {
                if (idx === 0) {
                    return
                }
                entryTime += Math.abs(position - array[(idx - 1)])
            });
        }

        doCalc(rowPosArr)
        doCalc(colPosArr)
    }

    calcDistances()

    return entryTime
}

console.log(entryTime(91991, 923857614))