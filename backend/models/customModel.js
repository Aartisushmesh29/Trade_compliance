module.exports = {
    customDutyCalculation : async (modelParams) => {
        const   { cifValue, customDuty, VAT, totalImportCode } = modelParams  // Destructuring the parameter modelParams object 

        return {
            CIF_Value : `$${cifValue}` ,         
            Customs_Duty : `$${customDuty}`,       
            VAT : `$${VAT}`,
            Total_Import_Cost : `$${totalImportCode}`
        }
    },
};