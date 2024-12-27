'use server'

export async function submitForm(prevState: any, formData: FormData) {
  // Simulate a delay to mimic server processing
  await new Promise(resolve => setTimeout(resolve, 1000))

  // Extract form data
  const name = formData.get('name')
  const email = formData.get('email')
  const role = formData.get('role')
  const skills = formData.getAll('skills')

  // Log the form data
  console.log('Form Data:', { name, email, role, skills })

  // Return a response
  return {
    message: 'Form submitted successfully!',
    data: { name, email, role, skills }
  }
}

