import DeleteButton from "../Buttons/DeleteButton";


export default function UserProfile() {
    const name = localStorage.getItem('name');
    
    const handleOnclick = () =>{
        localStorage.removeItem('name');
        window.location.href = '/';
    }
    return (
        
        <div>
            <h1>Hii ! {name}</h1>
            <button className="button type1" onClick={handleOnclick} style={{backgroundColor: "gray"}}>LogOut</button>
            <br/>
            <DeleteButton/>
        </div>
    )
}
