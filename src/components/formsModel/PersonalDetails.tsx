import React from "react"

export interface PersonalDetails{
    marital_Status: string,
    spouse_Name: string,
    social_Economic_Class: string,
    next_of_kin_Name: string,
    next_of_kin_ID_Type: string,
    next_of_kin_ID_Number: string,
    next_of_kin_Telephone: string,
    next_of_kin_Email_ID: string

};

export const PersonalDetailsSection = () =>{
    const [formData, setFormData] = React.useState<PersonalDetails>({
        marital_Status: "",
        spouse_Name: "",
        social_Economic_Class: "",
        next_of_kin_Name: "",
        next_of_kin_ID_Type: "",
        next_of_kin_ID_Number: "",
        next_of_kin_Telephone: "",
        next_of_kin_Email_ID: "",

    });

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setFormData((prev) => ( { ...prev, [name]: value}));
    };
    
    return(
        <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-lg mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Personal Details</h2>
            <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">

                {/* marital_Status */}
                <div>
                    <label htmlFor="marital_Status" className="block text-sm font-medium text-gray-700">
                        marital_Status
                    </label>
                    <select
                        
                        id="marital_Status"
                        name="marital_Status"
                        value={formData.marital_Status}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-ingo-500 focus:border-indigo-500"
                        
                    >
                        <option value=""> Select marital_Status</option>
                        <option value={"Single"}>Single</option>
                        <option value={"Married"}>Married</option>
                        </select>
                </div>

                {/* spouse_Name */}
                <div>
                    <label htmlFor="spouse_Name" className="block text-sm font-medium text-gray-700">
                        spouse_Name
                    </label>
                    <input
                        type="text"
                        id="spouse_Name"
                        name="spouse_Name"
                        value={formData.spouse_Name}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="please enter your spouse_Name"
                        required
                    />
                    
                    </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">

                {/* social_Economic_Class */}
                <div>
                    <label htmlFor="social_Economic_Class" className="block text-sm font-medium text-gray-700">
                        social_Economic_Class
                    </label>
                    <select
                       id="social_Economic_Class"
                       name="social_Economic_Class" 
                        value={formData.social_Economic_Class}
                        onChange={handleChange}
                        
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="">select social_Economic_Class</option>
                        <option value={"A"}> A</option>
                        <option value={"B"}>B</option>
                        </select>
                     </div>

                {/* next_of_kin_Name */}
                <div>
                <label htmlFor="next_of_kin_Name" className="block text-sm font_medium text_gray-700">
                    next_of_kin_Name
                    </label>
                    <input
                        type="text"
                        id="next_of_kin_Name"
                        name="next_of_kin_Name"
                        value={formData.next_of_kin_Name}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="please enter your emp_Address_2"
                    />
                </div> 
                </div>

                <div className="grid grid-cols-2 gap-4">

                {/* next_of_kin_ID_Type */}
                <div>
                    <label htmlFor="next_of_kin_ID_Type" className="block text-sm font-medium text-gray-700" >
                        next_of_kin_ID_Type
                    </label>
                    <select
                        
                        id="next_of_kin_ID_Type"
                        name="next_of_kin_ID_Type"
                        value={formData.next_of_kin_ID_Type}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indingo-500 focus:border-indingo-500"
                    >
                        <option value="">Select next_of_kin_ID_Type</option>
                        <option value={"Ethiopia"}>Ethiopia</option>
                        <option value={"kenya"}> kenya</option>
                        
                        </select>
                    </div>

                {/* next_of_kin_ID_Number */}
                <div>
                    <label htmlFor="next_of_kin_ID_Number" className="block text-sm font-medium text-gary-700">
                        next_of_kin_ID_Number
                        </label>
                        <input
                            type ="text"
                            id="next_of_kin_ID_Number"
                            name="next_of_kin_ID_Number"
                            value={formData.next_of_kin_ID_Number}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indingo-500 focus:border-indingo-500"
                            required
                            placeholder="please enter your next-of-kin_ID_Number"
                       />
                              
                        
                        </div>

                        </div>

                        <div className="grid grid-cols-2 gap-4">

                {/* next_of_kin_telephone */}
                <div>
                    <label htmlFor="next_of_kin_telephone" className="block text-sm font-medium text-gray-700">
                        next_of_kin_telephone
                    </label>
                    <input 
                        type="text"
                        id="next_of_kin_Telephone"
                        name="next_of_kin_Telephone"
                        value={formData.next_of_kin_Telephone}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indingo-500 focus:border-indingo-500"
                        required
                        
                    /> 
                        

                        
                </div>

                {/* next_of_kin_Email_ID*/}
                <div>
                    <label htmlFor="next_of_kin_Email_ID" className="block text-sm font-medium text-gray-700">
                        next_of_kin_Email_ID
                    </label>
                    <input
                        type="email"
                        id="next_of_kin_Email_ID"
                        name="next_of_kin_Email_ID"
                        value={formData.next_of_kin_Email_ID}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indingo-500 focus:border-indingo-500"
                        required
                        placeholder="please enter your email address"
                    />
                            

                    
                </div>

                </div>
                
                    
                    
                    

            </form>
        </div>
    )


}




