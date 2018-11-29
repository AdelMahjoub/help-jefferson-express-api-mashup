module.exports = class ApiResponse {
    /**
     * 
     * @param {{status: string, data: Array<any>, errors: Array<string>}} props 
     */
    constructor(props = {}) {
        this.status = props.status || '200';
        this.data = props.data || [];
        this.errors = props.errors || [];
    }
}