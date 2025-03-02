

export interface BasicCustomerInfo{
        customerType: string,
        customer_ID: string,
        salutation: string ,
        national_ID_Type: string,
        national_ID_Number: string,
        customer_Name: string,
        surname: string ,
        forename_1: string 
        


      
};
export interface ExtendedCustomerInfo{
    forename_2: string,
    customer_Acronym: string,
    vision_OUC: string,
    vision_SBU: string,
    customer_Open_Date: string,
    customer_Gender: string,
    date_of_Birth: string,
    place_of_Birth: string

};
export interface PersonalDetails{
    marital_Status: string,
    spouse_Name: string,
    social_Economic_Class: string,
    next_of_kin_Name: string,
    next_of_kin_ID_Type: string,
    next_of_kin_ID_Number: string,
    next_of_kin_Telephone: string,
    next_of_kin_Email_ID: string

}

export interface  FamilyAndNationality{
    number_Of_Dependants: string,
    nationality: string,
    residence: string,
    comm_Address_2: string,
    province: string,
    district: string,
    sector: string,
    cell: string

}

export interface CommunicationAddress{
    comm_Address_village: string,
    comm_Country: string,
    comm_Residence_Type: string,
    perm_Address_1: string,
    perm_Address_2: string,
    perm_province_id: string,
    perm_district: string,
    perm_sector: string

}

export interface EmploymentAndEducation{
    education: string,
    customer_TIN: string,
    economic_Sub_Sector_Code_ISIC: string,
    related_Party: string,
    relationship_Type: string,
    related_Party_Name: string,
    health_Insurance_Number: string,
    occupation: string

}

export interface employerDetails{
    employer_Name: string,
    employee_ID: string,
    emp_Address_1: string,
    emp_Address_2: string,
    emp_Country: string,
    emp_province: string,
    emp_district: string,
    emp_sector: string
    
};

export interface IncomeAndStatus{
    emp_cell: string,
    emp_Village: string,
    income: string,
    income_Frequency: string,
    legal_Status: string,
    customer_Status: string,
    date_Last_Modified: string,
    le_Book: string
    
}

export interface AdditionalInformation{
    naics_Code: string,
    ssn_Number: string 
   

  
}
export interface FormDataInterface {
    basicCustomerInter1: BasicCustomerInfo,
    extendedCustomerInter2: ExtendedCustomerInfo,
    personalDetailsInter3: PersonalDetails,
    FamilyAndNationalityinter4: FamilyAndNationality,
    communicationAddressInter5: CommunicationAddress,
    EmploymentAndEducationInter6: EmploymentAndEducation,
    employerDetailsInter7: employerDetails,
    IncomeAndStatusInter8: IncomeAndStatus,
    additionalInfoInter9: AdditionalInformation;

    }

    export interface FormErrors {
        basicInfo?: Partial<Record<keyof BasicCustomerInfo, String>>;
        extendedInfo?: Partial<Record<keyof ExtendedCustomerInfo, String>>;
        personalDet?: Partial<Record<keyof PersonalDetails, String>>;
        familyNatianality?: Partial<Record<keyof FamilyAndNationality, String>>;
        communicationAdd?: Partial<Record<keyof CommunicationAddress, String>>;
        employmentEduca?: Partial<Record<keyof EmploymentAndEducation, String>>;
        employerDetls?: Partial<Record<keyof employerDetails, String>>;
        incomeStat?: Partial<Record<keyof IncomeAndStatus, String>>;
        additionalInf?: Partial<Record<keyof AdditionalInformation, String>>;



    }



