// import React from 'react';
// import { Input } from '../common/Input';
// import { Select } from '../common/Select';
// import { BasicCustomerInfo } from '../../types/formTypes';





// export interface BasicInfoSectionProps {
//   data: BasicCustomerInfo;
//   onChange: (data: BasicCustomerInfo) => void;
//   errors?: Partial<Record<keyof BasicCustomerInfo, string>>;
// }

// export const BasicInfoSection: React.FC<BasicInfoSectionProps> = ({ data, onChange, errors = {} }) => {
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     onChange({ ...data, [name]: value });
//   };

//   return (
//     <div>
//       <Input
//         label='customer Type'
    
//         name='customerType'
//         value=""
//         onChange={handleChange}
//         error={errors.customerType}
        
//       />

//        <Input
//         label="customer ID"
//         name='customer_ID'
//         value={data.customer_ID}
//         onChange={handleChange}
//         error={errors.customer_ID}
        
//       />

//       <Select
//         label='Salutation'
//         name='salutation'
//         value={data.salutation}
//         options={[
//           { value: "Mr", label: "Mr" },
//           { value: "Ms", label: "Ms" },
//           { value: "Mrs", label: "Mrs" },
//         ]}
//         onChange={handleChange}
//         error={errors.salutation}
//         required
//       />

//       <Select
//         label="national ID Type"
//         name="national_ID_Type"
//         value={data.national_ID_Type}
//         options={[
//           { value: 'NID', label: 'NID' },
//           { value: 'PASSPORT', label: 'PASSPORT' }
//         ]}
//         onChange={handleChange}
//         error={errors.national_ID_Type}
//         required
//       />

//       <Input
//         label="national ID Number"
//         name='national_ID_Number'
//         value={data.national_ID_Number}
//         onChange={handleChange}
//         error={errors.national_ID_Number}
//         required
//       />

//       <Input
//         label='customer Name'
//         name='customer_Name'
//         value={data.customer_Name}
//         type='text'
//         onChange={handleChange}
//         error={errors.customer_Name}
//         required
//       />

//       <Input
//         label='Surname'
//         name='surname'
//         value={data.surname}
//         onChange={handleChange}
//         error={errors.surname}
//       />

//       <Input
//         label="forename 1"
//         name='forename_1'
//         value={data.forename_1}
//         onChange={handleChange}
//         error={errors.forename_1}
//       /> 
//    </div>
//   );
// };



// src/components/UserForm/BasicInfoSection.tsx

import React from 'react';
import { Input } from '../common/components/Input';
import { Select } from '../common/components/Select'; 
import { BasicInfoData } from '../../types/formTypes';

export interface BasicInfoSectionProps {
  data: BasicInfoData;
  onChange: (data: BasicInfoData) => void;
  errors?: Partial<Record<keyof BasicInfoData, string>>;
}

export const BasicInfoSection: React.FC<BasicInfoSectionProps> = ({ data, onChange, errors = {} }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Basic Information</h2>
      <Select
        label="customerType"
        name="customerType"
        value={data.customerType}
        options={[
          { value: 'NID', label: 'NID' },
          { value: 'PASSPORT', label: 'PASSPORT' }
        ]}
        onChange={handleChange}
        error={errors.customerType}
        required
      />
      <Input
        label="customer_ID"
        name="customer_ID"
        value={data.customer_ID}
        onChange={handleChange}
        error={errors.customer_ID}
        required
      />
      <Input
        label="salutation"
        name="salutation"
        value={data.salutation}
        onChange={handleChange}
        error={errors.salutation}
        required
      />
      {/* <Select
        label="national_ID_Type"
        name="national_ID_Type"
        value={data.national_ID_Type}
        options={[
          { value: 'NID', label: 'NID' },
          { value: 'PASSPORT', label: 'PASSPORT' },
          { value: '', label: 'Ms' }
        ]}
        onChange={handleChange}
        error={errors.Salutation}
        required
  />
      <Select
        label="National ID Type"
        name="National_ID_Type"
        value={data.National_ID_Type}
        options={[
          { value: 'National', label: 'National' },
          { value: 'Passport', label: 'Passport' }
        ]}
        onChange={handleChange}
        error={errors.National_ID_Type}
        required
      />
      <Input
        label="National ID Number"
        name="National_ID_Number"
        value={data.National_ID_Number}
        onChange={handleChange}
        error={errors.National_ID_Number}
        required
      /> */}
    </div>
  );
};






