import Link from "next/link";

export default function Footer() {
  return (
    <div className="container-fluid mb-8 mt-64">
      <div className="row">
        <div className="flex justify-center">
          <div className="mx-3 flex w-full max-w-screen-xl flex-col rounded-lg border border-gray-300 p-5 md:flex-row md:p-8">
            <div className="mb-4 flex flex-col">
              <div className="mb-8 flex-col gap-4">
                <div className="mb-4 flex gap-2">
                  <img src="/images/logo.png" alt="Afforai Logo" className="h-6 w-6" />
                  <div className="text-dark text-lg font-medium">Afforai</div>
                </div>
                <div className="mb-4 w-10/12 text-sm text-gray-700">
                  Afforai is your research tool in to damn near anything. Helping you summarise, translate, and withdraw
                  data from documents.
                </div>
                <div className="text-sm text-gray-700">Copyright © 2023 Afforai Inc. All rights reserved.</div>
              </div>
              <Link
                href="https://www.producthunt.com/posts/afforai?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-afforai"
                target="_blank"
              >
                <img
                  src="/images/top-post-badge.svg"
                  alt="Afforai - Summarize, interact, translate your documents with AI | Product Hunt"
                  className="mb-4 h-10 w-48"
                />
              </Link>
              <div className="flex-col gap-2">
                <div className="ml-1 text-lg font-medium">Backed by</div>
                <img src="/images/sputnikatx.png" alt="Sputnik ATX VC" className="h-12 w-36" />
              </div>
            </div>
            <div className="flex w-full justify-start gap-16 md:justify-around">
              <div className="mb-5 flex flex-col gap-5">
                <div className="text-lg font-medium">Company</div>
                <Link href="/our_story" className="text-sm text-gray-700">
                  Our Story
                </Link>
                <Link href="https://afforai.getrewardful.com/signup" target="_blank" className="text-sm text-gray-700">
                  Affiliate
                </Link>
                <Link href="/security" className="policy text-sm text-gray-700">
                  Security
                </Link>
                <Link
                  href="https://trello.com/b/98yNMfwA/afforai-roadmap"
                  target="_blank"
                  className="text-sm text-gray-700"
                >
                  Roadmap
                </Link>
                <Link href="/contact" className="text-sm text-gray-700">
                  Contact Us
                </Link>
              </div>
              <div className="mb-5 flex flex-col gap-5">
                <div className="text-lg font-medium">Resources</div>
                <Link href="https://help.afforai.com/" target="_blank" className="text-sm text-gray-700">
                  Help Center
                </Link>
                <Link href="/documentation" className="policy text-sm text-gray-700">
                  API Docs
                </Link>
                <Link href="/terms_of_use" className="policy text-sm text-gray-700">
                  Terms of Use
                </Link>
                <Link href="/privacy_policy" className="policy text-sm text-gray-700">
                  Privacy Policy
                </Link>
              </div>
            </div>
            <div className="flex w-full justify-start gap-10 md:justify-around">
              <div className="mb-5 flex flex-col gap-5">
                <div className="text-lg font-medium">Follow Us</div>
                <Link href="https://www.facebook.com/groups/afforai" target="_blank" className="text-sm text-gray-700">
                  Facebook Group
                </Link>
                <Link href="https://linkedin.com/company/afforai/" target="_blank" className="text-sm text-gray-700">
                  LinkedIn
                </Link>
                <Link href="https://twitter.com/afforai/" target="_blank" className="text-sm text-gray-700">
                  Twitter
                </Link>
                <Link href="https://medium.com/@alec-afforai" target="_blank" className="text-sm text-gray-700">
                  Medium Blog
                </Link>
              </div>
              <div className="mb-5 flex flex-col gap-5">
                <div className="text-lg font-medium">Language</div>
                <div className="cursor-pointer text-sm text-purple-700">English</div>
                <div className="cursor-pointer text-sm text-gray-700">Vietnamese</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
