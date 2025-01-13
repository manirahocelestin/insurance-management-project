import React from "react";


export interface ExtendedCustomerInfo {
    forename_2: string
    customer_Acronym: string
    vision_OUC: string
    vision_SBU: string
    customer_Open_Date: string
    customer_Gender: string
    date_of_Birth: string
    place_of_Birth: string
}

export const ExtendedCustomerInfoSection = () =>{
    const [formData, setFormData] = React.useState<ExtendedCustomerInfo>({
        forename_2: '',
        customer_Acronym: '',
        vision_OUC: '',
        vision_SBU: '',
        customer_Open_Date: '',
        customer_Gender: '',
        date_of_Birth: '',
        place_of_Birth: '',
    });

   
 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>{
     const {name, value} = e.target;
     setFormData((prev) => ({ ...prev, [name]: value}));
 };
//  
     
     return(
        <div  className="bg-gray-100 p-6 rounded-lg shadow-md max-w-lg mx-auto">

            <h2  className="text-2xl font-semibold text-gray-800 mb-6">Extended Customer Information</h2>
            <form className="space-y-4"> 

                <div className="grid grid-cols-2 gap-4">
                    <div>
                {/* forename_2 */}
                <label htmlFor="forename_2" className="block text-sm font-medium text-gray-700">
                    foreename_2
                </label>
                
                    <input
                        type="text"
                        id="forename_2"
                        name="forename_2"
                        value={formData.forename_2}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="enter forename_2"
                        required
                    />
                </div>

                <div>

                {/* customer_Acronym*/}
                <label htmlFor="customer_Acronym" className="block text-sm font-medium text-gray-700">
                    customer_Acronym
                </label>
                
                    <input
                    type="text"
                    id="customer_Acronym"
                    name="customer_Acronym"
                    value={formData.customer_Acronym}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="enter your last name"
                    required
                    />


                </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                {/* vision_OUC */}
                <label htmlFor="vision_OUC" className="block text-sm font-medium text-gray-700"> 
                    vision_OUC
                </label>
                
                    <input
                    type="text"
                    id="vision_OUC"
                    name="vision_OUC"
                    value={formData.vision_OUC}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="enter your last name"
                    required
                    />
                </div>
                <div>
                {/* vision_SBU */}
                <label htmlFor="vision_SBU" className="block text-sm font-medium text-gray-700">
                    vision_SBU
                    </label>
                
                    <select
                    id="vision_SBU"
                    name="vision_SBU"
                    value={formData.vision_SBU}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    required
                    >
                        <option value="">select vision_SBU</option>
                        <option value="vision_SBU">vision_SBU</option>
                        <option value="vision_SBU1">vision_SBU2</option>
                     </select>
                </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>

                {/* customer_Open_Date */}
                <label htmlFor="customer_open_data" className="block text-sm font-medium text-gray-700">
                    customer_Open_Date
                    </label>
                
                    <input
                    type="date"
                    id="customer_Open_Date"
                    name="customer_Open_Date"
                    value={formData.customer_Open_Date}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="enter your last name"
                    required
                    />
                </div>

                <div>

                {/* customer_Gender */}

                <label htmlFor="customer_Gender" className="block text-sm font-medium text-gray-700">customer_Gender</label>
                
                    <input
                    type="text"
                    id="customer_Gender"
                    name="customer_Gender"
                    value={formData.customer_Gender}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="enter your last name"
                    required
                    />

                </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>

                {/* date_of_Birth */}
                <label htmlFor="date_of_Birth" className="block text-sm font-medium text-gray-700">
                    Date of Birth
                    </label>
               
                
                    <input
                    type="date"
                    id="date_of_Birth"
                    name="date_of_Birth"
                    value={formData.date_of_Birth}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="enter your last name"
                    required
                    />
                </div>

                <div>

                {/* place_of_Birth */}
                
                <label htmlFor="place_of_Birth" className="block text-sm font-medium text-gray-700">
                    place_of_Birth
                    </label>

                
                     <select
                       id="place_of_Birth"
                       name="place_of_Birth"
                       value={formData.place_of_Birth}
                       onChange={handleChange}
                       className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                       required
                     >
                       <option value="">select place_of_Birth</option>
                       <option value="place_of_Birth">place_of_Birth</option>
                       <option value="place_of_Birth1">place_of_Birth2</option>

                     </select>
                </div>
                </div>



            </form>
        </div>
     )


}











// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { userUserForm } from '../../hooks/useFetch';

// import { ExtendedCustomerInfo } from "../../types/FormTypes";
// import React from "react";
// import { Input } from '../common/Input';
// import { Select } from '../common/Select';


// interface ExtendedCustomerInfoSectionProps{
//     data: ExtendedCustomerInfo;
//     onChange: (data: ExtendedCustomerInfo) => void;
//     errors?: Partial<Record<keyof ExtendedCustomerInfo, string>>
// }

// export const ExtendedCustomerInfoSection : React.FC<ExtendedCustomerInfoSectionProps> = ({data, onChange, errors = {}}) =>{
    

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>{
//         const {name, value} = e.target;
//         onChange({ ...data, [name]: value});
//     };



//     return (
//         <div>
//             <Input
//                 label='Forename 2'
//                 name='forename_2'
//                 value='data.forename_2'
//                 onChange={handleChange}
//                 error={errors.forename_2}
//                 required
//             />
//             <Input
//                  label='Customer Acronym'
//                 name='customer_Acronym'
//                 value='data.customer_Acronym'
//                 onChange={handleChange}
//                 error= {errors.customer_Acronym}

//             />

//             <Input
//                  label='vision_OUC'
//                 name='vision_OUC'
//                 value='data.vision_OUC'
//                 onChange={handleChange}
//                 error={errors.vision_OUC}
//                 required
//             />
     
     
           
            
//             <Select
//                 name="vision_SBU"
//                 label="salutation"
//                 value= 'data.vision_SBU'
                
                
                
//                 options= {[
//                     {value:'', label:''},
//                     {value:'vision_SBU', label:'vision_SBU'},
//                     {value:'vision_SBU', label:'vision_SBU'}
//                 ]}
//                 onChange={handleChange}
//                 error={errors.vision_SBU}
//                 required

                
                
//                 />

//            <Input
//                  label='customer_Open_Date'
//                  name='customer_open_Date'
//                  value='data.customer_Open_Date'
//                  onChange={handleChange}
//                  error={errors.customer_Open_Date}
//                  required


                 
//            />
           
//            <Input
//                  label='customer_Gender'
//                  name='customer_Gender'
//                  value='data.customer_Gender'
//                  onChange={handleChange}
//                  error={errors.customer_Gender}
//                  required
//            />
//            <Input
//                   label='date_of_Birth'
//                   name='date_of_Birth'
//                   value='data.date_of_Birth'
//                   onChange={handleChange}
//                   error={errors.date_of_Birth}
//                   required

                  
//             />

            

//             <Select
//               name="place_of_Birth"
//               label='Place_of_Birth'
//               value='data.place_of_Birth'
//               options= {[
//                 {value:'', label:''},
//                 {value: "place of Birth", label: 'place of Birth'}

//               ]}
//                onChange={handleChange}
//                error={errors.place_of_Birth}
//                required
//               />

            
                 
                 
//         </div>
//     )


// }





