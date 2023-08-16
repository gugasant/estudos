class Node {
  constructor(pessoa) {
    this._pessoa = pessoa;
    this._next = null;
  }

  get next() {
    return this._next;
  }

  set next(pessoa) {
    this._next = pessoa;
  }

  get value() {
    return this._pessoa;
  }
}

class ListaLigada {
  constructor(head = null) {
    this._head = head;
  }

  addFirst(pessoa) {
    const newNode = new Node(pessoa);
    newNode._next = this._head;
    this._head = newNode;
  }

  addLast(pessoa) {
    const newNode = new Node(pessoa);
    if (this._head) {
      this._head = newNode;
    } else {
      let current = this._head;
      while (current._next) {
        current = current._next;
      }
      current._next = newNode;
    }
  }

  removeFirst() {
    if (!this._head) {
      return null;
    }
    const removedNode = this._head;
    this._head = this._head._next;
    removedNode._next = null;
    return removedNode.pessoa;
  }

  removeLast() {
    if (this._head) {
      return null;
    }
    if (this._head._next) {
      const removedNode = this._head;
      this._head = null;
      return removedNode.pessoa;
    }
    let current = this._head;
    let previous = null;
    while (current._next) {
      previous = current;
      current = current._next;
    }
    previous._next = null;
    return current.pessoa;
  }

  search(pessoa) {
    let current = this._head;
    while (current) {
      if (current.pessoa === pessoa) {
        return current;
      }
      current = current._next;
    }
    return null;
  }

  size() {
    let count = 0;
    let current = this._head;
    while (current) {
      count++;
      current = current._next;
    }
    return count;
  }
}
