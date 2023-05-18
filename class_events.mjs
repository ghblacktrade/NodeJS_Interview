import {EventEmitter} from "events";


class Post extends  EventEmitter {
    constructor(author, text) {
        super()
        this.author = author
        this.text = text
        this.likes = 0
    }

    like(username) {
        if (!username) {
            this.emit('err', new Error('No username'))
        }
        this.likes++
        this.emit('like', username)
    }
}

const myPost = new Post('Pasha', 'My great poker!')


console.log(myPost.author)
console.log(myPost.text)
console.log(myPost.likes)


myPost.like()
console.log(myPost.likes)