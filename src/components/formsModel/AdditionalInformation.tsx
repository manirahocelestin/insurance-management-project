


import React from "react"

   
export interface AdditionalInformation{
    naics_Code: string,
    ssn_Number: string
};

export const AdditionalInformationSection =()=>{
    const [formData, setFormData] = React.useState<AdditionalInformation>({
        naics_Code: '',
        ssn_Number: ''

    });
   

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value}));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // add validation logic here 
    }

    return(
        <div className="bg-gray-100 p-6 rounded-lg shadow-md max-wlg mx-auto">
            <h2 className="text-2xl" font-semibold text-gray-800 mb-6 >Addition Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4">

                <div className="grid grid-cols-2 gap-4">
                {/* naics_Code */}


                <div>
                    <label htmlFor="naics_Code" className="block text-sm font-mediun text-gray-700">
                        naics_Code
                    </label>

                    <select
                      id="naics_Code"
                      name="naics_Code"
                      value={formData.naics_Code}
                      onChange={handleChange}
                      className="mt-1 block w-full px- py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    >
                        <option value="" >select naics_Code</option>
                        <option value="nacs_Code1" >nacs_Code1</option>
                        <option value="nacs_Code2" >nacs_Code2</option>

                    </select>

                </div>
                
                {/* ssn_Number */}
                <div>

                <label htmlFor="ssn_Number" className="block text-sm font-medium text-gray-700">
                    SSN-Number
                    </label>

                    <input
                    type="text"
                    id="ssn_Number"
                    name="ssn_Number"
                    value={formData.ssn_Number}
                    onChange={handleChange}
                    className="tm-1 block w-full px-4 py-2 border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="enter social security number please"
                    required
                    />
                    </div>
                    </div>




            </form>
        </div>

    )

      
    //   <div>
    //     <label htmlFor="comm_Address_village" className="block text-sm font-medium text-gray-700">
    //     comm_Address_village
    //     </label>
    //     <select
          
    //       id="comm_Address_village"
    //       name="comm_Address_village"
    //       value={formData.comm_Address_village}
    //       onChange={handleChange}
    //       className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
    //        required
    //       >
    //         <option value="">Select comm_Address_village</option>
    //         <option value="Lahore">Lahore</option>
    //         <option value="Islamabad">Islamabad</option>
            
    //       </select>
        

    //   </div>


}




// import { zodResolver } from "@hookform/resolvers/zod";
// import { AdditionalInformation } from "../../types/FormTypes";
// //import { FORM_INITIAL_VALUE } from "../../hooks/useFetch";


// import { useForm } from "react-hook-form";

// import React from "react";
// import { Input } from "../common/Input";
// import { Select } from "../common/Select";


// interface AdditionalInformationSectionProps{
//     data: AdditionalInformation;
//     onChange: (data: AdditionalInformation) => void;
//     errors?: Partial<Record<keyof AdditionalInformation, string>>;

// }
// export const AdditionalInformationSection : React.FC<AdditionalInformationSectionProps> =({ data, onChange, errors = {}}) =>{
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>{
//         const {name, value} = e.target;
//         onChange({ ...data, [name]: value});
//     };


    

//     return (
        
//         <div>
           
//             <Select
//                 label="naics_Code"
//                 name= "naics_code"
//                 value=''
//                 options={
//                     [
//                         {value: 'naics_code', label: 'naics_code'},
//                         {value: 'naics_code', label: 'naics_code'}
//                     ]}
//                     onChange={handleChange}
//                     error={errors.naics_Code}
//                     required
//                 />

            
//             <Input
//                 label="ssn_Number"
//                 name = "ssn_Number"
//                 value= 'data.ssn_Number'
//                 onChange={handleChange}
//                 error={errors.ssn_Number}
//                 required
//                 />
//                 </div>

            
              
            
        

//     );
// }