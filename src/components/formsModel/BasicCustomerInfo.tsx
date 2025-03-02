
import React from 'react';
import { BasicCustomerInfo } from '../../types/formTypes';


export interface BasicInfoSectionProps {
  data: BasicCustomerInfo;
  onChange: (data: BasicCustomerInfo) => void;
  errors?: Partial<Record<keyof BasicCustomerInfo, string>>;
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






