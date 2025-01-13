// Types for endpoint categorization
type Endpoints = {
    // Customer core
    customer: string;
    getAll: string;
    
    // Location
    cell: string;
    village: string;
    sector: string;
    district: string;
    province: string;
    country: string;
    
    // Personal info
    customerGender: string;
    customerStatus: string;
    nationalId: string;
    education: string;
    maritalStatus: string;
    salutation: string;
    relationship: string;
    
    // Economic
    economicSubSector: string;
    incomeFrequency: string;
    income: string;
    occupation: string;
    naicsCode: string;
    socialEconomic: string;
    
    // Business/Legal
    legalStatus: string;
    relatedParty: string;
    visionSbu: string;
    commonResidencyType: string;
    
    // Insurance
    duration: string;
    excess: string;
    feesSumInsurance: string;
    fire: string;
    loadingFactor: string;
    occupant: string;
    ownDamage: string;
    territorialCoverLimit: string;
    theft: string;
    thirdParty: string;
    
    // Vehicle
    vehicleType: string;
    vehicleUsageType: string;
  };
  
  const endpoints: Endpoints = {
    // Customer core
    customer: 'createCustomer',
    getAll: 'findAll',
    
    // Location
    cell: 'findCell',
    village: 'findVillage',
    sector: 'findSector',
    district: 'findDistrict',
    province: 'findProvince',
    country: 'findCountry',
    
    // Personal info
    customerGender: 'findCustomerGender',
    customerStatus: 'findCustomerStatus',
    nationalId: 'findNationalId',
    education: 'findEducation',
    maritalStatus: 'findMaritalStatus',
    salutation: 'findSalutation',
    relationship: 'findRelationship',
    
    // Economic
    economicSubSector: 'findEconomicSubSector',
    incomeFrequency: 'findIncomeFrequency',
    income: 'findIncome',
    occupation: 'findOccupation',
    naicsCode: 'findNaicsCode',
    socialEconomic: 'findSocialEconomic',
    
    // Business/Legal
    legalStatus: 'findLegalStatus',
    relatedParty: 'findRelatedParty',
    visionSbu: 'findVisionSbu',
    commonResidencyType: 'findCommonResidencyType',
    
    // Insurance
    duration: 'getAllDuration',
    excess: 'getAllExcess',
    feesSumInsurance: 'getAllFeesSumInsurance',
    fire: 'getAllFire',
    loadingFactor: 'getLoadingFactor',
    occupant: 'getAllOccupant',
    ownDamage: 'getOwnDamage',
    territorialCoverLimit: 'getTerritorialCoverLimit',
    theft: 'getTheft',
    thirdParty: 'getThirdParty',
    
    // Vehicle
    vehicleType: 'getVehicleType',
    vehicleUsageType: 'getVehicleUsageType'
  };
  
  export default endpoints;