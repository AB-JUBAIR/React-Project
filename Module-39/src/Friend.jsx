export default function Friend({Friend}){
    console.log(Friend);
    
    const {name, email }= Friend;
    return (
        <div>
            <h1>Name: {name}</h1>
            <h3>Email : {email}</h3>
        </div>
    );
};