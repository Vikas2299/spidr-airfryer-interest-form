import { useState, useEffect, useRef } from 'react';
import spidrLogo from '../assets/spidr_logo.png';
import { formatPin } from '../utils/formUtils';
import '../App.css';

const initialState = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  costGuess: '',
  spidrPin: '',
};

function Form() {
  const [form, setForm] = useState(initialState);
  const [showPin, setShowPin] = useState(false);
  const webBgRef = useRef(null);

  useEffect(() => {
    let effect: any = null;
    try {
      if (
        typeof window !== 'undefined' &&
        (window as any).VANTA &&
        (window as any).VANTA.NET &&
        webBgRef.current
      ) {
        effect = (window as any).VANTA.NET({
          el: webBgRef.current,
          color: 0x4492a2,
          backgroundColor: 0x23262b,
          points: 10.0,
          maxDistance: 20.0,
          spacing: 18.0,
          mouseControls: true,
          touchControls: false,
          gyroControls: false,
          scale: 1.0,
          scaleMobile: 1.0
        });
      }
    } catch (err) {
      console.error('Vanta/Three.js failed to initialize:', err);
      // Optionally, show a fallback background here
    }
    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'spidrPin') {
      setForm({ ...form, [name]: formatPin(value) });
    } else if (name === 'costGuess') {
      setForm({ ...form, [name]: value.replace(/[^\d]/g, '') });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', JSON.stringify(form, null, 2));
    alert('Thank you for your interest! Check the console for your submission.');
    setForm(initialState);
    setShowPin(false);
  };

  return (
    <div className="spidr-form-container">
      <div className="spidr-web-bg" ref={webBgRef}></div>
      <div className="form-header">
        <img src={spidrLogo} alt="Spidr Logo" className="form-logo" />
        <h1>Spidr Air Fryer Interest Form</h1>
        <div className="form-subtitle">Be the first to experience the future of cooking. Express your interest below.</div>
      </div>
      <form className="spidr-form" onSubmit={handleSubmit} autoComplete="off">
        <div className="form-row">
          <label>First Name
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
              autoComplete="off"
              placeholder="Enter your first name"
            />
          </label>
          <label>Last Name
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
              autoComplete="off"
              placeholder="Enter your last name"
            />
          </label>
        </div>
        <div className="form-row">
          <label>Phone Number
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              autoComplete="off"
              pattern="[0-9\-\+\(\) ]*"
              placeholder="(555) 123-4567"
            />
          </label>
          <label>Email Address
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="off"
              placeholder="your.email@example.com"
            />
          </label>
        </div>
        <div className="form-row">
          <label>Guess the air fryer’s cost ($)
            <input
              type="text"
              name="costGuess"
              value={form.costGuess}
              onChange={handleChange}
              required
              inputMode="numeric"
              placeholder="e.g. 199"
              maxLength={7}
            />
          </label>
        </div>
        <div className="form-row pin-row">
          <label style={{ flex: 1, position: 'relative', width: '100%' }}>Secret 16-digit Spidr PIN
            <input
              type={showPin ? 'text' : 'password'}
              name="spidrPin"
              value={form.spidrPin}
              onChange={handleChange}
              required
              inputMode="numeric"
              placeholder="####-####-####-####"
              maxLength={19}
              autoComplete="off"
              className="pin-input"
              style={{ width: '100%' }}
            />
            <div className="show-pin-toggle show-pin-below">
              <input
                type="checkbox"
                checked={showPin}
                onChange={() => setShowPin((v) => !v)}
                id="show-pin"
              />
              <label htmlFor="show-pin">Show PIN</label>
            </div>
          </label>
        </div>
        <button type="submit" className="submit-btn"><span>Submit Interest</span></button>
      </form>
    </div>
  );
}

export default Form; 