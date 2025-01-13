import React from 'react';

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

export const ComminucationAddressSection = () => {
  const [formData, setFormData] = React.useState<CommunicationAddress>({
    comm_Address_village: '',
    comm_Country: '',
    comm_Residence_Type: '',
    perm_Address_1: '',
    perm_Address_2: '',
    perm_province_id: '',
    perm_district: '',
    perm_sector: '',
    
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Communication Address</h2>
      <form className="space-y-4">

        <div className='grid grid-cols-2 gap-4'>

        


        
        
        <div>
          <label htmlFor="comm_Address_village" className="block text-sm font-medium text-gray-700">
          comm_Address_village
          </label>
          <select
            
            id="comm_Address_village"
            name="comm_Address_village"
            value={formData.comm_Address_village}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
             required
            >
              <option value="">Select comm_Address_village</option>
              <option value="Lahore">Lahore</option>
              <option value="Islamabad">Islamabad</option>
              
            </select>
          

        </div>

        
        <div>
          <label htmlFor="comm_Country" className="block text-sm font-medium text-gray-700">
          comm_Country
          </label>
          <select
           
            id="comm_Country"
            name="comm_Country"
            value={formData.comm_Country}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            
            required
            >
              <option value="">Select comm_Country</option>
              <option value="Pakistan">Pakistan</option>
              <option value="India">India</option>
            </select>
       </div>
       </div>

          

         
        <div className='grid grid-cols-2 gap-4'>

        
        <div>
          <label htmlFor="comm_Residence_Type" className="block text-sm font-medium text-gray-700">
            comm_Residence_Type
          </label>
          <select
            id="comm_Residence_Type"
            name="comm_Residence_Type"
            value={formData.comm_Residence_Type}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          >
            <option value="">select comm_Residence_Type</option>
            <option value="Permanent">Permanent</option>
            <option value="Temporary">Temporary</option>
          </select>
          </div>

          <div>
        

          <label htmlFor="perm_Address_1" className= "balock text-sm font-medium text -gray-700">
            perm_Address_1
            </label>
            
            <input
            type="text"
              id="perm_Address_1"
              name="perm_Address_1"
              value={formData.perm_Address_1}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder='Enter perm_Address_1'
              required
              />
              </div>
          </div>

              <div className='grid grid-cols-2 gap-4'>

              
              <div>

            <label htmlFor="perm_Address_2" className='block text-sm font-medium text-gray-700'>
              perm_Address_2
            </label>
            <input
            type ="text"
            id='perm_Address_2'
            name="perm_Address_2"
            value={formData.perm_Address_2}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder='Enter perm_Address_2'
            required

            />
            </div>

            
            <div>
            <label htmlFor='perm_province_id' className="block text-sm font-medium text-gray-700">
              perm_province
            </label>
            <select
           
            id='perm_province_id'
            name='perm_province_id'
            value={formData.perm_province_id}
            onChange={handleChange}
            className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
            
            required
            >
              <option value="">Select perm_province_id</option>
              <option value=" Province1">province1</option>
              <option value="province2">province2</option>
            </select>
            </div>
            </div>
           
           <div className='grid grid-cols-2 gap-4'>

            <div>
              <label htmlFor='perm_district' className="block text-sm font-medium text-gray-700">
              perm_district
              </label>
              <select
              
              id='perm_district'
              name='perm_district'
              value={formData.perm_district}
              onChange={handleChange}
              className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
              
              required
              >
                <option value="">Select perm_district</option> 
                <option value="Lahore">district1</option>
                <option value="Islamabad">district2</option>
              </select>
              
              </div>
             

              <div>
              <label htmlFor='perm_sector' className='block text-sm font-medium text-gray-700'>
                perm_sector
                </label>
                <select
                id='perm_sector'
                name='perm_sector'
                onChange={handleChange}
                value={formData.perm_sector}
                
                className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
              
                required
                >
                  <option value="">Select perm_sector</option>
                  <option value="Lahore">sector1</option>
                  <option value="Islamabad">sector2</option>
                </select>
             </div>
             </div>

       
      </form>
    </div>
  );
};






      
      