import { SelectChangeEvent } from "@mui/material";
import { ChangeEvent, } from "react";


const handleSelectChange = (e: SelectChangeEvent, setHandler) => {
    const { name, value } = e.target;
    const goal = { [name]: value };
    setHandler(goal);
};

const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setHandler: unknown) => {
    const { name, value } = e.target;
    const goal = { [name]: value };
    setHandler(goal)
}





const useInputManagement = () => {
    return {handleInputChange, handleSelectChange}
}


export default useInputManagement