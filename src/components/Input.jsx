import PropTypes from 'prop-types';

export function Input(props) {
    return (
        <div className="input-group">
            <input  value={props.value} 
                    onChange={props.handleChange} 
                    placeholder={props.placeholder} 
                    type={props.type} 
                    className="input_search rounded form-control"/>
            <span className="input-group-append">
                <button type="button" className="border border-start-0 ms-n10 rounded-0 rounded-end btn btn-white">
                    <img src={props.src} alt={props.alt} className=""/>
                </button>
             </span>
        </div>
    )
}

Input.propTypes = {
    src: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    alt: PropTypes.string,
    handleChange:PropTypes.func,
    value:PropTypes.string
};