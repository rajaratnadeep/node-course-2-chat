[{
    id: '',
    name: 'Raja',
    room: 'The Office Fans'
}]

//adduser(id,name,room)
//removeUser(id)
//getUser(id)
//getUserList(room)

class Users{
    constructor(){
        this.users = [];
    }
    addUser(id,name,room){
        var user = {id, name ,room};
        this.users.push(user);
        return user; 
    }
    removeUser(id){
        var user =  this.getUser(id);

        if(user){
            this.users = this.users.filter((user)=>user.id !== id); //keep the element which do not match the id of the 'to be removed item'
        }

        return user;
        //return the user that was removed
    }
    getUser(id){
        return this.users.filter((user)=>user.id === id)[0];
    }
    getUserList(room){
        var users = this.users.filter((user)=>{
            return user.room === room; //keep only those which match 'room' in the new users array
        })
        var namesArray = users.map((user)=>user.name); //previous line syntax is simplified to this format

        return namesArray;
    }
}

module.exports = {Users};