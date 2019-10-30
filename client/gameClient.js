import nengi from 'nengi'
import nengiConfig from '../common/nengiConfig.js'
import clientHookAPI from './clientHookAPI.js'
import createHooks from './hooks/createHooks.js'
import renderer from './graphics/renderer.js'

const client = new nengi.Client(nengiConfig, 100)

const state = {
    /* clientside state can go here */
}

/* create hooks for any entity create, delete, and watch properties */
clientHookAPI(client, createHooks(state))

client.on('connected', res => { console.log('connection?:', res) })
client.on('disconnected', () => { console.log('connection closed') })

/* on('message::AnyMessage', msg => { }) */
client.on('message::NetLog', message => {
    console.log(`NetLog: ${ message.text }`)
})

client.connect('ws://localhost:8079')

const update = (delta, tick, now) => {
    client.readNetworkAndEmit()
    /* clientside logic can go here */
    renderer.update(delta)
    client.update()
}

export {
    update,
    state
}
