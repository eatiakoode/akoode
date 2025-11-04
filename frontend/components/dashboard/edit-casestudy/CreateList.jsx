"use client"; 
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { getCasestudyById, updateCasestudyAPI } from "@/api/services";
import { deleteCasestudyprocessAPI } from "@/api/servicesprocess";
import { deleteCasestudychallengeAPI } from "@/api/serviceschallenge";
import { toast } from 'react-toastify';


const CreateList = () => {
  
  const params = useParams();  
    const id = params?.id;  
    const router = useRouter();
    const [inputs, setInputs] = useState([]);
    const [services, setCasestudy] = useState({ title: "", status: false,description: "", });
    const [title, setTitle] = useState("");
    const [project, setProject] = useState("");
    const [slug, setSlug] = useState("");
    const [description, setDescription] = useState("");
     const [error, setError] = useState("");
     const [logo, setLogo] = useState(null);     
    const [logoimage, setLogoImage] = useState(null);
     const [serviceslogo, setCasestudylogo] = useState(null);     
    const [serviceslogoimage, setCasestudylogoImage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [status, setStatus] = useState("");
    const [aboutimage, setAboutImage] = useState(null);
  const [aboutimageget, setAboutImageGet] = useState(null);

  const [abouttitle , setAboutTitle] = useState([]);
  const [aboutdescription, setAboutDescription] = useState([]);
  const [deliveredtitle, setDeliveredTitle] = useState("");
  const [delivereddescription, setDeliveredDescription] = useState([]);
  const [resultstitle, setResultsTitle] = useState("");
  const [resultsdescription, setResultsDescription] = useState([]);
  const [challengetitle, setChallengeTitle] = useState([]);
  const [challengedescription, setChallengeDescription] = useState([]);
  

  const [metatitle, setMetatitle] = useState([]);
  const [metadescription, setMetaDescription] = useState([]);
  const [inputsget, setInputsget] = useState([]);
  const [processInputGet, setProcessInputGet] = useState([]);
    const uploadLogo = (e) => {
      setLogoImage("")
      setLogo(e.target.files[0]);
  };
  const uploadCasestudyLogo = (e) => {
    setCasestudylogoImage("")
    setCasestudylogo(e.target.files[0]);
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
  const isConfirmed = window.confirm("Are you sure you want to delete this process?");
  if (!isConfirmed) return;
    try {
      // alert("test")
      const data = await deleteCasestudyprocessAPI(_id); // 🔹 Call the API function
      // alert("test")
      const deleted = processInputGet?.filter((file) => file._id !== _id);
      setProcessInputGet(deleted);
      //setTitle(""); // ✅ Reset input after success
    } catch (error) {
      alert("Failed to delete property Image.");
      
    }
};
const uploadProcessImage = (index, file) => {
  const updatedInputs = [...inputs];
  updatedInputs[index].imagestep = file;
  setInputs(updatedInputs);
};
const uploadProcessImageGet = (index, file) => {
  // alert("yse")
  const updatedInputs = [...inputsget];
  updatedInputs[index].imageget = file;
  updatedInputs[index].imageurl = null;
  
  setInputsget(updatedInputs);
  
};
const [inputschallengestep, setInputschallengestep] = useState([]);

const [inputschallengestepget, setInputschallengestepget] = useState([]);

const [challengeInputGet, setChallengeInputGet] = useState([]);
//   const [inputspaymentget, setPaymentInputsget] = useState([]);

const handleAddInputchallengestep = () => {
  setInputschallengestep([
    ...inputschallengestep,
    {
      id: Date.now(),
      title: '',
      description: ''
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
const handleInputChangechallengestepGet = (index, field, value) => {
  // alert("test")
  const updated = [...inputschallengestepget];
  updated[index][field] = value;
  setInputschallengestepget(updated);
};
// const handleInputChangechallengestepGet = (index, file) => {
//   // alert("yse")
//   const updatedInputs = [...inputschallengestepget];
//   updatedInputs[index].imagestepget = file;
//   updatedInputs[index].imagestepurl = null;
  
//   setInputschallengestepget(updatedInputs);
  
// };
const handleRemoveInputchallengestepGet = async (_id) => {
  const isConfirmed = window.confirm("Are you sure you want to delete this challenge?");
  if (!isConfirmed) return;
    try {
      // alert("test")
      const data = await deleteCasestudychallengeAPI(_id); // 🔹 Call the API function
      // alert("test")
      const deleted = challengeInputGet?.filter((file) => file._id !== _id);
      setChallengeInputGet(deleted);
      //setTitle(""); // ✅ Reset input after success
    } catch (error) {
      alert("Failed to delete challenge.");
      
    }
};
    useEffect(() => {
      if (!id) return;      
      const fetchCasestudy = async () => {
        try {
          const data = await getCasestudyById(id);
          // setCasestudy({ title: data.data.title, status: data.data.status, description: data.data.description });
          setTitle(data.data.title)
          setProject(data.data.project)
          setSlug(data.data.slug)
          setStatus(data.data.status)
          setDescription(data.data.description)
          
          setAboutTitle(data.data.abouttitle)
          setAboutDescription(data.data.aboutdescription)
          setDeliveredTitle(data.data.deliveredtitle)
          setDeliveredDescription(data.data.delivereddescription)
          setResultsTitle(data.data.resultstitle)
          setResultsDescription(data.data.resultsdescription)
          setChallengeTitle(data.data.challengetitle)
          setChallengeDescription(data.data.challengedescription)
          
          setStatus(data.data.status)
          
          if(data.data.logoimage) {
            setLogoImage(process.env.NEXT_PUBLIC_API_URL+data.data.logoimage)
          }
          if(data.data.servicesimage) {
            setCasestudylogoImage(process.env.NEXT_PUBLIC_API_URL+data.data.servicesimage)
          }
          if(data.data.aboutimage) {
            setAboutImageGet(process.env.NEXT_PUBLIC_API_URL+data.data.aboutimage)
          }
          // console.log("data.data.processstep")
          // console.log(data.data)
          // console.log(data.data.processstep)

          setInputsget(data.data.processstep);
          setProcessInputGet(data.data.processstep);
          setInputschallengestepget(data.data.challengestep);
          setChallengeInputGet(data.data.challengestep);
          setMetatitle(data.data.metatitle)
          setMetaDescription(data.data.metadescription)          
        } catch (error) {
          console.error("Error fetching Casestudy:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchCasestudy();
     
    }, [id]);
   
  
    const handleSubmit = async (e) => {
      e.preventDefault();
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
          formData.append(`process[${index}][titlestep]`, input.title);
          formData.append(`process[${index}][descriptionstep]`, input.description);
          if (input.imagestep) {
            formData.append(`process[${index}][imagestep]`, input.imagestep);
          }
    
        });
        inputsget.forEach((input, index) => {
          formData.append(`processget[${index}][processid]`, input._id);
          formData.append(`processget[${index}][titlestep]`, input.title);
          formData.append(`processget[${index}][descriptionstep]`, input.description);
          if (input.imageget) {
            formData.append(`processget[${index}][imagestep]`, input.imageget);
          }
    
        });
        inputschallengestep.forEach((input, index) => {
          formData.append(`challenges[${index}][titlestep]`, input.title);
          formData.append(`challenges[${index}][descriptionstep]`, input.description);
        });

        inputschallengestepget.forEach((input, index) => {
          formData.append(`challengesget[${index}][challengeid]`, input._id);
          formData.append(`challengesget[${index}][titlestep]`, input.title);
          formData.append(`challengesget[${index}][descriptionstep]`, input.description);
        });
        if (logo) {
          formData.append("logo", logo);
        }
        if (serviceslogo) {
          formData.append("serviceslogo", serviceslogo);
        }
       const res = await updateCasestudyAPI(id, formData);
        // alert("Casestudy updated successfully!");
        toast.success(res.message);
         
         if(res.status=="success"){
            setTimeout(() => {
              router.push("/akoodeadmin/my-services");
              }, 1500); 
          }
      } catch (error) {
        alert("Failed to update Casestudy.");
        console.error(error);
      }
    };
  
    // const handleChange = (e) => {
    //   setCasestudy((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // };
  
    // const handleStatusChange = () => {
    //   setCasestudy((prev) => ({ ...prev, status: !prev.status }));
    // };
  
    if (loading) return <p>Loading...</p>;
  return (
    <>
    <form onSubmit={handleSubmit} className="row">
    <div className="col-lg-6">
    <div >Casestudy Logo</div>
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
            <div  >Casestudy Image</div>
                <div className="wrap-custom-file">
                    <input
                        type="file"
                        id="image2"
                         accept="image/png, image/gif, image/jpeg, image/svg+xml, image/svg, image/webp, image/avif"
                        onChange={uploadCasestudyLogo}
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
            <label htmlFor="CasestudyDescription">Description</label>
            <textarea id="CasestudyDescription" className="form-control" name="description" rows="7"  value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter Casestudy description"></textarea>
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
              <label htmlFor={`processTitle-${index}`}>Process Title </label>
              <input type="text" className="form-control" id={`processTitle-${index}`} value={input.title}
              onChange={(e) =>
                handleInputChange(index, 'title', e.target.value)
              }/>
            </div>
          </div>
         
           {/* End .col */}

          <div className="col-xl-4">
            <div className="my_profile_setting_input form-group">
              <label htmlFor={`processDescription-${index}`}>Process Description</label>
              <input type="text" className="form-control" id={`processDescription-${index}`} value={input.description}
              onChange={(e) =>
                handleInputChange(index, 'description', e.target.value)
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

{inputsget?.map((input, index) => (
        <div className="row" key={input._id} >
           <div className="col-xl-12">
           <div className="my_profile_setting_input">
          <button onClick={() => handleRemoveInputGet(input._id)} className="btn btn2 float-end">Remove</button>
          <input type="hidden" name={`processid-${index}`} value={input._id} /> 
          </div>
          </div>
          <div className="col-xl-4">
            <div className="my_profile_setting_input form-group">
              <label htmlFor={`processTitle-${index}`}>Process Title {index + 1}</label>
              <input type="text" className="form-control" id={`processTitle-${index}`} value={input.title}
              onChange={(e) =>
                handleInputChangeGet(index, 'title', e.target.value)
              }/>
            </div>
          </div>
         
           {/* End .col */}

          <div className="col-xl-4">
            <div className="my_profile_setting_input form-group">
              <label htmlFor={`processDescription-${index}`}>Process Description</label>
              <input type="text" className="form-control" id={`processDescription-${index}`} value={input.description}
              onChange={(e) =>
                handleInputChangeGet(index, 'description', e.target.value)
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
                        onChange={(e) => uploadProcessImageGet(index, e.target.files[0])}
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
                            ? { backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}${input.imageurl})` }
                            : inputsget[index]?.imageget
                            ? { backgroundImage: `url(${URL.createObjectURL(inputsget[index]?.imageget)})` }
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
        {inputschallengestep?.map((input, index) => (
        <div className="row" key={input._id} >
           <div className="col-xl-12">
           <div className="my_profile_setting_input">
          <button onClick={() => handleRemoveInputchallengestep(input._id)} type="button" className="btn btn2 float-end">Remove</button>
          <input type="hidden" name={`challengeid-${index}`} value={input._id} />
          </div>
          </div>
          <div className="col-xl-4">
            <div className="my_profile_setting_input form-group">
              <label htmlFor={`challengeTitle-${index}`}>Challenge Title {index + 1}</label>
              <input type="text" className="form-control" id={`challengeTitle-${index}`} value={input.title}
              onChange={(e) =>
                handleInputChangechallengestep(index, 'title', e.target.value)
              }/>
            </div>
          </div>
         
           {/* End .col */}

          <div className="col-xl-4">
            <div className="my_profile_setting_input form-group">
              <label htmlFor={`challengeDescription-${index}`}>Challenge Description</label>
             
              <input type="text" className="form-control" id={`challengeDescription-${index}`} value={input.description}
              onChange={(e) =>
                handleInputChangechallengestep(index, 'description', e.target.value)
              } />
            </div>
          </div>
          {/* End .col */}
          
        {/* End .col */}      
        </div>
        
      ))}

{inputschallengestepget?.map((input, index) => (
        <div className="row" key={input._id} >
           <div className="col-xl-12">
           <div className="my_profile_setting_input">
          <button onClick={() => handleRemoveInputchallengestepGet(input._id)} type="button" className="btn btn2 float-end">Remove</button>
          <input type="hidden" name={`challengeid-${index}`} value={input._id} />
          </div>
          </div>
          <div className="col-xl-4">
            <div className="my_profile_setting_input form-group">
              <label htmlFor={`challengeTitle-${index}`}>Challenge Title {index + 1}</label>
              <input type="text" className="form-control" id={`challengeTitle-${index}`} value={input.title}
              onChange={(e) =>
                handleInputChangechallengestepGet(index, 'title', e.target.value)
              }/>
            </div>
          </div>
         
           {/* End .col */}

          <div className="col-xl-4">
            <div className="my_profile_setting_input form-group">
              <label htmlFor={`challengeDescription-${index}`}>Challenge Description</label>
             
              <input type="text" className="form-control" id={`challengeDescription-${index}`} value={input.description}
              onChange={(e) =>
                handleInputChangechallengestepGet(index, 'description', e.target.value)
              } />
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
