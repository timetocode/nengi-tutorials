import nengi from 'nengi'
import nengiConfig from '../common/nengiConfig.js'
import instanceHookAPI from './instanceHookAPI.js'

const instance = new nengi.Instance(nengiConfig, { port: 8079 })
instanceHookAPI(instance)

/* serverside state here */

instance.on('connect', ({ client, callback }) => {
    /* client init logic & state can go here */
    callback({ accepted: true, text: 'Welcome!' })
})

instance.on('disconnect', client => {
    // disconnected
})

/* on('Command:AnyCommand', ({ command, client }) => { }) */

const update = (delta, tick, now) => {
    instance.emitCommands()
    /* serverside logic can go here */
    instance.update()
}

export {
    update
}
