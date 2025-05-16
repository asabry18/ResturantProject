import { Button, Col, Container, Alert, Row } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import "./Reservation.css";

export default function Reservation() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    name: "",
    phone: "",
    totalPerson: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function validateForm() {
    let newErrors = {};
    if (!formData.date) newErrors.date = "Date is required.";
    if (!formData.time) newErrors.time = "Time is required.";
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.phone.match(/^\d{3}-\d{4}-\d{4}$/)) newErrors.phone = "Enter a valid phone number (xxx-xxxx-xxxx).";
    const totalPerson = parseInt(formData.totalPerson, 10);
    if (!formData.totalPerson || isNaN(totalPerson) || totalPerson <= 0) {
      newErrors.totalPerson = "Enter a valid number of people.";
    } else if (totalPerson > 20) {
      newErrors.totalPerson = "For parties larger than 20, please call us directly.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post("https://cafeu-api.vercel.app/reservation", formData);
        if (response.status === 201) {
          setSuccessMessage("Reservation saved successfully!");
          setFormData({
            date: "",
            time: "",
            name: "",
            phone: "",
            totalPerson: "",
          });

          setErrors({});
          alert("✅ Reservation saved successfully!");
          setTimeout(() => setSuccessMessage(""), 3000);
        }
      } catch (error) {
        console.error("Error saving reservation:", error);
        setErrors({ 
          submit: "Failed to save reservation. Please try again or contact us directly." 
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  }

  return (
    <div className="reservation py-4 py-md-5">
      <div className="bookingTitle text-center pt-md-3 pb-3">
        <h1 className="display-3 display-md-1">Book A Table</h1>
        <h6 className="opacity-75 lead px-3">
          Secure your seat and enjoy an unforgettable dining experience.
        </h6>
      </div>

      <section>
        <Container className="py-4 py-md-5">
          <Row className="justify-content-center">
            <Col xs={12} md={10} lg={8}>
              {successMessage && (
                <Alert variant="success" className="text-center mb-4">{successMessage}</Alert>
              )}
              
              {errors.submit && (
                <Alert variant="danger" className="text-center mb-4">{errors.submit}</Alert>
              )}

              <form className="bookingForm row row-gap-3 bg-white p-4 p-md-4-" onSubmit={handleSubmit}>

                <Col xs={12} md={6}>
                  <label htmlFor="date" >Date</label>
                  <input name="date" className={`form-control ${errors.date ? 'is-invalid' : ''}`} type="date" value={formData.date} onChange={handleChange} min={new Date().toISOString().split('T')[0]}/>
                  {errors.date && <div className="invalid-feedback">{errors.date}</div>}
                </Col>

                <Col xs={12} md={6}>
                  <label htmlFor="time">Time</label>
                  <input name="time" className={`form-control ${errors.time ? 'is-invalid' : ''}`} type="time" value={formData.time} onChange={handleChange}/>
                  {errors.time && <div className="invalid-feedback">{errors.time}</div>}
                </Col>

                <Col xs={12} md={6}>
                  <label htmlFor="name">Name</label>
                  <input name="name" className={`form-control ${errors.name ? 'is-invalid' : ''}`} type="text" placeholder="Enter Your Name" value={formData.name} onChange={handleChange}/>
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </Col>

                <Col xs={12} md={6}>
                  <label htmlFor="phone">Phone</label>
                  <input name="phone" className={`form-control ${errors.phone ? 'is-invalid' : ''}`} type="tel" placeholder="xxx-xxx-xxxx" aria-label="Enter your phone number" value={formData.phone} onChange={handleChange}/>
                  {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                </Col>

                <Col xs={12}>
                  <label htmlFor="totalPerson">Total Persons</label>
                  <input name="totalPerson" className={`form-control ${errors.totalPerson ? 'is-invalid' : ''}`} type="number" min="1" max="20" placeholder="How many people?" value={formData.totalPerson} onChange={handleChange}/>
                  {errors.totalPerson && <div className="invalid-feedback">{errors.totalPerson}</div>}
                </Col>

                <Col xs={12}>
                  <Button type="submit" className="bookingBtn w-100 py-2" disabled={isSubmitting}>
                    {isSubmitting ? 'Processing...' : 'Book A Table'}
                  </Button>
                </Col>
                
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

// import { Button, Col, Container, Alert, Row } from "react-bootstrap";
// import { useState } from "react";
// import axios from "axios";
// import "./Reservation.css";

// export default function Reservation() {
//   const [formData, setFormData] = useState({
//     date: "",
//     time: "",
//     name: "",
//     phone: "",
//     totalPerson: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [successMessage, setSuccessMessage] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   function handleChange(e) {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   }

//   function validateForm() {
//     let newErrors = {};
//     if (!formData.date) newErrors.date = "Date is required.";
//     if (!formData.time) newErrors.time = "Time is required.";
//     if (!formData.name.trim()) newErrors.name = "Name is required.";
//     if (!formData.phone.match(/^\d{3}-\d{4}-\d{4}$/)) newErrors.phone = "Enter a valid phone number (xxx-xxxx-xxxx).";
//     const totalPerson = parseInt(formData.totalPerson, 10);
//     if (!formData.totalPerson || isNaN(totalPerson) || totalPerson <= 0) {
//       newErrors.totalPerson = "Enter a valid number of people.";
//     } else if (totalPerson > 20) {
//       newErrors.totalPerson = "For parties larger than 20, please call us directly.";
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     if (validateForm()) {
//       try {
//         const response = await axios.post("https://cafeu-api.vercel.app/reservation", formData);
//         if (response.status === 201) {
//           setSuccessMessage("Reservation saved successfully!");
//           setFormData({
//             date: "",
//             time: "",
//             name: "",
//             phone: "",
//             totalPerson: "",
//           });

//           setErrors({});
//           alert("✅ Reservation saved successfully!");
//           setTimeout(() => setSuccessMessage(""), 3000);
//         }
//       } catch (error) {
//         console.error("Error saving reservation:", error);
//         setErrors({ 
//           submit: "Failed to save reservation. Please try again or contact us directly." 
//         });
//       } finally {
//         setIsSubmitting(false);
//       }
//     }
//   }

//   return (
//     <>
//       <div className="reservation">
//         <div className="bookingTitle text-center pt-5 pb-3">
//           <h1 className="display-1">Book A Table</h1>
//           <h6 className="opacity-75 lead">
//             Secure your seat and enjoy an unforgettable dining experience.
//           </h6>
//         </div>

//         <section>
//           <Container className="py-4 py-md-5">
//             <Row className="justify-content-center">
//               <Col xs={12} md={10} lg={8}>
//                 {successMessage && (
//                   <Alert variant="success" className="text-center mb-4">{successMessage}</Alert>
//                 )}
                
//                 {errors.submit && (
//                   <Alert variant="danger" className="text-center mb-4">{errors.submit}</Alert>
//                 )}

//                 <form className="bookingForm row row-gap-4 bg-white p-3 p-md-4" onSubmit={handleSubmit}>
//                   <Col xs={12} md={6} className="mb-3">
//                     <label htmlFor="date" className="form-label">Date</label>
//                     <input name="date" type="date" className={`form-control ${errors.time ? 'is-invalid' : ''}`} value={formData.date} onChange={handleChange}/>
//                     {errors.time && <div className="invalid-feedback">{errors.time}</div>}
//                   </Col>

//                   <Col xs={12} md={6} className="mb-3">
//                   <label htmlFor="name" className="form-label">Name</label>
//                   <input
//                     id="name"
//                     name="name"
//                     className={`form-control ${errors.name ? 'is-invalid' : ''}`}
//                     type="text"
//                     placeholder="Enter Your Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                   />
//                   {errors.name && <div className="invalid-feedback">{errors.name}</div>}
//                 </Col>

//                 <Col xs={12} md={6} className="mb-3">
//                   <label htmlFor="phone" className="form-label">Phone</label>
//                   <input
//                     id="phone"
//                     name="phone"
//                     className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
//                     type="tel"
//                     placeholder="xxx-xxx-xxxx"
//                     aria-label="Enter your phone number"
//                     value={formData.phone}
//                     onChange={handleChange}
//                   />
//                   {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
//                 </Col>

//                 <Col xs={12} className="mb-4">
//                   <label htmlFor="totalPerson" className="form-label">Total Persons</label>
//                   <input
//                     id="totalPerson"
//                     name="totalPerson"
//                     className={`form-control ${errors.totalPerson ? 'is-invalid' : ''}`}
//                     type="number"
//                     min="1"
//                     max="20"
//                     placeholder="How many people?"
//                     value={formData.totalPerson}
//                     onChange={handleChange}
//                   />
//                   {errors.totalPerson && <div className="invalid-feedback">{errors.totalPerson}</div>}
//                 </Col>


//                   <Col xs={12}>
//                     <Button type="submit" className="bookingBtn w-100 py-2" disabled={isSubmitting}>
//                       {isSubmitting ? 'Processing...' : 'Book A Table'}
//                     </Button>
//                   </Col>
//                 </form>
//               </Col>
//             </Row>
//           </Container>
//         </section>
//       </div>
//     </>
//   );
// }