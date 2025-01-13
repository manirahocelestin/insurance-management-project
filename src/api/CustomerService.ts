
import axiosInstance from "./configuration";
import endPoints from './EndPoint'

const handleApiError = (error) => {
  console.error('API Error:', error);
  throw error;
};

const CustomerServices = {
  // Generic GET request handler
  getRequest: async (endpoint) => {
    try {
      const response = await axiosInstance.get(endpoint);
      return response.data;
    } catch (error) {
      return handleApiError(error);
    }
  },

  // Customer CRUD operations
  getAllCustomers: () => CustomerServices.getRequest(endPoints.customer),
  createCustomer: async (customerData) => {
    try {
      const response = await axiosInstance.post(endPoints.customer, customerData);
      return response.data;
    } catch (error) {
      return handleApiError(error);
    }
  },

  // Location data
  getCountry: () => CustomerServices.getRequest(endPoints.country),
  getProvince: () => CustomerServices.getRequest(endPoints.province),
  getDistrict: () => CustomerServices.getRequest(endPoints.district),
  getSector: () => CustomerServices.getRequest(endPoints.sector),
  getVillage: () => CustomerServices.getRequest(endPoints.village),

  // Customer attributes
  getCustomerGender: () => CustomerServices.getRequest(endPoints.customerGender),
  getCustomerStatus: () => CustomerServices.getRequest(endPoints.customerStatus),
  getSalutation: () => CustomerServices.getRequest(endPoints.salutation),
  getMaritalStatus: () => CustomerServices.getRequest(endPoints.maritalStatus),
  getNationalId: () => CustomerServices.getRequest(endPoints.nationalId),

  // Economic data
  getEconomicSubSector: () => CustomerServices.getRequest(endPoints.economicSubSector),
  getIncome: () => CustomerServices.getRequest(endPoints.income),
  getIncomeFrequency: () => CustomerServices.getRequest(endPoints.incomeFrequency),
  getNaicsCode: () => CustomerServices.getRequest(endPoints.naicsCode),
  getOccupation: () => CustomerServices.getRequest(endPoints.occupation),

  // Insurance specific
  getDuration: () => CustomerServices.getRequest(endPoints.duration),
  getExcess: () => CustomerServices.getRequest(endPoints.duration),
  getFeesSumInsurance: () => CustomerServices.getRequest(endPoints.feesSumInsurance),
  getFire: () => CustomerServices.getRequest(endPoints.fire),
  getLoadingFactor: () => CustomerServices.getRequest(endPoints.loadingFactor),
  getTheft: () => CustomerServices.getRequest(endPoints.theft),
  getThirdParty: () => CustomerServices.getRequest(endPoints.thirdParty),

  // Vehicle related
  getVehicleType: () => CustomerServices.getRequest(endPoints.vehicleType),
  getVehicleUsageType: () => CustomerServices.getRequest(endPoints.vehicleUsageType),

  // Other services
  getCommonResidencyType: () => CustomerServices.getRequest(endPoints.commonResidencyType),
  getEducation: () => CustomerServices.getRequest(endPoints.education),
  getLegalStatus: () => CustomerServices.getRequest(endPoints.legalStatus),
  getRelatedParty: () => CustomerServices.getRequest(endPoints.relatedParty),
  getRelationship: () => CustomerServices.getRequest(endPoints.relationship),
  getVisionSbu: () => CustomerServices.getRequest(endPoints.visionSbu),
  getSocialEconomic: () => CustomerServices.getRequest(endPoints.socialEconomic),
};

export default CustomerServices;


// // # Service to handle Employee-related API requests

// import axiosInstance from './axiosInstance';
// import endpoints from './endpoints';

// const EmployeeService = {
//   getAllEmployees: async () => {
//     const response = await axiosInstance.get(endpoints.employees);
//     return response.data;
//   },
//   getEmployeeById: async (id) => {
//     const response = await axiosInstance.get(`${endpoints.employees}/${id}`);
//     return response.data;
//   },
//   createEmployee: async (employeeData) => {
//     const response = await axiosInstance.post(endpoints.employees, employeeData);
//     return response.data;
//   },
//   updateEmployee: async (id, employeeData) => {
//     const response = await axiosInstance.put(`${endpoints.employees}/${id}`, employeeData);
//     return response.data;
//   },
//   deleteEmployee: async (id) => {
//     const response = await axiosInstance.delete(`${endpoints.employees}/${id}`);
//     return response.data;
//   },
// };

// export default EmployeeService;