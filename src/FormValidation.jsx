import React, { useState, useEffect } from "react";

function EmployeeValidationForm() {


 const initiForm = {
        name: '',
        email: '',
        employeeId: '',
        joiningDate: ''
 }
 
  const [formData, setFormData ] = useState(initiForm);
console.log(formData)
  const [isValid, setIsValid] = useState(false);

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(e.target.value, e.target.name)
        setFormData({
            ...formData,
            [name]: value
        });

  }

  useEffect(() => {
    if (formData !== null) {
      setIsValid(Object.values(formData).every((value) => value !== ""));
      const newErrors = validateForm(formData);
        setErrors(newErrors);
    }
  }, [formData]);




  const onFormSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
        console.log('Form submitted successfully!');
        setFormData(initiForm)
        console.log(formData)
    } else {
        console.log('Form submission failed due to validation errors.');
    }
  }

  const validateForm = (data) => {
    const errors = {};

    if (!data.name.trim()) {
        errors.name = 'Name must be at least 4 characters long and only contain letter and spaces';
    } else if (!/^[a-zA-Z]+$/.test(data.name)) {
        errors.name = 'Only alphabets are allowed';
    } else if (data.name.length < 4) {
        errors.name = 'Name must be at least 4 characters long';
    }

    if (!data.email.trim()) {
        errors.email = 'Email must be a valid email address';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = 'Email is invalid';
    }

    if (!data.employeeId.trim()) {
        errors.employeeId = 'Employee Id is must be exactly 6 digits';
    } else if (!/^[0-9]*$/.test(data.employeeId)) {
        errors.employeeId = 'Only numeric values are allowed';
    } else if (data.employeeId.length < 6) {
        errors.employeeId = 'EmployeeId must be at least 6 digit long';
    }

    console.log(new Date(data.joiningDate))
    if (!data.joiningDate.trim()) {
        errors.joiningDate = 'Joining Date cannot be in future';
    }
    else if(isFutureDate(data.joiningDate)) {
        errors.joiningDate = 'Future date is not allow';
    }

    return errors;
    };

    const isFutureDate = (idate) => {
        let today = new Date().getTime();
        idate = new Date(idate).getTime();
        console.log((today - idate) < 0)
        return (today - idate) < 0;
    }

  return (
    <div className="layout-column align-items-center mt-20 ">
        <form onSubmit={onFormSubmit}>
            <div className="layout-column align-items-start mb-10 w-50" data-testid="input-name">
                <input
                className="w-100"
                type="text"
                name="name"
                value={formData.name}
                placeholder="Name"
                data-testid="input-name-test"
                onChange={handleChange}
                />
                 {errors.name && (
                        <p className="error mt-2">
                            {errors.name}
                        </p>
                )}
            </div>
            <div className="layout-column align-items-start mb-10 w-50" data-testid="input-email">
                <input
                className="w-100"
                type="text"
                name="email"
                value={formData.email}
                placeholder="Email"
                onChange={handleChange}
                />
                {errors.email && (
                        <p className="error mt-2">
                            {errors.email}
                        </p>
                )}
                
            </div>
            <div className="layout-column align-items-start mb-10 w-50" data-testid="input-employee-id">
                <input
                className="w-100"
                type="text"
                name="employeeId"
                value={formData.employeeId}
                placeholder="Employee ID"
                onChange={handleChange}
                />
                {errors.employeeId && (
                        <p className="error mt-2">
                            {errors.employeeId}
                        </p>
                )}
            </div>
            <div className="layout-column align-items-start mb-10 w-50" data-testid="input-joining-date">
                <input
                className="w-100"
                type="date"
                name="joiningDate"
                value={formData.joiningDate}
                placeholder="Joining Date"
                onChange={handleChange}
                />
                {errors.joiningDate && (
                        <p className="error mt-2">
                            {errors.joiningDate}
                        </p>
                )}
            </div>
            <button data-testid="submit-btn" type="submit" 
            disabled={!isValid}>
                Submit
            </button>
        </form>
    </div>
  );
}

export default EmployeeValidationForm;
