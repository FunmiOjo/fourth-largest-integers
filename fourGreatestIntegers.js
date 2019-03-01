/*
Prompt: Write a function that takes a list of integers and returns the 4 highest
in O(n) time.  
*/

/*
I'm assuming that the list is in the form of an array.
I'll treat the array as if it is a binary tree and then switch the elements to make it a max heap
I will then traverse the root, its children and one of its grandchildren (here I will need to
compare the two)
*/

const main = list => {
  let nodeOutOfPlace = false

  const heapify = i => {
    // each node's children are at 2i + 1 and 2i + 2
    let child1Index = 2 * i + 1
    let child2Index = 2 * i + 2

    // identify children and handle null nodes
    let child1 = list[child1Index] !== undefined ? list[child1Index] : -Infinity
    let child2 = list[child2Index] !== undefined ? list[child2Index] : -Infinity

    // check if parent is less than or equal to children
    if (child1 >= list[i] || child2 >= list[i]) {
      nodeOutOfPlace = true
      if (child1 >= child2) {
        // swap child1 with parent
        const temp = list[i]
        list[i] = child1
        list[child1Index] = temp
      } else {
        // swap child2 with parent
        const temp = list[i]
        list[i] = child2
        list[child2Index] = temp
      }
    }
  }

  const buildMaxHeap = () => {
    do {
      nodeOutOfPlace = false
      for (let i = Math.floor(list.length / 2) - 1; i >= 0; i--) {
        heapify(i)
      }
    } while (nodeOutOfPlace)
    return list
  }

  const remove = () => {
    const removedElement = list[0]
    list[0] = list[list.length - 1]
    list.pop()

    for (let i = 0; i < Math.floor(list.length / 2) - 1; i++) {
      heapify(i)
    }
    return removedElement
  }

  buildMaxHeap()
  const fourthGreatest = []
  for (let i = 0; i < 4; i++) {
    fourthGreatest.push(remove())
  }
  console.log(list)
  return fourthGreatest
}

console.log(main([40, 60, 10, 20, 50, 30]))
