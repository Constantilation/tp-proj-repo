/**
 *  current desk singleton
 */
class CurrentDesk {
    constructor(){
        this.State = {
            getSomePinsFunc : "null",
            numberOfPins:0,
            searchReverseCheckbox : null,
            searchObj : "pin",
            searchFilter: null,
            searchTime: null,
            searchOrderDesc: 0,
            searchUrl : "",
        };
    }
}
export default  new CurrentDesk();
