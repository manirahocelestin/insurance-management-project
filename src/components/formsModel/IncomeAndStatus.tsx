

import React from 'react';

export interface IncomeAndStatus{
    emp_cell: string,
    emp_Village: string,
    income: string,
    income_Frequency: string,
    legal_Status: string,
    customer_Status: string,
    date_Last_Modified: string,
    le_Book: string
    
};

export const IncomeAndStatusSection = () => {
  const [formData, setFormData] = React.useState<IncomeAndStatus>({
    emp_cell: '',
    emp_Village: '',
    income: '',
    income_Frequency: '',
    legal_Status: '',
    customer_Status: '',
    date_Last_Modified: '',
    le_Book: ''
    
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Income And Status</h2>
      <form className="space-y-4">

        <div className='grid grid-cols-2 gap-4'>
        {/* emp_cell */}
        
        <div>
          <label htmlFor="emp_cell" className="block text-sm font-medium text-gray-700">
          emp_cell
          </label>
          <select
            id="emp_cell"
            name="emp_cell"
            value={formData.emp_cell}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
            >
              <option value="">Select cellOne</option>
              <option value="High School">cellTwo</option>
              <option value="Bachelor's Degree">CellThree</option>
               
            
            
              
            </select>
          

        </div>


        {/*emp_Village*/}
        <div>
          <label htmlFor="emp_Village" className="block text-sm font-medium text-gray-700">
          emp_Village
          </label>
          <select
            
            id="emp_Village"
            name="emp_Village"
            value={formData.emp_Village}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
            > 
              <option value="">Select emp_Village</option>
              <option value="High School">villageTwo</option>
              <option value="Bachelor's Degree">villageThree</option> 
             </select>
      </div>
      </div>

      <div className='grid grid-cols-2 gap-4'>

        {/*income*/}
        <div>
          <label htmlFor="income" className="block text-sm font-medium text-gray-700">
             income
            </label>
          <select
            id="income"
            name="income"
            value={formData.income}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
            >
              <option value="">Select income</option>
              <option value="A">A</option>
              <option value="B">B</option>
                
              </select>         
        </div>


          {/* income_Frequency */}

          <div>

          <label htmlFor="income_Frequency" className= "balock text-sm font-medium text -gray-700">
          income_Frequency
            </label>
            
            <select
            id="income_Frequency"
            name="income_Frequency"
            value={formData.income_Frequency}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required    
            >
              <option value="">Select income_Frequency</option>
              <option value="Yes">Income_frequencyOne</option>
              <option value="No">Income_frequenceTwo</option>        
              </select>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-4'>

              {/*legal_Status */}
              <div>

            <label htmlFor="legal_Status" className='block text-sm font-medium text-gray-700'>
            legal_Status
            </label>
            <select
            id="legal_Status"
            name="legal_Status"
            value={formData.legal_Status}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
            >
              <option value="">Select legal_Status</option>
              <option value="spouse">spouse</option>
              <option value="child">child</option>
              <option value="parent">parent</option>
              <option value="other">other</option>
              </select> 

            </div>

            {/* customer_Status*/}
            <div>
            <label htmlFor='customer_Status' className="block text-sm font-medium text-gray-700">
            customer_Status
            </label>
            <select
            id='customer_Status' 
            name='customer_Status'
            value={formData.customer_Status}
            onChange={handleChange}
            className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
            required
            >
              <option value="">Select customer_Status</option>
              <option value="related_Party_Name1">customer_Status_Name1</option>
              <option value="related_Party_Name2">customer_Status_Name2</option>
              
              </select>
           
            
            </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>

            {/* date_Last_Modified*/}

            <div>
              <label htmlFor='date_Last_Modified' className="block text-sm font-medium text-gray-700">
              date_Last_Modified
              </label>

              < input
              type='date'
              id='date_Last_Modified'
              name='date_Last_Modified'    
              value={formData.date_Last_Modified}
              onChange={handleChange}
              className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
              required
              />    
              </div>
              {/*le_Book */}

              <div>
              <label htmlFor='le_Book' className='block text-sm font-medium text-gray-700'>
              le_Book
                </label>
               <input
                type='text'
                id='le_Book'
                name='le_Book'
                value={formData.le_Book}
                onChange={handleChange}
                className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
                required
                />
                  
             </div>
             </div>

       
      </form>
    </div>
  );
};






      
      





























