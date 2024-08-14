import SocialIcons from '../components/SocialIcons';

export default function Contact() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center p-4">
      <h1 className="text-4xl text-redAccent mb-8">Contact Me</h1>
      
      <div className="mb-8">
        <SocialIcons />
      </div>

      <div className="w-full max-w-md">
        <form action="https://formspree.io/f/xqazbrey" method="POST">
          <div className="mb-4">
            <label htmlFor="name" className="block text-light text-left mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full p-2 text-dark" placeholder='Yash Agarwal' required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-light text-left mb-2">Email</label>
            <input type="email" id="email" name="_replyto" className="w-full p-2 text-dark" placeholder='abc@gmail.com' required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-light text-left mb-2">Message</label>
            <textarea id="message" name="message" className="w-full p-2 text-dark" rows={5} required></textarea>
          </div>
          <button type="submit" className="bg-redAccent text-light px-4 py-2 rounded">Send Message</button>
        </form>
      </div>
    </section>
  );
}
