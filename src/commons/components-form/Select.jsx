const Select = ({label, ...rest}) => {
    return (
        <div>
            <div className="input-group mb-3">
                <span className="input-group-text"><i className="fa-solid fa-play"></i></span>
                <select { ...rest}>
                    <option value=''>--Selec {label}--</option>
                    { rest.data ? rest.data.map((option, i) => {
                        return(<option value={option.id}>{option.name}</option>)
                    }) : 'No hay nada'}
                </select>
            </div>
        </div>
    )
}

export default Select  