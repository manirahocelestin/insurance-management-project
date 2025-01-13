
// import React, { useState } from "react";
// import { BasicInfoSection } from "../BasicCustomerInfo";
// import { AdditionalInformationSection } from "../AdditionalInformation";
// import { ComminucationAddressSection } from "../CommunicationAddress";
// import { EmployerDetaislSection } from "../EmployerDetails";
// import { EmploymentAndEducationSection } from "../EmploymentAndEducation";
// import { ExtendedCustomerInfoSection } from "../ExtendedCustomer";
// import { FamilyAndNationalitySection } from "../FamilyAndNationality";
// import { IncomeAndStatusSection } from "../IncomeAndStatus";
// import { PersonalDetailsSection } from "../PersonalDetails";
// import CustomerServices from "../../../api/CustomerService";





// export const CustomerForm = () => {
//  const [currentSection, setCurrentSection] = useState(0);
//  const [isLoading, setIsLoading] = useState(false);
//  const [errors, setErrors] = useState<Record<string, string>>({});

//  const [formData, setFormData] = useState({
//  basicCustomerInter1: {},
//  extendedCustomerInter2: {},
//  personalDetailsInter3: {},
//  FamilyAndNationalityinter4: {},
//  communicationAddressInter5: {},
//  EmploymentAndEducationInter6: {},
//  employerDetailsInter7: {},
//  IncomeAndStatusInter8: {},
//  additionalInfoInter9: {}
//  });

//  const handleChange = (section: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//  const { name, value } = e.target;
//  setFormData((prev) => ({
//  ...prev,
//  [section]: {
//  ...prev[section],
//  [name]: value,
//  },
//  }));
//  };



//  const sections = [
    
//  { component: <BasicInfoSection onChange={handleChange("basicCustomerInter1")} values={formData.basicCustomerInter1} /> },
//  { component: <ExtendedCustomerInfoSection onChange={handleChange("extendedCustomerInter2")} values={formData.extendedCustomerInter2} /> },
//  { component: <PersonalDetailsSection onChange={handleChange("personalDetailsInter3")} values={formData.personalDetailsInter3} /> },
//  { component: <FamilyAndNationalitySection onChange={handleChange("FamilyAndNationalityinter4")} values={formData.FamilyAndNationalityinter4} /> },
//  { component: <ComminucationAddressSection onChange={handleChange("communicationAddressInter5")} values={formData.communicationAddressInter5} /> },
//  { component: <EmploymentAndEducationSection onChange={handleChange("EmploymentAndEducationInter6")} values={formData.EmploymentAndEducationInter6} /> },
//  { component: <EmployerDetaislSection onChange={handleChange("employerDetailsInter7")} values={formData.employerDetailsInter7} /> },
//  { component: <IncomeAndStatusSection onChange={handleChange("IncomeAndStatusInter8")} values={formData.IncomeAndStatusInter8} /> },
//  { component: <AdditionalInformationSection onChange={handleChange("additionalInfoInter9")} values={formData.additionalInfoInter9} /> }
//  ];

//  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//  e.preventDefault();
//  setIsLoading(true);
//  setErrors({});

//  try {
//  const response = await CustomerServices.createCustomer(formData);
//  alert('Customer created successfully!');
//  setFormData({
//  basicCustomerInter1: {},
//  extendedCustomerInter2: {},
//  personalDetailsInter3: {},
//  FamilyAndNationalityinter4: {},
//  communicationAddressInter5: {},
//  EmploymentAndEducationInter6: {},
//  employerDetailsInter7: {},
//  IncomeAndStatusInter8: {},
//  additionalInfoInter9: {}
//  });
//  } catch (error) {
//  console.error('Error creating customer:', error);
//  setErrors({ general: 'Failed to create customer. Please try again.' });
//  } finally {
//  setIsLoading(false);
//  }
//  };

//  const handleNext = () => setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));
//  const handlePrevious = () => setCurrentSection((prev) => Math.max(prev - 1, 0));

//  return (
//  <div className="max-w-4xl mx-auto p-6">
//  <form onSubmit={handleSubmit}>
//  {errors.general && (
//  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
//  {errors.general}
//  </div>
//  )}

//  {sections[currentSection].component}

//  <div className="mt-8 flex gap-4">
//  {currentSection > 0 && (
//  <button
//  type="button"
//  onClick={handlePrevious}
//  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//  disabled={isLoading}
//  >
//  Previous
//  </button>
//  )}

//  {currentSection < sections.length - 1 && (
//  <button
//  type="button"
//  onClick={handleNext}
//  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//  disabled={isLoading}
//  >
//  Next
//  </button>
//  )}

