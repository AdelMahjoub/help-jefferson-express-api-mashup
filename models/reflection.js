const uuid = require('uuid');
const moment = require('moment');

let reflections = [];

class Reflection {
    /**
     * 
     * @param {object} props 
     */
    constructor(props = {}) {
        this.id = uuid.v4();
        this.success = props.success || '';
        this.lowPoint = props.lowPoint || '';
        this.takeAway = props.takeAway || '';
        this.createdDate = moment.now();
        this.modifiedDate = moment.now();
    }

    /**
     * @returns {[Reflection]}
     */
    static findAll() {
        return reflections;
    }

    /**
     * 
     * @param {string} id
     * @returns {Reflection} 
     */
    static findOne(id) {
        return reflections.find(reflection => reflection.id === id);
    }

    save() {
        reflections.push(this);
    }

    /**
     * 
     * @param {object} data 
     */
    update(data = {}) {
        Object.keys(this).forEach(prop => {
            if(prop !== 'id' && data[prop]) {
                this[prop] = data[prop]
            }
        });
        this.modifiedDate = moment.now();
    }

    /**
     * 
     * @param {string} id 
     */
    static delete(id) {
        reflections = reflections.filter(reflection => reflection.id !== id);
    }

}

module.exports = Reflection;