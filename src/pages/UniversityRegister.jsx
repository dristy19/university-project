import React, { useState, useMemo } from 'react';
import FormInput from '../components/FormInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUniversity,
  faMapMarkerAlt,
  faPhone,
  faBook,
  faImage,
  faUserShield,
  faInfoCircle,
  faSpinner,
  faUpload,
} from '@fortawesome/free-solid-svg-icons';

const UniversityRegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    affiliation: '',
    established: '',
    website: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    contact: '',
    altContact: '',
    registrarName: '',
    registrarEmail: '',
    registrarPhone: '',
    courses: '',
    streams: '',
    students: '',
    faculty: '',
    hostel: '',
    campusArea: '',
    about: '',
    logo: null,
    brochure: null,
    images: '',
    video: '',
    adminEmail: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const requiredFields = ['name', 'type', 'adminEmail', 'password', 'confirmPassword'];

  const progress = useMemo(() => {
    const filledFields = requiredFields.filter(
      (field) => formData[field] && formData[field].trim() !== ''
    ).length;
    return Math.round((filledFields / requiredFields.length) * 100);
  }, [formData]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'University name is required';
    if (!formData.type) newErrors.type = 'University type is required';
    if (!formData.adminEmail) newErrors.adminEmail = 'Admin email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (formData.website && !/^https?:\/\/.+/.test(formData.website)) {
      newErrors.website = 'Invalid URL format';
    }
    if (formData.registrarEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.registrarEmail)) {
      newErrors.registrarEmail = 'Invalid email format';
    }
    if (formData.logo && !['image/png', 'image/jpeg', 'image/jpg'].includes(formData.logo.type)) {
      newErrors.logo = 'Logo must be a PNG or JPEG image';
    }
    if (formData.brochure && formData.brochure.type !== 'application/pdf') {
      newErrors.brochure = 'Brochure must be a PDF file';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const submissionData = new FormData();
      Object.keys(formData).forEach((key) => {
        if (formData[key] !== null) {
          submissionData.append(key, formData[key]);
        }
      });

      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('University Registered:', Object.fromEntries(submissionData));
      alert('University registration submitted successfully!');

      setFormData({
        name: '',
        type: '',
        affiliation: '',
        established: '',
        website: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        contact: '',
        altContact: '',
        registrarName: '',
        registrarEmail: '',
        registrarPhone: '',
        courses: '',
        streams: '',
        students: '',
        faculty: '',
        hostel: '',
        campusArea: '',
        about: '',
        logo: null,
        brochure: null,
        images: '',
        video: '',
        adminEmail: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      alert('Error submitting registration. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formSections = [
    {
      title: 'Basic Information',
      icon: faUniversity,
      fields: [
        { label: 'University Name', name: 'name', required: true, placeholder: 'Enter university name' },
        { label: 'University Type', name: 'type', placeholder: 'Government / Private', required: true },
        { label: 'Affiliation', name: 'affiliation', placeholder: 'Enter affiliation (e.g., UGC, AICTE)' },
        { label: 'Year Established', name: 'established', type: 'number', placeholder: 'Enter year (e.g., 1990)' },
        { label: 'Official Website', name: 'website', type: 'url', placeholder: 'https://www.university.edu' },
      ],
    },
    {
      title: 'Location Details',
      icon: faMapMarkerAlt,
      fields: [
        { label: 'Address', name: 'address', placeholder: 'Enter street address' },
        { label: 'City', name: 'city', placeholder: 'Enter city name' },
        { label: 'State', name: 'state', placeholder: 'Enter state name' },
        { label: 'Pincode', name: 'pincode', placeholder: 'Enter postal code' },
      ],
    },
    {
      title: 'Contact Information',
      icon: faPhone,
      fields: [
        { label: 'Contact Email / Phone', name: 'contact', placeholder: 'Enter primary contact' },
        { label: 'Alternate Contact', name: 'altContact', placeholder: 'Enter alternate contact' },
        { label: 'Registrar Name', name: 'registrarName', placeholder: 'Enter registrar full name' },
        { label: 'Registrar Email', name: 'registrarEmail', placeholder: 'Enter registrar email' },
        { label: 'Registrar Phone', name: 'registrarPhone', placeholder: 'Enter registrar phone number' },
      ],
    },
    {
      title: 'Academic Details',
      icon: faBook,
      fields: [
        { label: 'Available Courses / Departments', name: 'courses', placeholder: 'Enter courses (e.g., B.Tech, MBA)' },
        { label: 'Popular Streams', name: 'streams', placeholder: 'e.g., Engineering, Arts' },
        { label: 'Total Students', name: 'students', type: 'number', placeholder: 'Enter number of students' },
        { label: 'Total Faculty', name: 'faculty', type: 'number', placeholder: 'Enter number of faculty' },
        { label: 'Hostel Available', name: 'hostel', placeholder: 'Yes / No' },
        { label: 'Campus Area (in acres)', name: 'campusArea', type: 'number', placeholder: 'Enter area in acres' },
      ],
    },
    {
      title: 'Media',
      icon: faImage,
      fields: [
        { label: 'Logo Upload', name: 'logo', type: 'file', placeholder: 'Upload logo (PNG/JPEG)', accept: 'image/png,image/jpeg' },
        { label: 'Brochure Upload', name: 'brochure', type: 'file', placeholder: 'Upload brochure (PDF)', accept: 'application/pdf' },
        { label: 'Image URLs (comma-separated)', name: 'images', placeholder: 'Enter image URLs' },
        { label: 'Promo Video Link', name: 'video', type: 'url', placeholder: 'Enter video URL' },
      ],
    },
    {
      title: 'Admin Credentials',
      icon: faUserShield,
      fields: [
        { label: 'Admin Login Email', name: 'adminEmail', type: 'email', required: true, placeholder: 'Enter admin email' },
        { label: 'Password', name: 'password', type: 'password', required: true, placeholder: 'Enter password' },
        { label: 'Confirm Password', name: 'confirmPassword', type: 'password', required: true, placeholder: 'Confirm password' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl p-8 sm:p-12">
        <div className="relative mb-8">
          <h2 className="text-3xl font-extrabold text-[#3656E5] text-center tracking-tight">
            University Registration
          </h2>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-16 h-16">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                className="text-gray-200"
                strokeWidth="10"
                stroke="currentColor"
                fill="transparent"
                r="45"
                cx="50"
                cy="50"
              />
              <circle
                className="text-[#3656E5]"
                strokeWidth="10"
                stroke="currentColor"
                fill="transparent"
                r="45"
                cx="50"
                cy="50"
                strokeDasharray="283"
                strokeDashoffset={283 - (progress * 2.83)}
                transform="rotate(-90 50 50)"
              />
              <text
                x="50"
                y="50"
                fill="#3656E5"
                fontSize="20"
                textAnchor="middle"
                dy=".3em"
              >
                {progress}%
              </text>
            </svg>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-12">
          {formSections.map((section, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-xl font-semibold text-[#3656E5] border-b border-gray-200 pb-2 flex items-center">
                <FontAwesomeIcon icon={section.icon} className="mr-2 text-[#3656E5]" />
                {section.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.fields.map((field) => (
                  <div key={field.name} className="space-y-1">
                    {field.type === 'file' ? (
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          {field.label}
                        </label>
                        <div className="mt-1 flex items-center">
                          <input
                            type="file"
                            name={field.name}
                            onChange={handleChange}
                            accept={field.accept}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3656E5] focus:border-[#3656E5] transition duration-200"
                          />
                          <FontAwesomeIcon icon={faUpload} className="ml-2 text-[#3656E5]" />
                        </div>
                        {formData[field.name] && (
                          <p className="text-sm text-gray-500 mt-1">
                            Selected: {formData[field.name].name}
                          </p>
                        )}
                      </div>
                    ) : (
                      <FormInput
                        label={field.label}
                        name={field.name}
                        value={formData[field.name] || ''}
                        onChange={handleChange}
                        type={field.type || 'text'}
                        placeholder={field.placeholder}
                        required={field.required}
                        error={errors[field.name]}
                        className="border-gray-300 focus:ring-[#3656E5] focus:border-[#3656E5]"
                      />
                    )}
                    {errors[field.name] && (
                      <p className="text-sm text-red-600 mt-1">{errors[field.name]}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#3656E5] border-b border-gray-200 pb-2 flex items-center">
              <FontAwesomeIcon icon={faInfoCircle} className="mr-2 text-[#3656E5]" />
              About University
            </h3>
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Brief Description
              </label>
              <textarea
                name="about"
                rows="5"
                value={formData.about}
                onChange={handleChange}
                placeholder="Provide a brief description of the university..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3656E5] focus:border-[#3656E5] transition duration-200"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full max-w-md bg-[#3656E5] hover:bg-[#466BE9] text-white font-semibold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center ${
                isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <>
                  <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-3 h-5 w-5 text-white" />
                  Submitting...
                </>
              ) : (
                'Submit Registration'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UniversityRegister;
