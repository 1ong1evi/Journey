class Node:
    def __init__(self, value, prev_node=None, next_node=None):
        self.value = value
        self.prev_node = prev_node
        self.next_node = next_node

    def get_value(self):
        return self.value

    def get_prev_node(self):
        return self.prev_node

    def get_next_node(self):
        return self.next_node

    def set_prev_node(self, prev_node):
        self.prev_node = prev_node

    def set_next_node(self, next_node):
        self.next_node = next_node


class DoublyLinkedList:
    def __init__(self):
        self.head_node = None
        self.tail_node = None

    def add_to_head(self, new_value):
        new_head = Node(new_value)
        current = self.head_node

        if current != None:
            current.set_prev_node(new_head)
            new_head.set_next_node(current)

        self.head_node = new_head

        if self.tail_node == None:
            self.tail_node = new_head

    def add_to_tail(self, new_value):
        new_tail = Node(new_value)
        current = self.tail_node

        if current != None:
            current.set_next_node(new_tail)
            new_tail.set_prev_node(current)

        self.tail_node = new_tail

        if self.head_node == None:
            self.head_node = new_tail

    def remove_head(self):
        removed_head = self.head_node

        if removed_head == None:
            return None

        self.head_node = removed_head.get_next_node()

        if self.head_node != None:
            self.head_node.set_prev_node(None)

        if removed_head == self.tail_node:
            return self.remove_tail()

        return removed_head.get_value()

    def remove_tail(self):
        removed_tail = self.tail_node

        if removed_tail == None:
            return None

        self.tail_node = removed_tail.get_prev_node()

        if self.tail_node != None:
            self.tail_node.set_prev_node(None)

        if removed_tail == self.head_node:
            return self.remove_head()

        return removed_tail.get_value()

    def removed_by_value(self, value_to_remove):
        node_to_remove = None
        current_node = self.head_node

        while current_node != None:
            if current_node.get_value() == value_to_remove:
                node_to_remove = self.head_node
                break
        current_node = current_node.get_next_node()

        if node_to_remove == None:
            return None

        if node_to_remove == self.head_node:
            self.remove_head()
        elif node_to_remove == self.tail_node:
            self.remove_tail()
        else:
            next_node = node_to_remove.get_next_node()
            prev_node = node_to_remove.get_prev_node()
            next_node.set_prev_node(prev_node)
            prev_node.set_next_node(next_node)
        return node_to_remove.get_value()
