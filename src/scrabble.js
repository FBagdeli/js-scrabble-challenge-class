class Scrabble {
  // Write your implementation here
  constructor(word = '') {
    this.word = word || ''
  }

  score() {
    let total = 0
    for (let i = 0; i < this.word.length; i++) {
      total += this.switchCalculate(this.word[i].toUpperCase())
    }
    return total
  }

  switchCalculate(letter) {
    let points = 0
    switch (letter) {
      case 'A':
      case 'E':
      case 'I':
      case 'O':
      case 'U':
      case 'L':
      case 'N':
      case 'R':
      case 'T':
      case 'S':
        points = 1
        break
      case 'D':
      case 'G':
        points = 2
        break
      case 'B':
      case 'C':
      case 'M':
      case 'P':
        points = 3
        break
      case 'F':
      case 'H':
      case 'V':
      case 'W':
      case 'Y':
        points = 4
        break
      case 'K':
        points = 5
        break
      case 'J':
      case 'X':
        points = 8
        break
      case 'Q':
      case 'Z':
        points = 10
        break
      default:
        points = 0
        break
    }
    return points
  }
}
const newWord = new Scrabble('cabbage')
newWord.score()
module.exports = Scrabble