//  {currentSection === sections.length - 1 && (
//  <button
//  type="submit"
//  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//  disabled={isLoading}
//  >
//  {isLoading ? 'Submitting...' : 'Submit'}
//  </button>
//  )}
//  </div>
//  </form>
//  </div>
//  );
// };

// export default CustomerForm;

import React, {Component, useState} from 'react';
import { BasicInfoSection } from '../BasicCustomerInfo';
import { AdditionalInformationSection } from '../AdditionalInformation';
import { ComminucationAddressSection} from "../CommunicationAddress";
import { EmployerDetailsSection } from '../EmployerDetails';
import { EmploymentAndEducationSection} from "../EmploymentAndEducation";
import { ExtendedCustomerInfoSection} from "../ExtendedCustomer";
import { FamilyAndNationalitySection} from "../FamilyAndNationality";
import {IncomeAndStatusSection} from "../IncomeAndStatus";
import { PersonalDetailsSection} from "../PersonalDetails"
import CustomerServices from '../../../api/CustomerService';


export const CustomerForm = () => {
    const [currentSection, setCurrentSection] = useState(0);
    const [isLoading, SetIsLoading] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const [formData, setFormData] = useState({
        basicCustomerInter1: {},
        extendedCustomerInter2: {},
        personalDetailsInter3: {},
        familyAndNationalityInter4: {},
        comminucationAddressInter5: {},
        employmentAndEducationInter6: {},
        employerDetailsInter7: {},
        incomeAndStatusInter8: {},
        additionInfoInter9: {}
        
    });

    const handleChange = (section: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [section]: {
                ...prev[section],
                [name]: value,
            },
        }));
    };
    
    const sections = [
        {component: <BasicInfoSection onChange={ handleChange("basicCutomerInter1")} values= {formData.basicCustomerInter1}/>},
        {component: <ExtendedCustomerInfoSection onChange={ handleChange("extendedCustomerInter2")} values={formData.extendedCustomerInter2}/>},
        {component: <PersonalDetailsSection onChange= {handleChange('personalDetailsInter3')} values = {formData.personalDetailsInter3}/>},
        {component: <FamilyAndNationalitySection onChange={ handleChange("familyAndNationalityInter4")} values = {formData.familyAndNationalityInter4}/>},
        {component: <ComminucationAddressSection onChange={ handleChange('comminucationAddressInter5')} values = {formData.comminucationAddressInter5}/>},
        {component: <EmploymentAndEducationSection onChange= { handleChange('employmentAndEducationInter6')} values= {formData.employmentAndEducationInter6}/>},
        {component: <EmployerDetailsSection onChange= {handleChange('employerDetailsInter7')} values ={formData.employerDetailsInter7}/>},
        {component: <IncomeAndStatusSection onChange = {handleChange('incomeAndStatusInter8')} values = {formData.incomeAndStatusInter8}/>},
        {component: <AdditionalInformationSection onChange = {handleChange('additionInfoInter9')} value= {formData.additionInfoInter9}/>}

    ];

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        SetIsLoading(true);
        setErrors({});

        try {
            const response = await CustomerServices.createCustomer(formData);
            alert('customer created successfully!');
            setFormData({
                basicCustomerInter1: {},
                extendedCustomerInter2: {},
                personalDetailsInter3: {},
                familyAndNationalityInter4: {},
                comminucationAddressInter5: {},
                employmentAndEducationInter6: {},
                employerDetailsInter7: {},
                incomeAndStatusInter8: {},
                additionInfoInter9: {}
            });
        } catch (error){
            console.error('error creating customer:', error);
            setErrors ({general: 'Failed to create customer. please try again.'});
        } finally {
            SetIsLoading(false);
        }
        };

        const handleNext =() => setCurrentSection((prev) => Math.min(prev + 1, sections.length -1));
        const handlePrevious = () => setCurrentSection((prev) => Math.max(prev -1, 0));

        return (
            <div className="max-w-4xl mx-auto p-6">
                <form onSubmit={handleSubmit}>
                    {errors.general && (
                        <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4'>
                        {errors.general}
                        </div>
                    )}

                    {sections[currentSection].component}

                    <div className='mt-8 flex gap-4'>
                        {currentSection > 0 && (
                            <button 
                            type='button'
                            onClick={handlePrevious}
                            className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                            disabled={isLoading}
                            >
                                Previous

                            </button>

                        )}

                        {currentSection < sections.length -1 && (
                            <button
                            type='button'
                            onClick={handleNext}
                            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                            disabled={isLoading}
                            >
                                Next
                            </button>
                        )}

                        {currentSection === sections.length - 1 && (
                            <button 
                            type='submit'
                            className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                            disabled={isLoading}
                            >
                                {isLoading ? 'Submitting...' : 'Submit'}
                            </button>
                        )}
                    </div>
                </form>
            </div>
        )
    

        

    }
    export default CustomerForm;

        

