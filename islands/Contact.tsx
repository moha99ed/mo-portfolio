
export default function Contact() {
 
  return (

    <section
      id="contact"
      class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md"
    >
      <h1 class="text-4xl font-bold text-blue-300 text-center mt-6">
        Contact me 
      </h1>
      <div class="bg-blue">
        
        <form action="/send" class="space-y-3 py-3">
          <div class="space-y-1">
            <label for="email" class="text-sm uppercase">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              required
              class="border(gray-500 1) disabled:(opacity-50 cursor-not-allowed) w-full rounded-md bg-gray-100 px-3 py-2 dark:bg-gray-800"
            />
          </div>
          <div class="space-y-1">
            <label for="message" class="text-sm uppercase">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write me a message"
              required
              minLength={10}
              maxLength={10000}
              rows={10}
              class="border(gray-500 1) disabled:(opacity-50 cursor-not-allowed) w-full rounded-md bg-gray-100 px-3 py-2 dark:bg-gray-800"
              label="message"
            />
          </div>
          <input
            type="submit"
            class="uppercase text-sm font-bold tracking-wide bg-blue-400 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
            value='send'
          />
        </form>
      </div>
    </section>
  );
}