

class todoItem {
    constructor(id, title, priority,group , completed = false) {
        this.id = id;
        this.title = title;
        this.completed = completed;
    }

    toggle() {
        this.completed = !this.completed;
    }
}