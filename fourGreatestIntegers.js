/*
Prompt: Write a function that takes a list of integers and returns the 4 highest
in O(n) time.  
*/

/*
First, build a max heap, which takes O(n) time. Then remove four elements,
reheapifying each time, which takes O(k * log(k)).  However, since this
k is constant in this problem, the removal process takes constant time,
making the entire operation of O(n) time complexity.
*/

class Heap {
  constructor(list) {
    this.list = list
    this.nodeOutOfPlace = false
  }

  heapify(i) {
    // each node's children are at 2i + 1 and 2i + 2
    let child1Index = 2 * i + 1
    let child2Index = 2 * i + 2

    // identify children and handle null nodes
    let child1 =
      this.list[child1Index] !== undefined ? this.list[child1Index] : -Infinity
    let child2 =
      this.list[child2Index] !== undefined ? this.list[child2Index] : -Infinity

    // check if parent is less than or equal to children
    if (child1 >= this.list[i] || child2 >= this.list[i]) {
      this.nodeOutOfPlace = true

      if (child1 >= child2) {
        // swap child1 with parent
        const temp = this.list[i]
        this.list[i] = child1
        this.list[child1Index] = temp
      } else {
        // swap child2 with parent
        const temp = this.list[i]
        this.list[i] = child2
        this.list[child2Index] = temp
      }
    }
  }

  buildMaxHeap() {
    do {
      this.nodeOutOfPlace = false
      for (let i = Math.floor(this.list.length / 2) - 1; i >= 0; i--) {
        this.heapify(i)
      }
    } while (this.nodeOutOfPlace)
    return this.list
  }

  remove() {
    const removedElement = this.list[0]
    this.list[0] = this.list[this.list.length - 1]
    this.list.pop()

    do {
      this.nodeOutOfPlace = false
      for (let i = 0; i < Math.floor(this.list.length / 2); i++) {
        this.heapify(i)
      }
    } while (this.nodeOutOfPlace)

    return removedElement
  }
}

// builds heap from list and returns four largest integers removed from heap
const getFourthLargestIntegers = list => {
  if (list.length < 4) {
    return list
  }

  const heap = new Heap(list)
  heap.buildMaxHeap()
  const fourthLargest = []
  for (let i = 0; i < 4; i++) {
    fourthLargest.push(heap.remove())
  }

  return fourthLargest
}

module.exports = getFourthLargestIntegers
