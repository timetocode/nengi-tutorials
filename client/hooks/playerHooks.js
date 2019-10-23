import Player from '../graphics/Player'
import renderer from '../graphics/renderer'

export default (state) => {
    return {
        create({ data, entity }) {
            const graphics = new Player()
            renderer.middleground.addChild(graphics)
            return graphics
        },
        delete({ nid, graphics }) {
            renderer.middleground.removeChild(graphics)
        },
        watch: {
        }
    }
}
