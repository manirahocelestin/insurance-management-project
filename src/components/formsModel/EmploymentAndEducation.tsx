
import React from 'react';

export interface EmploymentAndEducation{
    education: string,
    customer_TIN: string,
    economic_Sub_Sector_Code_ISIC: string,
    related_Party: string,
    relationship_Type: string,
    related_Party_Name: string,
    health_Insurance_Number: string,
    occupation: string

};

export const EmploymentAndEducationSection = () => {
  const [formData, setFormData] = React.useState<EmploymentAndEducation>({
    education: '',
    customer_TIN: '',
    economic_Sub_Sector_Code_ISIC: '',
    related_Party: '',
    relationship_Type: '',
    related_Party_Name: '',
    health_Insurance_Number: '',
    occupation: '',
    
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Employment And Education</h2>
      <form className="space-y-4">

        <div className='grid grid-cols-2 gap-4'>
        {/* education */}
        
        <div>
          <label htmlFor="education" className="block text-sm font-medium text-gray-700">
          education
          </label>
          <select
            id="education"
            name="education"
            value={formData.education}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
            >
              <option value="">Select education</option>
              <option value="High School">High School</option>
              <option value="Bachelor's Degree">Bachelor's Degree</option>
              <option value="Master's Degree">Master's Degree</option>
              <option value="PhD">PhD</option>  
            
            
              
            </select>
          

        </div>


        {/* customer_TIN*/}
        <div>
          <label htmlFor="customer_TIN" className="block text-sm font-medium text-gray-700">
          customer_TIN
          </label>
          <input
            type="text"
            id="customer_TIN"
            name="customer_TIN"
            value={formData.customer_TIN}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
            />  
         
       </div>
       </div>
       
       <div className='grid grid-cols-2 gap-4'>

        {/* economic_Sub_Sector_Code_ISIC: string*/}
        <div>
          <label htmlFor="economic_Sub_Sector_Code_ISIC" className="block text-sm font-medium text-gray-700">
             economic_Sub_Sector_Code_ISIC: string,
            
          </label>
          <select
            id="economic_Sub_Sector_Code_ISIC"
            name="economic_Sub_Sector_Code_ISIC"
            value={formData.economic_Sub_Sector_Code_ISIC}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
            >
              <option value="">Select economic_Sub_Sector_Code_ISIC</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>  
             
            
              
            </select>         
        </div>


          {/* related_Party */}

          <div>

          <label htmlFor="related_Party" className= "balock text-sm font-medium text -gray-700">
            related_Party
            </label>
            
            <select
            id="related_Party"
            name="related_Party"
            value={formData.related_Party}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required    
            >
              <option value="">Select related_Party</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>        
              </select>
              </div>
              </div>

              <div className='grid grid-cols-2 gap-4'>

              {/*relationship_Type */}
              <div>

            <label htmlFor="relationship_Type" className='block text-sm font-medium text-gray-700'>
              relationship_Type
            </label>
            <select
            id="relationship_Type"
            name="relationship_Type"
            value={formData.relationship_Type}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
            >
              <option value="">Select relationship_Type</option>
              <option value="spouse">spouse</option>
              <option value="child">child</option>
              <option value="parent">parent</option>
              <option value="other">other</option>
              </select> 

            </div>

            {/* related_Party_Name*/}
            <div>
            <label htmlFor='related_Party_Name' className="block text-sm font-medium text-gray-700">
            related_Party_Name
            </label>
            <select
            id='related_Party_Name' 
            name='related_Party_Name'
            value={formData.related_Party_Name}
            onChange={handleChange}
            className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
            required
            >
              <option value="">Select related_Party_Name</option>
              <option value="related_Party_Name1">related_Party_Name1</option>
              <option value="related_Party_Name2">related_Party_Name2</option>
              <option value="related_Party_Name3">related_Party_Name3</option>
              <option value="related_Party_Name4">related_Party_Name4</option>
              <option value="related_Party_Name5">related_Party_Name5</option>
              </select>
           
            
            </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
            {/* health_Insurance_Number*/}

            <div>
              <label htmlFor='health_Insurance_Number' className="block text-sm font-medium text-gray-700">
              health_Insurance_Number
              </label>
              < input
              id='health_Insurance_Number'
              name='health_Insurance_Number'    
              value={formData.health_Insurance_Number}
              onChange={handleChange}
              className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
              required
              />    
              </div>
              {/* occupation */}

              <div>
              <label htmlFor='occupation' className='block text-sm font-medium text-gray-700'>
                  occupation
                </label>
                <select
                id='occupation'
                name='occupation'
                value={formData.occupation}
                onChange={handleChange}
                className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
                required
                >
                  <option value=''>Select occupation</option>
                  <option value='occupation1'>occupation1</option>
                  <option value='occupation2'>occupation2</option>
                  <option value='occupation3'>occupation3</option>
                  <option value='occupation4'>occupation4</option>
                  <option value='occupation5'>occupation5</option>
                </select>
             </div>
             </div>

       
      </form>
    </div>
  );
};






      
      

























