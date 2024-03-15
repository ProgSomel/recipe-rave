import PropTypes from 'prop-types';


const WantToCook = ({wantToCook}) => {
    console.log(wantToCook);

    return (
        <div>
            
        </div>
    );
};


WantToCook.propTypes = {
wantToCook: PropTypes.object.isRequired,
};


export default WantToCook;
