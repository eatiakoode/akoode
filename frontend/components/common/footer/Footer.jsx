'use client'
import Link from "next/link";
import Social from "./Social";
import SubscribeForm from "./SubscribeForm";
import { useState, useEffect } from "react";
import { getPropertyCompareData } from "@/api/frontend/property";
import Image from "next/image";
import { useCompare } from "@/components/common/footer/CompareContext";
import { addEnquiryAPI } from "@/api/frontend/enquiry";
import { useForm } from 'react-hook-form';
import { useRouter, useParams } from "next/navigation";

const Footer = ({  showBox,setShowBox }) => {
   const [properties, setProperties] = useState([]);
   const [hydrated, setHydrated] = useState(false);
  //  const { propertycompare } = useCompare();
  const { propertycompare, setPropertycompare } = useCompare();
  const [showPopup, setShowPopup] = useState(false);
  
 const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
   const [successmsg, setSuccessmsg] = useState("");
  const router = useRouter();
  
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
        reset,
      } = useForm();
      const onSubmit = async (data) => {
          // console.log("tests")
          let date = "NA";
          const today = new Date();
    const formattedDate = today.toISOString().split('T')[0]; // YYYY-MM-DD format
    date = formattedDate;
          try {
            
            const payload = {
            ...data,
            subject:"NA",
            message:"NA",
            date:formattedDate, // ✅ manually add the date
          };
          // console.log("tests",payload)
          setShowPopup(false);
           router.push("/thank-you");
            const res = await addEnquiryAPI(payload);
            
            if(res.status=="success"){
              setSuccessmsg(res.message)
              setName("")
              setEmail("")
              setPhone("")
              setSubject("")
              setMessage("")
            }
      
            setError({});
           
          // (Reset other fields here if needed)
        } catch (err) {
          setError({ general: err.message || "Something went wrong" });
        }
        };
  
  const deleteCompareProperty = async (id) => {
    setPropertycompare((old) =>
        old.includes(id) ? old.filter(item => item !== id) : [...old, id]
      );
  };
  useEffect(() => {
    setHydrated(true);
  }, []);
  useEffect(() => {
    const fetchProperties = async () => {
      if (Array.isArray(propertycompare) && propertycompare?.length > 0) {
        const propertycomparelist = propertycompare.join(",");
        const data = await getPropertyCompareData(propertycomparelist);
        setProperties(data);
      } else {
        setProperties([]); // clear if nothing to show
      }
    };
  
    fetchProperties();
  }, [propertycompare]); // ← add this dependency
  
  // useEffect( () => {
  //     if (propertycompare) {
  //       if (Array.isArray(propertycompare) && propertycompare.length > 0) {       
  //       const fetchProperties = async () => {
  //         const propertycomparelist = propertycompare.join(",");
  //               const data = await getPropertyCompareData(propertycomparelist);
  //               setProperties(data);
  //             };
  //             fetchProperties();
  //         }
  //     }      
  //   }, []);
    // useEffect(() => {
    //   localStorage.setItem("propertycompare", JSON.stringify(propertycompare));
    // }, [propertycompare]);
    useEffect(() => {
      localStorage.setItem("propertycompare", JSON.stringify(propertycompare));
    }, [propertycompare]);

    useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
    }, []);
    
  return (
    <>
    
        <div className="text-lg-end">
          <div className="most_trust_content">
            <p>For jobs email at hr@akoode.in or call 0124-4197516</p>
          </div>
          <div className="most_trust_badge">
            <Image
              src="/images/Clutch-Badge-Blue.svg"
              alt="An AI Powered Corporation on Clutch"
              width={100}
              height={50}
            />
            <span>Most trusted AI Powered Corporation Company on Clutch</span>
          </div>
        </div>

        <div className="row g-4 pb-5">
          <div className="col-xl-6 col-md-6">
            <div className="footer-short-info rounded-20 d-flex flex-column align-items-start">
              <h4>India Office -</h4>
              <div>
                <div className="icon d-flex align-items-center justify-content-center rounded-pill flex-shrink-0">
                  <Image
                    src="/images/location1.svg"
                    alt="footer-short-icon"
                    width={30}
                    height={30}
                  />
                </div>
                <div className="text">
                  <Link href="#">
                    Tower B4, Spaze iTech Park, UN 616, Sohna - Gurgaon Rd,
                    Block S, Sector 49, Gurugram, Haryana 122018
                  </Link>
                </div>
              </div>
              <div>
                <div className="icon d-flex align-items-center justify-content-center rounded-pill flex-shrink-0">
                  <Image
                    src="/images/email1.svg"
                    alt="footer-short-icon"
                    width={30}
                    height={30}
                  />
                </div>
                <div className="text">
                  <Link href="mailto:info@akoode.com">info@akoode.com</Link>
                </div>
              </div>
              <div>
                <div className="icon d-flex align-items-center justify-content-center rounded-pill flex-shrink-0">
                  <Image
                    src="/images/phn1.svg"
                    alt="footer-short-icon"
                    width={30}
                    height={30}
                  />
                </div>
                <div className="text">
                  <Link href="tel:+91-9899300017">+91-9899300017</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-md-6">
            <div className="footer-short-info rounded-20 d-flex flex-column align-items-start">
              <h4>USA Office -</h4>
              <div>
                <div className="icon d-flex align-items-center justify-content-center rounded-pill flex-shrink-0">
                  <Image
                    src="/images/location1.svg"
                    alt="footer-short-icon"
                    width={30}
                    height={30}
                  />
                </div>
                <div className="text">
                  <Link href="#">
                    10816 South Olmsted St W Jenks, OK 74037, USA
                  </Link>
                </div>
              </div>
              <div>
                <div className="icon d-flex align-items-center justify-content-center rounded-pill flex-shrink-0">
                  <Image
                    src="/images/email1.svg"
                    alt="footer-short-icon"
                    width={30}
                    height={30}
                  />
                </div>
                <div className="text">
                  <Link href="mailto:info@akoode.com">info@akoode.com</Link>
                </div>
              </div>
              <div>
                <div className="icon d-flex align-items-center justify-content-center rounded-pill flex-shrink-0">
                  <Image
                    src="/images/phn1.svg"
                    alt="footer-short-icon"
                    width={30}
                    height={30}
                  />
                </div>
                <div className="text">
                  <Link href="tel:1-7122141784">1-712 214 1784</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-5 col-md-6">
            <div className="footer-logo1">
              <Image src="/images/logo.svg" alt="logo" width={150} height={60} />
              <div className="space16"></div>
              <p>
                Akoode Technology is a leading software development company
                based in Gurgaon, India, and the USA, recognized for its
                excellence and reliability...
              </p>
              <div className="space24"></div>
              <Image
                src="/images/dmca-badge.png"
                alt="image"
                width={100}
                height={50}
              />
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <div className="space30 d-md-none d-block"></div>
            <div className="vl-footer-widget">
              <h3>Quick Links</h3>
              <ul>
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">Case Studies</Link></li>
                <li><Link href="#">Our Clients</Link></li>
                <li><Link href="#">Blogs</Link></li>
                <li><Link href="#">Career</Link></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-5 col-md-6">
            <div className="vl-footer-widget">
              <div className="space30 d-lg-none d-block"></div>
              <h3>Our Services</h3>
              <ul className="service-wiget">
                <li><Link href="#">Artificial Intelligence</Link></li>
                <li><Link href="#">Digital Transformation</Link></li>
                <li><Link href="#">Software Development</Link></li>
                <li><Link href="#">Mobile App Development</Link></li>
                <li><Link href="#">Web Development</Link></li>
                <li><Link href="#">eCommerce Solution</Link></li>
                <li><Link href="#">IOT Development</Link></li>
                <li><Link href="#">BigData & Data Analytics</Link></li>
                <li><Link href="#">Cloud and DevOps</Link></li>
                <li><Link href="#">Blockchain Development</Link></li>
                <li><Link href="#">Staff Augmentation</Link></li>
                <li><Link href="#">360 Degree Digital Marketing</Link></li>
              </ul>
            </div>
          </div>
        </div>

        
     



    </>
  );
};

export default Footer;
