var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray (array[], element){
  newArray = [element,...array]

}

function destructivelyAddElementToBeginningOfArray (array, element){
  array = array.unshift(element)
}
