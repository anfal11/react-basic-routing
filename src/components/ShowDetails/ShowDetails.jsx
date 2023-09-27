import { PropTypes } from 'prop-types';
import { useLoaderData, useNavigate } from 'react-router-dom';
const ShowDetails = () => {
    const user = useLoaderData();
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1);
    }
    const { website, company, address, phone } = user;
    return (
        <div className='text-center border border-yellow-500 p-10 rounded-3xl shadow-xl'>
            <p> <span className='text-bold text-base'>Phone:</span> {phone}</p>
            <p> <span className='text-bold text-base'>Company:</span> {company.name}</p>
            <p> <span className='text-bold text-base'>Website:</span> {website}</p>
            <p> <span className='text-bold text-base'>City:</span> {address.city}</p>
            <p> <span className='text-bold text-base'>Street:</span> {address.street}</p>

            <button className='mt-3 bg-indigo-700 text-white p-2 rounded-lg' onClick={handleClick}>
                Go Back
            </button>
        </div>
    );
};
ShowDetails.propTypes = {
    user: PropTypes.obj,
  };
export default ShowDetails;