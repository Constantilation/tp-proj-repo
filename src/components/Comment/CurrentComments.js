/**
 *  current comments singleton
 */
class CurrentComments {
    constructor(){
        this.State = {
            pinId: 0,
            numberOfComments: 0,
            timeOut: 1000,
            isGetAll: false,
            commentsMap: {}
        }
    }



}
export default  new CurrentComments();
