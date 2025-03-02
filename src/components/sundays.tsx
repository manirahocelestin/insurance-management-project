
    
    import React from 'react';

    export interface employerDetails{
        employer_Name: string,
        employee_ID: string,
        emp_Address_1: string,
        emp_Address_2: string,
        emp_Country: string,
        emp_province: string,
        emp_district: string,
        emp_sector: string
        
    }
    
    export const EmployerDetailsSection = () => {
      const [formData, setFormData] = React.useState<employerDetails>({
        employer_Name: '',
        employee_ID: '',
        emp_Address_1: '',
        emp_Address_2: '',
        emp_Country: '',
        emp_province: '',
        emp_district: '',
        emp_sector: ''
        
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
    
      
    
      return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-lg mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Employer Details</h2>
          <form className="space-y-4">
           
           <div className='grid grid-cols-2 gap-4'>
            
            <div>
              <label htmlFor="employer_Name" className="block text-sm font-medium text-gray-700">
              employer_Name
              </label>
              <input
                type="text"
                id="employer_Name"
                name="employer_Name"
                value={formData.employer_Name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                
                required
              />
            </div>
    
           
            <div>
              <label htmlFor="employee_ID" className="block text-sm font-medium text-gray-700">
              employee_ID
              </label>
              <input
                type="text"
                id="employee_ID"
                name="employee_ID"
                value={formData.employee_ID}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            </div>
    
            <div className='grid grid-cols-2 gap-4'>
            <div>
              <label htmlFor="emp_Address_1" className="block text-sm font-medium text-gray-700">
              emp_Address_1
              </label>
              <input
                type="text"
                id="emp_Address_1"
                name="emp_Address_1"
                value={formData.emp_Address_1}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
    
            {/* emp_Address_2 */}
            <div>
              <label htmlFor="emp_Address_2" className="block text-sm font-medium text-gray-700">
              emp_Address_2
              </label>
              <input
                type="text"
                id="emp_Address_2"
                name="emp_Address_2"
                value={formData.emp_Address_2}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            </div>

            <div className='grid grid-cols-2 gap-4'>
    
            {/* emp_Country */}
            <div>
              <label htmlFor="emp_Country" className="block text-sm font-medium text-gray-700">
              emp_Country
              </label>
              <select
                id="emp_Country"
                name="emp_Country"
                value={formData.emp_Country}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              >
                <option value="">Select emp_Country</option>
                <option value="Pakistan">Pakistan</option>
                <option value="India">India</option>
              </select>
            </div>
    
            {/* emp_province */}
            <div>
              <label htmlFor="emp_province" className="block text-sm font-medium text-gray-700">
              emp_province
              </label>
              <select
                id="emp_province"
                name="emp_province"
                value={formData.emp_province}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              >
                <option value="">Select emp_province</option>
                <option value="Lahore">Lahore</option>
                <option value="Islamabad">Islamabad</option>
              </select>
            </div>
            </div>

            <div className='grid grid-cols-2 gap-4'>
    
            {/* emp_district */}
            <div>
              <label htmlFor="emp_district" className="block text-sm font-medium text-gray-700">
              emp_district
              </label>
              <select
                id="emp_district"
                name="emp_district"
                value={formData.emp_district}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              >
                <option value="">Select emp_district</option>
                <option value="Lahore">Lahore</option>
                <option value="Islamabad">Islamabad</option>
              </select>
            </div>
    
            {/* emp_sector */}
            <div>
              <label htmlFor="emp_sector" className="block text-sm font-medium text-gray-700">
              emp_sector
              </label>
              <select
                id="emp_sector"
                name="emp_sector"
                value={formData.emp_sector}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              >
                <option value="">Select emp_sector</option>
                <option value="Lahore">Lahore</option>
                <option value="Islamabad">Islamabad</option>
              </select>
            </div>
            </div>

    
            
          </form>
        </div>
      );
    };
    
    
    
    
    
    
          
          
    
    
    

    // return(
    //     <div>
    //         <Input
    //             label="employer_Name"
    //             name="employer_Name"
    //             value= 'data.employer_Name'
    //             onChange={handleChange}
    //             error={errors.employer_Name}
    //             required
    //         />
            {/* <Input
                label="employee_ID"
                name="employee_ID"
                value ='data.employee_ID'
                onChange={handleChange}
                error= {errors.employee_ID}
                required
            />

            <Input
                  label="emp_Address_1"
                  name="emp_Address_1"
                  value='data.emp_Address_1'
                  onChange={handleChange}
                  error = {errors.emp_Address_1}
            />

            <Input
                  label="emp_Address_2"
                  name='emp_Address_2'
                  value='data.emp_Address_2'
                  onChange={handleChange}
                  error={errors.emp_Address_2}
                  required
            />

           
            <Select
                  name='emp_Country'
                  label='emp_Country'
                  value ='data.emp_Country'
                  options= {
                    [
                        {value:'emp_country', label :'emp_country'},
                        {value: 'emp_country', label :'emp_country'}
                    ]
                  }

                onChange={handleChange}
                error={errors.emp_Country}
                required
                  />
                

            
            <Select
                  name='emp_province'
                  label="emp_province"
                  value='data.emp_province'
                  options={[
                    {value:'', label:''},
                    {value: 'emp_province', label: 'emp_province'},
                    {value: 'emp_province', label: 'emp_province'}
                  ]}
                 onChange={handleChange}
                 error={errors.emp_province}
                 required
            />

            <Select
                  name='emp_district'
                  label='emp_district'
                  value='data.emp_district'
                  options={[
                     {value:'', label:''},
                     {value: 'emp_district', label: 'emp_district'},
                     {value:'emp_district', label: 'emp_district'}
                  ]}
                  onChange ={handleChange}
                  error ={errors.emp_district}
                  />
 
            
                  <Select
                    name='emp_sector'
                    label="emp_sector"
                    value='data.emp_sector'
                    options={[
                        {value:'', label:''},
                        {value: 'emp_sector', label: 'emp_sector'},
                        {value: 'emp_sector', label: 'emp_sector'}
                    ]}
                    onChange={handleChange}
                    error={errors.emp_sector}
                    /> */}
//         </div>
//     )

// }

