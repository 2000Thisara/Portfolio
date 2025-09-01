"use client"
import { useState } from 'react'
import './styles/contact.css'

const initialFormData = {
  name: '',
  email: '',
  message: ''
}

export default function GetInTouch() {
  const [formData, setFormData] = useState(initialFormData)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Create mailto link with form data
    const subject = `Contact from ${formData.name}`
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    
    const mailtoLink = `mailto:thisarasenadeera2000@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    // Open default email client
    window.open(mailtoLink)
    
    // Reset form
    setFormData(initialFormData)
  }

  return (
    <section className="get-in-touch">
      <div className="get-in-touch-container">
        <h2 className="get-in-touch-title">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Name..."
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="johndoe@gmail.com"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message..."
            value={formData.message}
            onChange={handleChange}
            className="form-textarea"
            rows={5}
            required
          />
          <button type="submit" className="send-message-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
} 