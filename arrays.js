 var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray (array, element){
  var array = [element,...array]
  return array
}

function destructivelyAddElementToBeginningOfArray (array, element){
  array.unshift(element);
  return array
}

function addElementToEndOfArray(array, element){
  var array = [...array, element]
}