// export interface employerDetails{
//     employer_Name: string,
//     employee_ID: string,
//     emp_Address_1: string,
//     emp_Address_2: string,
//     emp_Country: string,
//     emp_province: string,
//     emp_district: string,
//     emp_sector: string
    
// };



// import { zodResolver } from "@hookform/resolvers/zod";
// import { PersonalDetails } from "../../types/FormTypes";
// import { userUserForm } from "../../hooks/useFetch";


// import { useForm } from "react-hook-form";
// import React from "react";
// import { Select } from "../common/Select";
// import { Input } from "../common/Input";


// interface PersonalDetailsProps {
//       data: PersonalDetails
//       onChange: (data: PersonalDetails) => void
//       errors?: Partial<Record<keyof PersonalDetails, string>>
// }
// export const PersonalDetailsSection: React.FC<PersonalDetailsProps> = ({ data, onChange, errors = {}}) =>{
//       const handleChange= (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>
//       {
//             const {name, value} = e.target
//             onChange({ ...data, [name]: value})
      
//       }





//     return(
//         <div>
           

//             <Select
//                   label="marital_Status"
//                   name="marital_Status"
//                   value='data.marital_Status'
                  
//                   options ={[
//                         {value:'', label:''},
//                         {value: 'single', label: 'single'},
//                         {value: 'married', label: 'married'},
//                   ]}
//                   onChange={handleChange}
//                   error={errors.marital_Status}
//                   required
//                   />

//             <Input
//                   label="spouse_Name"
//                   name="spouse_Name"
//                   value='data.spouse_Name'
//                   onChange={handleChange}
//                   error={errors.spouse_Name}
//                   required
//             />
           
//             <Select
//                   label="social_Economic_Class"
//                   name="social_Economic_Class"
//                   value='data.social_Economic_Class'
                  
//                   options={[
//                         {value:'', label:''},
//                         {value: 'social_Economic_Class', label: 'social_Economic_Class'},
//                         {value: 'social_Economic_Class', label: 'social_Economic_Class'},
//                   ]}
//                   onChange={handleChange}
//                   error={errors.social_Economic_Class}
//                   required
//                   />
            
//             <Input
//                   label="next_of_kin_Name"
//                   name="next_of_kin_Name"
//                   value='data.next_of_kin_Name'
//                   error={errors.next_of_kin_Name}
//                   onChange={handleChange}
//                   required
                  
//             />

            

//             <Select
//                   label="next_of_kin_ID_Type"
//                   name="next_of_kin_ID_Type"
//                   value='data.next_of_kin_ID_Type'
                  
//                   options ={[
//                         {value:'', label:''},
//                         {value: 'next_of_kin_ID_Type', label: 'next_of_kin_ID_Type'},
//                         {value: 'next_of_kin_ID_Type', label: 'next_of_kin_ID_Type'},
//                   ]}
//                   onChange={handleChange}
//                   error={errors.next_of_kin_ID_Type}
//                   required
//             />

//             <Input 
//                   label="next_of_kin_ID_Number"
//                   name="next_of_kin_ID_Number"
//                   value='data.next_of_kin_ID_Number'
//                   error={errors.next_of_kin_ID_Number}
//                   onChange={handleChange}
//                   required
                 
//             />
//             <Input
//                   label = "next_of_kin_Telephone"
//                   name=" next_of_kin_Telephone"
//                   value='data.next_of_kin_Telephone'
//                   onChange={handleChange}
//                   error={errors.next_of_kin_Telephone}
//                   required

//             />

//             <Input 
//                   label="next_of_kin_Email_ID"
//                   name="next_of_kin_Email_ID"
//                   value='data.next_of_kin_Email_ID'
//                   onChange={handleChange}
//                   error={errors.next_of_kin_Email_ID}
//                   required

                  

//             />

//         </div>
//     )
// }







