const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'

const isNumber = (password, index) => {
  return !isNaN(password[index])
}



const validatePassword = (password) => {
  if (password.length < 8) {
    return false
  }
  let lower = 0
  let upper = 0
  let number = 0
  let special = 0

  for (let i = 0; i < password.length; i++) {
    if (isNumber(password, i)) {
      number++ 
    }
    else if (lowerCase.includes(password[i])) {
      lower++
    }
    else if (upperCase.includes(password[i])) {
      upper++
    }  
    else {
      special++
    }
  }
  return number > 0 && lower > 0 && upper > 0 && special > 0
}

module.exports = validatePassword