import {EventEmitter} from "events"

const myEmitter = new EventEmitter()

myEmitter.on('timeout', (seconds) => {
    console.log(`Timeout event ${seconds} seconds!`)
})



setTimeout(() => myEmitter.emit('timeout', 1), 1000)
setTimeout(() => myEmitter.emit('timeout', 2), 2000)


myEmitter.once('singleEvent', () => {
    console.log('single event Pasha')
})

setTimeout(() => myEmitter.emit('singleEvent'), 500)
setTimeout(() => myEmitter.emit('singleEvent'), 4000)
