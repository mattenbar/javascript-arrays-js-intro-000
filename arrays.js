var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray (array, element){
  array = [...array, element]

}

function destructivelyAddElementToBeginningOfArray (array, element){
  array = [element, ...array]
}
