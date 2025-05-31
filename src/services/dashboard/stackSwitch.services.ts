import StackDetails from "../../models/dashboard/Stacks_details"


export const StackSwitchServices = async() =>{

    try{
        // Getting all data from stacks_details table.
        const stackDetailsData = StackDetails.findAll();
        return stackDetailsData;

    }catch(error){
        console.log("Error is :", error)
    }
}