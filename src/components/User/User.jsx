import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {id, name, email } = user; 
    return (
       
         <div className='border border-yellow-500 p-10 rounded-3xl shadow-xl'>
            <h2> <span className='text-bold text-base'>Name:</span> {name}</h2>
            <p> <span className='text-bold text-base'>Email:</span> {email}</p>
            
            <div className='mt-4'>
                <Link to={`/details/${id}`}> <button className='bg-indigo-700 text-white p-2 rounded-lg'> Show Details </button></Link>
            </div>
     
        </div>
       
    );
};
User.propTypes = {
    user: PropTypes.obj,
  };
export default User;