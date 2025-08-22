import React, { useEffect, useMemo, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { FiUpload, FiFileText, FiX, FiExternalLink, FiPlus } from 'react-icons/fi';
import './Addstudent.css';

/* ---------- State & Constants ---------- */
const initialState = {
  fullName: '',
  dateOfBirth: '',
  gender: '',
  contactNumber: '',
  email: '',
  address: '',
  parentName: '',
  parentContact: '',
  board: '',
  stream: '',
  schoolName: '',
  yearOfPassing: '',
  subjects: [],                 // <-- now an array
  totalPercentage: '',          // <-- replaces `marks`
  rollNumber: '',
  course: '',
  specialization: '',
  mode: '',
  hostelRequired: 'No',
  university: '',
  documents: {
    marksheet: null,
    tc: null,
    migration: null,
    photo: null,
    idProof: null,
  },
  paymentReceipt: null,
  declaration: false,
  studentSignature: '',
  guardianSignature: '',
};

const DOCUMENT_FIELDS = [
  { name: 'marksheet', label: 'Marksheet', accept: 'image/jpeg,image/png,application/pdf', required: true },
  { name: 'tc', label: 'Transfer Certificate (TC)', accept: 'image/jpeg,image/png,application/pdf', required: true },
  { name: 'migration', label: 'Migration', accept: 'image/jpeg,image/png,application/pdf', required: false },
  { name: 'photo', label: 'Passport Photo', accept: 'image/jpeg,image/png', required: true },
  { name: 'idProof', label: 'ID Proof', accept: 'image/jpeg,image/png,application/pdf', required: true },
];

const SUBJECTS_BY_STREAM = {
  Science: [
    'Physics', 'Chemistry', 'Mathematics', 'Biology', 'Computer Science', 'English',
    'Physical Education', 'Informatics Practices', 'Environmental Science'
  ],
  Commerce: [
    'Accountancy', 'Business Studies', 'Economics', 'Mathematics', 'English',
    'Informatics Practices', 'Entrepreneurship', 'Statistics'
  ],
  Arts: [
    'History', 'Political Science', 'Geography', 'Economics', 'Sociology',
    'Psychology', 'English', 'Hindi', 'Philosophy', 'Home Science'
  ],
  Vocational: [
    'Information Technology', 'Tourism', 'Retail', 'Healthcare', 'Agriculture',
    'Banking & Finance', 'Electronics', 'Automobile', 'Beauty & Wellness'
  ],
};

const MAX_FILE_MB = 5;
const UNIVERSITIES = [
  'Indian Institute of Science (IISc), Bangalore',
  'Jawaharlal Nehru University (JNU), Delhi',
  'Banaras Hindu University (BHU), Varanasi',
  'Indian Institute of Technology (IIT) Bombay',
  'Indian Institute of Technology (IIT) Delhi',
];

/* ---------- Helpers ---------- */
function formatBytes(bytes) {
  if (!bytes && bytes !== 0) return '';
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), sizes.length - 1);
  return `${(bytes / Math.pow(1024, i)).toFixed(i === 0 ? 0 : 2)} ${sizes[i]}`;
}

