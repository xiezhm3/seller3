(function LinkedList() {
    "use strict";
    let Node = (element) => {
        this.element = element;
        this.next = null;
    };

    let length = 0;
    let head = null;

    this.append = (element) => {
        let node = new Node(element);
        let current;
        if (head === null) {
            head = node;
        } else {
            current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }

        length = length + 1;
    };

    this.insert = (position, element) => {
        if (position > 0 && position <= length) {
            let node = new Node(element);
            if (head === null) {
                head = node;
                return true;
            }
            let current = head;
            let previous;
            if (position === 0) {
                node.next = current;
                head = node; // TODO
            } else {
                while (position > 0) {
                    previous = current;
                    current = current.next;
                    position--;
                }
                node.next = current;
                previous.next = node;
            }
            length++;
            return true;
        } else {
            return false;
        }
    };

    this.removeAt = (position) => {
        if (position > -1 && position <= length) {
            let current = head;
            let previous;
            let index = 0;
            if (position === 0) {
                head = current.next;
            } else {
                while (index < position) {
                    previous = current;
                    current = current.next;
                    index = index + 1;
                }
                previous.next = current.next;
                length = length - 1;

                return current.element;
            }
        } else {
            return null;
        }
    };

    this.remove = (element) => {
        if (length > 0) {
            let current = head;
            let previous = current;
            let isRemove = false;
            while (!isRemove) {
                if (current.element === element) {
                    previous.next = current.next;
                    isRemove = true;
                    length = length - 1;
                } else {
                    previous = current;
                    current = current.next;
                }
            }
        }
    };

    this.indexOf = (element) => {
        if (head === null) {
            return -1;
        }
        let current = head;
        let index = 0;
        let isHasFound = false;
        while (!isHasFound && current) {
            if (current.element === element) {
                isHasFound = true;
            } else {
                current = current.next;
                index = index + 1;
            }
        }
        return isHasFound ? index : -1;
    };

    this.isEmpty = () => {
        return length === 0;
    };

    this.size = () => {
        return length;
    };

    this.getHead = () => {
        return head;
    };

    this.toString = () => {
        let current = head;
        let str = '';
        while (current) {
            str += current.element + current.next ? 'n' : '';
            current = current.next;
        }
        return str;
    };

    this.print = () => {
        console.log(this.toString());
    };
})();