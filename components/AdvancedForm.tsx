'use client'

import { useActionState } from 'react'
import { submitForm } from '@/app/actions/formActions'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

const skills = ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Java']

export default function AdvancedForm() {
  const [state, action] = useActionState(submitForm, {
    message: '',
    data: { name: null, email: null, role: null, skills: [] }
  })

  return (
    <form className="space-y-6 max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="role">Role</Label>
        <Select name="role" required>
          <SelectTrigger>
            <SelectValue placeholder="Select a role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="developer">Developer</SelectItem>
            <SelectItem value="designer">Designer</SelectItem>
            <SelectItem value="manager">Manager</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Skills</Label>
        <div className="grid grid-cols-2 gap-2">
          {skills.map((skill) => (
            <div key={skill} className="flex items-center space-x-2">
              <Checkbox id={skill} name="skills" value={skill} />
              <Label htmlFor={skill}>{skill}</Label>
            </div>
          ))}
        </div>
      </div>

      <Button type="submit" formAction={action}>
        {state.message ? 'Submitted' : 'Submit'}
      </Button>

      {state.message && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
          <p>{state.message}</p>
          <pre className="mt-2 text-sm">{JSON.stringify(state.data, null, 2)}</pre>
        </div>
      )}
    </form>
  )
}

