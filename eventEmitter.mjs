import events, {EventEmitter} from 'events'

const pashaEmitter = new EventEmitter()

pashaEmitter.on('pashaTime', (seconds) => {
    console.log(`Pasha event in ${seconds} seconds`)
});

setTimeout(() => {
    pashaEmitter.emit('pashaTime', 1);
}, 1000)

pashaEmitter.once('single', () => {
    console.log('Pasha single')
})

