import DSAStep from "../../models/DsaSteps"




export const dashboardServices = async() =>{
  try{
    const dsaSteps = await DSAStep.findAll();
    if(dsaSteps){
      
      // Data modifying as per required for dashboard.
      const data = dsaSteps.map((currentElement) =>{
        return [currentElement.dataValues]
      })
      
      return data
    }else{
      return null;
    }

  }catch(error){
    return null;
  }
}