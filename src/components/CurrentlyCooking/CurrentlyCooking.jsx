import PropTypes from 'prop-types';


const CurrentlyCooking = ({currentlyCooking}) => {
    const {recipe_id, recipe_name, preparing_time, calories} = currentlyCooking;
    return (
        <div>
        <div className="overflow-x-hidden font-light">
<table className="">
{/* head */}

<tbody>
      {/* row 1 */}
      <tr className='flex items-center  mt-5'>
        <tr className='flex items-center gap-4 justify-start'>
        <th>{}</th>
        <td>{recipe_name}</td>
        <td>{preparing_time} Minutes</td>
        <td>{calories} Calories</td>
        </tr>
        <tr>
            <td><button onClick={()=>handleCurrentlyCooking(recipe_id)} className='bg-[#0BE58A] rounded-full px-2'>Preparing</button></td>
        </tr>
        
      </tr>
      
    </tbody>
</table>
</div>
    </div>
    );
};


CurrentlyCooking.propTypes = {
    currentlyCooking: PropTypes.object
};


export default CurrentlyCooking;