/* ---------- Component ---------- */
const AddStudentPopup = ({
  isOpen,
  onClose,
  onAddStudent,
  onUpdateStudent,
  editingStudent
}) => {
  const [formData, setFormData] = useState(initialState);
  const [step, setStep] = useState(1);
  const [fileErrors, setFileErrors] = useState({}); // { fieldName: 'message' }
  const [customSubject, setCustomSubject] = useState('');

  const courses = ['B.Sc.', 'B.Com', 'BA', 'B.Tech'];

  useEffect(() => {
    if (editingStudent?.details) {
      const details = editingStudent.details;

      // Backward compatibility: coerce subjects into array
      let coercedSubjects = details.subjects;
      if (typeof coercedSubjects === 'string') {
        coercedSubjects = coercedSubjects
          .split(',')
          .map(s => s.trim())
          .filter(Boolean);
      }
      const next = {
        ...initialState,
        ...details,
        subjects: Array.isArray(coercedSubjects) ? coercedSubjects : [],
        totalPercentage: details.totalPercentage || details.marks || '',
        university: editingStudent.university || '',
      };
      setFormData(next);
    } else {
      setFormData(initialState);
    }
    setStep(1);
    setFileErrors({});
    setCustomSubject('');
  }, [editingStudent, isOpen]);

  const requiredDocs = useMemo(
    () => DOCUMENT_FIELDS.filter(d => d.required).map(d => d.name),
    []
  );

  const subjectOptions = useMemo(
    () => SUBJECTS_BY_STREAM[formData.stream] || [],
    [formData.stream]
  );

  const validateFile = (file, acceptString) => {
    if (!file) return 'No file selected.';
    if (file.size > MAX_FILE_MB * 1024 * 1024) {
      return `File exceeds ${MAX_FILE_MB}MB limit.`;
    }
    const allowed = acceptString.split(',').map(s => s.trim());
    if (!allowed.includes(file.type)) {
      return `Invalid type. Allowed: ${allowed.join(', ').replaceAll('image/', '').replaceAll('application/', '')}`;
    }
    return '';
  };

  const setDocument = (name, file) => {
    setFormData(prev => ({
      ...prev,
      documents: { ...prev.documents, [name]: file }
    }));
  };

  const clearDocument = (name) => {
    setFormData(prev => ({
      ...prev,
      documents: { ...prev.documents, [name]: null }
    }));
    setFileErrors(prev => {
      const copy = { ...prev };
      delete copy[name];
      return copy;
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleDocumentUpload = (e, name, accept) => {
    const file = e?.target?.files?.[0];
    if (!file) return;
    const err = validateFile(file, accept);
    if (err) {
      setFileErrors(prev => ({ ...prev, [name]: err }));
      return;
    }
    setFileErrors(prev => ({ ...prev, [name]: '' }));
    setDocument(name, file);
  };

  const handlePaymentUpload = (e) => {
    const file = e?.target?.files?.[0];
    if (!file) return;
    const err = validateFile(file, 'image/jpeg,image/png,application/pdf');
    if (err) {
      setFileErrors(prev => ({ ...prev, paymentReceipt: err }));
      return;
    }
    setFileErrors(prev => ({ ...prev, paymentReceipt: '' }));
    setFormData(prev => ({ ...prev, paymentReceipt: file }));
  };

  const toggleSubject = (subject) => {
    setFormData(prev => {
      const exists = prev.subjects.includes(subject);
      return {
        ...prev,
        subjects: exists
          ? prev.subjects.filter(s => s !== subject)
          : [...prev.subjects, subject]
      };
    });
  };

  const addCustomSubject = () => {
    const s = customSubject.trim();
    if (!s) return;
    setFormData(prev => {
      if (prev.subjects.map(x => x.toLowerCase()).includes(s.toLowerCase())) return prev;
      return { ...prev, subjects: [...prev.subjects, s] };
    });
    setCustomSubject('');
  };

  const handleCustomSubjectKey = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addCustomSubject();
    }
  };

  const nextStep = () => {
    if (step === 1 && !validateStep1()) return;
    if (step === 2 && !validateStep2()) return;
    if (step === 3 && !validateStep3()) return;
    setStep(prev => Math.min(prev + 1, 4));
  };

  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const validateStep1 = () => {
    const required = ['fullName', 'dateOfBirth', 'gender', 'contactNumber', 'email', 'address', 'parentName', 'parentContact'];
    const ok = required.every(field => String(formData[field] || '').trim());
    if (!ok) alert('Please fill all required fields in Basic Student Details.');
    return ok;
  };

  const validateStep2 = () => {
    const required = ['board', 'stream', 'schoolName', 'yearOfPassing', 'rollNumber'];
    const okRequired = required.every(field => String(formData[field] || '').trim());
    if (!okRequired) {
      alert('Please fill all required Academic Details.');
      return false;
    }
    if (!formData.subjects || formData.subjects.length === 0) {
      alert('Please select at least one subject.');
      return false;
    }
    const pct = parseFloat(formData.totalPercentage);
    if (Number.isNaN(pct) || pct < 0 || pct > 100) {
      alert('Please enter a valid Total Percentage between 0 and 100.');
      return false;
    }
    return true;
  };

  const validateStep3 = () => {
    const hasCourse = !!formData.course;
    const hasUniversity = !!formData.university;
    const docsOk = requiredDocs.every(doc => formData.documents[doc]);
    if (!hasCourse) {
      alert('Please choose a course.');
      return false;
    }
    if (!hasUniversity) {
      alert('Please choose a university.');
      return false;
    }
    if (!docsOk) {
      alert('Please upload all required documents.');
      return false;
    }
    const anyFileError = Object.values(fileErrors).some(Boolean);
    if (anyFileError) {
      alert('Please fix file upload errors.');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.declaration) {
      alert('Please agree to the declaration.');
      return;
    }
    if (editingStudent) {
      const updated = {
        ...editingStudent,
        name: formData.fullName,
        email: formData.email,
        university: formData.university,
        details: formData,
      };
      onUpdateStudent(editingStudent.id, updated);
    } else {
      const newStudent = {
        id: Date.now(),
        name: formData.fullName,
        email: formData.email,
        university: formData.university,
        status: 'Pending',
        details: formData,
      };
      onAddStudent(newStudent);
    }
    onClose();
    setFormData(initialState);
    setStep(1);
  };

  if (!isOpen) return null;

  const getStepClass = (currentStep) => {
    if (step > currentStep) return 'completed';
    if (step === currentStep) return 'active';
    return '';
  };
  const getLineClass = (lineIndex) => (step > lineIndex + 1 ? 'step-line active' : 'step-line');

  /* ---------- Upload Tile Subcomponent ---------- */
  const UploadTile = ({ name, label, file, accept, required, onFile, onClear, error }) => {
    const [dragOver, setDragOver] = useState(false);
    const inputId = `doc-${name}`;

    const handleDrop = (ev) => {
      ev.preventDefault();
      setDragOver(false);
      const dropped = ev.dataTransfer.files && ev.dataTransfer.files[0];
      if (dropped) {
        const fakeEvent = { target: { files: [dropped] } };
        onFile(fakeEvent);
      }
    };

    return (
      <div className={`upload-tile ${dragOver ? 'drag-active' : ''} ${error ? 'has-error' : ''}`}>
        <div
          className="upload-hitarea"
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter') document.getElementById(inputId)?.click(); }}
          aria-describedby={`${inputId}-desc`}
        >
          <FiUpload className="upload-icon" aria-hidden="true" />
          <div className="upload-text">
            <span className="upload-title">{label}{required ? ' *' : ''}</span>
            <span id={`${inputId}-desc`} className="upload-subtitle">Drag & drop or</span>
            <label htmlFor={inputId} className="btn btn-outline btn-sm">Browse</label>
            <input
              id={inputId}
              type="file"
              className="visually-hidden"
              accept={accept}
              onChange={(e) => onFile(e)}
            />
          </div>
        </div>

        {file && (
          <div className="file-chip" title={file.name}>
            <FiFileText className="chip-icon" aria-hidden="true" />
            <span className="chip-name">{file.name}</span>
            <span className="chip-size">• {formatBytes(file.size)}</span>
            <a
              className="chip-action"
              href={URL.createObjectURL(file)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${label}`}
            >
              <FiExternalLink />
            </a>
            <button
              type="button"
              className="chip-action"
              onClick={() => onClear()}
              aria-label={`Remove ${label}`}
              title="Remove"
            >
              <FiX />
            </button>
          </div>
        )}

        {!!error && <p className="field-error" role="alert">{error}</p>}
      </div>
    );
  };

  /* ---------- Render ---------- */
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className="popup">
          <div className="popup-content">
            {/* Stepper */}
            <div className="stepper horizontal">
              <div className={`step ${getStepClass(1)}`}>{step > 1 ? <FaCheck /> : 1}</div>
              <div className={getLineClass(1)}></div>
              <div className={`step ${getStepClass(2)}`}>{step > 2 ? <FaCheck /> : 2}</div>
              <div className={getLineClass(2)}></div>
              <div className={`step ${getStepClass(3)}`}>{step > 3 ? <FaCheck /> : 3}</div>
              <div className={getLineClass(3)}></div>
              <div className={`step ${getStepClass(4)}`}>{step > 4 ? <FaCheck /> : 4}</div>
            </div>

            <form onSubmit={handleSubmit} className="student-form" noValidate>
              {/* -------- Step 1 -------- */}
              {step === 1 && (
                <div className="form-section">
                  <h2 className="form-section-title">Basic Student Details</h2>

                  <div className="form-group-row">
                    <div className="form-group-column">
                      <label htmlFor="fullName">Full Name *</label>
                      <input type="text" id="fullName" name="fullName" autoComplete="name"
                        value={formData.fullName} onChange={handleInputChange} className="input" required />
                    </div>
                    <div className="form-group-column">
                      <label htmlFor="dateOfBirth">Date of Birth *</label>
                      <input type="date" id="dateOfBirth" name="dateOfBirth"
                        value={formData.dateOfBirth} onChange={handleInputChange} className="input" required />
                    </div>
                  </div>

                  <div className="form-group-row">
                    <div className="form-group-column">
                      <label htmlFor="gender">Gender *</label>
                      <select id="gender" name="gender" value={formData.gender} onChange={handleInputChange} className="input" required>
                        <option value="">Select</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="form-group-column">
                      <label htmlFor="contactNumber">Contact Number *</label>
                      <input type="tel" id="contactNumber" name="contactNumber" inputMode="tel" placeholder="+91-XXXXXXXXXX"
                        value={formData.contactNumber} onChange={handleInputChange} className="input" required />
                    </div>
                  </div>

                  <div className="form-group-row">
                    <div className="form-group-column">
                      <label htmlFor="email">Email ID *</label>
                      <input type="email" id="email" name="email" autoComplete="email"
                        value={formData.email} onChange={handleInputChange} className="input" required />
                    </div>
                    <div className="form-group-column">
                      <label htmlFor="address">Address *</label>
                      <textarea id="address" name="address" value={formData.address}
                        onChange={handleInputChange} className="input" rows="2" required />
                    </div>
                  </div>

                  <div className="form-group-row">
                    <div className="form-group-column">
                      <label htmlFor="parentName">Parent Name *</label>
                      <input type="text" id="parentName" name="parentName"
                        value={formData.parentName} onChange={handleInputChange} className="input" required />
                    </div>
                    <div className="form-group-column">
                      <label htmlFor="parentContact">Parent Contact *</label>
                      <input type="tel" id="parentContact" name="parentContact" inputMode="tel"
                        value={formData.parentContact} onChange={handleInputChange} className="input" required />
                    </div>
                  </div>

                  <div className="form-actions">
                    <button type="button" className="btn btn-primary" onClick={nextStep}>Next</button>
                  </div>
                </div>
              )}

              {/* -------- Step 2 -------- */}
              {step === 2 && (
                <div className="form-section">
                  <h2 className="form-section-title">Academic Details</h2>

                  <div className="form-group-row">
                    <div className="form-group-column">
                      <label htmlFor="board">Board *</label>
                      <select id="board" name="board" value={formData.board} onChange={handleInputChange} className="input" required>
                        <option value="">Select</option>
                        <option>CBSE</option>
                        <option>ICSE</option>
                        <option>State Board</option>
                        <option>Others</option>
                      </select>
                    </div>
                    <div className="form-group-column">
                      <label htmlFor="stream">Stream *</label>
                      <select id="stream" name="stream" value={formData.stream} onChange={(e) => {
                        // reset subjects when stream changes
                        setFormData(prev => ({ ...prev, stream: e.target.value, subjects: [] }));
                      }} className="input" required>
                        <option value="">Select</option>
                        <option>Science</option>
                        <option>Commerce</option>
                        <option>Arts</option>
                        <option>Vocational</option>
                      </select>
                    </div>
                  </div>

                  {/* Subjects UI */}
                  <div className="form-group">
                    <label>Subjects *</label>

                    {!formData.stream ? (
                      <p className="muted">Select a <strong>Stream</strong> to view suggested subjects.</p>
                    ) : (
                      <>
                        <div className="pill-grid" role="group" aria-label="Suggested subjects">
                          {subjectOptions.map(subj => {
                            const selected = formData.subjects.includes(subj);
                            return (
                              <button
                                type="button"
                                key={subj}
                                className={`pill ${selected ? 'selected' : ''}`}
                                onClick={() => toggleSubject(subj)}
                                aria-pressed={selected}
                              >
                                {subj}
                              </button>
                            );
                          })}
                        </div>

                        <div className="add-subject-row">
                          <input
                            type="text"
                            className="input"
                            placeholder="Add another subject (e.g., French)"
                            value={customSubject}
                            onChange={(e) => setCustomSubject(e.target.value)}
                            onKeyDown={handleCustomSubjectKey}
                            aria-label="Add custom subject"
                          />
                          <button type="button" className="btn btn-outline add-btn" onClick={addCustomSubject}>
                            <FiPlus /> Add
                          </button>
                        </div>

                        {formData.subjects.length > 0 && (
                          <div className="selected-chips">
                            {formData.subjects.map(s => (
                              <span className="tag" key={s}>
                                {s}
                                <button
                                  type="button"
                                  className="tag-close"
                                  aria-label={`Remove ${s}`}
                                  onClick={() => toggleSubject(s)}
                                >
                                  <FiX />
                                </button>
                              </span>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  <div className="form-group-row">
                    <div className="form-group-column">
                      <label htmlFor="totalPercentage">Total Percentage *</label>
                      <input
                        type="number"
                        id="totalPercentage"
                        name="totalPercentage"
                        step="0.1"
                        min="0"
                        max="100"
                        placeholder="e.g., 86.5"
                        value={formData.totalPercentage}
                        onChange={handleInputChange}
                        className="input"
                        required
                      />
                    </div>
                    <div className="form-group-column">
                      <label htmlFor="rollNumber">Roll Number *</label>
                      <input type="text" id="rollNumber" name="rollNumber"
                        value={formData.rollNumber} onChange={handleInputChange} className="input" required />
                    </div>
                  </div>

                  <div className="form-group-row">
                    <div className="form-group-column">
                      <label htmlFor="schoolName">School Name *</label>
                      <input type="text" id="schoolName" name="schoolName"
                        value={formData.schoolName} onChange={handleInputChange} className="input" required />
                    </div>
                    <div className="form-group-column">
                      <label htmlFor="yearOfPassing">Year of Passing *</label>
                      <input type="number" id="yearOfPassing" name="yearOfPassing" min="1990" max="2100"
                        value={formData.yearOfPassing} onChange={handleInputChange} className="input" required />
                    </div>
                  </div>

                  <div className="form-actions">
                    <button type="button" className="btn" onClick={prevStep}>Back</button>
                    <button type="button" className="btn btn-primary" onClick={nextStep}>Next</button>
                  </div>
                </div>
              )}

              {/* -------- Step 3 -------- */}
              {step === 3 && (
                <div className="form-section">
                  <h2 className="form-section-title">Admission & Documents</h2>

                  <div className="form-group-row">
                    <div className="form-group-column">
                      <label htmlFor="course">Course *</label>
                      <select id="course" name="course" value={formData.course} onChange={handleInputChange} className="input" required>
                        <option value="">Select</option>
                        {courses.map(course => <option key={course} value={course}>{course}</option>)}
                      </select>
                    </div>
                    <div className="form-group-column">
                      <label htmlFor="specialization">Specialization</label>
                      <input type="text" id="specialization" name="specialization"
                        value={formData.specialization} onChange={handleInputChange} className="input" />
                    </div>
                  </div>

                  <div className="form-group-row">
                    <div className="form-group-column">
                      <label htmlFor="mode">Mode *</label>
                      <select id="mode" name="mode" value={formData.mode} onChange={handleInputChange} className="input" required>
                        <option value="">Select</option>
                        <option>Regular</option>
                        <option>Distance</option>
                        <option>Online</option>
                      </select>
                    </div>
                    <div className="form-group-column">
                      <label htmlFor="hostelRequired">Hostel Required? *</label>
                      <select id="hostelRequired" name="hostelRequired" value={formData.hostelRequired} onChange={handleInputChange} className="input" required>
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group-row">
                    <div className="form-group-column">
                      <label htmlFor="university">University *</label>
                      <select id="university" name="university" value={formData.university} onChange={handleInputChange} className="input" required>
                        <option value="">Select University</option>
                        {UNIVERSITIES.map(university => <option key={university} value={university}>{university}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-subtitle">Documents <span className="muted">(Max {MAX_FILE_MB}MB each)</span></label>
                    <div className="document-grid">
                      {DOCUMENT_FIELDS.map(df => (
                        <UploadTile
                          key={df.name}
                          name={df.name}
                          label={df.label}
                          file={formData.documents[df.name]}
                          accept={df.accept}
                          required={df.required}
                          onFile={(e) => handleDocumentUpload(e, df.name, df.accept)}
                          onClear={() => clearDocument(df.name)}
                          error={fileErrors[df.name]}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-subtitle">Payment Receipt <span className="muted">(Optional, Max {MAX_FILE_MB}MB)</span></label>
                    <div className="document-grid">
                      <UploadTile
                        name="paymentReceipt"
                        label="Payment Receipt"
                        file={formData.paymentReceipt}
                        accept="image/jpeg,image/png,application/pdf"
                        required={false}
                        onFile={handlePaymentUpload}
                        onClear={() => setFormData(prev => ({ ...prev, paymentReceipt: null }))}
                        error={fileErrors.paymentReceipt}
                      />
                    </div>
                  </div>

                  <div className="form-actions">
                    <button type="button" className="btn" onClick={prevStep}>Back</button>
                    <button type="button" className="btn btn-primary" onClick={nextStep}>Next</button>
                  </div>
                </div>
              )}

              {/* -------- Step 4 -------- */}
              {step === 4 && (
                <div className="form-section">
                  <div className='univeristy-title'>{formData.university && <span>- {formData.university}</span>}</div>
                  <h2 className="form-section-title">
                    Review & Declaration 
                  </h2>

                  <div className="review-section">
                    <h3>
                      Student Details
                      <button type="button" className="edit-btn" onClick={() => setStep(1)}>Edit</button>
                    </h3>
                    <p><strong>Name:</strong> {formData.fullName}</p>
                    <p><strong>DOB:</strong> {formData.dateOfBirth}</p>
                    <p><strong>Gender:</strong> {formData.gender}</p>
                    <p><strong>Contact:</strong> {formData.contactNumber}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Parent:</strong> {formData.parentName} ({formData.parentContact})</p>

                    <h3>
                      Academic Details
                      <button type="button" className="edit-btn" onClick={() => setStep(2)}>Edit</button>
                    </h3>
                    <p><strong>Board:</strong> {formData.board}</p>
                    <p><strong>Stream:</strong> {formData.stream}</p>
                    <p><strong>School:</strong> {formData.schoolName}</p>
                    <p><strong>Year of Passing:</strong> {formData.yearOfPassing}</p>
                    <p><strong>Subjects:</strong> {formData.subjects.join(', ')}</p>
                    <p><strong>Total Percentage:</strong> {formData.totalPercentage}%</p>
                    <p><strong>Roll Number:</strong> {formData.rollNumber}</p>

                    <h3>
                      Admission
                      <button type="button" className="edit-btn" onClick={() => setStep(3)}>Edit</button>
                    </h3>
                    <p><strong>Course:</strong> {formData.course}</p>
                    <p><strong>Specialization:</strong> {formData.specialization}</p>
                    <p><strong>Mode:</strong> {formData.mode}</p>
                    <p><strong>Hostel:</strong> {formData.hostelRequired}</p>
                    <p><strong>University:</strong> {formData.university}</p>

                    <h3>Uploaded Documents</h3>
                    <ul className="review-files">
                      {Object.entries(formData.documents).map(([key, file]) => (
                        file ? (
                          <li key={key}>
                            <strong>{key}:</strong>{' '}
                            <a href={URL.createObjectURL(file)} target="_blank" rel="noopener noreferrer">
                              {file.name}
                            </a>{' '}
                            <span className="muted">({formatBytes(file.size)})</span>
                          </li>
                        ) : null
                      ))}
                      {formData.paymentReceipt && (
                        <li>
                          <strong>Payment Receipt:</strong>{' '}
                          <a href={URL.createObjectURL(formData.paymentReceipt)} target="_blank" rel="noopener noreferrer">
                            {formData.paymentReceipt.name}
                          </a>{' '}
                          <span className="muted">({formatBytes(formData.paymentReceipt.size)})</span>
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="form-group">
                    <div className="checkbox-row">
                      <input
                        type="checkbox"
                        id="declaration"
                        name="declaration"
                        checked={formData.declaration}
                        onChange={handleInputChange}
                        required
                      />
                      <label htmlFor="declaration">I declare all details are correct.</label>
                    </div>
                  </div>

                  <div className="form-actions">
                    <button type="button" className="btn" onClick={prevStep}>
                      Back
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudentPopup;