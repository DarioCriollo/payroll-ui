import { useState } from "react";

const useForm = (inicial) => {
    //const [value, setValue] = useState({ id: '', name: '', description: '', state: false, category: '', level: '1' })
    const [value, setValue] = useState(inicial)
    //const [errors, setErrors] = useState({})

    return [value, setValue]
}

export default useForm