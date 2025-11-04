"use client"; 
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { getServicesById, updateServicesAPI } from "@/api/services";
// import { deleteServicestechnologyAPI } from "@/api/servicestechnology";
// import { deleteServicesserviceAPI } from "@/api/servicesservice";
import { toast } from 'react-toastify';


const CreateList = () => {
  
  const params = useParams();  
    const id = params?.id;  
    const router = useRouter();
    const [inputs, setInputs] = useState([]);
    const [services, setServices] = useState({ title: "", status: false,description: "", });
    const [title, setTitle] = useState("");
    const [project, setProject] = useState("");
    const [slug, setSlug] = useState("");
    const [description, setDescription] = useState("");
     const [error, setError] = useState("");
     const [logo, setLogo] = useState(null);     
    const [logoimage, setLogoImage] = useState(null);
     const [serviceslogo, setServiceslogo] = useState(null);     
    const [serviceslogoimage, setServiceslogoImage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [status, setStatus] = useState("");
    const [aboutimage, setAboutImage] = useState(null);
  const [aboutimageget, setAboutImageGet] = useState(null);

  const [abouttitle , setAboutTitle] = useState([]);
  const [aboutdescription, setAboutDescription] = useState([]);
  const [technologytitle, setTechnologyTitle] = useState("");
  const [technologydescription, setTechnologyDescription] = useState([]);
  const [resultstitle, setResultsTitle] = useState("");
  const [resultsdescription, setResultsDescription] = useState([]);
  const [servicetitle, setServiceTitle] = useState([]);
  const [servicedescription, setServiceDescription] = useState([]);
  

  const [metatitle, setMetatitle] = useState([]);
  const [metadescription, setMetaDescription] = useState([]);
  const [inputsget, setInputsget] = useState([]);
  const [technologyInputGet, setTechnologyInputGet] = useState([]);
    const uploadLogo = (e) => {
      setLogoImage("")
      setLogo(e.target.files[0]);
  };
  const uploadServicesLogo = (e) => {
    setServiceslogoImage("")
    setServiceslogo(e.target.files[0]);
};
const uploadAboutImage = (e) => {
  setAboutImageGet("");
  setAboutImage(e.target.files[0]);
};
const handleAddInput = () => {
  setInputs([
    ...inputs,
    {
      id: Date.now(),
      title: '',
      description: '',
      imagestep: null
    }
  ]);
};
const handleInputChange = (index, field, value) => {
  const updated = [...inputs];
  updated[index][field] = value;
  setInputs(updated);
};
const handleInputChangeGet = (index, field, value) => {
  // alert("test")
  const updated = [...inputsget];
  updated[index][field] = value;
  setInputsget(updated);
};
const handleRemoveInput = (idToRemove) => {
  setInputs(inputs.filter((input) => input.id !== idToRemove));
};
const handleRemoveInputGet = async (_id) => {
  const isConfirmed = window.confirm("Are you sure you want to delete this technology?");
  if (!isConfirmed) return;
    try {
      // alert("test")
      const data = await deleteServicestechnologyAPI(_id); // 🔹 Call the API function
      // alert("test")
      const deleted = technologyInputGet?.filter((file) => file._id !== _id);
      setTechnologyInputGet(deleted);
      //setTitle(""); // ✅ Reset input after success
    } catch (error) {
      alert("Failed to delete property Image.");
      
    }
};
const uploadTechnologyImage = (index, file) => {
  const updatedInputs = [...inputs];
  updatedInputs[index].imagestep = file;
  setInputs(updatedInputs);
};
const uploadTechnologyImageGet = (index, file) => {
  // alert("yse")
  const updatedInputs = [...inputsget];
  updatedInputs[index].imageget = file;
  updatedInputs[index].imageurl = null;
  
  setInputsget(updatedInputs);
  
};
const [inputsservicestep, setInputsservicestep] = useState([]);

const [inputsservicestepget, setInputsservicestepget] = useState([]);

const [serviceInputGet, setServiceInputGet] = useState([]);
//   const [inputspaymentget, setPaymentInputsget] = useState([]);

const handleAddInputservicestep = () => {
  setInputsservicestep([
    ...inputsservicestep,
    {
      id: Date.now(),
      title: '',
      description: ''
    }
  ]);
};
const handleInputChangeservicestep = (index, field, value) => {
  const updated = [...inputsservicestep];
  updated[index][field] = value;
  setInputsservicestep(updated);
};
const handleRemoveInputservicestep = (idToRemove) => {
  setInputsservicestep(inputsservicestep.filter((input) => input.id !== idToRemove));
};
const handleInputChangeservicestepGet = (index, field, value) => {
  // alert("test")
  const updated = [...inputsservicestepget];
  updated[index][field] = value;
  setInputsservicestepget(updated);
};
// const handleInputChangeservicestepGet = (index, file) => {
//   // alert("yse")
//   const updatedInputs = [...inputsservicestepget];
//   updatedInputs[index].imagestepget = file;
//   updatedInputs[index].imagestepurl = null;
  
//   setInputsservicestepget(updatedInputs);
  
// };
const handleRemoveInputservicestepGet = async (_id) => {
  const isConfirmed = window.confirm("Are you sure you want to delete this service?");
  if (!isConfirmed) return;
    try {
      // alert("test")
      // const data = await deleteServicesserviceAPI(_id); // 🔹 Call the API function
      // alert("test")
      const deleted = serviceInputGet?.filter((file) => file._id !== _id);
      setServiceInputGet(deleted);
      //setTitle(""); // ✅ Reset input after success
    } catch (error) {
      alert("Failed to delete service.");
      
    }
};
    useEffect(() => {
      if (!id) return;      
      const fetchServices = async () => {
        try {
          const data = await getServicesById(id);
          // setServices({ title: data.data.title, status: data.data.status, description: data.data.description });
          setTitle(data.data.title)
          setProject(data.data.project)
          setSlug(data.data.slug)
          setStatus(data.data.status)
          setDescription(data.data.description)
          
          setAboutTitle(data.data.abouttitle)
          setAboutDescription(data.data.aboutdescription)
          setTechnologyTitle(data.data.technologytitle)
          setTechnologyDescription(data.data.technologydescription)
          setResultsTitle(data.data.resultstitle)
          setResultsDescription(data.data.resultsdescription)
          setServiceTitle(data.data.servicetitle)
          setServiceDescription(data.data.servicedescription)
          
          setStatus(data.data.status)
          
          if(data.data.logoimage) {
            setLogoImage(technology.env.NEXT_PUBLIC_API_URL+data.data.logoimage)
          }
          if(data.data.servicesimage) {
            setServiceslogoImage(technology.env.NEXT_PUBLIC_API_URL+data.data.servicesimage)
          }
          if(data.data.aboutimage) {
            setAboutImageGet(technology.env.NEXT_PUBLIC_API_URL+data.data.aboutimage)
          }
          // console.log("data.data.technologystep")
          // console.log(data.data)
          // console.log(data.data.technologystep)

          setInputsget(data.data.technologystep);
          setTechnologyInputGet(data.data.technologystep);
          setInputsservicestepget(data.data.servicestep);
          setServiceInputGet(data.data.servicestep);
          setMetatitle(data.data.metatitle)
          setMetaDescription(data.data.metadescription)          
        } catch (error) {
          console.error("Error fetching Services:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchServices();
     
    }, [id]);
   
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const payload = {
          title, slug,description,project, servicetitle, servicedescription, aboutimage, abouttitle, aboutdescription, technologytitle, technologydescription, resultstitle, resultsdescription,
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
          formData.append(`technology[${index}][titlestep]`, input.title);
          formData.append(`technology[${index}][descriptionstep]`, input.description);
          if (input.imagestep) {
            formData.append(`technology[${index}][imagestep]`, input.imagestep);
          }
    
        });
        inputsget.forEach((input, index) => {
          formData.append(`technologyget[${index}][technologyid]`, input._id);
          formData.append(`technologyget[${index}][titlestep]`, input.title);
          formData.append(`technologyget[${index}][descriptionstep]`, input.description);
          if (input.imageget) {
            formData.append(`technologyget[${index}][imagestep]`, input.imageget);
          }
    
        });
        inputsservicestep.forEach((input, index) => {
          formData.append(`services[${index}][titlestep]`, input.title);
          formData.append(`services[${index}][descriptionstep]`, input.description);
        });

        inputsservicestepget.forEach((input, index) => {
          formData.append(`servicesget[${index}][serviceid]`, input._id);
          formData.append(`servicesget[${index}][titlestep]`, input.title);
          formData.append(`servicesget[${index}][descriptionstep]`, input.description);
        });
        if (logo) {
          formData.append("logo", logo);
        }
        if (serviceslogo) {
          formData.append("serviceslogo", serviceslogo);
        }
       const res = await updateServicesAPI(id, formData);
        // alert("Services updated successfully!");
        toast.success(res.message);
         
         if(res.status=="success"){
            setTimeout(() => {
              router.push("/akoodeadmin/my-services");
              }, 1500); 
          }
      } catch (error) {
        alert("Failed to update Services.");
        console.error(error);
      }
    };
  
    // const handleChange = (e) => {
    //   setServices((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // };
  
    // const handleStatusChange = () => {
    //   setServices((prev) => ({ ...prev, status: !prev.status }));
    // };
  
    if (loading) return <p>Loading...</p>;
  return (
    <>
    <form onSubmit={handleSubmit} className="row">
    <div className="col-lg-6">
    <div >Services Icon</div>
                <div className="wrap-custom-file">
                    <input
                        type="file"
                        id="image1"
                         accept="image/png, image/gif, image/jpeg, image/svg+xml, image/svg, image/webp, image/avif"
                        onChange={uploadLogo}
                    />
                   <label
                      htmlFor="image1"
                      style={
                        logoimage                          
                        ? { backgroundImage: `url(${logoimage})` }
                          : logo
                          ? { backgroundImage: `url(${URL.createObjectURL(logo)})` }
                          : undefined
                      }
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
            <div  >Services Image</div>
                <div className="wrap-custom-file">
                    <input
                        type="file"
                        id="image2"
                         accept="image/png, image/gif, image/jpeg, image/svg+xml, image/svg, image/webp, image/avif"
                        onChange={uploadServicesLogo}
                    />
                    <label
                    htmlFor="image2"
                        style={
                          serviceslogoimage                          
                          ? { backgroundImage: `url(${serviceslogoimage})` }
                            : serviceslogo
                            ? { backgroundImage: `url(${URL.createObjectURL(serviceslogo)})` }
                            : undefined
                        }
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
            <label htmlFor="ServicesDescription">Description</label>
            <textarea id="ServicesDescription" className="form-control" name="description" rows="7"  value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter Services description"></textarea>
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
                                    aboutimageget                          
                                    ? { backgroundImage: `url(${aboutimageget})` }
                                      : aboutimage
                                      ? { backgroundImage: `url(${URL.createObjectURL(aboutimage)})` }
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

      {/* End .col */}

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
          <h3 className="mb30">Technology</h3>
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
              <label htmlFor={`technologyTitle-${index}`}>Technology Title </label>
              <input type="text" className="form-control" id={`technologyTitle-${index}`} value={input.title}
              onChange={(e) =>
                handleInputChange(index, 'title', e.target.value)
              }/>
            </div>
          </div>
         
           {/* End .col */}

          <div className="col-xl-4">
            <div className="my_profile_setting_input form-group">
              {/* <label htmlFor={`technologyDescription-${index}`}>Technology Description</label>
              <input type="text" className="form-control" id={`technologyDescription-${index}`} value={input.description}
              onChange={(e) =>
                handleInputChange(index, 'description', e.target.value)
              } /> */}
              <label htmlFor={`technologyDescription-${index}`}>Technology Description {index + 1}</label>
            <textarea
              className="form-control"
              id={`technologyDescription-${index}`}
              rows="4" value={input.description}
              onChange={(e) =>
                handleInputChange(index, 'description', e.target.value)
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
                            : undefined
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

{inputsget?.map((input, index) => (
        <div className="row" key={input._id} >
           <div className="col-xl-12">
           <div className="my_profile_setting_input">
          <button onClick={() => handleRemoveInputGet(input._id)} className="btn btn2 float-end">Remove</button>
          <input type="hidden" name={`technologyid-${index}`} value={input._id} /> 
          </div>
          </div>
          <div className="col-xl-4">
            <div className="my_profile_setting_input form-group">
              <label htmlFor={`technologyTitle-${index}`}>Technology Title {index + 1}</label>
              <input type="text" className="form-control" id={`technologyTitle-${index}`} value={input.title}
              onChange={(e) =>
                handleInputChangeGet(index, 'title', e.target.value)
              }/>
            </div>
          </div>
         
           {/* End .col */}

          <div className="col-xl-4">
            <div className="my_profile_setting_input form-group">
              
              
              <label htmlFor={`technologyDescription-${index}`}>Technology Description {index + 1}</label>
            <textarea
              className="form-control"
              id={`technologyDescription-${index}`}
              rows="4" value={input.description}
              onChange={(e) =>
                handleInputChangeGet(index, 'description', e.target.value)
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
                        onChange={(e) => uploadTechnologyImageGet(index, e.target.files[0])}
                    />
                    <label
                        // style={
                        //   inputs[index]?.imagestep
                        //     ? {
                        //         backgroundImage: `url(${URL.createObjectURL(inputs[index].imagestep)})`,
                        //       }
                        //     : undefined
                        // }

                        style={
                          input.imageurl
                            ? { backgroundImage: `url(${technology.env.NEXT_PUBLIC_API_URL}${input.imageurl})` }
                            : inputsget[index]?.imageget
                            ? { backgroundImage: `url(${URL.createObjectURL(inputsget[index]?.imageget)})` }
                            : undefined
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
      <div className="my_dashboard_review mt30">
        <div className="col-lg-12">
          <h3 className="mb30">Service</h3>
          <button className="btn admore_btn mb30" type="button" onClick={handleAddInputservicestep} >Add More</button>
        </div>
        {inputsservicestep?.map((input, index) => (
        <div className="row" key={input._id} >
           <div className="col-xl-12">
           <div className="my_profile_setting_input">
          <button onClick={() => handleRemoveInputservicestep(input._id)} type="button" className="btn btn2 float-end">Remove</button>
          <input type="hidden" name={`serviceid-${index}`} value={input._id} />
          </div>
          </div>
          <div className="col-xl-4">
            <div className="my_profile_setting_input form-group">
              <label htmlFor={`serviceTitle-${index}`}>Service Title {index + 1}</label>
              <input type="text" className="form-control" id={`serviceTitle-${index}`} value={input.title}
              onChange={(e) =>
                handleInputChangeservicestep(index, 'title', e.target.value)
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
              rows="4" value={input.description}
              onChange={(e) =>
                handleInputChangeservicestep(index, 'description', e.target.value)
              }
            ></textarea>
              
            </div>
          </div>
          {/* End .col */}
          
        {/* End .col */}      
        </div>
        
      ))}

{inputsservicestepget?.map((input, index) => (
        <div className="row" key={input._id} >
           <div className="col-xl-12">
           <div className="my_profile_setting_input">
          <button onClick={() => handleRemoveInputservicestepGet(input._id)} type="button" className="btn btn2 float-end">Remove</button>
          <input type="hidden" name={`serviceid-${index}`} value={input._id} />
          </div>
          </div>
          <div className="col-xl-4">
            <div className="my_profile_setting_input form-group">
              <label htmlFor={`serviceTitle-${index}`}>Service Title {index + 1}</label>
              <input type="text" className="form-control" id={`serviceTitle-${index}`} value={input.title}
              onChange={(e) =>
                handleInputChangeservicestepGet(index, 'title', e.target.value)
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
              rows="4" value={input.description}
              onChange={(e) =>
                handleInputChangeservicestepGet(index, 'description', e.target.value)
              }
            ></textarea>
            </div>
          </div>
          {/* End .col */}
          
        {/* End .col */}      
        </div>
        
      ))}
       </div>
       
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
      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Status</label>
          <select
  className="selectpicker form-select"
  data-live-search="true"
  data-width="100%"
  value={status ? "active" : "deactive"}
  onChange={(e) => setStatus(e.target.value === "active")}
>
        <option value="active">Active</option>
        <option value="deactive">Deactive</option>
      </select>
        </div>
      </div>
      {/* End .col */}


      <div className="col-xl-12">
        <div className="my_profile_setting_input">
          <button className="btn btn1 float-start" type="button" onClick={() => window.location.href = '/akoodeadmin/my-services'}>Back</button>
          <button className="btn btn2 float-end">Submit</button>
        </div>
      </div>
      </form>
    </>
  );
};

export default CreateList;
