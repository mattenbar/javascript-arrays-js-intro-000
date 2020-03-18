var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray ('array', element){
  array = [element,...array]
  array.unshift(element)

}

function destructivelyAddElementToBeginningOfArray (array, element){
  array = array.unshift(element)
}
