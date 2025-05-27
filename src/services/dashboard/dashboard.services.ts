import DSAStep from "../../models/DsaSteps"




export const dashboardServices = async() =>{
  try{
    const dsaSteps = await DSAStep.findAll();
    if(dsaSteps){
      return dsaSteps
    }else{
      return null;
    }

  }catch(error){
    return null;
  }
}