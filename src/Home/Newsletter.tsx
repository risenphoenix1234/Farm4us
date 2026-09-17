import React from 'react';

export default function NewsletterSubscription() {
  return (
    <div className="w-full bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-[#011c39] mb-6 text-center">
          Subscribe to Our Newsletter
        </h3>

        <div
          dangerouslySetInnerHTML={{
            __html: `
            <form
              action="https://farm4us.us8.list-manage.com/subscribe/post?u=b4d5ba795776afcf2076604d6&id=403206013e"
              method="post"
              target="_blank"
              class="flex flex-col sm:flex-row gap-4"
            >
              <input
                type="email"
                name="EMAIL"
                class="w-full sm:flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4bae44] placeholder-gray-500"
                placeholder="Enter your email"
                required
              />
              <button
                type="submit"
                class="bg-[#FFDF20] text-[#4bae44] px-8 py-3 rounded-md hover:bg-yellow-400 transition font-semibold"
              >
                Subscribe
              </button>
            </form>
          `,
          }}
        />
      </div>
    </div>
  );
}
