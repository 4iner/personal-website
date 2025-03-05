import React, { useState } from 'react';
import styled from './styled';

const FormContainer = styled('div')`
  background: ${props => props.theme.color.contrastPrimary}40;
  border: 1px solid ${props => props.theme.color.accent}40;
  border-radius: 12px;
  padding: var(--space-4);
  backdrop-filter: blur(8px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-top: var(--space-4);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  h2 {
    color: ${props => props.theme.color.accent};
    margin-bottom: var(--space-3);
    font-size: 1.5rem;
    text-align: center;
  }
`;

const Form = styled('form')`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`;

const Input = styled('input')`
  background: ${props => props.theme.color.contrastPrimary}20;
  border: 1px solid ${props => props.theme.color.accent}40;
  border-radius: 6px;
  padding: 12px;
  color: ${props => props.theme.color.textLight};
  font-size: 1rem;
  width: 100%;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.color.accent};
  }

  &::placeholder {
    color: ${props => props.theme.color.textLight}80;
  }
`;

const TextArea = styled('textarea')`
  background: ${props => props.theme.color.contrastPrimary}20;
  border: 1px solid ${props => props.theme.color.accent}40;
  border-radius: 6px;
  padding: 12px;
  color: ${props => props.theme.color.textLight};
  font-size: 1rem;
  width: 100%;
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.color.accent};
  }

  &::placeholder {
    color: ${props => props.theme.color.textLight}80;
  }
`;

const Button = styled('button')`
  background: linear-gradient(120deg, ${props => props.theme.color.accent}, ${props => props.theme.color.accent}CC);
  color: ${props => props.theme.color.textLight};
  border: none;
  border-radius: 6px;
  padding: 12px 24px;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  align-self: center;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const Message = styled('div')`
  text-align: center;
  padding: 10px;
  border-radius: 6px;
  margin-top: var(--space-3);
  
  ${props => props.type === 'success' && `
    background: #28a74520;
    color: #28a745;
    border: 1px solid #28a745;
  `}
  
  ${props => props.type === 'error' && `
    background: #dc354520;
    color: #dc3545;
    border: 1px solid #dc3545;
  `}
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch('https://formspree.io/f/mvgkpgoq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Something went wrong. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <FormContainer>
      <h2>Get in Touch</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextArea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
        {status && (
          <Message type={status.type}>
            {status.message}
          </Message>
        )}
      </Form>
    </FormContainer>
  );
};

export default ContactForm; 