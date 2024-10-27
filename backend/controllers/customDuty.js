const admin = require('../config/firebaseConfig');
const UserAPI = require('../models/user.model');
const model = require('../models/customModel.js')

module.exports = {
    calculateCustomDuty: async (req, res) => {
        try {
            const {country,hs_code,currency,cost_of_goods,
                uom,mode_of_transport,insurance,freight,valuation_method,
                duty_rate,vat_rate,additional_duties
            } = req.body;
    
            // Convert duty_rate and vat_rate from string to number
            const dutyRateValue = parseFloat(duty_rate) / 100; // Convert "5%" to 0.05
            const vatRateValue = parseFloat(vat_rate) / 100; // Convert "0%" to 0.0
    
            // Calculate CIF Value
            const cifValue = cost_of_goods + insurance + freight;
            
            // Calculate Custom Duty
            const customDuty = (cifValue * dutyRateValue)/100; // using dutyRateValue instead of duty_rate
            console.log( cifValue);
            
            // Calculate VAT
            const VAT = ((cifValue + customDuty) * vatRateValue)/100; // using vatRateValue instead of vat_rate
            
            // Calculate Total Import Cost
            const totalImportCode = cifValue + customDuty + VAT;
    
            const modelParams = { cifValue, customDuty, VAT, totalImportCode };
    
            const formattedData = await model.customDutyCalculation(modelParams);
    
            const data = {
                status : 200, 
                message : "Calculation is successfull",
                data : formattedData
            }

            res.send(data);
        } catch (error) {
            console.error('Error during calculation:', error);
            res.status(400).json({ error: error.message });
        }
    }
}