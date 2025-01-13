



import { useState } from "react";
import {z} from   "zod";
import { FormDataInterface,
  BasicCustomerInfo, 
   PersonalDetails,
   EmploymentAndEducation,
    ExtendedCustomerInfo,
    FamilyAndNationality,
    IncomeAndStatus,
    AdditionalInformation,
    CommunicationAddress,
    employerDetails,
    FormErrors
 } from "../types/formTypes";


 

export const emptyForm = () =>{
   const [formData, setFormData] = useState<FormDataInterface>({
      basicCustomerInter1:{
         customerType: "",
         customer_ID: "",
         salutation: "" ,
         national_ID_Type: "",
         national_ID_Number:"",
         customer_Name: "",
         surname: "" ,
         forename_1: "" 
         

     },
      extendedCustomerInter2: {
         forename_2:"",
         customer_Acronym:"",
         vision_OUC: "",
         vision_SBU: "",
         customer_Open_Date: "",
         customer_Gender: "",
         date_of_Birth: "",
         place_of_Birth: ""


      },
      personalDetailsInter3:{
         marital_Status: "",
         spouse_Name:  "",
         social_Economic_Class:  "",
         next_of_kin_Name:  "",
         next_of_kin_ID_Type:  "",
         next_of_kin_ID_Number:  "",
         next_of_kin_Telephone:  "",
         next_of_kin_Email_ID:  ""


      },
      FamilyAndNationalityinter4:{
         number_Of_Dependants: "",
         nationality: "",
         residence: "" ,
         comm_Address_2: "",
         province: "",
         district: "",
         sector: "",
         cell: ""

      },
      communicationAddressInter5:{
         comm_Address_village: "",
         comm_Country: "",
         comm_Residence_Type: "",
         perm_Address_1: "",
         perm_Address_2: "",
         perm_province_id:"",
         perm_district: "",
         perm_sector: ""


      },
      EmploymentAndEducationInter6:{
         education:"",
         customer_TIN: "",
         economic_Sub_Sector_Code_ISIC: "",
         related_Party: "",
         relationship_Type: "",
         related_Party_Name: "",
         health_Insurance_Number: "",
         occupation: ""

      },
      employerDetailsInter7:{
         employer_Name: "",   
         employee_ID: "",
         emp_Address_1: "",
         emp_Address_2: "",
         emp_Country: "",
         emp_province: "",
         emp_district: "",
         emp_sector: "" 

      }, 
      IncomeAndStatusInter8:{
         emp_cell: "",
         emp_Village: "",
         income: "",
         income_Frequency: "",
         legal_Status: "",
         customer_Status: "",
         date_Last_Modified: "",
         le_Book: ""
      },
      additionalInfoInter9:{
         naics_Code: "",
         ssn_Number: ""
         
      },
      


   });

   
   //const [errors, setErrors] = useState<FormData>(FORM_INITIAL_VALUE)({


   const [errors, setErrors] = useState<FormErrors>({
      basicInfo: {},
      extendedInfo: {},
      personalDet: {},
      familyNatianality: {},
      communicationAdd: {},
      employmentEduca: {},
      employerDetls: {},
      incomeStat: {},
      additionalInf: {},
      
      
   });

   const[isLoading, setIsLoading] = useState(false);

   const handleBasicInfoChange = (data: BasicCustomerInfo) => {
      setFormData((prev) => ({ ...prev, basicCustomerInter1: data }));
    };

    // const handleBasicInfoChange = (data: BasicInfoData) => {
    //   setFormData((prev) => ({ ...prev, basicInfo: data }));
    // };
  
  
    const handleextendedCustomerInfoChange = (data: ExtendedCustomerInfo) => {
      setFormData((prev) => ({ ...prev, extendedCustomerInter2: data }));
    };
  
   
    const handlePersonalDetailsChange = (data: PersonalDetails) => {
      setFormData((prev) => ({ ...prev, personalDetailsInter3: data }));
    };
  
    const handleFamilyAndNationalityChange = (data: FamilyAndNationality) => {
      setFormData((prev) => ({ ...prev, familyAndNationalityInter4: data }));
    };
  
    const handleCommunicationAddressChange = (data: CommunicationAddress) => {
      setFormData((prev) => ({ ...prev, communicationAddressInter5: data }));
    };
  
    const handleEmploymentAndEducationChange = (data: EmploymentAndEducation) => {
      setFormData((prev) => ({ ...prev, employmentAndEducationInter6: data }));
    };
  
    const handleEmployerDetailsChange = (data: employerDetails) => {
      setFormData((prev) => ({ ...prev, employerDetailsInter7: data }));
    };
  
    const handleIncomeAndStatusChange = (data: IncomeAndStatus) => {
      setFormData((prev) => ({ ...prev, IncomeAndStatusInter8: data }));
    };
    const handleAdditionalInfoChange = (data: AdditionalInformation) => {
      setFormData((prev) => ({ ...prev, additionalInfoInter9: data }));
    };
   
    
    const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();
      setIsLoading(true);
  
      const isValid = validateForm();
      if (isValid) {
        try {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          alert('Form submitted successfully!');
        } catch (error) {
          // setErrors((prev) => ({
          //   ...prev,
          //   form: 'Submission failed. Please try again.',
          // }));
        }
      }
  
      setIsLoading(false);
    };
  
    const validateForm = (): boolean => {
      // Add form validation logic here
      return true;
    };
  
    return {
      formData,
      errors,
      isLoading,
      handleBasicInfoChange,
      handleextendedCustomerInfoChange,
      handlePersonalDetailsChange,
      handleFamilyAndNationalityChange,
      handleCommunicationAddressChange,
      handleEmploymentAndEducationChange,
      handleEmployerDetailsChange,
      handleIncomeAndStatusChange,
      handleAdditionalInfoChange,
      
      handleSubmit,
    };
  };





       
   
      


      




        
    
   
   
   //  export const FORM_VALIDATION_SCHEMA_2 = z.object({
   //       BasicCustomerInfo: z.object({
   //          customerType: z.string().nonempty("Customer type is required"),
   //          customer_ID: z.string().nonempty("customer ID is required"),
   //          salutation: z.enum(['Mr', 'Mrs', 'Miss'], { 
   //             errorMap: () => ({ message: "Please select a salutation" })
   //           }),
   //          national_ID_Type: z.string().nonempty("national ID type is required"),
   //          national_ID_Number: z.number().min(16).max(20).nonnegative("National ID number is required"),
   //          customer_Name: z.string().nonempty("Customer name is required"),
   //          surname: z.string().optional(),
   //          forename_1: z.string().optional(),

   //       }),
   //       ExtendedCustomerInfo: z.object({
   //          forename_2: z.string().optional(),
   //          customer_Acronym: z.string().optional(),
   //          vision_OUC: z.string().optional(),
   //          customer_Gender: z.string().nonempty("customer gender is required"),
            
   //       }),
   //       PersonalDetails: z.object({
   //          marital_Status: z.string().nonempty("marital status is required"),
   //          next_of__kin_Telephone: z.string().nonempty("next of kin telephone is required"),
   //          next_of_kin_email_ID: z.string().nonempty("next of kin email ID is required"),
   //       }),
   //       FamilyAndNationality: z.object({
   //          nationalality: z.string().nonempty(" nationality is required"),
   //          residence: z.string().nonempty("residence is required"),
   //          comm_Address_2: z.string().optional(),
   //          province: z.string().nonempty("province is required"),
   //          sector: z.string().nonempty("sector is requird"),
   //          cell: z.string().nonempty("cell is required"),
   //       }),
   //       EmploymentAndEducation: z.object({
   //          education: z.string().nonempty("education is required"),
   //          customer_TIN: z.string().nonempty("customer TIN is required"),
   //          econmic_Sub_Sector_Code_ISIC: z.string().nonempty("economic sub sector code is required"),
   //          related_party: z.string().nonempty("related party is required"),
   //          relationship_Type: z.string().nonempty("relationship type is required"),
            

   //       }),
   //       additionalInformation: z.object({
   //          naics_code: z.string().nonempty("naics code is required"),
   //          ssn_number: z.string().nonempty("ssn number is required"),

   //       }),
         

   //    });
