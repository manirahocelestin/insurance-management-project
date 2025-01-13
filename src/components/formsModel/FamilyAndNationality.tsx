import React from "react"

export interface  FamilyAndNationality{
    number_Of_Dependants: string,
    nationality: string,
    residence: string,
    comm_Address_2: string,
    province: string,
    district: string,
    sector: string,
    cell: string

};

export const FamilyAndNationalitySection = () => {
    const [formData, setFormData] = React.useState<FamilyAndNationality>({
        number_Of_Dependants: '',
        nationality: '',
        residence: '',
        comm_Address_2: '',
        province: '',
        district: '',
        sector: '',
        cell: '',
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-lg mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Family And Nationality</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
            {/*number_Of_Dependants */}
            
            <div>
              <label htmlFor="employer_Name" className="block text-sm font-medium text-gray-700">
              number_Of_Dependants
              </label>
              <input
                type="text"
                id="number_Of_Dependants"
                name="number_Of_Dependants"
                value={formData.number_Of_Dependants}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                
                required
              />
            </div>
    
            {/*nationality */}
            <div>
              <label htmlFor="nationality" className="block text-sm font-medium text-gray-700">
              nationality
              </label>
              <select
                
                id="nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              >
                <option value="">Select nationality</option>
                <option value="Pakistan">Pakistan</option>
                <option value="India">India</option>
                <option value="Other">Other</option>                
              </select>
            </div>
            </div>


            <div className="grid grid-cols-2 gap-4">
    
            {/*residence*/}
            <div>
              <label htmlFor="residence" className="block text-sm font-medium text-gray-700">
              residence
              </label>
              <input
                type="text"
                id="residence"
                name="residence"
                value={formData.residence}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
    
            {/*comm_Address_2 */}
            <div>
              <label htmlFor="comm_Address_2" className="block text-sm font-medium text-gray-700">
              comm_Address_2
              </label>
              <input
                type="text"
                id="comm_Address_2"
                name="comm_Address_2"
                value={formData.comm_Address_2}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            </div>

            
            <div className="grid grid-cols-2 gap-4">
    
            {/* province */}
            <div>
              <label htmlFor="eprovince" className="block text-sm font-medium text-gray-700">
              province
              </label>
              <select
                id="province"
                name="province"
                value={formData.province}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              >
                <option value="">Select province</option>
                <option value="Pakistan">Pakistan</option>
                <option value="India">India</option>
              </select>
            </div>
    
            {/*dictrict */}
            <div>
              <label htmlFor="district" className="block text-sm font-medium text-gray-700">
              district
              </label>
              <select
                id="district"
                name="district"
                value={formData.district}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              >
                <option value="">Select district</option>
                <option value="Lahore">Lahore</option>
                <option value="Islamabad">Islamabad</option>
              </select>
            </div>
            </div>


            <div className="grid grid-cols-2 gap-4">
    
           
    
            {/* sector */}
            <div>
              <label htmlFor="sector" className="block text-sm font-medium text-gray-700">
              sector
              </label>
              <select
                id="sector"
                name="sector"
                value={formData.sector}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              >
                <option value="">Select sector</option>
                <option value="Lahore">Lahore</option>
                <option value="Islamabad">Islamabad</option>
              </select>
            </div>
            
    
            {/* cell */}
            <div>
              <label htmlFor="cell" className="block text-sm font-medium text-gray-700">
              cell
              </label>
              <select
                
                id="cell"
                name="cell"
                value={formData.cell}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              >
                <option value="">Select cell</option>
                <option value="Lahore">Lahore</option>
                <option value="Islamabad">Islamabad</option>   
                </select> 


            </div>
            </div>

    
            
          </form>
        </div>
    )
}






// import { zodResolver } from "@hookform/resolvers/zod";
// import { FamilyAndNationality } from "../../types/FormTypes";
// import { userUserForm } from "../../hooks/useFetch";

// import { InputHTMLAttributes } from "react";

// import { useForm } from "react-hook-form";

// import React from "react";
// import { Input } from "../common/Input";
// import { Select } from "../common/Select";


// interface FamilyAndNationalityProps {
//     data: FamilyAndNationality;
//     onChange: (data: FamilyAndNationality) => void;
//     errors?: Partial<Record<keyof FamilyAndNationality, string>>    
    
// }

// export const FamilyAndNationalitySection: React.FC<FamilyAndNationalityProps> = ({data, onChange, errors = {}}) => {
    
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>{
//         const {name, value} = e.target;
//         onChange({ ...data, [name]: value});

//     };

//     return(
//         <div>

//             <Input 
//                    label="number_Of_Dependants"
//                    name="number_Of_Dependants"
//                    value='data.number_Of_Dependants'
//                    onChange={handleChange}
//                    error={errors.number_Of_Dependants}
//                    required
//             />

            
            
//             <Select
//                 name="nationality"
//                 label="nationality"
//                 value='data.nationality'
//                 options = {[
//                     {value:'', label:''},
//                     {value: 'nationality', label:'nationality'},
//                     {value: 'nationality', label: 'nationality'},
//                 ]}
//                 onChange={handleChange}
//                 error={errors.nationality}
//                 required
//             />

//             <Input
//                   label="residence"
//                   name="residence"
//                   value='data.residence'
//                   onChange={handleChange}
//                   error={errors.residence}
//                   required
//             />

//             <Input
//                    label="comm_Address_2"
//                    name="comm_Address_2"
//                    value='data.comm_Address_2'
//                    onChange={handleChange}
//                    error={errors.comm_Address_2}
//                    required
//             />

            

//               <Select
//                      name="province"
//                      label="province"
//                      value='data.province'
//                      options = {[
//                          {value:'', label:''},
//                          {value: 'province', label:'province'},
//                          {value: 'province', label: 'province'},
//                      ]}
//                     onChange={handleChange}
//                     error={errors.province}
//                     required
//                      />
           
            
//               <Select
//                      name = "district"
//                      label = "district"
//                      value='data.district'
//                      options = {[
//                          {value:'', label:''},
//                          {value: 'district', label:'district'},
//                          {value: 'district', label: 'district'},
//                      ]}
//                      onChange={handleChange}
//                      error= {errors.district}
//                      required
//                      />
          
//             <Select
//                      name = "sector"
//                      label = "sector"
//                      value='data.sector'
//                      options = {[
//                          {value:'', label:''},
//                          {value: 'sector', label:'sector'},
//                          {value: 'sector', label: 'sector'},
//                      ]}
//                      onChange={handleChange}
//                      error= {errors.sector}
//                      required
//                      />
              

            
//             <Select
//                      name = "cell"
//                      label = "cell"
//                      value= 'data.cell'
//                      options = {[
//                          {value:'', label:''},
//                          {value: 'cell', label:'cell'},
//                          {value: 'cell', label: 'cell'},
//                      ]}
//                      onChange={handleChange}
//                      error={errors.cell}
//                      required
//                      />
//         </div>
//     )
// }