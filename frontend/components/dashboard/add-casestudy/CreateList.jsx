"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { getAmenityTableData } from "@/api/amenity";
import { addCasestudyAPI } from "@/api/casestudy";
import { MultiSelectInput } from 'multi-select-input';
import { getFaqTableData } from "@/api/faq";

import selectedFiles from "@/utils/selectedFiles";
import { toast } from 'react-toastify';
import Image from "next/image";

const CreateList = () => {
  const [inputs, setInputs] = useState([]);
  const [logo, setLogo] = useState(null);
    const [serviceslogo, setCasestudylogo] = useState(null);
  const [isSubmitting, setisSubmitting] = useState("");
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
const uploadCasestudyLogo = (e) => {
  setCasestudylogo(e.target.files[0]);
};
  const handleInputChange = (index, field, value) => {
    const updated = [...inputs];
    updated[index][field] = value;
    setInputs(updated);
  };
  const handleRemoveInput = (idToRemove) => {
    setInputs(inputs.filter((input) => input.id !== idToRemove));
  };
  const uploadProcessImage = (index, file) => {
    const updatedInputs = [...inputs];
    updatedInputs[index].imagestep = file;
    setInputs(updatedInputs);
  };

  const [inputschallengestep, setInputschallengestep] = useState([]);
  const handleAddInputchallengestep = () => {
    setInputschallengestep([
      ...inputschallengestep,
      {
        id: Date.now(),
        titlestep: '',
        descriptionstep: ''
      }
    ]);
  };
  const handleInputChangechallengestep = (index, field, value) => {
    const updated = [...inputschallengestep];
    updated[index][field] = value;
    setInputschallengestep(updated);
  };
  const handleRemoveInputchallengestep = (idToRemove) => {
    setInputschallengestep(inputschallengestep.filter((input) => input.id !== idToRemove));
  };
 
  const [value, setValue] = useState([]);
  const [options, setOptions] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [deliveredtitle, setDeliveredTitle] = useState("");
  const [delivereddescription, setDeliveredDescription] = useState([]);
  const [resultstitle, setResultsTitle] = useState("");
  const [resultsdescription, setResultsDescription] = useState([]);
  const router = useRouter();
  const [error, setError] = useState("");
  // --- State Hooks ---
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [project, setProject] = useState("");
const [slug, setSlug] = useState("");
  const [challengetitle , setChallengeTitle] = useState([]);
  const [challengedescription, setChallengeDescription] = useState([]);

  const [aboutimage, setAboutImage] = useState(null);
  const [abouttitle , setAboutTitle] = useState([]);
  const [aboutdescription, setAboutDescription] = useState([]);


 

  const [metatitle, setMetatitle] = useState([]);
  const [metadescription, setMetaDescription] = useState([]);


  
  // upload profile
  const uploadAboutImage = (e) => {
    setAboutImage(e.target.files[0]);
};
  
    
    
  
// --- Submit ---
const addCasestudy = async (e) => {
 
  e.preventDefault();
  setisSubmitting(true)
  const newErrors = {};
  
  const requiredFields = [
    { key: "title", value: title, name: "Title" },
    { key: "slug", value: slug, name: "Slug" },
    
    { key: "abouttitle", value: abouttitle, name: "About title" },
    { key: "aboutdescription", value: aboutdescription, name: "About Description" },
    { key: "metatitle", value: metatitle, name: "Meta Title" },
    { key: "metadescription", value: metadescription, name: "Meta Description" },
    { key: "deliveredtitle", value: deliveredtitle, name: "Delivered Title" },
    { key: "delivereddescription", value: delivereddescription, name: "Delivered Description" },
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
      title, slug,description,project, challengetitle, challengedescription, aboutimage, abouttitle, aboutdescription, deliveredtitle, delivereddescription, resultstitle, resultsdescription,
      metatitle, metadescription
    };
    
    
    const formData = new FormData();
   
    // Loop over each key-value pair in the payload
    for (const key in payload) {
      if (payload[key] !== undefined && payload[key] !== null) {
        formData.append(key, payload[key]);
      }
    }
    inputs.forEach((input, index) => {
      formData.append(`process[${index}][titlestep]`, input.titlestep);
      formData.append(`process[${index}][descriptionstep]`, input.descriptionstep);
      if (input.imagestep) {
        formData.append(`process[${index}][imagestep]`, input.imagestep);
      }

    });
    inputschallengestep.forEach((input, index) => {
      formData.append(`challenges[${index}][titlestep]`, input.titlestep);
      formData.append(`challenges[${index}][descriptionstep]`, input.descriptionstep);
    });
    if (logo) {
      formData.append("logo", logo);
    }
    if (serviceslogo) {
      formData.append("serviceslogo", serviceslogo);
    }
      

    const data = await addCasestudyAPI(formData);
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
  }
};



  return (
    <>
    <form onSubmit={addCasestudy} className="row">
    <div className="col-lg-6">
    <div>Casestudy logo</div>
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
                                : undefined
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
            <div>Casestudy Image</div>
                <div className="wrap-custom-file">
                    <input
                        type="file"
                        id="image2"
                         accept="image/png, image/gif, image/jpeg, image/svg+xml, image/svg, image/webp, image/avif"
                        onChange={uploadCasestudyLogo}
                    />
                    <label
                        style={
                            serviceslogo !== null
                                ? {
                                      backgroundImage: `url(${URL.createObjectURL(
                                          serviceslogo
                                      )})`,
                                  }
                                : undefined
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
          <label htmlFor="servicesProject">Casestudy Project</label>
          <input type="text" className="form-control"  id="servicesProject" value={project} onChange={(e) => setProject(e.target.value)}  placeholder="Enter services Project"/>
          {error.project && <span className="text-danger">{error.project}</span>}

        </div>
      </div>
      <div className="col-lg-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="servicesTitle">Casestudy Title</label>
          <input type="text" className="form-control"  id="servicesTitle" value={title} onChange={(e) => setTitle(e.target.value)}  placeholder="Enter services Title"/>
          {error.title && <span className="text-danger">{error.title}</span>}

        </div>
      </div>
        <div className="col-lg-4">
          <div className="my_profile_setting_input form-group">
            <label htmlFor="servicesSlug">Casestudy Slug (SEO URL)</label>
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
                                          : undefined
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
            <label htmlFor="challengeTitle">Challenge Title</label>
            <input type="text" className="form-control"  id="challengeTitle" value={challengetitle} onChange={(e) => setChallengeTitle(e.target.value)}  placeholder="Enter Challenge Title"/>
            {error.challengetitle && <span className="text-danger">{error.challengetitle}</span>}

          </div>
          </div>
          <div className="col-lg-6">
          <div className="my_profile_setting_textarea form-group">
              <label htmlFor="challengeDescription">Challenge Description</label>
              <textarea id="challengeDescription" className="form-control" rows="7"  value={challengedescription} onChange={(e) => setChallengeDescription(e.target.value)}  placeholder="Enter challenge description"></textarea>
              {error.challengedescription && <span className="text-danger">{error.challengedescription}</span>}
            </div>
      </div>

      <div className="col-lg-6">
          <div className="my_profile_setting_input form-group">
            <label htmlFor="deliveredTitle">Delivered Title</label>
            <input type="text" className="form-control"  id="deliveredTitle" value={deliveredtitle} onChange={(e) => setDeliveredTitle(e.target.value)}  placeholder="Enter Delivered Title"/>
            {error.deliveredtitle && <span className="text-danger">{error.deliveredtitle}</span>}

          </div>
          </div>
          <div className="col-lg-6">
          <div className="my_profile_setting_textarea form-group">
              <label htmlFor="deliveredDescription">Delivered Description</label>
              <textarea id="deliveredDescription" className="form-control" rows="7"  value={delivereddescription} onChange={(e) => setDeliveredDescription(e.target.value)}  placeholder="Enter delivered description"></textarea>
              {error.delivereddescription && <span className="text-danger">{error.delivereddescription}</span>}
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
          <h3 className="mb30">Process</h3>
          <button className="btn admore_btn mb30" type="button" onClick={handleAddInput} >Add More</button>
        </div>
        {inputs.map((input, index) => (
        <div className="row" key={input.id} >
           <div className="col-xl-12">
           <div className="my_profile_setting_input">
          <button onClick={() => handleRemoveInput(input.id)} className="btn btn2 float-end">Remove</button>
          </div>
          </div>
          <div className="col-xl-4">
            <div className="my_profile_setting_input form-group">
              <label htmlFor={`processTitle-${index}`}>Process Title {index + 1}</label>
              <input type="text" className="form-control" id={`processTitle-${index}`} value={input.titlestep}
              onChange={(e) =>
                handleInputChange(index, 'titlestep', e.target.value)
              }/>
            </div>
          </div>
         
           {/* End .col */}

          <div className="col-xl-4">
            <div className="my_profile_setting_input form-group">
              <label htmlFor={`processDescription-${index}`}>Process Description</label>
              <input type="text" className="form-control" id={`processDescription-${index}`} value={input.descriptionstep}
              onChange={(e) =>
                handleInputChange(index, 'descriptionstep', e.target.value)
              } />
            </div>
          </div>
          {/* End .col */}
          <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input form-group">
          
        <div htmlFor="processimage">Process Image</div>
                <div className="wrap-custom-file height-150">
              
                    <input
                        type="file"
                        id={`processimage-${index}`}
                        accept="image/png, image/gif, image/jpeg, image/svg+xml, image/svg, image/webp, image/avif"
                        onChange={(e) => uploadProcessImage(index, e.target.files[0])}
                    />
                    <label
                        style={
                          inputs[index]?.imagestep
                            ? {
                                backgroundImage: `url(${URL.createObjectURL(inputs[index].imagestep)})`,
                              }
                            : undefined
                        }
                        htmlFor={`processimage-${index}`}
                      >
                        <span>
                            <i className="flaticon-download"></i> Upload process image{" "}
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
          <h3 className="mb30">Challenge</h3>
          <button className="btn admore_btn mb30" type="button" onClick={handleAddInputchallengestep} >Add More</button>
        </div>
        {inputschallengestep.map((input, index) => (
        <div className="row" key={input.id} >
           <div className="col-xl-12">
           <div className="my_profile_setting_input">
          <button onClick={() => handleRemoveInputchallengestep(input.id)} type="button" className="btn btn2 float-end">Remove</button>
          <input type="hidden" name={`challengeid-${index}`} value={input._id} />
          </div>
          </div>
          <div className="col-xl-4">
            <div className="my_profile_setting_input form-group">
              <label htmlFor={`challengeTitle-${index}`}>Challenge Title {index + 1}</label>
              <input type="text" className="form-control" id={`challengeTitle-${index}`} value={input.titlestep}
              onChange={(e) =>
                handleInputChangechallengestep(index, 'titlestep', e.target.value)
              }/>
            </div>
          </div>
         
           {/* End .col */}

          <div className="col-xl-4">
            <div className="my_profile_setting_input form-group">
              <label htmlFor={`challengeDescription-${index}`}>Challenge Description</label>
             
              <input type="text" className="form-control" id={`challengeDescription-${index}`} value={input.descriptionstep}
              onChange={(e) =>
                handleInputChangechallengestep(index, 'descriptionstep', e.target.value)
              } />
            </div>
          </div>
          {/* End .col */}
          
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
