function DropDown( props ){
    const { optionsList } = props
    return(
        <select name="" id="">
            {
                optionsList.map( ( option, index ) => {
                    return <option key={index}value={option}>{option}</option>
                })
            }
        </select>
    )
}

export default DropDown