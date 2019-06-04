export default Social = {
    share(friendName) {
        console.log(friendName + " shares " + this.title);
    },
    like(friendName) {
        console.log(friendName + " likes " + this.title);
    }
};