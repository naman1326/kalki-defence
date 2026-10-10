import { useState } from 'react'
import { CONTACT_EMAIL } from '../config.js'

const WHO = ['Defence stakeholder', 'Research institution', 'Technology partner', 'Other collaborator']

export default function Contact() {
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const subject = `Enquiry from ${f.get('name')} (${f.get('who')})`
    const body = `Name: ${f.get('name')}\nOrganisation: ${f.get('org')}\nEmail: ${f.get('email')}\n\n${f.get('msg')}`
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section className="section contact" id="contact">
      <div className="wrap contact__grid">
        <div>
          <h2 className="h-section">Let&rsquo;s build together</h2>
          <p className="body">
            We welcome discussions with defence stakeholders, research institutions, technology
            partners and potential collaborators.
          </p>
        </div>

        <form className="form" onSubmit={submit}>
          <label>
            Name
            <input name="name" required autoComplete="name" />
          </label>
          <label>
            Organisation
            <input name="org" autoComplete="organization" />
          </label>
          <label>
            Email
            <input name="email" type="email" required autoComplete="email" />
          </label>
          <label>
            I am a
            <select name="who" defaultValue={WHO[0]}>
              {WHO.map((w) => <option key={w}>{w}</option>)}
            </select>
          </label>
          <label className="form__wide">
            How can we work together?
            <textarea name="msg" rows="5" required />
          </label>
          <div className="form__wide form__actions">
            <button className="btn" type="submit">Send message</button>
            {sent && <p className="form__note" role="status">Your email app should open with the message ready to send.</p>}
          </div>
        </form>
      </div>
    </section>
  )
}
