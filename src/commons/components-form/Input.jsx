const Input = ({label, ...rest}) => {
    return (
        <div>
            {/* <label>{label}</label> */}
            <div className="input-group mb-3">
                <span className="input-group-text"><i className="fa-solid fa-comment"></i></span>
                <input {...rest}>
                </input>
            </div>
           
        </div>
    )
    
}

export default Input