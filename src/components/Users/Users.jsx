import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {

    const users = useLoaderData();
    console.log(users);
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold text-center text-sky-600 mb-2"> Users: {users.length} </h1>
            <p className="text-2xl font-semibold text-center"> Fantastic and awesome users. </p>
            <div className='mt-5 grid gap-10 md:grid-cols-2 lg:grid-cols-3'>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;