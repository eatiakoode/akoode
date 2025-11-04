"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { getAmenityTableData } from "@/api/amenity";
import { addServicesAPI } from "@/api/services";
import { MultiSelectInput } from 'multi-select-input';
import { getFaqTableData } from "@/api/faq";

import selectedFiles from "@/utils/selectedFiles";
import { toast } from 'react-toastify';
import Image from "next/image";

const CreateList = () => {
  const [inputs, setInputs] = useState([]);
  const [logo, setLogo] = useState(null);
    const [serviceslogo, setServiceslogo] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleAddInput = () => {
    setInputs([
      ...inputs,
      {
        id: Date.now(),
        titlestep: '',
        descriptionstep: '',
        imagestep: null
      }
    ]);
  };
  const uploadLogo = (e) => {
    setLogo(e.target.files[0]);
};
const uploadServicesLogo = (e) => {
  setServiceslogo(e.target.files[0]);
};
  const handleInputChange = (index, field, value) => {
    const updated = [...inputs];
    updated[index][field] = value;
    setInputs(updated);
  };
  const handleRemoveInput = (idToRemove) => {
    setInputs(inputs.filter((input) => input.id !== idToRemove));
  };
  const uploadTechnologyImage = (index, file) => {
    const updatedInputs = [...inputs];
    updatedInputs[index].imagestep = file;
    setInputs(updatedInputs);
  };
  

  const [inputsservicestep, setInputsservicestep] = useState([]);
  const handleAddInputservicestep = () => {
    setInputsservicestep([
      ...inputsservicestep,
      {
        id: Date.now(),
        titlestep: '',
        descriptionstep: '',
        imagestep: null
      }
    ]);
  };
  const uploadServiceImage = (index, file) => {
    const updatedInputs = [...inputsservicestep];
    updatedInputs[index].imagestep = file;
    setInputsservicestep(updatedInputs);
  };
  const handleInputChangeservicestep = (index, field, value) => {
    const updated = [...inputsservicestep];
    updated[index][field] = value;
    setInputsservicestep(updated);
  };
  const handleRemoveInputservicestep = (idToRemove) => {
    setInputsservicestep(inputsservicestep.filter((input) => input.id !== idToRemove));
  };
 
  const [value, setValue] = useState([]);
  const [options, setOptions] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [technologytitle, setTechnologyTitle] = useState("");
  const [technologydescription, setTechnologyDescription] = useState("");
  const [resultstitle, setResultsTitle] = useState("");
  const [resultsdescription, setResultsDescription] = useState("");
  const router = useRouter();
  const [error, setError] = useState("");
  // --- State Hooks ---
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [project, setProject] = useState("");
const [slug, setSlug] = useState("");
const [serviceshow, setServiceshow] = useState(false);
const [technologyhow, setTechnologyhow] = useState(false);
  const [servicetitle , setServiceTitle] = useState("");
  const [servicedescription, setServiceDescription] = useState("");

  const [aboutimage, setAboutImage] = useState(null);
  const [abouttitle , setAboutTitle] = useState("");
  const [aboutdescription, setAboutDescription] = useState("");


 

  const [metatitle, setMetatitle] = useState("");
  const [metadescription, setMetaDescription] = useState("");


  
  // upload profile
  const uploadAboutImage = (e) => {
    setAboutImage(e.target.files[0]);
};
  
    
    
  
// --- Submit ---
const addServices = async (e) => {
 
  e.preventDefault();
  setIsSubmitting(true)
  const newErrors = {};
  
  const requiredFields = [
    { key: "title", value: title, name: "Title" },
    { key: "slug", value: slug, name: "Slug" },
    
    { key: "abouttitle", value: abouttitle, name: "About title" },
    { key: "aboutdescription", value: aboutdescription, name: "About Description" },
    { key: "metatitle", value: metatitle, name: "Meta Title" },
    { key: "metadescription", value: metadescription, name: "Meta Description" },
    { key: "technologytitle", value: technologytitle, name: "Technology Title" },
    { key: "technologydescription", value: technologydescription, name: "Technology Description" },
    { key: "resultstitle", value: resultstitle, name: "Results Title" },
    { key: "resultsdescription", value: resultsdescription, name: "Results Description" },
  ];

  requiredFields.forEach(field => {
    
    if (!field.value || (typeof field.value === "string" && !field.value.trim())) {
      newErrors[field.key] = `${field.name} is required`;
    }
  });

  if (Object.keys(newErrors).length > 0) {
    
    return setError(newErrors);
  }

  try {
    
    const payload = {
      title, slug,description,project, servicetitle, servicedescription,serviceshow, aboutimage, abouttitle, aboutdescription, technologytitle, technologydescription, technologyhow, resultstitle, resultsdescription,
      metatitle, metadescription
    };
    
    
    const formData = new FormData();
   
    // Loop over each key-value pair in the payload
    for (const key in payload) {
      if (payload[key] !== undefined && payload[key] !== null) {
        try {
          // Handle arrays and objects by converting them to JSON strings
          if (Array.isArray(payload[key]) || (typeof payload[key] === 'object' && payload[key] !== null)) {
            formData.append(key, JSON.stringify(payload[key]));
          } else {
            formData.append(key, payload[key]);
          }
        } catch (error) {
          console.error(`Error appending ${key} to FormData:`, error);
          // Skip this field if there's an error
        }
      }
    }
    inputs.forEach((input, index) => {
      if (input && input.titlestep !== undefined) {
        formData.append(`technology[${index}][titlestep]`, input.titlestep || "");
      }
      if (input && input.descriptionstep !== undefined) {
        formData.append(`technology[${index}][descriptionstep]`, input.descriptionstep || "");
      }
      if (input && input.imagestep) {
        formData.append(`technology[${index}][imagestep]`, input.imagestep);
      }
    });
    inputsservicestep.forEach((input, index) => {
      if (input && input.titlestep !== undefined) {
        formData.append(`services[${index}][titlestep]`, input.titlestep || "");
      }
      if (input && input.descriptionstep !== undefined) {
        formData.append(`services[${index}][descriptionstep]`, input.descriptionstep || "");
      }
      if (input && input.imagestep) {
        formData.append(`services[${index}][imagestep]`, input.imagestep);
      }
    });
    if (logo) {
      formData.append("logo", logo);
    }
    if (serviceslogo) {
      formData.append("serviceslogo", serviceslogo);
    }
      

    const data = await addServicesAPI(formData);
    // router.push("/akoodeadmin/my-landing");
    toast.success(data.message);
    if(data.status=="success"){
      setTimeout(() => {
          router.push("/akoodeadmin/my-services");
          }, 1500); 
    }
    // alert(res.message);

    // Reset fields and errors
    setError({});
    // (Reset other fields here if needed)
  } catch (err) {
    setError({ general: err.message || "Something went wrong" });
  } finally {
    setIsSubmitting(false);
  }
};



  return (
    <>
    <form onSubmit={addServices} className="row">
    <div className="col-lg-6">
      <div>Services Icon</div>
                <div className="wrap-custom-file">
                    <input
                        type="file"
                        id="image1"
                         accept="image/png, image/gif, image/jpeg, image/svg+xml, image/svg, image/webp, image/avif"
                        onChange={uploadLogo}
                    />
                    <label
                        style={
                            logo !== null
                                ? {
                                      backgroundImage: `url(${URL.createObjectURL(
                                          logo
                                      )})`,
                                  }
                                : {}
                        }
                        htmlFor="image1"
                    >
                        <span>
                            <i className="flaticon-download"></i> Upload Photo{" "}
                        </span>
                    </label>
                </div>
                <p>*minimum 260px x 260px</p>
            </div>
            {/* End .col */}
            <div className="col-lg-6">
            <div>Services Image</div>
                <div className="wrap-custom-file">
                    <input
                        type="file"
                        id="image2"
                         accept="image/png, image/gif, image/jpeg, image/svg+xml, image/svg, image/webp, image/avif"
                        onChange={uploadServicesLogo}
                    />
                    <label
                        style={
                            serviceslogo !== null
                                ? {
                                      backgroundImage: `url(${URL.createObjectURL(
                                          serviceslogo
                                      )})`,
                                  }
                                : {}
                        }
                        htmlFor="image2"
                    >
                        <span>
                            <i className="flaticon-download"></i> Upload Photo{" "}
                        </span>
                    </label>
                </div>
                <p>*minimum 260px x 260px</p>
            </div>
            {/* End .col */}
      
      <div className="col-lg-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="servicesTitle">Services Title</label>
          <input type="text" className="form-control"  id="servicesTitle" value={title} onChange={(e) => setTitle(e.target.value)}  placeholder="Enter services Title"/>
          {error.title && <span className="text-danger">{error.title}</span>}

        </div>
      </div>
      <div className="col-lg-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="servicesProject">Services Tag</label>
          <input type="text" className="form-control"  id="servicesProject" value={project} onChange={(e) => setProject(e.target.value)}  placeholder="Enter services Project"/>
          {error.project && <span className="text-danger">{error.project}</span>}

        </div>
      </div>
        <div className="col-lg-4">
          <div className="my_profile_setting_input form-group">
            <label htmlFor="servicesSlug">Services Slug (SEO URL)</label>
            <input type="text" className="form-control"  id="servicesSlug" value={slug} onChange={(e) => setSlug(e.target.value)}  placeholder="Enter services slug"/>
            {error.slug && <span className="text-danger">{error.slug}</span>}
          </div>
        </div>
        <div className="col-lg-12">
          <div className="my_profile_setting_textarea form-group">
            <label htmlFor="servicesDescription">Description</label>
            <textarea id="servicesDescription" className="form-control" rows="7"  value={description} onChange={(e) => setDescription(e.target.value)}  placeholder="Enter services description"></textarea>
            {error.description && <span className="text-danger">{error.description}</span>}
          </div>
          
        </div>


        
      <div className="row">
          <div className="col-lg-12">
            <h3 className="mb30">About Section</h3>
          </div>
          <div className="col-lg-6">
                     <div htmlFor="aboutimage">About Image</div>
                          <div className="wrap-custom-file">
                        
                              <input
                                  type="file"
                                  id="aboutimage"
                                  accept="image/png, image/gif, image/jpeg, image/svg+xml, image/svg, image/webp, image/avif"
                                  onChange={uploadAboutImage}
                              />
                              <label
                                  style={
                                    aboutimage !== null
                                          ? {
                                                backgroundImage: `url(${URL.createObjectURL(
                                                  aboutimage
                                                )})`,
                                            }
                                          : {}
                                  }
                                  htmlFor="aboutimage"
                              >
                                  <span>
                                      <i className="flaticon-download"></i> Upload About image{" "}
                                  </span>
                              </label>
                          </div>
                          <p>*minimum 260px x 260px</p>
                      </div>
        
        <div className="col-lg-6">
          <div className="my_profile_setting_input form-group">
            <label htmlFor="aboutTitle">About Title</label>
            <input type="text" className="form-control"  id="aboutTitle" value={abouttitle} onChange={(e) => setAboutTitle(e.target.value)}  placeholder="Enter About Title"/>
            {error.abouttitle && <span className="text-danger">{error.abouttitle}</span>}

          </div>
          <div className="my_profile_setting_textarea form-group">
              <label htmlFor="aboutDescription">About Description</label>
              <textarea id="aboutDescription" className="form-control" rows="7"  value={aboutdescription} onChange={(e) => setAboutDescription(e.target.value)}  placeholder="Enter about description"></textarea>
              {error.aboutdescription && <span className="text-danger">{error.aboutdescription}</span>}
            </div>
      </div>
     
      
      </div>
      

        
      <div className="col-lg-6">
          <div className="my_profile_setting_input form-group">
            <label htmlFor="resultsTitle">Results Title</label>
            <input type="text" className="form-control"  id="resultsTitle" value={resultstitle} onChange={(e) => setResultsTitle(e.target.value)}  placeholder="Enter Results Title"/>
            {error.resultstitle && <span className="text-danger">{error.resultstitle}</span>}

          </div>
          </div>
          <div className="col-lg-6">
          <div className="my_profile_setting_textarea form-group">
              <label htmlFor="resultsDescription">Results Description</label>
              <textarea id="resultsDescription" className="form-control" rows="7"  value={resultsdescription} onChange={(e) => setResultsDescription(e.target.value)}  placeholder="Enter results description"></textarea>
              {error.resultsdescription && <span className="text-danger">{error.resultsdescription}</span>}
            </div>
      </div>
      <div className="my_dashboard_review mt30">
        <div className="col-lg-12">
          <h3 className="mb30">Service</h3>
</div>
<div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="serviceshow">Service Section</label>
          <input type="checkbox"
              className="form-check-input"
              id="serviceshow"
              name="serviceshow"
              value={serviceshow}
              checked={serviceshow === true}
              onChange={(e) => setServiceshow(e.target.checked)} />
        </div>
      </div>
      {serviceshow && (
<div className="row ">
          <div className="col-lg-6">
          <div className="my_profile_setting_input form-group">
            <label htmlFor="serviceTitle">Service Title</label>
            <input type="text" className="form-control"  id="serviceTitle" value={servicetitle} onChange={(e) => setServiceTitle(e.target.value)}  placeholder="Enter Service Title"/>
            {error.servicetitle && <span className="text-danger">{error.servicetitle}</span>}

          </div>
          </div>
          <div className="col-lg-6">
          <div className="my_profile_setting_textarea form-group">
              <label htmlFor="serviceDescription">Service Description</label>
              <textarea id="serviceDescription" className="form-control" rows="7"  value={servicedescription} onChange={(e) => setServiceDescription(e.target.value)}  placeholder="Enter service description"></textarea>
              {error.servicedescription && <span className="text-danger">{error.servicedescription}</span>}
            </div>
      </div>
      
      <div className="col-lg-12">
          <button className="btn admore_btn mb30" type="button" onClick={handleAddInputservicestep} >Add More</button>
        </div>
        </div>
         )}

        {inputsservicestep.map((input, index) => (
        <div className="row" key={input.id} >
           <div className="col-xl-12">
           <div className="my_profile_setting_input">
          <button onClick={() => handleRemoveInputservicestep(input.id)} type="button" className="btn btn2 float-end">Remove</button>
          <input type="hidden" name={`serviceid-${index}`} value={input._id} />
          </div>
          </div>
          <div className="col-xl-4">
            <div className="my_profile_setting_input form-group">
              <label htmlFor={`serviceTitle-${index}`}>Service Title {index + 1}</label>
              <input type="text" className="form-control" id={`serviceTitle-${index}`} value={input.titlestep}
              onChange={(e) =>
                handleInputChangeservicestep(index, 'titlestep', e.target.value)
              }/>
            </div>
          </div>
         
           {/* End .col */}

          <div className="col-xl-4">
            <div className="my_profile_setting_input form-group">
              <label htmlFor={`serviceDescription-${index}`}>Service Description</label>
             
              
              <textarea
              className="form-control"
              id={`serviceDescription-${index}`}
              rows="4" value={input.descriptionstep}
              onChange={(e) =>
                handleInputChangeservicestep(index, 'descriptionstep', e.target.value)
              }
            ></textarea>
            </div>
          </div>
          {/* End .col */}
          <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input form-group">
          
        <div htmlFor="serviceimage">Service Image</div>
                <div className="wrap-custom-file height-150">
              
                    <input
                        type="file"
                        id={`serviceimage-${index}`}
                        accept="image/png, image/gif, image/jpeg, image/svg+xml, image/svg, image/webp, image/avif"
                        onChange={(e) => uploadServiceImage(index, e.target.files[0])}
                    />
                    <label
                        style={
                          inputsservicestep[index]?.imagestep
                            ? {
                                backgroundImage: `url(${URL.createObjectURL(inputsservicestep[index].imagestep)})`,
                              }
                            : {}
                        }
                        htmlFor={`serviceimage-${index}`}
                      >
                        <span>
                            <i className="flaticon-download"></i> Upload service image{" "}
                        </span>
                    </label>
                </div>
                <p>*minimum 260px x 260px</p>
            </div>
        
      </div>
        {/* End .col */}       
        </div>
        
      ))}
       </div>
       
       
     
       
        

      {/* End .col */}
      <div className="my_dashboard_review mt30">
        <div className="col-lg-12">
          <h3 className="mb30">Technology</h3>
          </div>
          <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="technologyhow">Technology Section</label>
          <input type="checkbox"
              className="form-check-input"
              id="technologyhow"
              name="technologyhow"
              value={technologyhow}
              checked={technologyhow === true}
              onChange={(e) => setTechnologyhow(e.target.checked)} />
        </div>
      </div>
      {technologyhow && (
          <div className="row">
            
      <div className="col-lg-6">
          <div className="my_profile_setting_input form-group">
            <label htmlFor="technologyTitle">Technology Title</label>
            <input type="text" className="form-control"  id="technologyTitle" value={technologytitle} onChange={(e) => setTechnologyTitle(e.target.value)}  placeholder="Enter Technology Title"/>
            {error.technologytitle && <span className="text-danger">{error.technologytitle}</span>}

          </div>
          </div>
          <div className="col-lg-6">
          <div className="my_profile_setting_textarea form-group">
              <label htmlFor="technologyDescription">Technology Description</label>
              <textarea id="technologyDescription" className="form-control" rows="7"  value={technologydescription} onChange={(e) => setTechnologyDescription(e.target.value)}  placeholder="Enter technology description"></textarea>
              {error.technologydescription && <span className="text-danger">{error.technologydescription}</span>}
            </div>
      </div>
          
          <div className="col-lg-12">
          <button className="btn admore_btn mb30" type="button" onClick={handleAddInput} >Add More</button>
        </div>
        </div>
        )}
        {inputs.map((input, index) => (
        <div className="row" key={input.id} >
           <div className="col-xl-12">
           <div className="my_profile_setting_input">
          <button onClick={() => handleRemoveInput(input.id)} className="btn btn2 float-end">Remove</button>
          </div>
          </div>
          <div className="col-xl-4">
            <div className="my_profile_setting_input form-group">
              <label htmlFor={`technologyTitle-${index}`}>Technology Title {index + 1}</label>
              <input type="text" className="form-control" id={`technologyTitle-${index}`} value={input.titlestep}
              onChange={(e) =>
                handleInputChange(index, 'titlestep', e.target.value)
              }/>
            </div>
          </div>
         
           {/* End .col */}

          <div className="col-xl-4">
            <div className="my_profile_setting_input form-group">
              <label htmlFor={`technologyDescription-${index}`}>Technology Description</label>
             
              <textarea
              className="form-control"
              id={`technologyDescription-${index}`}
              rows="4" cols="40" value={input.descriptionstep}
              onChange={(e) =>
                handleInputChange(index, 'descriptionstep', e.target.value)
              }
            ></textarea>
            </div>
          </div>
          {/* End .col */}
          <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input form-group">
          
        <div htmlFor="technologyimage">Technology Image</div>
                <div className="wrap-custom-file height-150">
              
                    <input
                        type="file"
                        id={`technologyimage-${index}`}
                        accept="image/png, image/gif, image/jpeg, image/svg+xml, image/svg, image/webp, image/avif"
                        onChange={(e) => uploadTechnologyImage(index, e.target.files[0])}
                    />
                    <label
                        style={
                          inputs[index]?.imagestep
                            ? {
                                backgroundImage: `url(${URL.createObjectURL(inputs[index].imagestep)})`,
                              }
                            : {}
                        }
                        htmlFor={`technologyimage-${index}`}
                      >
                        <span>
                            <i className="flaticon-download"></i> Upload technology image{" "}
                        </span>
                    </label>
                </div>
                <p>*minimum 260px x 260px</p>
            </div>
        
      </div>
        {/* End .col */}        
        </div>
        
      ))}
       </div>
      {/* End .col */}
    
      
      <div className=" mt30 ">
                    <div className="col-lg-12">
                      <h3 className="mb30">Meta Information</h3>
                    </div>
                    <div className="row">
                    <div className="col-lg-12">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="servicesMetatitle">Meta Title</label>
         
          <input type="text"
              className="form-control"
              id="servicesMetatitle"
              value={metatitle}
              onChange={(e) => setMetatitle(e.target.value)} />
               {error.metatitle && <span className="text-danger">{error.metatitle}</span>}
        </div>
      </div>
      <div className="col-lg-12">
          <div className="my_profile_setting_textarea form-group">
            <label htmlFor="servicesMetaDescription">Meta Description</label>
            <textarea id="servicesMetaDescription" className="form-control" rows="7"  value={metadescription} onChange={(e) => setMetaDescription(e.target.value)}  placeholder="Enter meta description"></textarea>
            {error.metadescription && <span className="text-danger">{error.metadescription}</span>}
          </div>
          
        </div>
        

      {/* End .col */}
      </div>
      </div>
     
                  
      <div className="col-xl-12">
        <div className="my_profile_setting_input">
          <button className="btn btn1 float-start" type="button" onClick={() => window.location.href = '/akoodeadmin/my-dashboard'}>Back</button>
          <button type="submit" className="btn btn2 float-end" disabled={isSubmitting} >{isSubmitting ? 'Sending...' : 'Submit'}</button>
        </div>
      </div>
      </form>
    </>
  );
};

export default CreateList;
