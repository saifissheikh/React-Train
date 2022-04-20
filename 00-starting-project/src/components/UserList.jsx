const UserList = (props) => {
    return ( <div>
        {props.list.map((item) => {
            return <input type="text" value={item.userName + ' '  + item.age} readOnly />
        })}
    </div> );
}
 
export default UserList;